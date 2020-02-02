//  闭包&链式操作
window.jQuery = function (selector) {
  let elements = document.querySelectorAll(selector)
  return {
    add(className) {
      for (let i = 0; i < elements.length; i++) {
        elements[i].classList.add(className)
      }
      return this
    }
  }
}