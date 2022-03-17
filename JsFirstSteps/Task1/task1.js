// a b və c ədədləri verilir.a və b ədədlərindən hansının c ədədinə daha yaxın olduğunu tapmağınız tələb olunur.

let a = prompt("a ədədini daxil edin");
let b = prompt("b ədədini daxil edin");
let c = prompt("c ədədini daxil edin");

let x = Math.abs(c - a);
let y = Math.abs(c - b);
let z = x - y;

if (z == 0) {
    alert(`${a} və ${b} ədədləri ${c} ədədindən eyni məsafədədir`);
} else if (x < y) {
    alert(`${a} ədədi ${c} ədədinə ${b} ədədindən daha yaxındır`);
} else if (x > y) {
    alert(`${b} ədədi ${c} ədədinə ${a} ədədindən daha yaxındır`);
}