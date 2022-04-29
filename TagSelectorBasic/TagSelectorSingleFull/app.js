var movies = document.querySelector(".movies");
var container = document.querySelector('.container')
var movie = document.querySelector(".movie");
var icon = document.querySelector(".icon")
var icon2 = document.querySelector(".icon2")
var icon3 = document.querySelector(".icon3")
var icon4 = document.querySelector(".icon4")
var icon5 = document.querySelector(".icon5")
var icon6 = document.querySelector(".icon6")
var icon7 = document.querySelector(".icon7")
var icon8 = document.querySelector(".icon8")
var icon9 = document.querySelector(".icon9")
var icon10 = document.querySelector(".icon10")
var input = document.querySelector('input')
var parag = document.querySelector('p')
var thick = document.querySelector('i')
movie.onclick = function() {
    icon.style.display = 'block'
}

function mov2() {
    icon2.style.display = 'block'

}

function mov3() {
    icon3.style.display = "block"
}

function mov4() {
    icon4.style.display = 'block'
}

function mov5() {
    icon5.style.display = 'block'
}

function mov6() {
    icon6.style.display = 'block'
}

function mov7() {
    icon7.style.display = 'block'

}

function mov8() {
    icon8.style.display = 'block'
}

function mov9() {
    icon9.style.display = 'block'
}

function mov10() {
    icon10.style.display = 'block'
}

document.querySelectorAll('p').forEach(item => {
    item.addEventListener('click', event => {
        input.value = `${item.innerHTML}`
    })
});

document.querySelector('input').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        var create = document.createElement('div')
        create.className = 'movie'
        movies.appendChild(create)
        create.innerHTML = `${input.value}`
        create.onclick = function() {
            input.value = `${create.innerHTML}`
            create.style.background = "rgb(130, 202, 250)";
            create.style.color = 'white'
        }
    }
});
document.querySelectorAll('.movie').forEach(item => {
    item.addEventListener('click', event => {
        item.style.background = "rgb(130, 202, 250)";
        item.style.color = 'white'
    })
})