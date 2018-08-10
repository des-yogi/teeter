'use strict';

$( document ).ready(function() {

  var PRODUCTS =
    [
      {
        name: 'Инверсионный стол EP-560',
        shortName: 'EP-560',
        kind: 'Инверсионный стол',
        model: 'ep-560',
        img: 'ep-560-1-mobile@1x.jpg',
        price: 4000,
        amount: null
      },
      {
        name: 'Инверсионный стол EP-970 Ltd',
        shortName: 'EP-970 Ltd',
        kind: 'Инверсионный стол',
        model: 'ep-970',
        img: 'ep-970-1-mobile@1x.jpg',
        price: 6000,
        amount: null
      },
      {
        name: 'Инверсионный стол Contour L5',
        shortName: 'Contour L5',
        kind: 'Инверсионный стол',
        model: 'contour-l5',
        img: 'contour-l5-1-mobile@1x.jpg',
        price: 8000,
        amount: null
      },
      {
        name: 'Инверсионные ботинки EZ-Up Chin-Up System',
        shortName: 'EZ-Up Chin-Up System',
        kind: 'Инверсионные ботинки',
        model: 'ez-up',
        img: 'ez-up_chin-up-1-mobile@1x.jpg',
        price: 2000,
        amount: null
      }
    ];

  var buyBtns = Array.from(document.querySelectorAll('.btn--buy'));
  var itemPrices = Array.from(document.querySelectorAll('.shop-card__price-num'));
  var orderModal = document.getElementById('order-modal');
  var prodName = orderModal.querySelector('#prodName');
  var prodShortName = orderModal.querySelector('#shortName');
  var prodKind = orderModal.querySelector('#kind');
  var prodImage = orderModal.querySelector('#prodImg');
  var orderPrice = orderModal.querySelector('.order-modal__amount');

  // console.log(prodName.textContent);
  // console.log('Некорректно заполнено поле data-attr кнопки Купить: data-model !== PRODUCTS.model');

  var init = function(Obj, Arr) {
    for (item of Obj) {
      for (el of Arr) {
        if ( el.classList.contains('shop-card__price-num--' + item.model) ) {
          el.innerText = item.price;
        }
      }
    }
  };

  // заполняем карточки товара ценой из объекта с данными PRODUCTS
  init(PRODUCTS, itemPrices);

  var setOrderModal = function (el) {
    for (product of PRODUCTS) {
      if (el === product.model) {
        prodName.innerText = product.shortName;
        prodKind.innerText = product.kind;
        prodShortName.innerText = product.shortName;
        prodImage.src = 'img/' + product.img;
        orderPrice.innerText = product.price;
        orderPrice.dataset.amount = product.price;
      }
    }
  };

  var buyEventHandler = function (e) {

    if (!e.target.dataset.model) {
      console.log('Поле data-attr кнопки Купить: data-model - Не заполнено');
    } else {
        var target = e.target.dataset.model;
        setOrderModal(target);
      }
  };

  for (var btn of buyBtns) {
    btn.addEventListener('click', buyEventHandler);
  }

});


$( document ).ready(function() {

  var controlsField = document.getElementById('controlsField');
  var quantityField = document.getElementById('quantity');
  var quantity = quantityField.value;

  var amountSpan = document.querySelector('.order-modal__amount');
  var amountField = document.getElementById('amount');

  var btnEventHandler = function (e) {

    var ITEMPRICE = parseFloat(amountSpan.dataset.amount);
    var totalSum = 0;

    if (e.target.id === 'plusBtn' && quantity < 10) {
      quantity++;
    } else if (e.target.id === 'minusBtn'  && quantity > 1) {
      quantity--;
    }
    quantityField.value = quantity;
    amountField.value = quantity * ITEMPRICE;
    amountSpan.innerText = quantity * ITEMPRICE;
  };

  controlsField.addEventListener('click', btnEventHandler);

});
