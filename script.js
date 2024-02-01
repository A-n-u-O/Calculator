class Calculator{
    constructor(previousInput, operator, currentInput, calculate){
        this.previousInput = '';
        this.operator = null;
        this.currentInput = '0';
        this.display = document.getElementById('display');
        this.updateDisplay();
    }
    updateDisplay(){
        this.display.value = this.currentInput;
    }
    clear(){
        this.previousInput = '';
        this.operator = null;
        this.currentInput = '0';
        this.updateDisplay();
    }
    delete(){
        this.display.value = this.currentInput.slice(0, -1) || '0';
        this.updateDisplay();
    }

    appendNumber(number){
        if(this.currentInput ==='0' || this.currentInput === '-0'){
            this.currentInput = number.toString();
        }else {
            this.currentInput += number.toString();
        }
        this.updateDisplay();
    }
    setDecimal(){
        if(!this.currentInput.includes('.')){
            this.currentInput += '.';
            this.updateDisplay();
        }
    }
    setOperation(operator){
        if(this.currentInput !==  '' && this.currentInput !== '-'){
            this.operator = operator;
            this.previousInput = this.currentInput;
            this.currentInput = '';
            this.updateDisplay();
        }
    }
    calculate(){
        if(this.operator && this.previousInput !== '' && this.currentInput !== '' ){
            const prev = parseFloat(this.previousInput);
            const current = parseFloat(this.currentInput);
            let result;

            switch(this.operator){
                case '+':
                    result = prev + current;
                    break;
                case '-':
                    result = prev - current;
                    break;
                case '*':
                    result = prev * current;
                    break;
                case '/':
                    result = prev / current;
                    break;
                default:
                    break;

            }
            this.currentInput = result.toString();
            this.previousInput = '';
            this.operator = null;
            this.updateDisplay();
        }
    }
}