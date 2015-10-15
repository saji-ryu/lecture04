var number = 1;
var a = 2;

onload = function () {
  primenumber();
}

function primetest(number) {
  if (number < 2) {
    return false;
  }
  while (a <= number / 2) {
    if (number % a == 0) {
      a = 2;
      return false;
    }else {
    a = a + 1;
    }
  }
    a = 2;
    return true;
}

function primenumber() {
  while (number <= 100) {
    if (primetest(number)) {
      console.log(number);
    }
    number = number + 1;
  }
}
