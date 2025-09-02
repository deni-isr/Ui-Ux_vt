const dialog = document.getElementById('infoDialog');
const showButton = document.getElementById('openDialog');
const closeButton = document.getElementById('closeDialog');

// Кнопка "Открыть" — открывает модальное окно
showButton?.addEventListener('click', () => {
  dialog?.showModal();
});

// Кнопка "Закрыть" — закрывает диалог
closeButton?.addEventListener('click', () => {
  dialog?.close();
});