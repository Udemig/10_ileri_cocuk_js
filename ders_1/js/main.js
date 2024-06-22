//! Js Çıktı Metotları:

// 1-) console.log() ==> Bu metot ile js dosyasının bağlantı kontrolünü yapabilir ve verileri inceleyebiliriz.

// console.log("Hello World !!");

// 2-) document.write()  ==> Html'deki body kısımı js'de document'e karşılık gelir.Write  ingilizce 'yaz' anlamına gelir.document.write ile ise bu alana yazdırma işlemi gerçekleştiririz.

// document.write("Merhaba Js");

//! Js Değişkenler:

// Js değişkenler bir proje oluştururken kullandığımız yapılardır.Verileri yönetme noktasında işimizi kolaylaştırır.

// Js değişken tanımlama:

// var
var name = "Udemig Akademi";
document.write(name + "<br/>");

var age = 22;
document.write(age + "<br/>");

// Değişkenler tanımlanırken  var anahtar kelimesi yazılır sonrasında ise bu değişkene bir isim verilir.İsim verilirken bu değişkenin değerine göre isimlendirme yapılır. Sonrasında ise = işareti konulur ve değikenin değeri yazılır

//! Js Veri Türleri:

// Js'de bazı veri tipleri mevcuttur.

// 1-) string: Metin şeklindeki ifadelerin veri türüne 'string' denir

// 2-) number: Sayı şeklinde ifadelerin veri türüne 'number' denir

// Stringler tanımlanırken " " arasında tanımlanır; number ise direkt yazılır ve tanımlanmış olur.

var number = 1234;
document.write(number + "<br/>");

//! Js Diziler:

// Diziler birden fazla veriyi bir arada tutmak için kullanılır

var sayılar = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// console.log(sayılar[3]);

var dizi = ["Yusuf", 22, "Ataberk", 15, 123432, "İstanbul"];

document.write(dizi[5] + "<br/>");

//! Js Objeler:

var kişi = {
  ad: "Yusuf",
  soyad: "YAMAN",
  yaş: 22,
  hobiler: ["Yazılım", "Futbol", "Müzik"],
};

document.write("Ad:" + kişi.ad + "<br/>");
document.write("Soyad:" + kişi.soyad + "<br/>");
document.write("Yaş:" + kişi.yaş + "<br/>");

var adress = {
  şehir: "Malatya",
  ilçe: "Battalgazi",
  posta_kodu: 444444,
};
document.write("----------------------------" + "<br/>");
document.write(adress.şehir + "<br/>");
document.write(adress.ilçe + "<br/>");
document.write(adress.posta_kodu + "<br/>");

//! Js Fonksiyonlar:

// Fonksiyonlar bir işi yapmak için özelleştirilmiş kod parçacıklarıdır.

function selamla() {
  document.write("Selamlar,ben yazılım öğreniyorum" + "<br/>");
}

selamla();

function hesapla() {
  var number1 = 12;
  var number2 = 21;
  document.write(number1 + number2 + "<br/>");
}
hesapla();
document.write("----------------------------" + "<br/>");

var hayvan = {
  ad: "Tekir",
  cins: "Kedi",
  yaş: 3,
  tanıtım: function () {
    document.write(
      "Kedi adı:" +
        this.ad +
        "<br/>" +
        "Kedi cinsi" +
        this.cins +
        "<br/>" +
        "Kedinin Yaşı:" +
        this.yaş +
        "<br/>"
    );
  },
};

hayvan.tanıtım();
document.write("----------------------------" + "<br/>");

function hesapla1(sayı1, sayı2) {
  document.write(sayı1 + sayı2 + "<br/>");
}

hesapla1(10, 98);

// JS Operatörler

/*

 + ==> toplama

 - ==> çıkarma

 * ==> çarpma

 / ==> bölme

 % ==> mod işlemi(bir sayının bir sayıya bölümünden kalandır)


*/
document.write("----------------------------" + "<br/>");

var sayı3 = 44;
var sayı4 = 11;

function toplama() {
  var sonuç = sayı3 + sayı4;
  return sonuç;
}
function çıkarma() {
  var sonuç = sayı3 - sayı4;
  return sonuç;
}

function çarpma() {
  var sonuç = sayı3 * sayı4;
  return sonuç;
}
function bölme() {
  var sonuç = sayı3 / sayı4;
  return sonuç;
}
function mod() {
  var sonuç = sayı3 % sayı4;
  return sonuç;
}

document.write(toplama() + "<br/>");
document.write(çıkarma() + "<br/>");
document.write(çarpma() + "<br/>");
document.write(bölme() + "<br/>");
document.write(mod() + "<br/>");

// var sayı3 = 44;
// var sayı4 = 11;
document.write("Sayı3 Sayı4 den büyük mü ?" + "" + (sayı3 > sayı4) + "<br/>");

document.write("Sayı3 Sayı4 den küçük mü ?" + "" + (sayı3 < sayı4) + "<br/>");

document.write("Sayı3 Sayı4 e eşit  mi ?" + "" + (sayı3 == sayı4) + "<br/>");

// <,>,== operatörleri sol ve sağındaki sayıların durumlarını konrol eder.
// Konrol sonucu doğru ise 'true' değilse 'false' döndürür.
