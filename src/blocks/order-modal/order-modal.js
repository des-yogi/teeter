'use strict';

$( document ).ready(function() {

  var PRODUCTS =
    [
      {
        name: 'Инверсионный стол механический Teeter Hang Ups EP-560',
        shortName: 'Teeter Hang Ups EP-560',
        kind: 'Инверсионный стол механический',
        model: 'ep-560',
        img: 'ep-560-1-mobile@1x.jpg',
        price: 12150,
        amount: 0
      },
      {
        name: 'Инверсионный стол механический Teeter Hang Ups EP-970 LTD',
        shortName: 'Hang Ups EP-970 LTD',
        kind: 'Инверсионный стол механический',
        model: 'ep-970',
        img: 'ep-970-1-mobile@1x.jpg',
        price: 15795,
        amount: 0
      },
      {
        name: 'Инверсионный стол механический Teeter Hang Ups Contour L5',
        shortName: 'Teeter Hang Ups Contour L5',
        kind: 'Инверсионный стол механический',
        model: 'contour-l5',
        img: 'contour-l5-1-mobile@1x.jpg',
        price: 17739,
        amount: 0
      },
      {
        name: 'Инверсионные ботинки с турником Teeter EZ-Up Inversion & Chin-Up System',
        shortName: 'Teeter EZ-Up Inversion & Chin-Up System',
        kind: 'Инверсионные ботинки с турником',
        model: 'ez-up',
        img: 'ez-up_chin-up-1-mobile@1x.jpg',
        price: 3915,
        amount: 0
      }
    ];

  var buyBtns = Array.from(document.querySelectorAll('.btn--buy'));
  var itemPrices = Array.from(document.querySelectorAll('.shop-card__price-num'));
  var orderModal = document.getElementById('order-modal');
  var prodName = document.getElementById('prodName');
  var prodShortName = document.getElementById('shortName');
  var prodKind = document.getElementById('kind');
  var prodImage = document.getElementById('prodImg');
  var orderPrice = document.getElementById('amountField');

  // console.log(prodName.textContent);
  // console.log('Некорректно заполнено поле data-attr кнопки Купить: data-model !== PRODUCTS.model');

  /*var init = function(Obj, Arr) {
    for (item of Obj) {
      for (el of Arr) {
        if ( el.classList.contains('shop-card__price-num--' + item.model) ) {
          el.innerText = item.price;
        }
      }
    }
  };*/

  var init = function(Obj, Arr) {
    Obj.forEach(function(item) {
      Arr.forEach(function(el) {
        if ( el.classList.contains('shop-card__price-num--' + item.model) ) {
          el.innerText = item.price;
        }
      });
    });
  };

  // заполняем карточки товара ценой из объекта с данными PRODUCTS
  init(PRODUCTS, itemPrices);

  var setOrderModal = function (el) {
    /*for (product of PRODUCTS) {
      if (el === product.model) {
        prodName.innerText = product.shortName;
        prodKind.innerText = product.kind;
        prodShortName.innerText = product.shortName;
        prodImage.src = 'img/' + product.img;
        orderPrice.innerText = product.price;
        orderPrice.dataset.amount = product.price;
      }
    }*/
    PRODUCTS.forEach(function(product) {
      if (el === product.model) {
        prodName.innerText = product.shortName;
        prodKind.innerText = product.kind;
        prodShortName.innerText = product.shortName;
        prodImage.src = 'img/' + product.img;
        orderPrice.innerText = product.price;
        orderPrice.dataset.amount = product.price;
      }
    });
  };

  var buyEventHandler = function (e) {

    if (!e.target.dataset.model) {
      console.log('Поле data-attr кнопки Купить: data-model - Не заполнено');
    } else {
        var target = e.target.dataset.model;
        setOrderModal(target);
      }
  };

  buyBtns.forEach(function(btn) {
    btn.addEventListener('click', buyEventHandler);
  });

});


$( document ).ready(function() {

  var orderForm = document.getElementById('order-modal');

  if (orderForm) {
    var controlsField = document.getElementById('controlsField');
    var quantityField = document.getElementById('quantity');
    var quantity = quantityField.value;

    var amountSpan = document.getElementById('amountField');
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
  }

});

$( document ).ready(function() {
  $("#submit_button").on('click', function () {
    // event.preventDefault();
    $.ajax({
      url: 'submit.php',
      dataType: 'JSON',
      method: 'POST',
      data: {
        firstName: $('input[name=name]').val(),
        lastName: $('input[name=surname]').val(),
        tel: $('input[name=tel]').val(),
        email: $('input[name=email]').val(),
        payment: $('select[name=payment] option:selected').val(),
        delivery: $('select[name=delivery] option:selected').val(),
        quantity: $('input[name=quantity]').val(),
        agreement: $('#agreement').is(":checked"),
        itemName: $('#prodName').text(),
        price: $('#amountField').text()
      }
    }).done(function (data) {
      if (data['success'] == false)
      {
        alert('Ошибка: ' + data['error']);
      } else {
        // alert('Заказ успешно отправлен!');
        $('#order-modal-form').hide();
        $('.order-modal__ok').show();
      }
    });
  });
});
