function imply(a,b) {
  var test1 = b == true;
  var test2 = a == b;
  var result = test1 || test2;
  return result;
}
