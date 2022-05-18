let rev = [{
        id: 1,
        sual: 'Bu serialin adi nedi?',
        cavab1: "You",
        cavab2: "lucifer",
        cavab3: "Squide Game",
        cavab4: "La casa de papel",
        img: 'https://m.media-amazon.com/images/M/MV5BMzkzOGFiY2EtZDcyZi00OWNhLThhNmYtYjQ3ODljMTM5ZDBkXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_.jpg'
    }, {
        id: 2,
        sual: 'Bu serialin adi nedi?',
        cavab1: "You",
        cavab2: "lucifer",
        cavab3: "Squide Game",
        cavab4: "You",
        img: 'https://m.media-amazon.com/images/M/MV5BNDJjMzc4NGYtZmFmNS00YWY3LThjMzQtYzJlNGFkZGRiOWI1XkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_.jpg'
    },
    {
        id: 3,
        sual: 'Bu serialin adi nedi?',
        cavab1: "You",
        cavab2: "lucifer",
        cavab3: "Squide Game",
        cavab4: "La casa de papel",
        img: 'https://i.cnnturk.com/i/cnnturk/75/740x416/601a9b87214ed82080a32935.jpg'
    },
    {
        id: 4,
        sual: 'Bu serialin adi nedi?',
        cavab1: "You",
        cavab2: "lucifer",
        cavab3: "Squide Game",
        cavab4: "La casa de papel",
        img: 'https://m.media-amazon.com/images/M/MV5BNDJkYzY3MzMtMGFhYi00MmQ4LWJkNTgtZGNiZWZmMTMxNzdlXkEyXkFqcGdeQXVyMTEyMjM2NDc2._V1_.jpg'
    },
    {
        id: 5,
        sual: 'Bu serialin adi nedi?',
        cavab1: "You",
        cavab2: "lucifer",
        cavab3: "Squide Game",
        cavab4: "La casa de papel",
        img: 'https://kpophighindia.com/wp-content/uploads/2021/08/squid_game_poster_main.jpg.jpg'
    },
    {
        id: 6,
        sual: 'End',
        cavab1: "",
        cavab2: "",
        cavab3: "",
        cavab4: "",
        img: 'https://image.shutterstock.com/image-vector/congratulations-typography-lettering-handwritten-vector-260nw-1049534216.jpg'
    },
]

let currentItem = 0;


let cavab1 = document.querySelector('#bir')
let cavab2 = document.querySelector('#iki')
let cavab3 = document.querySelector('#uc')
let cavab4 = document.querySelector('#dord')
let soru = document.querySelector('h1')
    // document.querySelector('h1').innerHTML = `${rev[i].name}`

let items = document.querySelector('.items')
let score = document.querySelector('p')
items.addEventListener('click', tikla)
let a = 0

function tikla(e) {

    e.target.onclick = function() {
        currentItem++
        const item = rev[currentItem];
        sekil = document.querySelector('img')
        sekil.src = item.img;
        cavab1.textContent = item.cavab1;
        cavab2.textContent = item.cavab2;
        cavab3.textContent = item.cavab3;
        cavab4.textContent = item.cavab4;
        soru.textContent = item.sual


        if (e.target == cavab2) {
            a = a + 10
            score.innerHTML = `${a}`
        } else {
            a = a - 3
            score.innerHTML = `${a}`
        }

    }
}