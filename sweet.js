function fibonacci(num_101) {
  var a_102 = 1,
      b_103 = 0,
      temp_104;
  while (num_101 >= 0) {
    temp_104 = a_102;
    a_102 = a_102 + b_103;
    b_103 = temp_104;
    num_101--;
  }
  var unaFuncion_105 = function () {
    console.log("");
  };
  return unaFuncion;
}
function testVarInForLoop(loops_106) {
  for (var i = 0; i < loops_106; i++) {
    console.log("It Works");
  }
}
function testIfElse(isItTrue_107) {
  if (isItTrue_107) {
    console.log("It is true, but why?");
    if (isItTrue_107) {
      console.log("nested if");
    } else if (isItTrue_107) {
      console.log("wattt");
    } else {
      console.log("wat");
    }
  } else if (isItTrue_107 == false) {
    console.log("More ifs???");
    console.log("anotherconsole");
  } else if (false) {
    console.log("How did it get here? not good with computers");
  } else {
    console.log("papanada");
  }
}
try {
  console.log("a");
} catch (e) {
  console.log("b");
} finally {
  console.log("c");
}