// Bağlantı Kontrolü
// console.log("Merhaba Js");

// Fonksiyonlar

// * Bir işi yapmak üzere özelleştirilmiş kod parçacıklarıdır.

function selamla() {
  console.log("Merhaba Dünya");
}
selamla();

let sayı1 = 12;
let sayı2 = 44;
function toplama() {
  let toplam = sayı1 + sayı2;
  document.write("Toplam:", toplam + "<br/>");
}
toplama();

function gelişmişToplama(x, y) {
  toplam = x + y;
  document.write("Toplam:", toplam + "<br/>");
}
gelişmişToplama(12, 56);
gelişmişToplama(102, 34);

function gelişmişToplama1(x, y) {
  toplam = x + y;
  return toplam;
}

let ürünSayısı = gelişmişToplama1(12, 34);

document.write("Toplam Ürün:", ürünSayısı + "<br/>");

function ortalamaHesapla(x, y, z) {
  toplam = x + y + z;
  return toplam / 3;
}

let ortalama = ortalamaHesapla(50, 60, 40);

document.write("Ortalama :", ortalama + "<br/>");

// Girilen 3 sayıya bağlı olarak bunların ortalamasını hesapladık.Bu adımdan sonra ortalama bağlı yani bir koşul ile bağıntılı işlemler nasıl yapılır ona bakalım.

if (ortalama > 50) {
  document.write("Ortalama 50 den büyüktür" + "<br/>");
} else if (ortalama == 50) {
  document.write("Ortalama 50 dir." + "<br/>");
} else {
  document.write("Ortalama 50 den küçüktür" + "<br/>");
}

// Kişinin yaşına bağlı olarak 18 'den büyükse '18 yaşından büyüksünüz' ; 18 ise '18 yaşına yeni girdiniz' ; 18 den küçükse '18 yaşından küçüksünüz

let yaş = 17;

if (yaş > 18) {
  document.write("18 yaşından büyüksünüz" + "<br/>");
} else if (yaş == 18) {
  document.write("18 yaşındasınız" + "<br/>");
} else {
  document.write("18 yaşından küçüksünüz" + "<br/>");
}

// İf-else koşullu ifadeler oluşturmak için kullanılır.Yani bir şarta bağlı olarak bir dizi işlemleri organize etmek için kullanılır.

// if ==> eğer  else ==> değilse

// if diyip () açarız parantez içerisine ise şartı belirtiriz.Bu şartın gerçekleşmesi durumunda olacak işlemleri ise {} içerisinde yazarız. Bu koşul sağlanmıyor ise ve sonrasında yeni bir koşul oluşturulacaksa aynı yapı tekrarlanır fakat küçük bir fark ile.Bu fark birinci koşuldan sonra gelen sonuncu hariç tüm koşulların başına else eklemektir. Sonuncu koşulda ise sadece else kullanılır.

// 1'den 5 kadar olan sayılarda 1 için frontend 2 için backend 3 için mobile 4 için ingilizce  5 için ise Swift yazdıran bir koşullu yapı oluşturunuz.

let koşulSayısı = 6;
if (koşulSayısı == 1) {
  document.write("Frontend Kursu" + "<br/>");
} else if (koşulSayısı == 2) {
  document.write("Backend Kursu" + "<br/>");
} else if (koşulSayısı == 3) {
  document.write("Mobile Kursu" + "<br/>");
} else if (koşulSayısı == 4) {
  document.write("İngilizce Kursu" + "<br/>");
} else if (koşulSayısı == 5) {
  document.write("Swift Kursu" + "<br/>");
} else {
  document.write("Diğer" + "<br/>");
}

document.write(
  "-----------------------------------------------------" + "<br/>"
);

let metin =
  "İzmir gevreğine zam geldi.  100 gramı 10 liradan satılan gevrek 90 grama düşürüldü ve fiyatı 12.5 liraya yükseldi";

document.write("Metin: ", metin + "<br/>");
// * Bir yazının uzunluğunu .length ile bulabiliriz.
document.write("Metin Uzunluğu: ", metin.length + "<br/>");

// * Bir metin içerisinde bulunan yazının sırasını indexOf ile buluruz
document.write(
  "Metin İçerisinde gevrek'in sırası: ",
  metin.indexOf("gevrek") + "<br/>" + "<br/>"
);
// * Bir metin içerisinde bulunan belirli bir aralığı almak için slice kullanılır.Birinci parametre zorunludur ikinci ise zorunlu değildir.İkinci parametre verilmezse son elemana kadar alır.Belirtilirse ise o elemana kadar alır
document.write(
  "Metin İçerisinde 10 ve 65 . aralıkta bulunan kelimeleri bulma: ",
  metin.slice(10, 65) + "<br/>"
);
// *  Bir metin içerisinde yer alan bir kelimeyi replace ile değiştirebiliriz.
document.write(
  "Metin İçerisinde gevrek i simit ile değiştirme: ",
  metin.replace("gevrek", "simit") + "<br/>"
);
document.write(
  "----------------------------------------------------------------------------------------------------------" +
    "<br/>"
);
//* Bir metin içersindeki tüm harfleri büyük harf yapma:
document.write(
  "Metin İçerisindeki tüm yazıları büyük harf yapma: ",
  metin.toLocaleUpperCase() + "<br/>"
);
//* Bir metin içersindeki tüm harfleri küçük harf yapma:
document.write(
  "Metin İçerisindeki tüm yazıları küçük harf yapma: ",
  metin.toLocaleLowerCase() + "<br/>"
);

