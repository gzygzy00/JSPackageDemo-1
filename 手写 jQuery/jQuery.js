window.$ = window.jQuery = function (selectorOrArray) {
  let elements
  if (typeof selectorOrArray === 'string') {
    elements = document.querySelectorAll(selectorOrArray)
  } else if (selectorOrArray instanceof Array) {
    elements = selectorOrArray
  }
  // api 对象，操作 elements
  return {
    oldApi: selectorOrArray.oldApi,
    // 闭包&链式操作
    // 闭包：函数访问外部的变量
    addClass(className) {
      for (let i = 0; i < elements.length; i++) {
        elements[i].classList.add(className)
      }
      return this
    },
    find(selector) {
      let array = []
      for (let i = 0; i < elements.length; i++) {
        array = array.concat(Array.from(elements[i].querySelectorAll(selector)))
      }
      array.oldApi = this   // 储存了旧的api，即string的时候
      return jQuery(array)
    },
    end() {
      return this.oldApi    // 此时一般刚调用完Array，所以又回到了最初的this
    },
    each(fn) {
      for (let i = 0; i < elements.length; i++) {
        fn.call(null, elements[i], i)
      }
      return this
    },
    parent() {
      let array = []
      this.each((node) => {
        if (array.indexOf(node.parentNode) === -1) {
          array.push(node.parentNode)  //  只有一个的时候push进去
        }
      })
      return jQuery(array)
    },
    children() {
      let array = []
      this.each((node) => {
        array.push(...node.children)  //  展开children
      })
      return jQuery(array)
    },
    print() {
      console.log(elements)
    }
  }
}