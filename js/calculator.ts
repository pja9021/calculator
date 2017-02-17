import { Calculator } from "./calculator_class";

let calculator: Calculator = new Calculator();

let btnNum = document.getElementsByClassName("btnNum");
let btnOper = document.getElementsByClassName("btnOper");
let btnCal = document.getElementsByClassName("btnCal");

document.getElementById("btnReset").addEventListener('click', function(e) {
            reset(); 
        }, false);

document.getElementById("btnResult").addEventListener('click', function(e) {
            showResult(); 
        }, false);

for (var i = 0; i < btnNum.length; i++) {
        btnNum[i].addEventListener('click', function(e) {
            clickBtn(this.textContent, 'num'); 
        }, false);
}

for (var i = 0; i < btnOper.length; i++) {
        btnOper[i].addEventListener('click', function(e) {
            clickBtn(this.textContent, 'oper'); 
        }, false);
}

for (var i = 0; i < btnCal.length; i++) {
        btnCal[i].addEventListener('click', function(e) {
            clickOther(this.textContent); 
        }, false);
}

function reset(){
    calculator.reset();
    document.getElementById("reset").textContent = 'AC';
    document.getElementById("result").textContent = '0';
}

function clickBtn(input: string, btn:string){
    let isOper: boolean = (btn == 'num') ? false : true;
    console.log(isOper, input);
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

