// ! DOM (DOCUMENT OBJECT MODAL)

// Daha öncesinde Html'deki body  kısımının Javascript'deki karşılığının document  olduğundan bahsettik ve documnet.write() metodu ile bu kısıma birşeyler de yazdık.Şimdi ise Html kısımında oluşturulan elamanlara Javascript'de erişip değişiklikler yapmayı göreceğiz.

// ? Html elemanlarına Javascript de 4 farklı yöntem ile erişilir:

// * 1-) document.getElementById() : Html kısımındaki elemanlara id lerine göre erişmek için kullanılır.
let minTitle = document.getElementById("min-title");
console.log(minTitle);

// * 2-) document.getElementsByClassName() : Html kısımındaki elemanlara class larına göre erişmek için kullanılır.
let title = document.getElementsByClassName("title");
console.log(title);

// * 3-) document.getElementsByTagName() : Html kısımındaki elemanlara tag(etiket adı) lerine göre erişmek için kullanılır.
let javascript = document.getElementsByTagName("h3");
console.log(javascript);
// * 4-) document.querySelector() : Html kısımındaki elemanlara erişilmek istenilen özellik ile erişmek için kullanılır.
let paragraf = document.querySelector(".paragraf");
console.log(paragraf);

let description = document.querySelector("#desc");
console.log(description);

// description.style.backgroundColor = "red";
// description.style.color = "green";
// description.style.fontSize = "45px";
// description.style.padding = "10px";
// description.style.borderRadius = "20px";
// * Bu şekilde Html den erişilen elemanlara style özellikleri verebiliriz.

let buton1 = document.querySelector("#btn-1");
console.log(buton1);
// ! Html den erişilen elemana class ekleme:
buton1.classList.add("btn");

let buton2 = document.querySelector(".btn-2");
console.log(buton2);
// ! Html den erişilen elemana class ekleme:
buton2.classList.add("btn-1");
// ! Html den erişilen elemandan class çıkarma:
buton1.classList.remove("btn");

// ! innerHTML ile Html kısımındaki elemanın Html ini  değiştirebiliriz.
// description.innerHTML = "Yusuf YAMAN";
// ! innerText ile Html kısımındaki elemanın text(yazı kısımını) ini  değiştirebiliriz.
// buton1.innerText = "YAZILIM";

// ! Event Listeners(Olay İzleyicileri)

// Html deki elemanlara olaylar ekleyebiliriz.Olay derken buton tıklanınca bir uyarı versin,X butonuna tıklanıca sepet kapansıni, butona tıklanınca dark-light mod olsun.

function selamla() {
  alert("Buton 1 e tıklanıldı.Buton 1 den selamlar.");
}

buton1.addEventListener("click", selamla);
// selamla();

function changeDescription() {
  description.innerHTML = "Udemig AKADEMİ ";
}
buton2.addEventListener("click", changeDescription);

// Bir buton atıklanınca div içerisine eleman ekleme örneği:
let container = document.querySelector(".container");
let addButton = document.querySelector("#add");
console.log(addButton);

function addElement() {
  let newDiv = document.createElement("div");
  newDiv.textContent = "Yeni Div";
  container.appendChild(newDiv);
}
addButton.addEventListener("click", addElement);
/*
* document.createElement ==> Bir Html elemanı oluşturmak için kullanılır.

* textContent ==> İstenilen elemanın yazısını belirler.

* appendChild ==> Bir kapsayıcı içerisine eleman eklemek için kullanılır.
*/

// ! Apı 'dan veri çekme

fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => response.json())
  .then((json) => console.log(json));
