function solve() {
  let text = document.getElementById("text").value;
  let current = document.getElementById("naming-convention").value;
  let result = "";
  let textArr = text.split(" ");

  switch (current) {
    case "Camel Case":
      textArr.forEach((el, i) => {
        if (i === 0) {
          return result += el.toLowerCase()
        }
        return result += el[0].toUpperCase() + el.substring(1).toLowerCase()
      })
      break;


    case "Pascal Case":
      textArr.forEach((el, i) => {
        el = el.toLowerCase();
        return result += el[0].toUpperCase() + el.substring(1);
      })
      break;

    default: result = "Error!";
      break;
  }
  document.getElementById("result").textContent = result
}