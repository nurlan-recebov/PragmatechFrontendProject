interpreter və compiler dillər arasındakı fərqləri haqqında araşdırma edərək öz anladığınız formada yazın
interpreter
Programı her seferinde bir ifadeyi çevirir.
Tercümanlar genellikle kaynak kodunu analiz etmek için daha az zaman harcar. Ancak, genel yürütme süresi derleyicilerden nispeten daha yavaştır.Ara nesne kodu üretilmez, dolayısıyla bellek verimlidir.JavaScript, Python, Ruby gibi programlama dilleri yorumlayıcı kullanır.
Compiler.
Tüm programı tarar ve bir bütün olarak makine koduna çevirir.Derleyiciler genellikle kaynak kodunu analiz etmek için çok zaman alır. Bununla birlikte, genel yürütme süresi tercümanlardan nispeten daha hızlıdır.Daha fazla bağlantı gerektiren ara nesne kodu üretir, bu nedenle daha fazla bellek gerektirir.C, C ++, Java gibi programlama dilleri derleyiciler kullanır.
dəyişən və məlumat növləri arasındakı fərq nədir? Bunlar nə üçün istifadə olunur?Dəyişənlərin iki vacib məqsədi var, bunlar proqramçı adlarını seçə bilməsi, beləliklə proqramlaşdırmanı asanlaşdırması və içərisində istənilən dəyərlə işləyən proqramlar və ya funksiyalar yazmasıdır.
hər dilin özünə məxsus məlumat növləri mövcuddur. Bu məlumat növlərin dillərə görə fərqlənməsinin səbəbləri sizcə nədir?Veri türü, değişkenler içinde saklanacak verinin türüne göre sınıflandırılması işlemidir. Veri türleri her programlama dili için oldukça önemli bir kavramdır.
Bir işlem yaparken değişken içinde saklanan verinin türünü önceden belirtiriz. Böylece bilgisayar, verinin saklanacağı bellek alanını buna göre ayırır ve uygun işlemi gerçekleştirebilir.
JavaScript, C# veya Java gibi diğer programa dillerine benzer veri tiplerini içerir. Genel olarak iki veri türü olarak sınıflandırabiliriz;
Bazı diller veri tiplerini önceden ayırır, bazıları ayırmaz.
Teknik olarak, veri tipini önceden belirleyen diller, anabelleğe yerleşecek verileri, orada kapsayacakları alanlara göre gruplara ayırır. Bu grupları pratikteki kullanımlarına göre adlandırır Örneğin, karakterler, tamsayılar, kesirli sayılar vb gibi yalın tipler yanında dizim (array) vb gibi birleşik
yapılar bu ayrımı yapan her dilde vardır.
Fortran, Pascal,C/C++, Java vb diller veri tiplerini önceden ayıran
dillerdir. Python, Ruby gibi diller bu ayrımı önceden yapmaz; önce veriyi
ana belleğe yerleştirir sonra onun tipini belirler.
Bu iki yöntemin iyi ve kötü sayılabilecek yanları vardır. Verileri önceden tiplerine ayırmanın avantajları şöyle sıralanabilir:
• Her veri tipine yetecek ve ancak o kadar anabellek alanı ayrılır.
• Programcı, ana bellekte ayrılacak adresin büyüklüğünü bilerek değişkenlerini tanımlar.
• Her değişkene, anabellekte bir yer ayrılır. Değişken etkin olduğu sürece, o adrese bir başka veri yazılamaz. Programcı her istediğinde
değişkenin değerini değiştirebilir, yeni değer atayabilir. Bu işlem değişkenin adresini değiştirmez.
• Her veri tipi üzerinde yapılacak işlemler farklıdır. Örneğin sayılarda
yapılan işlemlerle metinlerde yapılan işlemler farklıdır. Bu fark göetilerek veri tipleri üzerinde işlem tanımlanır. Bu olgu programcıya
kolaylık sağlar.
2 BÖLÜM 1. VERI TIPLERI
Buna karşın, Verileri önceden tiplerine ayırmayan dillerin avantajları
şöyle sıralanabilir:
• Programcı veri tipleriyle uğraşmaz; gerekli verileri girer ve kullanır.
• Aynı adlı değişkene her istediğinde aynı ya da başka tipten veri atayabilir.
• Bir veri anabelleğe bir kez konulur. O değeri kullanan değişkenler o
değeri ortak kullanır. Böylece anabelleğe bir veri ancak bir kez girer.
Bu olgu, anabelleğin çok ekonomik kullanılmasını sağlar.
C dili verileri önceden tiplere ayıran dillerdendir.
javascriptdə dəyişən təyin edilmək üçün əsas üç açar söz var . let,var,const. Bu açar sözlərin vəzifələri arasındakı fərqlər nələrdir?const ile oluşturulan bir değişkene daha sonrasında tekrar değer ataması yapılamaz. let ile oluşturduğumuz bir değişkene daha sonrasında yeni bir değer atayabiliriz ancak const ile oluşturulan değişkene yeni bir değer tekrar atanamaz. Bu durum immutable(Değişmez) olarakta tanımlanmaktadır.Let ve const block scope özellikli oldukları için herhangi bir şekilde scope dışında kullanılamazlar. Var ise  Global olarak tanımlanan bir değişkeni, fonksiyon içerisinde tekrar tanımlayıp yeni bir değer atamak, globalde bulunan değişkenin değerinin de değişmesine sebep olabilir.
Proqramçı olaraq bir proqram yazarkən işi görmə addımlarımız necə olmalıdır?
Birici  program nece olmalidir ikinci nelerden istiafe olunacaq onlara baxilir