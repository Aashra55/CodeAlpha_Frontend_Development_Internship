let input = document.getElementById("inputbox");
let buttons = document.querySelectorAll(".buttons");
let arr = Array.from(buttons);
let string = "";

arr.forEach((button) => {
  button.addEventListener("click", (element) => {
    let buttonText = element.target.innerHTML;
    if (buttonText === "C" || buttonText === "CE") {
      string = "";
      input.value = string;
    } else if (buttonText === "DEL") {
      string = string.slice(0, -1);
      input.value = string;
    } else if (buttonText === "=") {
        string = eval(string)
        input.value = string
    }else if (buttonText === "×"){
        string += "*"
        input.value = string
    }else if (buttonText === "÷"){
        string += "/"
        input.value = string
    }else if(buttonText === "−"){
        string += "-"
        input.value = string
    }else if (buttonText === "π"){
        string += Math.PI
        input.value = string 
    }else if (buttonText === "x²"){
        if(!isNaN(string)){
            string = (parseFloat(string)**2).toString()
            input.value = string
        }else{
            input.value = "Error"
            string = ""
        }
    }else if(buttonText === "√"){
        string = Math.sqrt(parseFloat(string))
        input.value = string
    }else {
      string += buttonText;
      input.value = string;
    }
  });
});
