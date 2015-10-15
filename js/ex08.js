var number = 1;
var a = 2;

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

function primenumber(n) {
  while (number <= n) {
    if (primetest(number)) {
      console.log(number);
    }
    number = number + 1;
  }
}
