sampleNews = `As software developers, the natural tendency is to start developing applications based on your own hands-on experience and knowledge right away. However, overtime issues in the application arise, adaptations to changes, and new features happen. Since then, you gradually realize that you have put too much effort into one thing: modifying the application. Even when implementing a simple task, it also requires understanding the whole system. You can’t blame them for changes or new features since they are inevitable parts of software development. So, what is the main problem here?
The obvious answer could be derived from the application’s design. Keeping the system design as clean and scalable as possible is one of the critical things that any professional developer should dedicate their time to. And that’s where SOLID design principles come into play. It helps developers eliminate design smells and build the best designs for a set of features.
Although the SOLID design principles were first introduced by the famous Computer Scientist Robert C. Martin (a.k.a. Uncle Bob) in his paper in 2000, its acronym was introduced later by Michael Feathers. Uncle Bob is also the author of best-selling books Clean Code, Clean Architecture, Agile Software Development: Principles, Patterns, and Practices.`



// Mətndəki xarakter sayını
// return edən funksiya yazın
// write
// function that
// return character count of string

// function sayi() {
//     let x = sampleNews;
//     console.log(x.length);
// }
// sayi()
// Mətndəki boşluq sayını
// return edən funksiya yazınlllet
// function bosluguTap() {

//     console.log(sampleNews.match(/ /g).length);
// }
// bosluguTap()



// Mətndəki cümlə sayını
// return edən funksiya yaz
// function cumlesayi() {
//     console.log(sampleNews.split('.').length-1);
// }
// cumlesayi()


// mətndəki söz sayını
// return edən funksiya yazın
// function sozsayi() {
//     z = sampleNews
//     console.log(z.split(".").length + z.match(/ /g).length - z.split().length);
// }
// sozsayi()


// Mətndəki hərf sayını
// return edən funksiya yazın
// function herfsayi() {
//     let x = sampleNews
//     console.log(x.length - x.split(' ').length - x.split('.').length + 2);
// }
// herfsayi()