// * Javascript Çıktı Metotları

// 1-) console.log() ==> Tarayıcıda bulunan console'a çıktı vermek için kullanılır.
// console.log("Merhaba Js");

// 2-) document.write() ==> Html de body olarak kullanılan alan Javascript de document e karşılık gelir.document.write() metodu ile bu alana yazı yazdırılır.
document.write("Merhaba Dünya" + "<br/>");

// 3-) alert() ==> Kullanıcıya uyarı vermek için kullanılır.

// alert("Dikkat Js dersindesiniz! ");

// * Javascript Değişkenler

// var anahtar kelimesi değişken tanımlamak için kullanılır.Bu anahtar kelime yazıldıktan sonra değişkenimize bir isim verilir.Bu isimlendirmeden sonra = konulur ve değişkenin değeri yazılır.

var isim = "Yusuf";
var soyisim = "YAMAN";
var yaş = 22;
document.write(isim + "/" + soyisim + "/" + yaş + "<br/>");

// * Javascript Veri Tipleri

/*
* 1-) Stirng:Metin ifadelerinin veri tipi javascript de 'string' olarak geçer.


* 2-) Number:Sayıların veri tipi javascript de 'number' olarak geçer.

* 3-) Boolean(true/false): True yada false olarak değer alan ifadelerin veri tipi 'boolean' olarak geçer.

* 4-) Array(Diziler): Javascript de verileri daha kolay yönetmek ve sahip oldukları metotlardan faydalanmak için kullandığımız yapılardır.


* 5-) Object(Objeler): İçerisinde ifadeleri key-value(anahtar-değer) çiftleri halinde tutmamıza olanak sağlayan javascript yapılarıdır.
*/

// * typeof ==> Bir ifadenin tipini belirlemek için kullanılır.

document.write(typeof isim + "<br/>");
document.write(typeof soyisim + "<br/>");
document.write(typeof yaş + "<br/>");
document.write(typeof 134 + "<br/>");

// * Javascript Diziler: Diziler tıpkı bir değişken şeklinde tanımlanır.var anahtar kelimesi sonrasında bu diziye bir isim verilir.Sonrasında = işareti konulur ve [] ile dizi tanımlanır.Bu [] ler içerisinde tutulacak veriler yazılır.

var kullanıcılar = ["Yusuf YAMAN", "Ataberk Ömer", "Furkan Çulha"];
document.write(kullanıcılar[2] + "<br/>");

// Javascript dizilerinde spesifik bir elemana erişmek için [] ler kullanılır.Erişilmek istenilen dizinin adından sonra [] konulur ve erişilmek istenilen elemanın sırası bu [] ler arasında belirtilir.Fakat Js saymaya bizim gibi 1 den başlamaz 0 dan başlar.Bundan dolayı erişilmek istenen elemanın bir eksik sıra numarası ile erişilir.Yani 3 . elemana erişmek için [] içerisine 2 yazmalıyız.

var arabalar = ["BMW", "AUDİ", "MERCEDES", "ALFA ROMEO", "PORCHE"];
document.write("Arabalar: ", arabalar + "<br/>");

// * Javascript Dizilerin Metotları:

//! push() ==>Bir diziye eleman ekler
arabalar.push("TESLA");
document.write("Arabalar-1: ", arabalar + "<br/>");

//! pop()  ==> Bir diziden eleman çıkarmak için kullanılır.
arabalar.pop();
document.write("Arabalar-2: ", arabalar + "<br/>");

//! unshift() ==> Bir diziye başlangıçtan eleman ekler.
arabalar.unshift("FORD");
document.write("Arabalar-3: ", arabalar + "<br/>");

//!  shift() ==> Bir dizinin başlangıçından eleman çıkarma.
arabalar.shift();
arabalar.shift();
document.write("Arabalar-4: ", arabalar + "<br/>");

// * Javascript String Metotları:
document.write("----------------------------------------------", "<br/>");

let metin =
  "Bir zamanlar, uzak bir ülkede, herkesin birbirine yardım ettiği küçük bir kasaba vardı. Bu kasabada yaşayan insanlar, birbirlerine olan bağlılıkları ve dayanışmaları ile tanınırlardı. Her yıl düzenlenen büyük bir festivalde, kasaba halkı bir araya gelir, şarkılar söyler ve dans ederdi.";
document.write("Metin: ", metin + "<br/>");
// ! length ==> Bir metinin uzunluğunu hesaplar.
document.write("Metinin Uzunluğu: ", metin.length + "<br/>");
// ! indexOf ==> Bir metin içerisinde bulunan yazının sırasını bulur.
document.write(
  "Metinin içerisinde festivalde kelimesinin sırası: ",
  metin.indexOf("festivalde") + "<br/>"
);
// ! slice ==> Metinin içerisinden belirli aralığı almak için kullanılır.
document.write(
  "Metinin içerisinde 32 ve 56. karakterler arası: ",
  metin.slice(32, 56) + "<br/>"
);

