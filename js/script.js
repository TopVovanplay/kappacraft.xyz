const scrollButton = document.getElementById("scrollButton");
const targetSection = document.getElementById("targetSection");

scrollButton.addEventListener("buy", () => {
  console.log("1");
  // Определяем позицию раздела относительно верха документа
  const targetPosition = targetSection.offsetTop;

  // Выполняем плавную прокрутку до позиции раздела
  window.scrollTo({
    top: targetPosition,
    behavior: "smooth", // Добавляем плавную анимацию
  });
});
var text = document.getElementById("ip-el");

/* сохраняем кнопку в переменную btn */
var btn = document.getElementById("content-copy");

/* вызываем функцию при нажатии на кнопку */
btn.onclick = function() {
  text.select();    
  document.execCommand("copy");
}
