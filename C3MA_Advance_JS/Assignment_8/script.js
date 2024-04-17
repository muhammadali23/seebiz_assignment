// add data to database

let submitToApi = document
  .getElementById("stuInfo")
  .addEventListener("submit", async (e) => {
    e.preventDefault();
    let fname = document.getElementById("name").value;
    let add = document.getElementById("address").value;
    var rollNum = document.getElementById("rollNumber").value;
    const URL1 = "https://6617c1eced6b8fa43483b260.mockapi.io/student/students";
    const getdata = async () => {
      console.log("sending data .....");
      const response = await fetch(URL1, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: fname,
          address: add,
          rollNumber: rollNum,
        }),
      });
      console.log(response);
      let data = await response.json();
      console.log(data);
    };

    getdata();
  });

// delete data

function deleteData() {
  var inputField = document.createElement("input");
  inputField.setAttribute("type", "number");
  inputField.setAttribute("placeholder", "Enter the id");
  var container = document.getElementById("container");
  var button = document.createElement("button");
  button.setAttribute("type", "button");
  button.setAttribute("id", "delbtn");
  button.setAttribute("class", "btn");
  button.textContent = "Delete";
  button.addEventListener("click", function async() {
    const URL1 = `https://6617c1eced6b8fa43483b260.mockapi.io/student/students/${inputField.value}`;
    const getFacts = async () => {
      console.log("deleting data .....");
      const response = await fetch(URL1, {
        method: "DELETE",
      });
      console.log(response);
      let data = await response.json();
      console.log(data);
    };
    getFacts();
  });
  container.appendChild(inputField);
  container.appendChild(button);
  let btn = document.getElementById("del");
  btn.style.display = "none";
}

document.getElementById("del").addEventListener("click", deleteData);

// updating the data

function updateData() {
  let inputfield = document.createElement("input");
  inputfield.setAttribute("type", "number");
  inputfield.setAttribute("placeholder", "enter the id to update");
  var container = document.getElementById("container");
  var button = document.createElement("button");
  button.setAttribute("type", "button");
  button.setAttribute("id", "upbtn");
  button.setAttribute("class", "btn");
  button.textContent = "Update";
  container.appendChild(inputfield);
  container.appendChild(button);
  button.addEventListener("click", async function () {
    const getFacts1 = async () => {
      let fname = document.getElementById("name").value;
      let add = document.getElementById("address").value;
      var rollNum = document.getElementById("rollNumber").value;
      const URL1 = `https://6617c1eced6b8fa43483b260.mockapi.io/student/students/${inputfield.value}`;
      console.log("updating data .....");
      const response = await fetch(URL1, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: fname,
          address: add,
          rollNumber: rollNum,
        }),
      });
      console.log(response);
      let data = await response.json();
      console.log(data);
    };

    getFacts1();
  });
  let btn = document.getElementById("update");
  btn.style.display = "none";
}
document.getElementById("update").addEventListener("click", updateData);

//list user

const URL1 = "https://6617c1eced6b8fa43483b260.mockapi.io/student/students";
async function fetchDataAndDisplay() {
  let response = await fetch(URL1);
  let data = await response.json();
  displayDataInTable(data);
}

function displayDataInTable(data) {
  const table_body = document.getElementById("table_body");
  table_body.innerHTML = "";
  data.forEach((item) => {
    const row = document.createElement("tr");
    const idCell = document.createElement("td");
    idCell.textContent = item.id;
    row.appendChild(idCell);
    const nameCell = document.createElement("td");
    nameCell.textContent = item.name;
    row.appendChild(nameCell);
    const addressCell = document.createElement("td");
    addressCell.textContent = item.address;
    row.appendChild(addressCell);
    const rolCell = document.createElement("td");
    rolCell.textContent = item.rollNumber;
    row.appendChild(rolCell);
    table_body.appendChild(row);
  });
}
document.getElementById("user").addEventListener("click", fetchDataAndDisplay);
