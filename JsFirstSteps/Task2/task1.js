// x adında dəyişən təyin edin. bu dəyişənə istənilən tipdə data təyin edilə bilər.Sizdən tələb olununan daxil edilən dəyərin növünü tapmaq və ona uyğun ekrana mesaj yazdırmaqdır. (Nümunə: Daxil etdiyini dəyər rəqəmdir).


let x = prompt("Dəyər  daxil edin:");

if (x * 1 == x) {
    alert(`Daxil etdiyiniz ${x} dəyəri ədəddir.`)
} else {
    alert(`Daxil etdiyiniz ${x} dəyəri stringdir.`)
}