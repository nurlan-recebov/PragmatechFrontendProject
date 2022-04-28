var body = document.querySelector('body')
var input = document.querySelector('input')
const d = new Date();
document.querySelector('input').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        var create = document.createElement('div')
        create.className = 'comment'
        body.appendChild(create)
            // create.innerHTML = `${input.value}`
        create.innerHTML = `<div class="sekil"><img src="dog1.jpg" alt="" srcset=""></div>
        <div class="items">
            <div class="item">
                <h2>Kenzo Nakamura</h2>
                <p>${d.getUTCDay()}/${ d.getDate()}/${ d.getFullYear()} ${ d.getHours()}:${ d.getMinutes()}</p>
            </div>
            <h5>${input.value}</h5>
        </div>`

    }

});