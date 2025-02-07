let counterText = document.getElementById("counterEl");
counterText.textContent = 0;

function decrease() {
  counterText.textContent--;
}

function increase() {
  counterText.textContent++;
}
