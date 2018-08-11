var number;
function add(a, b) {
  number = a + b;
  return number;

}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}

function inc(n){
  n++;
  return n;
}

function dec(n) {
  n--;
  return n;
}

function makeInt(a) {
  number = parseInt(a, 10);
  return number;
}

function preserveDecimal(a) {
  number = parseFloat(a, 10);
  return number;
}
