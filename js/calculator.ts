import { Calculator } from "./calculator_class";

let calculator: Calculator = new Calculator();

function reset(){
    calculator.reset();
    document.getElementById("reset").textContent = 'AC';
    document.getElementById("result").textContent = '0';
}

function clickBtn(input: string, btn:string){
    let isOper: boolean = (btn == 'num') ? false : true;
    let displayNum: string = calculator.clickBtn(input, isOper);
    if(displayNum != undefined){
        console.log(displayNum);
        document.getElementById("reset").textContent = 'C';
        document.getElementById("result").textContent = displayNum;
    }
}

function clickOther(input: string){
    let displayNum: string = calculator.clickOther(input);
    if(displayNum != undefined){
        document.getElementById("result").textContent = displayNum;
    }
}

function showResult(){
    let result: string= calculator.showResult();
    document.getElementById("result").textContent = <string>result;
}

