let displayColor = function (color) {
  console.log(color);
};

// function to add new color
function addColorToBeginning(colorArray) {
  return new Promise((resolve) => {
    let colorName = prompt(
      "Enter the color name which you want to add at beginning:"
    );
    colorArray.unshift(colorName);
    resolve(colorArray);
  });
}

// function to add color at the end
function addColorToEnd(colorArray) {
  return new Promise((resolve) => {
    let colorName = prompt(
      "Enter the color name which you want to add at end:"
    );
    colorArray.push(colorName);
    resolve(colorArray);
  });
}

// function to add two color at the beginning
function addTwoColorAtBeg(colorArray) {
  return new Promise((resolve) => {
    let firstColor = prompt(
      "Enter the first color name which you want to add:"
    );
    let secondColor = prompt(
      "Enter the second color name which you want to add:"
    );
    colorArray.unshift(firstColor, secondColor);
    resolve(colorArray);
  });
}

// function to delete first color
function deleteColorFrombeg(colorArray) {
  return new Promise((resolve) => {
    colorArray.shift();
    resolve(colorArray);
  });
}

// function to delete the last element
function deleteColorFromLast(colorArray) {
  return new Promise((resolve) => {
    colorArray.pop();
    resolve(colorArray);
  });
}
// function at which index you want to add the color
function addColorToSpecificIndex(colorArray) {
  return new Promise((resolve) => {
    let index = parseInt(prompt("Enter the index where you want to add:"));
    let color = prompt("Enter the color:");
    colorArray.splice(index, 0, color);
    resolve(colorArray);
  });
}

//function from which index you want to delete the color
function deleteColorFromSpecificIndex(colorArray) {
  return new Promise((resolve) => {
    let index = parseInt(prompt("Enter the index where you want to delete:"));
    let color = parseInt(
      prompt("Enter the number of colors you want to delete:")
    );
    colorArray.splice(index, color);
    resolve(colorArray);
  });
}

let colorArray = ["red", "green"];
displayColor(colorArray);
async function asyncFunc() {
  let colorbeg = await addColorToBeginning(colorArray);
  displayColor(colorbeg);
  let colorEnd = await addColorToEnd(colorArray);
  displayColor(colorEnd);
  let twoColorAtBeg = await addTwoColorAtBeg(colorArray);
  displayColor(twoColorAtBeg);
  let colorFromStart = await deleteColorFrombeg(colorArray);
  displayColor(colorFromStart);
  let colorFromEnd = await deleteColorFromLast(colorArray);
  displayColor(colorFromEnd);
  let addColorToIndex = await addColorToSpecificIndex(colorArray);
  displayColor(addColorToIndex);
  let deleteColorToIndex = await deleteColorFromSpecificIndex(colorArray);
  displayColor(deleteColorToIndex);
}
asyncFunc();
