calculateTotalPrice();
// Get all the increment buttons
var incButtons = document.querySelectorAll('.increment');
// console.log(incButtons);
for (var i = 0; i < incButtons.length; i++) {
  // console.log(incButtons[i]);
  incButtons[i].addEventListener('click', function (event) {
    // console.log(event.target);
    setQuantityFor(event.target);
  });
}

// Get All decrement buttons
var decButtons = document.querySelectorAll('.decrement');
// console.log(incButtons);
for (var i = 0; i < decButtons.length; i++) {
  // console.log(decButtons[i]);
  decButtons[i].addEventListener('click', function (event) {
    // console.log(event.target);
    setQuantityFor(event.target);
  });
}

function setQuantityFor(btn) {
  // console.dir(btn.className);
  if (btn.className.includes('increment') === true) {
    // console.log(btn.previousElementSibling);
    var span = btn.previousElementSibling;
    // console.log(span.innerText);
    span.innerText++;
  }

  if (btn.className.includes('decrement') === true) {
    var span = btn.nextElementSibling;
    if (span.innerText > 1) {
      span.innerText--;
    }
  }
  calculateTotalPrice();
}

// Get All remove icons
var removeIcons = document.querySelectorAll('.remove');
for (var i = 0; i < removeIcons.length; i++) {
  removeIcons[i].addEventListener('click', function (event) {
    // console.dir(event.target.parentElement.parentElement.parentElement);
    // console.dir(event.target.closest('.single-item'));
    event.target.closest('.single-item').remove();
    calculateTotalPrice();
  });
}

// Get all like icons
var likeIcons = document.querySelectorAll('.like');
for (var i = 0; i < likeIcons.length; i++) {
  likeIcons[i].addEventListener('click', function (event) {
    console.log(event.target.classList);
    event.target.classList.toggle('text-primary');
    console.dir(event.target);
  });
}

function calculateTotalPrice() {
  // Get all cart items
  var cartItems = document.querySelectorAll('.single-item');

  // Initialize the total price
  var totalPrice = 0;

  for (var i = 0; i < cartItems.length; i++) {
    var item = cartItems[i];
    console.log(item);
    var unitPrice = item.querySelector('.price h3 span').innerText;
    console.log(unitPrice);
    var quantity = item.querySelector('.price .quantity span').innerText;
    console.log(quantity);
    totalPrice += unitPrice * quantity;
  }

  // Get the total
  var total = document.getElementById('total');
  total.innerText = totalPrice;
}
