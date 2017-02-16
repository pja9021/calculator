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
    var calculator_class_1, calculator;
    return {
        setters: [
            function (calculator_class_1_1) {
                calculator_class_1 = calculator_class_1_1;
            }
        ],
        execute: function () {
            calculator = new calculator_class_1.Calculator();
        }
    };
});
