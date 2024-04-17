//    |------------------------------------------|
//    |            Question No. 01:              |
//    |------------------------------------------|

function searchByInput(arr) {
  return function (item) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === item) {
        alert(`"${item}" is found in the list!`);
      } else {
        alert(`"${item}" is not found in the list.`);
        break;
      }
    }
  };
}

let array = ["cake", "apple pie", "cookie", "chips", "patties"];
let searchItem = searchByInput(array);
let input = prompt("Enter the item you want to search: ");
searchItem(input);

//    |------------------------------------------|
//    |            Question No. 02:              |
//    |------------------------------------------|

let vowel = ["a", "e", "i", "o", "u"];
function vowelsInUserName(name) {
  let count = 0;
  for (let char of name.toLowerCase()) {
    if (vowel.includes(char)) {
      count++;
    }
  }
  if (count != 0) {
    alert(`"${name}" have ${count} vowels`);
  } else {
    alert(`"${name}" has no vowels`);
  }
}

let userName = prompt("Please enter the username:");
vowelsInUserName(userName);
