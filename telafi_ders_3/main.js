let minTitle = document.getElementById("min-title");
console.log(minTitle);

let title = document.getElementsByClassName("title");
console.log(title);

let js = document.getElementsByTagName("h3");
console.log(js);

let paragraph = document.querySelector(".paragraf");
console.log(paragraph);

let aciklama = document.querySelector("#desc");
console.log(desc);

aciklama.style.backgroundColor = "green";
aciklama.style.color = "white";
aciklama.style.fontSize = "44px";

let but1 = document.querySelector("#btn-1");
console.log(but1);

but1.classList.add("btn");

let but2 = document.querySelector(".btn-2");
console.log(but2);

but2.classList.add("btn-1");

function uyarı() {
  alert("Bir hata oluştu!");
}

but1.addEventListener("click", uyarı);

let container = document.querySelector(".container");
let ekleBut = document.querySelector("#add");
console.log(ekleBut);

function addElemets() {
  let yeniDiv = document.createElement("div");
  yeniDiv.textContent = "Yeni Div";
  container.appendChild(yeniDiv);
}

ekleBut.addEventListener("click", addElemets);

// iki sayıyı toplayan ve console yazdıran javascript kodu

let sumBut = document.getElementById("sumButton");
let num1 = document.getElementById("number1");
let num2 = document.getElementById("number2");

function toplama() {
  let number1 = parseFloat(num1.value);
  let number2 = parseFloat(num2.value);
  let sum = number1 + number2;
  console.log("Toplam : " + sum);
}

sumBut.addEventListener("click", toplama);
