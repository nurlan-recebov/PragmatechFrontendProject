let container = document.querySelector('.container');
let dom = document.createElement('div')
container.appendChild(dom)

function createMultipleCircle(_selector, _circleCount, _radius, _background) {
    for (let i = 0; i < `${ _circleCount}`; i++) {
        let circle = document.createElement('div')
        dom.className = `${_selector}`
        circle.className = 'circle'
        dom.appendChild(circle)
        circle.style.width = `${_radius*2/i}px`
        circle.style.height = `${_radius*2/i}px`
        circle.style.background = `${ _background}`
        circle.style.borderRadius = '50%'
        circle.style.border = '1px solid black'
        dom.style.display = 'flex';
        dom.style.justifyContent = 'center'
        dom.style.alignItems = 'center'
        circle.style.position = 'absolute'
        dom.style.position = 'relative'
    }
}
createMultipleCircle('box', 8, 200, 'yellow')