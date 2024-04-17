let displayColor = new Promise(function (resolve) {
  resolve();
});

// Add a color to the beginning

function stepOne(colorArray) {
  return new Promise(function (resolve) {
    colorArray.unshift("green");
    resolve();
  });
}

// Add a color to the end

function stepTwo(colorArray) {
  return new Promise(function (resolve) {
    colorArray.push("yellow");
    resolve();
  });
}

// Add two more colors to the beginning

function stepThree(colorArray) {
  return new Promise(function (resolve) {
    colorArray.splice(0, 0, "pink", "sky blue");
    resolve();
  });
}

// Delete the first color

function stepfour(colorArray) {
  return new Promise(function (resolve) {
    colorArray.shift();
    resolve();
  });
}

// Delete the last color

function stepfive(colorArray) {
  return new Promise(function (resolve) {
    colorArray.pop();
    resolve();
  });
}

// Add a color at 2nd position/index

function stepSix(colorArray) {
  return new Promise(function (resolve) {
    colorArray.splice(2, 0, "light Pink");
    resolve();
  });
}

// remove the two colors from 1st position/index

function stepSeven(colorArray) {
  return new Promise(function (resolve) {
    colorArray.splice(1, 2);
    resolve();
  });
}
let colorArray = ["red", "blue"];
displayColor
  .then(function () {
    console.log(colorArray);
  })
  .then(() => {
    stepOne(colorArray);
    console.log(colorArray);
  })
  .then(() => {
    stepTwo(colorArray);
    console.log(colorArray);
  })
  .then(() => {
    stepThree(colorArray);
    console.log(colorArray);
  })
  .then(() => {
    stepfour(colorArray);
    console.log(colorArray);
  })
  .then(() => {
    stepfive(colorArray);
    console.log(colorArray);
  })
  .then(() => {
    stepSix(colorArray);
    console.log(colorArray);
  })
  .then(() => {
    stepSeven(colorArray);
    console.log(colorArray);
  });
