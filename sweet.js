fibonacci(2);
testIfElse(true);
function fibonacci(num_86) {
  var a_87 = 1,
      b_88 = 0,
      temp_89;
  while (num_86 >= 0) {
    temp_89 = a_87;
    a_87 = a_87 + b_88;
    b_88 = temp_89;
    num_86--;
  }
  var unaFuncion_90 = function () {
    console.log("");
  };
  return unaFuncion;
}
function testIfElse(isItTrue_91) {
  if (isItTrue_91) {
    console.log("It is true, but why?");
    if (isItTrue_91) {
      console.log("nested if");
    } else if (isItTrue_91) {
      console.log("wattt");
    } else {
      console.log("wat");
    }
  } else if (isItTrue_91 == false) {
    console.log("More ifs???");
    console.log("anotherconsole");
  } else if (false) {
    console.log("How did it get here? not good with computers");
  } else {
    console.log("papanada");
  }
}