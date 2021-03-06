// alert("Copy");

let calcNetWorth = document.querySelector("#calc-asset");

function calc() {
  // body...
  let asset = parseInt(document.getElementById("assets").value);
  let cash = parseInt(document.getElementById("cash").value);
  let liability = parseInt(document.getElementById("liability").value);
  let result;
//   console.log(typeof asset);

  if ((result = asset + cash - liability)) {
    // result = parseInt(currency);
    let toCurrency = new Intl.NumberFormat("en-NG", {
      style: "currency",
      currency: "NGN"
    }).format(result);
    document.querySelector("#result").innerHTML = toCurrency;
	console.log(result);
  }
  
}

calcNetWorth.addEventListener("click", calc);

function restCalc() {
  document.getElementById("myForm").reset();
}

let modal = document.querySelector(".display-result");
let trigger = document.querySelector(".trigger");
let closeButton = document.querySelector(".close-btn");

function toggleModal() {
  modal.classList.toggle("show-result");
}

function windowOnClick(event) {
  if (event.target === modal) {
    toggleModal();
  }
}

trigger.addEventListener("click", toggleModal);
closeButton.addEventListener("click", toggleModal);
window.addEventListener("click", windowOnClick);
