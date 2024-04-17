const form = document.querySelector("form");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const height = parseInt(document.querySelector("#height").value);
  const weight = parseInt(document.querySelector("#weight").value);
  const result = document.querySelector("#result");
  console.log(height);
  console.log(weight);
  // if (bmiResult < 18.6) {
  //   let BMIval = "You are under weight";
  // } else if (bmiResult > 24.9) {
  //   BMIval = "you are over weight";
  // } else if (18.6 > bmiResult < 24.9) {
  //   BMIval = "You have normal weight";
  // }
  if (height < 0 || height === "" || isNaN(height)) {
    result.innerHTML = "Please give a valid height";
  } else if (weight < 0 || weight === "" || isNaN(weight)) {
    result.innerHTML = "Please give a valid weight";
  } else {
    var bmiResult = (weight / ((height * height) / 10000)).toFixed(2);
    var message;
    if (bmiResult < 18.6) {
      message = "You are under weight";
    } else if (bmiResult > 24.9) {
      message = "You are over weight";
    } else {
      message = "You have normal weight";
    }
    result.innerHTML = `<span>Result: ${bmiResult}</span><p>${message}</p>`;
  }
});
