console.log("Merhaba");

// Date objesi

// genel tarih Alma
let tarih = new Date();
document.write("Tarih: ", tarih + "<br/>");

// genel tarih içerisinde gün alma
let gun = new Date().getDay();
document.write("Gün: ", gun + "<br/>");

// genel tarih içerisinde ay alma
let ay = new Date().getMonth();
document.write("Ay: ", ay + "<br/>");

// genel tarih içerisinden yıl ve saati alma
let yil = new Date().getFullYear();
document.write("Yıl: ", yil + "<br/>");

let saat = new Date().getHours();
document.write("saat: ", saat + "<br/>");

// Swwitch-Case
let number = 1;

switch (number) {
  case 1:
    document.write("GTR <br>");
    break;
  case 2:
    document.write("SUPRA MK4");
    break;
  case 3:
    document.write("SUPRA MK5");
    break;
  case 4:
    document.write("MERCEDES");
    break;
  default:
    document.write("Geçersiz");
    break;
}

// Not Harfini Belirleme
// Soru:
// Bir öğrencinin aldığı puana göre not harfini belirleyen bir JavaScript kodu yazın.
//  Puan 0 ile 100 arasında olmalıdır ve her puan aralığı
// bir not harfi ile eşleştirilmelidir.
// 90-100 = A
// 80-90 = B
// 70-80 = C
// 60-70 = D
// 50-60 = E

// Öğrencinin aldığı puanı tanımlayın
let puan = 85; // Bu örnekte puan 85

// Not harfini belirleyin
switch (true) {
  case puan >= 90 && puan <= 100:
    document.write("A <br>");
    break;
  case puan >= 80 && puan <= 90:
    document.write("B ");
    break;
  case puan >= 70 && puan <= 80:
    document.write("c");
    break;
  case puan >= 60 && puan <= 70:
    document.write("D");
    break;
  case puan >= 50 && puan <= 60:
    document.write("E");
    break;
  default:
    document.write("Geçersiz puan");
    break;
}

// DİZİLER

// let meyve = ["anans", "elma", "çilek", "muz", 7];

// switch (meyve[2]) {
//   case "çilek":
//     document.write("Çilek <br>");
//     break;
//   case "muz":
//     document.write("Muz <br>");
//     break;
//   default:
//     document.write("Geçersiz meyve");
//     break;
// }

// For döngüsü

for (i = 0; i <= 7; i++) {
  document.write(" merhabalar Udemig " + "<br>");
}

// 1 den 10 a kadar sayıları yazdır alt alta

for (let i = 1; i <= 10; i++) {
  document.write(i + "<br>");
}

let meyve = ["anans", "elma", "çilek", "muz", 7];
for (a = 0; a < meyve.length; a++) {
  document.write(meyve[a] + "<br>");
}
