function count(operator) {
  let number1 = document.getElementById("number1").value;
  let number2 = document.getElementById("number2").value;

  if (operator === "+") {
    result = parseInt(number1) + parseInt(number2);
  } else if (operator === "-") {
    result = parseInt(number1) - parseInt(number2);
  } else if (operator === "*") {
    result = parseInt(number1) * parseInt(number2);
  } else if (operator === "/") {
    result = parseInt(number1) / parseInt(number2);
  } else {
    result = alert("masukin operator dulu bos");
  }

  document.getElementById("total").value = result;
}

function clearButton() {
  let number1 = (document.getElementById("number1").value = "");
  let number2 = (document.getElementById("number2").value = "");
  let total = (document.getElementById("total").value = "");
}


