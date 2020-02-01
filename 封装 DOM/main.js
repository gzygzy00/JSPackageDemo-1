const {body} = document
let div1 = dom.create('<div id="id1" class="class1" title="title1">div1</div>')
let div2 = dom.create('<div>div2</div>')
let div3 = dom.create('<div>div3</div>')
let div4 = dom.create('<div>div4</div>')
let div5 = dom.create('<div>div5</div>')
let div6 = dom.create('<div>div6</div>')
let big1 = dom.create('<div class="big">big1</div>')

dom.append(body, div1)
dom.before(div1, div2)
dom.after(div1, div3)

dom.append(body, big1)
dom.wrap(big1, div4)

dom.append(body, div5)
let a = dom.remove(div5)
console.log(a)

dom.empty(big1)

console.log(dom.attr(div1, "title"))
dom.attr(div1, 'class', '🐽')
console.log(dom.attr(div1, "class"))

dom.append(body, div6)
console.log(dom.text(div2))
dom.text(div3, 'changeTEXT33')

dom.html(div6, 'changeHTML66')
console.log(dom.text(div6))

dom.style(div1, 'backgroundColor', 'red')
console.log(dom.style(div1, 'backgroundColor'))
dom.style(div2, {color: 'red'})

dom.class.add(div3, 'div3')
dom.class.add(div3, 'div3.1')
dom.class.remove(div3, 'div3.1')
console.log(dom.class.has(div3, 'div3'))
console.log(dom.class.has(div3, 'div3.1'))


let button = dom.create('<div class="button">button</div>')
dom.style(button, {width: '100px', height: '50px'})
dom.append(body, button)
let n = -1
dom.on(button, 'click', () => {
  n += 1
  dom.text(button, n)
})

console.log(dom.find('div'))
console.log(dom.parent(div1))
console.log(dom.children(body))

console.log(dom.siblings(div2))
console.log(div2.parentNode.children)

console.log(dom.next(div1))
console.log(dom.previous(dom.find('#a2')[0]))

dom.each(dom.find('.big2')[0].children, (x)=>{
  dom.style(x, 'color', 'blue')
})


console.log(dom.index(dom.find('#a1')[0]))
console.log(dom.index(dom.find('#a2')[0]))
console.log(dom.index(dom.find('#a3')[0]))
