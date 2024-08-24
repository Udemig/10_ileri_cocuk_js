// console.log("Javascript ikinci projeden selamlar");

// ! Html'den elemanların çağırılması

let form = document.getElementById("expense-form");
// console.log(form);
let harcamaInput = document.getElementById("expense-name");

// console.log(harcamaInput);

let fiyatInput = document.getElementById("expense-amount");

// console.log(fiyatInput);

let harcamaKapsayıcı = document.getElementById("expense");
// console.log(harcamaKapsayıcı);

// Form gönderildiğinde bir fonksiyon çalışsın

form.addEventListener("submit", ekle);

function ekle(e) {
  // Form gönderildiğinde sayfa yenilemenmesini kapat
  e.preventDefault();
  // Formların boş olup olmadığını kontrol et.Eğer boşsa kullanıcıya uyarı gönder.
  if (harcamaInput.value === "" || fiyatInput.value === "") {
    alert("İnputları doldurunuz !!");
    return;
  }
  // İnputlardaki verilere eriştik
  let harcamaAdı = harcamaInput.value;
  //   console.log(harcamaAdı);
  let fiyat = fiyatInput.value;
  //   console.log(fiyat);

  // Html kısımında bir cart oluşturalım
  let harcamaDiv = document.createElement("div");
  // Bu div  e bir class ekle
  harcamaDiv.classList.add("harcama");
  // Bu divin içeriği belirleme
  harcamaDiv.innerHTML = `
          <h1>${harcamaAdı} </h1>
          <h3> ${fiyat} ₺</h3>
          <img id='silBtn' src="./images/trash.png" alt="trash-img" />`;
  // Html deki harcama kapsayıcının içerisine eleman ekleme
  harcamaKapsayıcı.appendChild(harcamaDiv);

  // İnputları Sıfırla
  harcamaInput.value = "";
  fiyatInput.value = "";

  //   console.log("Form Gönderildi");
}

harcamaKapsayıcı.addEventListener("click", sil);
// Harcamaları silen fonksiyon
function sil(e) {
  var element = e.target;
  if (element.id === "silBtn") {
    element.parentElement.remove();
  }
}
