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