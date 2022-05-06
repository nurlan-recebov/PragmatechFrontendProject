var container = document.querySelector('.price-lists')
var create = document.createElement('div')
create.className = 'price-list'
container.appendChild(create)
for (let i = 0; i < 4; i++) {


    create.innerHTML += `<div class="price-list-item">
    <h2>Basic</h2>
    <div class="price">
        <h1>$0</h1>
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

function selectItem(e) {
    if (e.target.classList.contains('price-list-item')) {

        e.target.classList.toggle('services')
        x.forEach(item => {
            if (item.classList.contains('services')) {
                item.classList.toggle('price-list-item')
            }
        })

    }

}