const btn = document.querySelector('.btn');
const con = document.querySelector('.container');
const bac = document.querySelector('.back h2');
const arran = ["green", "red", "blue", "yellow", "black", "orange", "pink", "#456789"]
let i = 0;
btn.addEventListener("click", function() {
    i++
    if (i == arran.length) {
        i = 0




    }
    con.style.backgroundColor = arran[i];
    bac.textContent = arran[i];
    bac.style.backgroundColor = arran[i - 1];
    btn.style.backgroundColor = arran[i + 1];


})



// function nurlan() {
//     if (i < arran.length) {

//         i++

//     }
// }