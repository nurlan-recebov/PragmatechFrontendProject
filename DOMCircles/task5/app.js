// function createPoolTable() {
//     // 1-i ağ 1-i qara 7-si mavi 7-si qırmızı olmaqla ümümilikdə 16 bilyard topu yaradın
//     // ağ dairə xaricində geri qalan topların daxilində nömrələri yazılacaq
//     // bilyard masasI görüntüsü üçün [link](https://upload.wikimedia.org/wikipedia/commons/5/5e/American-style_pool_table_diagram_%28empty%29.png)-dəki arxafon şəklindən istifadə edin.
//     // yaradılan toplar random olaraq görüntüsü verilən bilyard masası üzərində random yerlərdə yerləşməlidir.
// }
let con = document.querySelector('.container')
let circle = document.createElement('div')
circle.className = 'top'
con.appendChild(circle)
circle.style.width = '40px'
circle.style.height = '40px'
circle.style.background = 'white'
circle.style.borderRadius = '50%'
circle.style.justifyContent = 'center'
circle.style.display = 'flex'
circle.style.alignItems = 'center'

circle.style.position = 'absolute'
let a = Math.floor(Math.random() * (1280 - 160));
circle.style.left = `${a}px`
let b = Math.floor(Math.random() * (731 - 160));
circle.style.top = `${b}px`;

let circle1 = document.createElement('div')
circle1.className = 'top1'
con.appendChild(circle1)
circle1.style.width = '40px'
circle1.style.height = '40px'
circle1.style.background = 'black'
circle1.style.borderRadius = '50%'
circle1.style.justifyContent = 'center'
circle1.style.display = 'flex'
circle1.style.alignItems = 'center'
circle1.textContent = '1'
circle1.style.position = 'absolute'
let c = Math.floor(Math.random() * (1280 - 160));
circle1.style.left = `${c}px`
let d = Math.floor(Math.random() * (731 - 160));
circle1.style.top = `${d}px`;
circle1.style.color = 'white'
for (let i = 9; i < 16; i++) {
    let circle2 = document.createElement('div')
    circle2.className = 'top2'
    con.appendChild(circle2)
    circle2.style.width = '40px'
    circle2.style.height = '40px'
    circle2.style.background = 'blue'
    circle2.style.borderRadius = '50%'
    circle2.style.justifyContent = 'center'
    circle2.style.display = 'flex'
    circle2.style.alignItems = 'center'
    circle2.textContent = `${i}`
    circle2.style.position = 'absolute'
    let e = Math.floor(Math.random() * (1280 - 160));
    circle2.style.left = `${e}px`
    let f = Math.floor(Math.random() * (731 - 160));
    circle2.style.top = `${f}px`;
    circle2.style.color = 'white'

}
for (let i = 2; i < 9; i++) {
    let circle3 = document.createElement('div')
    circle3.className = 'top3'
    con.appendChild(circle3)
    circle3.style.width = '40px'
    circle3.style.height = '40px'
    circle3.style.background = 'red'
    circle3.style.borderRadius = '50%'
    circle3.style.justifyContent = 'center'
    circle3.style.display = 'flex'
    circle3.style.alignItems = 'center'
    circle3.textContent = `${i}`
    circle3.style.position = 'absolute'
    let g = Math.floor(Math.random() * (1280 - 160));
    circle3.style.left = `${g}px`
    let h = Math.floor(Math.random() * (731 - 160));
    circle3.style.top = `${h}px`;

    circle3.style.color = 'white'


}