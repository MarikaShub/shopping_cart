//записываем в переменные элементы с ценами айтимов
const firstPrice = document.querySelector(".first-price");
const secondPrice = document.querySelector(".second-price");
const thirdPrice = document.querySelector(".third-price");
const fourthPrice = document.querySelector(".fourth-price");
//перевели значение переменных к числу и складываем их значения
result =
  +firstPrice.innerHTML +
  +secondPrice.innerHTML +
  +thirdPrice.innerHTML +
  +fourthPrice.innerHTML;

//вставляем полученное значение в элемент
const totalCost = document.querySelector(".total-cost__paragraph");
totalCost.textContent = result;
//записываем в переменную кнопку для скидки
const discountButton = document.querySelector(".discount");
//создаем функцию, которая пересчитывает стоимость с учетом скидки  при клике на кнопку
discountButton.addEventListener(
  "click",
  function () {
    result *= 0.8;
    totalCost.textContent = result;
  },
  { once: true }
);
