let elements = document.querySelectorAll("#name, #email, #Description");

function handleFocus(e) {
  e.target.classList.add("bg-tran");
}

function handleFocusout(e) {
  e.target.classList.remove("bg-tran");
}

elements.forEach((element) => {
  element.addEventListener("focus", handleFocus);
  element.addEventListener("focusout", handleFocusout);
});

// Manage NavBar
var sidemenu = document.getElementById("sidemenu");
function opens() {
  sidemenu.style.right = "0 ";
}

function clos() {
  sidemenu.style.right = "100% ";
}
