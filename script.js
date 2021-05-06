let button = document.querySelector(".back");
button.addEventListener("click", function () {
  window.scrollTo(0, 0);
});

let itemIndex = 1;
getSlider(itemIndex);
function nextItem() {
  //функция перехода к следующему элементу за счёт увеличения номера элемента на 1
  getSlider((itemIndex += 1));
}
function previousItem() {
  //функция перехода к предыдущему элементу за счёт уменьшения номера элемента на 1
  getSlider((itemIndex -= 1));
}
function currentItem(i) {
  //функция отображения текущего элемента
  getSlider(itemIndex);
}

function getSlider(i) {
  let items = document.getElementsByClassName("item"); // получение элементов слайдера
  if (i > items.length) {
    //проверка (если номер элемента больше, чем номер последнего элемента - показываем первый элемент)
    itemIndex = 1;
  } else if (i < 1) {
    //проверка (если номер элемента меньше, чем номер первого элемента - показываем последний элемент)
    itemIndex = items.length;
  }
  for (let item of items) {
    item.style.display = "none"; //скрываем элементы слайдера
  }
  items[itemIndex - 1].style.display = "block"; //показываем текущий элемент
}