document.write(
  "----------------------------------------------------------------------------------------------------------" +
    "<br/>"
);

let sayı = 9.12345765432;

document.write("Sayı: ", sayı + "<br/>");
//* Ondalıklı sayılarda . dan sonra kaç basamak olacağını toFixed ile belirleriz.
document.write("Sayının . dan sonra 3 basamağı: ", sayı.toFixed(3) + "<br/>");
// Bir sayıyı en yakın tam sayıya yuvarlamak için Math objesi içerisinde yeralan round kullanılır
document.write(
  "Sayının  en yakın tam sayıya yuvarlanması: ",
  Math.round(sayı) + "<br/>"
);
//* Bir sayının bir üst tamsayıya yuvarlanmasını için Math objesi içerisinde yer alan ceil kullanılır
document.write(
  "Sayının  üst tamsayıya yuvarlanması: ",
  Math.ceil(sayı) + "<br/>"
);
//* Bir sayının bir alt tamsayıya yuvarlanmasını için Math objesi içerisinde yer alan floor kullanılır
document.write(
  "Sayının  alt tamsayıya yuvarlanması: ",
  Math.floor(sayı) + "<br/>"
);
//* Bir sayının üssünü almak için Math objesi içerisinde yer alan pow kullanılır
document.write("Bir sayının üssünü alma: ", Math.pow(2, 8) + "<br/>");
//* Sayılar içerisinden  en büyük değeri bulmak için Math objesi içerisinde yer alan max kullanılır
document.write(
  "Sayılar arasından max değeri bulma : ",
  Math.max(1, 23, 4546, 878986, 23, 6655) + "<br/>"
);
//* Sayılar içerisinden  en küçük değeri bulmak için Math objesi içerisinde yer alan min kullanılır
document.write(
  "Sayılar arasından min değeri bulma : ",
  Math.min(1, 23, 4546, 878986, 23, 6655) + "<br/>"
);
document.write(
  "----------------------------------------------------------------------------------------------------------" +
    "<br/>"
);

var arabalar = ["Bmw", "Mercedes", "Audi", "Alfa Romeo", "Honda", "Toyata"];
document.write("Arabalar Dizisi: ", arabalar + "<br/>");

// Bir diziye eleman ekleme ==> push
arabalar.push("Renault");
arabalar.push("Opel");
document.write("Arabalar Dizisi-1: ", arabalar + "<br/>");
// Bir diziye başlanıçtan eleman ekleme ==> unshift
arabalar.unshift("Tesla");
document.write("Arabalar Dizisi-2: ", arabalar + "<br/>");
// Bir diziden eleman çıkarma ==> pop
arabalar.pop();
document.write("Arabalar Dizisi-3: ", arabalar + "<br/>");
// Bir dizinin başlanıçından eleman çıkarma ==> shift
arabalar.shift();
document.write("Arabalar Dizisi-4: ", arabalar + "<br/>");

document.write(
  "----------------------------------------------------------------------------------------------------------" +
    "<br/>"
);

let sayılar = [1, 2, 4, 6, 8654, 34567, 9878];
document.write("Sayılar Dizisi: ", sayılar + "<br/>");

function ekranaSayıYaz(sayı) {
  document.write(sayı + "<br/>");
}
function sayıyıİkiİleÇarp(sayı) {
  return sayı * 2;
}

// ekranaSayıYaz(sayılar[0]);
// ekranaSayıYaz(sayılar[1]);
// ekranaSayıYaz(sayılar[2]);
// ekranaSayıYaz(sayılar[3]);

sayılar.forEach(ekranaSayıYaz);

let sayılarınİkiKatı = sayılar.map(sayıyıİkiİleÇarp);

document.write("Sayıların İki Katı Dizisi: ", sayılarınİkiKatı + "<br/>");

// forEach ve map bir dizideki elemanları dönmeye yarar.Aralarındaki fark ise forEach bunu yaparken dizinin elemanlarını değiştirmez map ise dizinin elemanlarını hem döner hem de  değişiklik yapar.

//* Özetle  bir diziyi dönmemiz gerekirken dikkat etmemiz gereken husus şudur diziyi dönerken elemanlarda değişiklik yapacakmıyız ? Cevabımız evet ise tercihimiz 'map' ; hayır ise 'forEach' olacaktır.

// let filtrelenmişDizi = sayılar.filter(function (x) {
//   return x > 100;
// });

function filtreleme(x) {
  return x > 100;
}
let filtrelenmişDizi = sayılar.filter(filtreleme);

document.write("Filtrelenmiş Dizi: ", filtrelenmişDizi + "<br/>");

document.write("Sıralanmış Arabalar: ", arabalar.sort() + "<br/>");

let newSayı = [12, 2443, 5678765, 24353, 98778];
document.write(
  "Sıralanmış Sayılar: ",
  newSayı.sort(function (a, b) {
    return a - b;
  }) + "<br/>"
);

// Dizilerde filreleme yapmak için filter kullanılır.Filter metodu bir diziye filtreleme sağlar.() içerisinde neye göre filtreleme yapacağı belirtilir.

// Dizilerde sıralama yapmak için sort metodu kullanılır.Sort gerek alfabetik gerekse sayı dizilerinde sıralama yapar.Ama sayılarda sıralama yaparken birazcık hatalı çalışır.İlk basamağa bakarak sıralama yapar.Bu noktada bir () içerisinde bir fonksiyon yazarız.
