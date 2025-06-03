document.addEventListener('DOMContentLoaded', function () {
  const button = document.getElementById('errorButton');

  button.addEventListener('click', function () {
    try {
      // Намір викликати помилку:
      nonExistentFunction(); // ця функція не існує
    } catch (error) {
      alert("Вибачте, але людина, яка програмувала цей сайт, недостатньо добре знає HTML та CSS, тому виникає ця помилка.");
    }
  });
});