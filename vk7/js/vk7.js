const dialog = document.querySelector('#signupDialog');
const showButton = document.querySelector('#showdialog-dup');
const closeButton = document.querySelector('#closeDialog');

function openDialog() {
  dialog.showModal();
  dialog.querySelector('input')?.focus();
}

showButton.addEventListener('click', openDialog);
closeButton.addEventListener('click', () => dialog.close());

dialog.addEventListener('click', (e) => {
  const rect = dialog.getBoundingClientRect();
  const inDialog =
    e.clientX >= rect.left && e.clientX <= rect.right &&
    e.clientY >= rect.top  && e.clientY <= rect.bottom;
  if (!inDialog) dialog.close();
});


// Dark mode
const checkbox = document.getElementById("checkbox");
const darkMode = document.body.classList;

if (localStorage.getItem("teema") === "dark") {
  darkMode.add("dark")
  checkbox.checked = true
} else {
  darkMode.remove("dark")
  checkbox.checked = false
}

checkbox.addEventListener("change", () => {
document.body.classList.toggle("dark")
localStorage.setItem("teema", checkbox.checked ? "dark" : "light")
});