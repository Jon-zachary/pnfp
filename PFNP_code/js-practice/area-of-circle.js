/******************
Area of A Circle

Write a function called areaOfaCircle()

The function will calculate the area of circle
It will take one argument which will be the radius
This is the formula to calculate the area of a circle:
A = π * r2, where is π is Pi and r is the radius squared
******************/
function areaOfaCircle(radius){
  console.log("beginning circle area calculations");
  console.log(typeof radius);
  const pi = Math.PI;
  let answer = pi * radius**2;
  return answer;
}



function airConditioner(temp){
  if (temp >= 70){
    return 'it is hot';
  } else {
    return 'it is not very hot';
  }
}
