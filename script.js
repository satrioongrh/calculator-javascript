function print(num) {
  tresults = document.getElementById("results").innerHTML;
  if (tresults === "0") {
    tresults = num;
  } else {
    tresults = tresults + num;
  }
  document.getElementById("results").innerHTML = tresults;
}

function modulus() {
  tresults = document.getElementById("results").innerHTML;
  tresults = (tresults * 1) / 100;
  document.getElementById("results").innerHTML = tresults;
}

function koma() {
  tresults = document.getElementById("results").innerHTML;
  tresults = tresults + ".";
  document.getElementById("results").innerHTML = tresults;
}

document.getElementById("btn-ac").addEventListener("click", function () {
  document.getElementById("results").innerHTML = "0";
});

function results1() {
  tresults = document.getElementById("results").innerHTML;
  document.getElementById("results").innerHTML = tresults.substring(0, tresults.length - 1);
}
function kali() {
  tresults = document.getElementById("results").innerHTML;
  tresults = tresults + "*";
  document.getElementById("results").innerHTML = tresults;
}

function bagi() {
  tresults = document.getElementById("results").innerHTML;
  tresults = tresults + "/";
  document.getElementById("results").innerHTML = tresults;
}
function kurang() {
  tresults = document.getElementById("results").innerHTML;
  tresults = tresults + "-";
  document.getElementById("results").innerHTML = tresults;
}
function tambah() {
  tresults = document.getElementById("results").innerHTML;
  tresults = tresults + "+";
  document.getElementById("results").innerHTML = tresults;
}

function yoxlama() {
  if (isNaN(eval(hasil)) !== false) {
    alert("Səhflik var");
  }
}

function hasil() {
  var total = document.getElementById("results").innerHTML;
  if (isNaN(eval(total))) {
    alert("kosong");
    document.getElementById("results").innerHTML = "0";
  } else {
    document.getElementById("results").innerHTML = eval(total);
  }
}
