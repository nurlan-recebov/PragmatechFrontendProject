// inputs

let Students = [{
    ad: 'Eli',
    soyad: 'Piriyev',
    yas: 23
}, {
    ad: 'Ehmed',
    soyad: 'Memmedov',
    yas: 34
}, {
    ad: 'Sara',
    soyad: 'Qurbanova',
    yas: 40
}, {
    ad: 'Sevda',
    soyad: 'Ezizova',
    yas: 58
}, {
    ad: 'Qurban',
    soyad: 'Sadiqzade',
    yas: 60
}]

//expected output
// Ad: Eli,Soyad:Piriyev,Yas:23
// Ad: Ehmed,Soyad:Memmedov,Yas:34
for (var i = 0; i < Students.length; i++) {

    console.log("Ad:" + Students[i]['ad'] + ", Soyadi:" + Students[i]['soyad'] + ", Yasi:" + Students[i]['yas']);
}