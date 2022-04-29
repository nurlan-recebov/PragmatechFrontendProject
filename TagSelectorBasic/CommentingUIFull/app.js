var body = document.querySelector('body')
var input = document.querySelector('input')
var comments = document.querySelector('.comments')
var count = document.querySelector('.count h4')

document.querySelector('input').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        var d = new Date();
        var create = document.createElement('div')
        create.className = 'comment'
        comments.appendChild(create)
            // create.innerHTML = `${input.value}`
        create.innerHTML = `<div class="sekil"><img src="cat1.jpg" alt="" srcset=""></div>
        <div class="items">
            <div class="item">
                <h2>Kenzo Nakamura</h2>
                <p>${d.getUTCDay()}/${ d.getDate()}/${ d.getFullYear()} ${ d.getHours()}:${ d.getMinutes()}:${ d.getSeconds()}</p>
            </div>
            <h5>${input.value}</h5>
        </div>`
        create.onclick = function() {
            create.style.display = 'none'

        }
        count.innerHTML = `${document.getElementsByTagName("p").length} comments`
    }

});