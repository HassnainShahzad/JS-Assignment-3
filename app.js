let cityList = document.querySelectorAll(".city_list li");
let buttons = document.querySelectorAll(".button");
let outputText = document.querySelector(".output_p");
let alertBtn = document.querySelector(".alert-btn");
let input = document.querySelector(".input");
let cities = [];

for (let li of cityList) {
  cities.push(li.innerText);
}
console.log(cities);
function perform(value) {
  if (value === "clear_output") {
    outputText.innerHTML = ``;
  } else if (value === "clear_input") {
    input.value = ``;
  } else if (value === "alert") {
    alert(cities.join(" \n "));
  } else if (value === "print") {
    const value = input.value;
    const regex = /^[a-zA-Z]+$/;
    if (!regex.test(value)) {
      input.value = "";
      alert("Please enter only letters (characters) in the input field");
    }
    outputText.innerHTML = input.value;
  } else if (value === "print_all") {
    outputText.innerHTML = cities.join(" <br> ");
  } else if (value === "add_city") {
    if (input.value === "") {
      alert("Please enter a City in the input field");
      return;
    }
    li = document.createElement("li");
    li.innerText = input.value;
    cities.push(li.innerText);
    outputText.innerHTML = cities.join(" <br> ");
  } else if (value === "generate_table") {
    n = input.value;
    table = [];
    if (!isNaN(n) && n != "") {
      for (let i = 1; i <= 10; i++) {
        table.push(i * n);
      }
    } else {
      alert("Please enter a number");
    }
    outputText.innerHTML = table.join(", ");
  }
}

buttons.forEach((button) => {
  button.addEventListener("click", (e) => perform(e.target.dataset.value));
});
