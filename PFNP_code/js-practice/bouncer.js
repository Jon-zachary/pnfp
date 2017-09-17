// Make a function that accepts one argument "age" and return to the user
// whether they are allowed in the bar.

// Bonus:
// What if the drinking age was different in different places? Re-do the function so that it can take two arguments. Use yr head, see if you can make your function more easily reusable in different countries.




// && and

// || or

// === is equal to

// >= greater than or equal to
// (etc)

// !== not equal to



function appropriateMinimumAge(country){
    if (country === "USA"){
    return 21;
  } else if (country === "UK" || country === "CAN"){
    return 18;
  } else {
    return 20;
  }
}

function bouncer(age, country){
  var minimumAge = appropriateMinimumAge(country);
  if (age === minimumAge){
    return "enjoy one on the house!";
  } else if (age > 80){
    return "enjoy the senior special";
  } else if (age >= minimumAge){
    return "welcome";
  } else {
    return "scram kiddo";
  }
}