jQuery('.test-1').addClass('c1').addClass('c2')

jQuery('.test-1')
    .find('.test-2')
    .addClass('c3') // 在子元素上
    .end()
    .addClass('c4') // 在父元素上

jQuery('.test-2')
    .each((div, i)=>{
      console.log(i)
      console.log(div)
    })

jQuery('.test-2')
    .parent().print()

jQuery('.test-1')
    .children().print()

