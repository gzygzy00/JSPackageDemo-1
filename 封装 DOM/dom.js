window.dom = {
  // 增
  create(string) {
    // return document.createElement(string)
    // 改进一下
    const template = document.createElement('template')
    template.innerHTML = string.trim()
    return template.content.firstChild
  },
  before(node1, node2) {
    // node2添加到node1前
    node1.parentNode.insertBefore(node2, node1)
  },
  after(node1, node2) {
    // node2添加到node1后
    // node1.parentNode.appendChild(node2)
    node1.parentNode.insertBefore(node2, node1.nextSibling)
  },
  append(parent, node) {
    parent.appendChild(node)
  },
  wrap(parent, node) {
    dom.before(parent, node)
    dom.append(parent, node)
  },
  // 删
  remove(node) {
    node.parentNode.removeChild(node)
    return node
  },
  empty(node) {
    const array = []
    while (node.firstChild) {
      array.push(dom.remove(node.firstChild))
    }
    console.log(array)
    return array
  },
  // 改
  attr(node, name, value) {
    if (arguments.length === 2) {
      return node.getAttribute(name)
    } else if (arguments.length === 3) {
      node.setAttribute(name, value)
    }
  },
  text(node, string) {
    if (arguments.length === 1) {
      if ('innerText' in node) {
        return node.innerText
      } else {
        return node.textContent
      }
    } else if (arguments.length === 2) {
      if ('innerText' in node) {
        node.innerText = string
      } else {
        node.textContent = string
      }
    }
  },
  html(node, string) {
    if (arguments.length === 1) {
      return node.innerHTML
    } else if (arguments.length === 2) {
      node.innerHTML = string
    }
  },
  style(node, name, value) {
    if (arguments.length === 2) {
      // dom.style(div, 'color')
      if (typeof name === 'string') {
        return node.style[name]
      } else if (name instanceof Object) {
        // dom.style(div, {color: 'red'})
        for (let key in name) {
          node.style[key] = name[key]
        }
      }
    } else if (arguments.length === 3) {
      node.style[name] = value
    }
  },
  class: {
    add(node, className) {
      node.classList.add(className)
    },
    remove(node, className) {
      node.classList.remove(className)
    },
    has(node, className) {
      return node.classList.contains(className)
    }
  },
  on(node, eventName, fn) {
    node.addEventListener(eventName, fn)
  },
  off(node, eventName, fn) {
    node.removeEventListener(eventName, fn)
  },
  // 查
  find(selector, scope) {
    return (scope || document).querySelectorAll(selector)
  },
  parent(node) {
    return node.parentNode
  },
  children(node) {
    return node.children
  },
  siblings(node) {
    // 伪数组变数组
    return Array.from(node.parentNode.children).filter(n => {
      return (n !== node)
    })
  },
  next(node) {
    let others = node.nextSibling
    // 1是节点 3是文本
    while (others && others.nodeType === 3) {
      others = others.nextSibling
    }
    return others
  },
  previous(node) {
    let others = node.previousSibling
    // 1是节点 3是文本
    while (others && others.nodeType === 3) {
      others = others.previousSibling
    }
    return others
  },
  each(nodeList, fn) {
    for (let i = 0; i < nodeList.length; i++) {
      fn.call(null, nodeList[i])
    }
  },
  index(node) {
    const list = dom.children(node.parentNode)
    let i
    for (i = 0; i < list.length; i++) {
      if (node === list[i]) {
        return i
      }
    }
  }
}