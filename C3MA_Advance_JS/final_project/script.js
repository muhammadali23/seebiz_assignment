password.onkeyup = () => {
  document.getElementById("finalResult").innerHTML = "";
};

document.getElementById("btn").addEventListener("click", function (e) {
  e.preventDefault();
  let password = document.getElementById("password").value;
  let firstChar = password.charAt(0);
  let containsAlphabets = false;
  let containsNumber = false;
  // 1st validation
  for (let i = 0; i < password.length; i++) {
    let charCode = password.charCodeAt(i);
    if (
      (charCode >= 65 && charCode <= 90) ||
      (charCode >= 97 && charCode <= 122)
    ) {
      containsAlphabets = true;
    }
    if (charCode >= 48 && charCode <= 57) {
      containsNumber = true;
    }
  }
  if (containsAlphabets === false || containsNumber === false) {
    const para1 = document.createElement("p");
    const res1 = document.createTextNode(
      "password must contain both alphabat and numbers"
    );
    para1.appendChild(res1);
    document.getElementById("finalResult").appendChild(para1);
  }
  // 2nd validation
  if (firstChar >= 0 && firstChar <= 9) {
    const para2 = document.createElement("p");
    const res2 = document.createTextNode("password must start with alphabat");
    para2.appendChild(res2);
    document.getElementById("finalResult").appendChild(para2);
  }
  // 3rd validation
  if (password.length < 8) {
    const para3 = document.createElement("p");
    const res3 = document.createTextNode(
      "passward should contain atleast 8 characters"
    );
    para3.appendChild(res3);
    document.getElementById("finalResult").appendChild(para3);
  }
});

//  2nd question

numguess.onkeyup = () => {
  document.getElementById("result_final").innerHTML = "";
};
let minNum = 1;
let maxNum = 10;
let answer = Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum;
let attempts = 0;
document.getElementById("btn_2").addEventListener("click", async (e) => {
  e.preventDefault();
  playGame();
});

function playGame() {
  const gusses = parseInt(document.getElementById("numguess").value);
  if (isNaN(gusses) || gusses < 1 || gusses > 10) {
    displayMessage("please enter a valid number between 1 to 10");
  } else {
    attempts++;
    if (gusses < answer) {
      displayMessage("TOO Low! Try again");
    } else if (gusses > answer) {
      displayMessage("TOO high! Try again");
    } else {
      displayMessage(
        `You guessed right. Answer is ${answer}. You took ${attempts} attempts`
      );
    }
  }
}

function displayMessage(message) {
  let para = document.createElement("p");
  let result = document.createTextNode(message);
  para.appendChild(result);
  document.getElementById("result_final").appendChild(para);
}
