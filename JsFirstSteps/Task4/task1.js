// verilən 4 ədədi böyükdən kiçiyə doğru ekrana çap edən program yazın
var points = [40, 100, 5, 25];
document.getElementById("demo").innerHTML = points;

function myFunction() {
    points.sort(function(a, b) { return b - a });
    document.getElementById("demo").innerHTML = points;
}