// ! replace ==> Metin içerisindeki ifadeleri değiştirmek için kullanılır.
document.write(
  "Küçüğü ufak ile değiştiren metin: ",
  metin.replace("küçük", "ufak") + "<br/>"
);

// ! toLocaleUpperCase  ==> Metinin tüm harfleri büyük harf yapmak için kullanılır.
document.write("Hepsi büyük harf: ", metin.toLocaleUpperCase() + "<br/>");

// ! toLocaleLowerCase  ==> Metinin tüm harfleri küçük harf yapmak için kullanılır.
document.write("Hepsi küçük harf: ", metin.toLocaleLowerCase() + "<br/>");
document.write("----------------------------------------------", "<br/>");
// * Javascript Fonksiyonlar:

//  Belirli bir işlemi yapmak için tasarlanmış kod bloğudur.

// * Fonksiyon Tanımlama: Javascript fonksiyonları tanımlarken 'funciton' anahtar kelimesi kullanılır. Bu anahtar kelime yazıldıktan sonra bu fonksiyona bir isim verilir.Sonrasında sırasıyla () ve {} yazılır.Bu {} bloğu içerisinde fonksiyonu  yapmasını istediğimiz görev tanımlanır.
//! Burada fonksiyon tanımlandı
var a = 123;
var b = 43;
function toplama() {
  var sonuç = a + b;
  document.write("Sonuç: ", sonuç + "<br/>");
}
//! Burada ise fonksiyon çalıştırıldı.Bir fonksiyon tanımlandıktan sonra çağırılmazsa çalışmaz.
toplama();

function selamla() {
  document.write(
    "Udemig akademideki Javascript telafi dersinden selamlar." + "<br/>"
  );
}
selamla();

// * Fonksiyonlarda Parametre kavramı: Fonksiyonların daha dinamik çalışması için kullanılır.Fonksiyon adının yanındaki () ler içerisinde fonksiyona belirtilen bu parametreler fonksiyonun statik değerler vermesinin önüne geçer.

function parametreliToplama(sayı1, sayı2) {
  var sonuç = sayı1 + sayı2;
  document.write("Parametrerli Toplama Sonuç: ", sonuç + "<br/>");
}

parametreliToplama(12, 34);

parametreliToplama(32, 87);

// * Fonksiyonlarda return kavramı: Şimdiye kadar tanımladığımız fonksiyonlar bir işlemi yapmak üzere özelleştirildi.(toplama yapmak,selam ver)Şimdi ise bir fonksiyonun çağırıldığı yerde bir işlem yerine bir sonuç vermesini sağlayalım.Bir fonksiyon bu değer döndürme işlevini 'return' kavramı ile sağlar.Normal tanımlanan bir fonksiyon return satırında tanımlanan değeri bu fonksiyonun sonucu olarak dışarı çıkarır.

function adetHesapla(x, y) {
  let stok = x + y;
  return stok;
}
let stokAdet = adetHesapla(10, 20);
document.write(stokAdet + "<br/>");

// * Javascript Objeler: Javascript objeleri tanımlanırken değişkenlerde olduğu gibi var yada let anahtar kelimesi yazılır sonrasında bu objeye bir isim verilir.Obje isiminden sonra = konulur ve {} açılır.Bu {} ler içerisinde key-value(anahtar-kilit) şeklinde değerler yazılır.

let öğrenci = {
  ad: "Furkan",
  soyad: "Çulha",
  yaş: 15,
  numara: 12345,
  hobiler: ["Yazılım", "Kitap Okumak", "Müzik Dinlemek"],
  tanıtım: function () {
    document.write(
      "Merhaba,",
      this.ad,
      this.soyad,
      "isimli öğrencinin hobileri:",
      this.hobiler + "<br/>"
    );
  },
};
// console.log(öğrenci);
// console.log("Ad:", öğrenci.ad);
// console.log("Soyad:", öğrenci.soyad);
// console.log("Yaş:", öğrenci.yaş);
// console.log("Numara:", öğrenci.numara);
// console.log("Hobiler:", öğrenci.hobiler);
// console.log("Hobiler-1:", öğrenci.hobiler[0]);
// console.log("Hobiler-2:", öğrenci.hobiler[1]);
// console.log("Hobiler-3:", öğrenci.hobiler[2]);
// console.log(
//   öğrenci.ad,
//   öğrenci.soyad,
//   öğrenci.yaş,
//   öğrenci.numara,
//   öğrenci.hobiler[0]
// );
öğrenci.tanıtım();

let users = [
  { id: 1, ad: "Yusuf", soyadı: "YAMAN" },
  { id: 2, ad: "Furkan", soyadı: "Çulha" },
  { id: 3, ad: "Ataberk", soyadı: "Kalaycı" },
];

