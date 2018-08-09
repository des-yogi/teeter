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
  var orderModal = document.getElementById('order-modal');
  var prodName = orderModal.querySelector('#prodName');
  var prodShortName = orderModal.querySelector('#shortName');
  var prodKind = orderModal.querySelector('#kind');
  var prodImage = orderModal.querySelector('#prodImg');

  // console.log(prodName.textContent);

  var buyEventHandler = function (e) {

    // console.log(e.target.dataset.model);
    // console.log(prodName + '; ' + modelName);

    if (e.target.dataset.model) {
      var target = e.target.dataset.model;
      console.log(target);

      for (product of PRODUCTS) {
        if (target === product.model) {
          prodName.textContent = product.shortName;
          prodKind.textContent = product.kind;
          prodShortName.textContent = product.shortName;
          prodImage.src = 'img/' + product.img;
        }
      }

    } return;
  };


  for (var btn of buyBtns) {
    btn.addEventListener('click', buyEventHandler);
  }

});
