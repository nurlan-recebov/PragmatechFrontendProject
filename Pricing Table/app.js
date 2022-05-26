var container = document.querySelector('.price-lists')
var create = document.createElement('div')
create.className = 'price-list'
    // var rec = document.createElement('div')
    // rec.className = 'rec'
    // create.appendChild(rec)
arr = ['Basic', 'Standart', 'Medium', 'Hard'];
ann = ['10$', '23$', '50$', '120$']
container.appendChild(create)
for (let i = 0; i < 4; i++) {


    create.innerHTML += `<div class="price-list-item">
    <div class="rec">
                    <h2>Recommend</h2>
                </div>
                
    <h2>${arr[i]}</h2>
    
    <div class="price">
        <h1>${ann[i]}</h1>
        <h5>Per Mount</h5>
    </div>
    <div class="price-tags">
        <div class="price-tag">
            <div class="icon"><i class="fa-solid fa-check"></i></div>
            <h5>Sed up persopes unde umnis</h5>
        </div>

        <div class="price-tag">
            <div class="icon"><i class="fa-solid fa-check"></i></div>
            <h5>Sed up persopes unde umnis</h5>
        </div>
        <div class="price-tag">
            <div class="icon"><i class="fa-solid fa-check"></i></div>
            <h5>Sed up persopes unde umnis</h5>
        </div>
        <button>Get Started</button>
    </div>
</div>`
        // var price = document.querySelector('.price-list-item')
        // price.onclick = function() {
        //         price.classList.toggle("services");

    //     }
    // document.querySelectorAll('.price-list-item').forEach(item => {
    //     item.addEventListener('click', () => {
    //         price.classList.toggle("services");
    //     })
    // })

}
let x = document.querySelector('.price-list')
x.addEventListener('click', selectItem)

let z = document.querySelector('.price-list-item').parentElement

console.log(z);

function selectItem(e) {
    if (e.target.children[0].classList.contains('rec')) {
        e.target.children[0].classList.toggle('recs')
    }

    if (e.target.classList.contains('price-list-item')) {

        e.target.classList.toggle('services')


        // x.forEach(item => {
        //     if (item.classList.contains("services")) {
        //         item.classList.remove('services')
        //     } else {
        //         item.classList.add('price-list-item')
        //     }
        // })



    }

}