// console.log(users[0]);

//*  Literal Templates(Bactick): Şimdiye kadar değişkenleri direkt yazıp string ifadeleri ise '' içerisinde yazdık.Ve bunları + operatörü ile yada , ile birleştirdik.Bu birden fazla değişken ve birden fazla string ifade bir arada kullanıldığında sıkıntı yaratabilir.

// * ``(bactikler)[ maclerde (option+,) windoslarda ise (alt + ,) oluşturulur.] yapılar sayesinde ise bizler bu yapı içerisinde hem stringleri hemde değişkenleri yazabiliriz.Bu yapının içinde string yazılırken direkt yazılır eğer değişken kullanılacaksa ${} içerisinde bu değişken kullanılır.

let name = "Yusuf";
let age = 22;
// console.log("Merhaba ben", name, age, "yaşındayım.");
console.log(`Merhaba ben ${name} ${age} yaşındayım.`);
document.write("----------------------------------------------", "<br/>");
// * Javascript Dizilerine map ve forEach kulanımı

let sayılar = [1, 2, 3, 4, 5];
document.write(`Sayılar dizisi: ${sayılar}` + "<br/>");

// document.write(`Sayılar dizisi-1: ${sayılar[0]}` + "<br/>");
// document.write(`Sayılar dizisi-2: ${sayılar[1]}` + "<br/>");
// document.write(`Sayılar dizisi-3: ${sayılar[2]}` + "<br/>");
// document.write(`Sayılar dizisi-4: ${sayılar[3]}` + "<br/>");
// document.write(`Sayılar dizisi-5: ${sayılar[4]}` + "<br/>");

function sayılarıEkranaYazdır(sayı) {
  document.write(sayı + "<br/>");
}
// sayılarıEkranaYazdır(sayılar[0]);
// sayılarıEkranaYazdır(sayılar[1]);
// sayılarıEkranaYazdır(sayılar[2]);
// sayılarıEkranaYazdır(sayılar[3]);

sayılar.forEach(sayılarıEkranaYazdır);

function sayılarıİkiİleÇarp(sayı) {
  return sayı * 2;
}

let sayılarınİkiKatı = sayılar.map(sayılarıİkiİleÇarp);
document.write(sayılarınİkiKatı + "<br/>");

/*

* Dizilerde her eleman için belirli bir işlevi gerçekleştirmek isteyebiliriz.Bu noktada karşımıza map ve forEach çıkar.

* forEach bir dizinin tüm elemanlarını döner.

* map ise bir diziyi döner ve bu dizinin elemanlarında yeni bir dizi oluşturur.

* map bir dizinin elemanlarını dönerken bu dizinin elemanları güncelleyebilir.forEach ise sadece dizinin elemanlarını döner.



* Özetle bir diziyi dönerken map mi forEach mi kullanalım diye bir şüpheye düşersek şunu hatırlayalım.Eğer bu dizi dönülürken eğer elemanlarda değişiklik yapacaksak 'map' yapmayacaksak 'forEach' kullanılır.

*/

// * Dizilerde filtreleme: Dizilerde filtreleme filter metodu ile yapılır.Bu metot diziyi döner ve () içerisinde belirtilen şarta bağlı olarak bu diziyi filtreler ve yeni bir dizi oluşturur.
document.write("----------------------------------------------", "<br/>");
let büyükSayılar = [1, 2345, 21, 54, 76, 987];
document.write(`Büyük sayı dizisi: ${büyükSayılar}` + "<br/>");
function filtereleme(x) {
  return x > 100;
}

let filtrelenmişDizi = büyükSayılar.filter(filtereleme);
document.write(`Filtrelenmiş dizisi: ${filtrelenmişDizi}` + "<br/>");
document.write("----------------------------------------------", "<br/>");

//* Dizilerde sıralama: Dizilerde sıralama 'sort' metodu ile yapılır.Bu yapı kelimelerde doğru çalışırken bir basamaktan fazla oluşan sayılarda hatalı çalışır.İlk basamağa göre sıralama yapar.Bu noktada sort() içerisinde sıralamayı düzgün yapması için bir fonksiyon yazarız.Bu fonksiyon  function (a, b) { return a- b;} şeklindedir.Eğer a- b olursa küçükten büyüğe b - a olursa  ise büyükten küçüğe sıralama yapar.
let şehir = ["Malatya", "Ankara", "İstanbul", "İzmir"];

document.write(`Şehirler: ${şehir}`);

şehir.sort();
document.write(`Sıralı Şehirler : ${şehir} <br/>`);

let şehirNumaraları = [44, 6, 34, 35];
document.write(`Plaka : ${şehirNumaraları}<br/>`);
şehirNumaraları.sort(function (a, b) {
  return b - a;
});
document.write(`Plaka-Sıralı : ${şehirNumaraları}<br/>`);
