function forecast(input) {
  let name = (input[0]);

  if (name === "sunny") {
    console.log("It's warm outside!")
    //  block of code to be executed if condition1 is true
  } else if (name === "cloudy") {
    console.log ("It's cold outside!")
    //  block of code to be executed if the condition1 is false and condition2 is true
  } else {
    console.log("It's cold outside!");
    //  block of code to be executed if the condition1 is false and condition2 is false
  }
}

forecast(["snowy"]);