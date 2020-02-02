jQuery('.test-1').addClass('c1').addClass('c2')

jQuery('.test-1')
    .find('.test-2')
    .addClass('c3') // 在子元素上
    .end()
    .addClass('c4') // 在父元素上





