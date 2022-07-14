let body = document.querySelector('body')
let header = document.querySelector('header')
let close = document.querySelector('.close')
let slider1 = document.querySelector('.slider1')
let slider2 = document.querySelector('.slider2')

function clos() {
    header.style.display = 'none'
}

function left() {
    slider2.style.left = "4449px"
}
window.onscroll = function() {
    scrollFunction();
};
let button = document.querySelector("header")

function scrollFunction() {
    if (
        document.body.scrollTop > 10 ||
        document.documentElement.scrollTop > 10
    ) {
        button.style.display = "none";
        button.style.zIndex = "-1"
        button.style.top = "0"
    } else {
        button.style.display = "block";
        button.style.zIndex = "99"
        button.style.top = "-20px"

    }
}
let lanbtnss = document.querySelector('.lan-btnss')

// function btn() {
//     lanbtnss.classList.toggle("lan-btns");
// }
document.querySelector('.flex').addEventListener('click', function(e) {

    e.target.nextSibling.nextSibling.nextSibling.classList.toggle('lan-btns')



})

document.querySelector('.lan-btn').addEventListener("click", function(e) {
    document.querySelector('.En').innerHTML = e.target.innerHTML

});
document.querySelector('.lan-bt').addEventListener("click", function(e) {
    document.querySelector('.Usd').innerHTML = e.target.innerHTML

});