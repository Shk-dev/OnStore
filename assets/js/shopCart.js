let d = document,
  iBox = d.querySelectorAll('.item__box'), // блок каждого товара
  cartCont = d.getElementById('cart__content'); // блок вывода данных корзины
// Функция кроссбраузерной установка обработчика событий
function addEvent(elem, type, handler) {
  if (elem.addEventListener) {
    elem.addEventListener(type, handler, false);
  } else {
    elem.attachEvent('on' + type, function () { handler.call(elem); });
  }
  return false;
}
// Получаем данные из LocalStorage
function getCartData() {
  return JSON.parse(localStorage.getItem('cart'));
}
// Записываем данные в LocalStorage
function setCartData(o) {
  localStorage.setItem('cart', JSON.stringify(o));
  return false;
}
// Добавляем товар в корзину
function addToCart(e) {
  this.disabled = true; // блокируем кнопку на время операции с корзиной
  let cartData = getCartData() || {}, // получаем данные корзины или создаём новый объект, если данных еще нет
    parBox = this.parentNode, // родительский элемент кнопки "Добавить в корзину"
    itemId = this.getAttribute('data-id'), // ID товара
    itemTitle = parBox.querySelector('.item__title').innerHTML, // название товара
    itemPrice = parBox.querySelector('.item__price').innerHTML; // стоимость товара
  if (cartData.hasOwnProperty(itemId)) { // если такой товар уже в корзине, то добавляем +1 к его количеству
    cartData[itemId][2] += 1;
  } else { // если товара в корзине еще нет, то добавляем в объект
    cartData[itemId] = [itemTitle, itemPrice, 1];
  }
  if (!setCartData(cartData)) { // Обновляем данные в LocalStorage
    this.disabled = false; // разблокируем кнопку после обновления LS
  }
  return false;
}
// Устанавливаем обработчик события на каждую кнопку "Добавить в корзину"
for (let i = 0; i < iBox.length; i++) {
  addEvent(iBox[i].querySelector('.add__item'), 'click', addToCart);
}
// Открываем корзину со списком добавленных товаров
function openCart(e) {
  let cartData = getCartData(), // вытаскиваем все данные корзины
    totalItems = '';
  // если что-то в корзине уже есть, начинаем формировать данные для вывода
  if (cartData !== null) {
    totalItems = '<table class="shopping__list"><tr class="table" ><th style="padding-right: 5px;">Наименование</th><th style="padding-left: 20px;">Цена ₽</th><th style="padding-left: 20px">Кол-во</th></tr>';
    for (let items in cartData) {
      totalItems += '<tr>';
      for (let i = 0; i < cartData[items].length; i++) {
        totalItems += '<td style="padding-left: 20px">' + cartData[items][i] + '</td>';
      }
      totalItems += '</tr>';
    }
    totalItems += '</table>';
    cartCont.innerHTML = totalItems;
  } else {
    // если в корзине пусто, то сигнализируем об этом
    cartCont.innerHTML = '<h2 class="null__busket">В Корзине Пусто!</h2>';
  }
  return false;
}
/* Открыть корзину */
addEvent(d.getElementById('checkout'), 'click', openCart);
/* Очистить корзину */
addEvent(d.getElementById('clear__cart'), 'click', function (e) {
  localStorage.removeItem('cart');
  cartCont.innerHTML = '<h2 class="null__busket">Корзина очищена.</h2>';
});