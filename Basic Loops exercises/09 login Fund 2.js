function login(input) {
    let username = input[0];
    let passwordEnter = 0;
  
    for (let i = 1; i < input.length; i++) {
      let password = input[i];
      if (password === username.split("").reverse().join("")) {
        console.log(`User ${username} logged in.`);
        return;
      } else {
        passwordEnter++;
        console.log("Incorrect password. Try again.");
        if (passwordEnter === 3) {
          console.log(`User ${username} blocked!`);
          return;
        }
      }
    }
  }
  login (['sunny','rainy','cloudy','sunny','not sunny']);