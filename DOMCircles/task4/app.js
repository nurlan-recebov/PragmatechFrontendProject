let body = document.querySelector('body');
let circle = document.createElement('div')
    // body.style.position = 'relative'
circle.className = 'box'
body.appendChild(circle)
circle.style.width = '50px'
circle.style.height = '50px'
circle.style.background = 'blue'
circle.style.borderRadius = '50%'
circle.style.position = 'absolute'
    // circle.style.position = 'absolute'
circle.style.transition = ' all .5s ease'
let a = Math.floor(Math.random() * (window.innerWidth - 50));
circle.style.left = `${a}px`
let b = Math.floor(Math.random() * (window.innerHeight - 50));
circle.style.top = `${b}px`