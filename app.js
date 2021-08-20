function getPin(){
    const pin = Math.round(Math.random() * 10000);
    //for getting 3 digit pin string length
    const pinString = pin + '';
    if (pinString.length == 4) {
        return pin;
    } else {
        return getPin();
    }
}
function generatePin() {
  const pin = getPin();
  document.getElementById('display-pin').value = pin;
}
document.getElementById('key-pad').addEventListener('click', function (event) {
  // console.log(event.target.innerText);
    const number = event.target.innerText;
    const calcInput = document.getElementById("typed-numbers");
    if (isNaN(number)) {
        if (number == 'C') {
            calcInput.value = '';
        }
    } else {
  const prevNuber = calcInput.value;
  const newNumber = prevNuber + number;
  calcInput.value = newNumber;
    }
})
function verifyPin() {
    const pin = document.getElementById("display-pin").value;
    const typedNumber = document.getElementById('typed-numbers').value;
    const success = document.getElementById("notify-success");
    const fail = document.getElementById("notify-fail");
    if (pin == typedNumber) {
        success.style.display = 'block';
        fail.style.display = "none";
    }
    else {
        fail.style.display = "block";
        success.style.display = "none";
    }
}
