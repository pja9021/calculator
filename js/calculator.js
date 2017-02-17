System.register(["./calculator_class"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    function reset() {
        calculator.reset();
        document.getElementById("reset").textContent = 'AC';
        document.getElementById("result").textContent = '0';
    }
    function clickBtn(input, btn) {
        var isOper = (btn == 'num') ? false : true;
        console.log(isOper, input);
        var displayNum = calculator.clickBtn(input, isOper);
        if (displayNum != undefined) {
            console.log(displayNum);
            document.getElementById("reset").textContent = 'C';
            document.getElementById("result").textContent = displayNum;
        }
    }
    function clickOther(input) {
        var displayNum = calculator.clickOther(input);
        if (displayNum != undefined) {
            document.getElementById("result").textContent = displayNum;
        }
    }
    function showResult() {
        var result = calculator.showResult();
        document.getElementById("result").textContent = result;
    }
    var calculator_class_1, calculator, btnNum, btnOper, btnCal, i, i, i;
    return {
        setters: [
            function (calculator_class_1_1) {
                calculator_class_1 = calculator_class_1_1;
            }
        ],
        execute: function () {
            calculator = new calculator_class_1.Calculator();
            btnNum = document.getElementsByClassName("btnNum");
            btnOper = document.getElementsByClassName("btnOper");
            btnCal = document.getElementsByClassName("btnCal");
            document.getElementById("btnReset").addEventListener('click', function (e) {
                reset();
            }, false);
            document.getElementById("btnResult").addEventListener('click', function (e) {
                showResult();
            }, false);
            for (i = 0; i < btnNum.length; i++) {
                btnNum[i].addEventListener('click', function (e) {
                    clickBtn(this.textContent, 'num');
                }, false);
            }
            for (i = 0; i < btnOper.length; i++) {
                btnOper[i].addEventListener('click', function (e) {
                    clickBtn(this.textContent, 'oper');
                }, false);
            }
            for (i = 0; i < btnCal.length; i++) {
                btnCal[i].addEventListener('click', function (e) {
                    clickOther(this.textContent);
                }, false);
            }
        }
    };
});
