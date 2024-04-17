function Counter(initialValue) {
  this.value = initialValue;
  this.increment = function () {
    this.value++;
    updateCounterValue();
  };
  this.decrement = function () {
    if (this.value == 0) {
      console.log("value is already zero");
    } else {
      this.value--;
      updateCounterValue();
    }
  };
  this.reset = function () {
    this.value = initialValue;
    updateCounterValue();
  };
}

let myCounter = new Counter(0);
function updateCounterValue() {
  document.getElementById("value").textContent = myCounter.value;
}

document.querySelector(".increase").addEventListener("click", function () {
  myCounter.increment();
});
document.querySelector(".decrease").addEventListener("click", function () {
  myCounter.decrement();
});
document.querySelector(".reset").addEventListener("click", function () {
  myCounter.reset();
});
