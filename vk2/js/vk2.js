const dialog = document.querySelector('#signupDialog');
const showButton = document.querySelector('#showdialog');
const closeButton = document.querySelector('#closeDialog');

showButton.addEventListener('click', () => {
  dialog.showModal();
  const firstInput = dialog.querySelector('input');
  firstInput?.focus();
});

closeButton.addEventListener('click', () => {
  dialog.close();
});

dialog.addEventListener('click', (e) => {
  const rect = dialog.getBoundingClientRect();
  const inDialog =
    e.clientX >= rect.left &&
    e.clientX <= rect.right &&
    e.clientY >= rect.top &&
    e.clientY <= rect.bottom;

  if (!inDialog) dialog.close();
});