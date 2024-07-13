// Bağlantı Kontrolü
// console.log("Merhaba Js");

/*
  *Date Objesi
  - Javascript objeleri içerisinde yer alana 'Date' objesi ile tarih bilgisine erişebiliriz.
  - Bu obje içerisinde yer alan metotlar sayesinde gerek tam tarihi gerekse özelleştirilmiş tarih dilimlerini almaya yarar.
*/
// Genel Tarih Alma
let tarih = new Date();
// Genel Tarih İçerisinden Günü Alma
let gün = new Date().getDate();
// Genel Tarih İçerinden Ayı Alma
let ay = new Date().getMonth();
// Genel Tarih İçerisinden Yılı Alma
let yıl = new Date().getFullYear();
// Genel Tarih İçerisinden Saati Alma
let saat = new Date().getHours();
// Genel  Tarih İçerisinden Dakikaya Erişme
let dakika = new Date().getMinutes();
// Genel  Tarih İçerisinden Milisaniyeye  Erişme
let ms = new Date().getMilliseconds();
document.write("Tarih: ", tarih + "<br/>");
document.write("Gün: ", gün + "<br/>");
document.write("Ay: ", ay + 1 + "<br/>");
document.write("Yıl: ", yıl + "<br/>");
document.write("Dakika: ", dakika + "<br/>");
document.write("Saat: ", saat + "<br/>");
document.write("Saniye: ", ms + "<br/>");

/*
* Yukarıda görüldüğü üzre Date objesi ve içerisinde yer alan metotlar sayesinde dinamik bir şekilde tarih bilgisine erişebiliriz.

*/

// Switch-Case

let dayNumber = 3;

switch (dayNumber) {
  case 1:
    document.write("Pazartesi" + "<br/>");
    break;
  case 2:
    document.write("Salı" + "<br/>");
    break;
  case 3:
    document.write("Çarşamba" + "<br/>");
    break;
  case 4:
    document.write("Perşembe" + "<br/>");
    break;
  case 5:
    document.write("Cuma" + "<br/>");
    break;
  case 6:
    document.write("Cumartesi" + "<br/>");
    break;
  case 7:
    document.write("Pazar" + "<br/>");
    break;
  default:
    document.write("Tanımsız Gün" + "<br/>");
}

let courses = ["frontend", "backend", "react native", "ingilizce"];

switch (courses[4]) {
  case "frontend":
    document.write("Frontend Kursuna Hoşgeldiniz" + "<br/>");
    break;
  case "backend":
    document.write("Backend Kursuna Hoşgeldiniz" + "<br/>");
    break;
  case "react native":
    document.write("React Native Kursuna Hoşgeldiniz" + "<br/>");
    break;
  case "ingilizce":
    document.write("İngilizce Hoşgeldiniz" + "<br/>");
    break;
  default:
    document.write("Tanımsız Kurs" + "<br/>");
}
/*
-- For Döngüsü:

- For döngüsü tekrar gerektiren durumlarda işlemleri kolayca yapmamıza olanak tanıyan bir yapıdadır.Sayaç mantığı içeren bu yapıda bir şartı sağlaması durumunda çalışması gereken yapı çalıştırılır.


*/
for (i = 0; i < 5; i++) {
  document.write("Udemig Akademiden Selamlar 🔔" + "<br/>");
}

let cars = [
  "BMW",
  "MERCEDES",
  "AUDİ",
  "PORSCHE",
  "TESLA",
  "FORD",
  "TOYOTA",
  "DODGE",
  "Lamborghini Gallardo LP550-2 ",
  "Valentino Balboni",
];
// document.write("Araba Dizisi" + "<br/>");

for (a = 0; a < cars.length; a++) {
  document.write(cars[a] + "<br/>");
}

/*
for döngüsü bizden 3 parametre ister.Birincisi bir değişken,ikincisi bu değikene bağlı olarak döngünün ne kadar devam edeceği üçüncüsü ise birinci değişkeni güncelleme komutu.
*/

// DOM ( DOCUMENT OBJECT MODAL)

// document'in Html kısımındaki 'body' ye karşılık geldiğini söylemiştik. Js içerisinde yer alan DOM ile bizlere  bu kısımda yer alan Html elemanlarına erişme ve bu elemanlara müdahale etme imkanı sunar.

//  Html de bulunan elemanlara gerek class gerek id gerekse tag ismi ile erişmiştik.Bu erişim sonucunda bu elemanlara harici css dosyalarında özellikler aktarmıştık.Aynı şekilde Html de yer alan elemanlara javascript dosyalarımızda erişebiliriz.

// Javascript dosyasında Html deki elemanlara erişmek için:

// 1-) Class Adı ile:
let javascript = document.getElementsByClassName("javascript");
console.log(javascript);
// 2-) İd ile:
let software = document.getElementById("yazılım");
console.log(software);

// 3-) Tag adı ile:

// 4-) querySellector ile erişme:
