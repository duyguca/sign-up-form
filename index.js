"use strict";
document.getElementById("referredby").addEventListener("change", (e) => {
  console.log(e.target.value);
  if (e.target.value === "magic" || e.target.value === "other") {
    document.getElementById("magic-detail").style.display = "block";
    document.getElementById("doTell").style.display = "block";
  } else {
    document.getElementById("magic-detail").style.display = "none";
    document.getElementById("doTell").style.display = "none";
  }
});

document.getElementById("myForm").reset();
