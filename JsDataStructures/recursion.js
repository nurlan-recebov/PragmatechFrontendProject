// let i = 0;
// (function() {


//     if (i < 100) {
//         console.log(i);




//     }

// })()



var b = 0

function eded() {
    b++
    if (b <= 300) {
        console.log(b);
        eded()
    }

}



eded()