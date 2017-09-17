// make  a function that smashes three strings into one.

function myConcatenate( firstStr, secondStr, thirdStr ) {
  let concats = firstStr + " " + secondStr + " " + thirdStr;
  return concats;
}

function myInterpolate( firstStr, secondStr, thirdStr ) {
  return `The text is: ${ firstStr } ${secondStr} ${thirdStr}`;
}

myConcatenate('I', 'am', 'iron man'); // 'I am iron man'