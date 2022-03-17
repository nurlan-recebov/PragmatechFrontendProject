// a b və c ədədləri verilir.a və b ədədlərindən hansının c ədədinə daha yaxın olduğunu tapmağınız tələb olunur.

// let a = prompt("a ədədini daxil edin");
// let b = prompt("b ədədini daxil edin");
// let c = prompt("c ədədini daxil edin");

// let x = Math.abs(c - a);
// let y = Math.abs(c - b);
// let z = x - y;

// if (z == 0) {
//     alert(`${a} və ${b} ədədləri ${c} ədədindən eyni məsafədədir`);
// } else if (x < y) {
//     alert(`${a} ədədi ${c} ədədinə ${b} ədədindən daha yaxındır`);
// } else if (x > y) {
//     alert(`${b} ədədi ${c} ədədinə ${a} ədədindən daha yaxındır`);
// }
// x adında dəyişən təyin edin.bu dəyişənə istənilən tipdə data təyin edilə bilər.Sizdən tələb olununan daxil edilən dəyərin növünü tapmaq və ona uyğun ekrana mesaj yazdırmaqdır.(Nümunə: Daxil etdiyini dəyər rəqəmdir)
// let x = prompt('deyisen daxil edin');
// let a = typeof x;
let eded = prompt('eded daxil edin');
for (i = 0; i < eded.length; i++) {
    alert(eded.charAt(i));
    console.log(eded.charAt(i));
}
// 'J'
// Attempting to assign a value to a string's .length property has no observable effect.
// myString.length = 4;
// console.log(myString);
// expected output: "bluebells"

// expected output: 9