"use strict";
function change(e) {
  var Image = document.querySelector(".main");
  Image.src = e.children[0].src;
}
function change() {
  document.querySelectorAll("input").forEach((a) => {
    console.log(a.value === "");
    if (a.value === "") {
      a.style.border = "1px solid red";
      a.placeholder = "Required";
    } else {
      a.style.border = "none";
    }
  });
}
var input = document.querySelector(".width");
input.value = "1";

function chang() {
  if (input.value == 12) {
    return;
  }
  input.value++;
}
function minus() {
  if (input.value <= 1) {
    return;
  }
  input.value--;
}
