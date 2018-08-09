'use strict';

$( document ).ready(function() {

  var EP560 =
  {
    name: 'Инверсионный стол EP-560',
    model: 'ep-560',
    img: 'ep-560-1-mobile@1x.jpg',
    price: 4000,
    amount: null
  }

  var EP970 =
  {
    name: 'Инверсионный стол EP-970',
    model: 'ep-970',
    img: 'ep-970-1-mobile@1x.jpg',
    price: 6000,
    amount: null
  }

  var CONTOURL5 =
  {
    name: 'Инверсионный стол Contour L5',
    model: 'contour-l5',
    img: 'contour-l5-1-mobile@1x.jpg',
    price: 8000,
    amount: null
  }

  var EZUP =
  {
    name: 'EZ-Up Chin-Up System',
    model: 'ez-up',
    img: 'ez-up_chin-up-1-mobile@1x.jpg',
    price: 2000,
    amount: null
  }

  var buyBtns = Array.from(document.querySelectorAll('.btn--buy'));
  var orderModal = document.getElementById('order-modal');
  var prodName = orderModal.querySelector('#prodName');
  var prodModel = orderModal.querySelector('#model');
  var prodImage = orderModal.querySelector('#prodImg');

  // console.log(prodName.textContent);

  var buyEventHandler = function (e) {

    // console.log(e.target.dataset.model);
    // console.log(prodName + '; ' + modelName);

    if (e.target.dataset.model) {
      var target = e.target.dataset.model;
      console.log(target);
      //prodName.textContent = target[name];
      //prodImage.src = 'img/' + target[img];
      console.log(prodImage.src);
    } return;
  };


  for (var btn of buyBtns) {
    btn.addEventListener('click', buyEventHandler);
    //console.log(btn);
  }

  // console.log(buyBtns);

});
