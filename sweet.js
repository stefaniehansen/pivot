fibonacci(2);
testIfElse(true);
function fibonacci(num_81) {
  var a_82 = 1,
      b_83 = 0,
      temp_84;
  while (num_81 >= 0) {
    temp_84 = a_82;
    a_82 = a_82 + b_83;
    b_83 = temp_84;
    num_81--;
  }
  var unaFuncion_85 = function () {
    console.log("");
  };
  return unaFuncion;
}
function testIfElse(isItTrue_86) {
  if (isItTrue_86) {
    console.log("It is true");
  }
  other;
  {
    console.log("It should not go here");
  }
}