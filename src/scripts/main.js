'use strict';

document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('.contacts__form');

  form.addEventListener('submit', function(event) {
    event.preventDefault();

    if (!form.checkValidity()) {
      form.reportValidity();

      return;
    }
    // Тут можна показати повідомлення "Дякуємо!" або щось подібне
    form.reset(); // Очищаємо поля форми
  });
});
