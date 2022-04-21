function createCircle(_selector, _radius, _background) {
    let container = document.querySelector('.container');
    let circle = document.createElement('div')
    container.className = `${_selector}`
    circle.className = 'circle'
    container.appendChild(circle)
    circle.style.width = `${_radius*2}px`
    circle.style.height = `${_radius*2}px`
    circle.style.background = `${_background}`
    circle.style.borderRadius = '50%'
    circle.style.border = '1px solid black'
}
createCircle('box', 200, 'red')