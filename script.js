const container = document.querySelector('.container');
const display = document.querySelector('.display');
const button = document.querySelectorAll('button');
const operator = document.querySelector('.operator');
const specialChars = ["%", "*", "/", "+", "-", "="];
let output = "";

const calculate = (btnValue) => {
    if(btnValue === "=" && output !== ''){
        output = eval(output.replace("%", "/100"))
    }else if(btnValue === "AC"){
        output = ""
    }else if(btnValue==="DEL"){
        output = output.toString().slice(0, -1)
    }else{
        if(output === "" && specialChars.includes(btnValue))return;
        output += btnValue;
    }
    display.value = output;
    console.log(btnValue);
}
button.forEach((button) => {
    button.addEventListener("click", (e) => calculate(e.target.dataset.value))
})