const firstPrice = document.querySelector(".first-price");
const secondPrice = document.querySelector(".second-price");
const thirdPrice = document.querySelector(".third-price");
const fourthPrice = document.querySelector(".fourth-price");
result =
  +firstPrice.innerHTML +
  +secondPrice.innerHTML +
  +thirdPrice.innerHTML +
  +fourthPrice.innerHTML;

console.log(result);
const totalCost = document.querySelector(".total-cost__paragraph");
totalCost.textContent = result;

const discountButton = document.querySelector(".discount");

discountButton.addEventListener(
  "click",
  function () {
    result *= 0.8;
    totalCost.textContent = result;
  },
  { once: true }
);
