System.register([], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Calculator;
    return {
        setters: [],
        execute: function () {
            Calculator = (function () {
                function Calculator() {
                    this.result = '';
                    this.valueArr = [];
                    this.buf = '';
                }
                Calculator.prototype.reset = function () {
                    this.result = '';
                    this.valueArr = [];
                    this.buf = '';
                };
                Calculator.prototype.clickBtn = function (input, isOper) {
                    if (!isOper) {
                        this.buf = this.buf + input;
                        return this.buf;
                    }
                    else {
                        this.valueArr.push(this.buf);
                        this.valueArr.push(input);
                        this.buf = '';
                    }
                };
                Calculator.prototype.clickOther = function (input) {
                    if (input == "%") {
                        this.buf = eval(this.buf + '/ 100');
                    }
                    else if (input == ".") {
                        this.buf = (this.buf.length == 0) ? '0.' : this.buf + '.';
                    }
                    else {
                        this.buf = (this.buf.indexOf('-') != -1) ? this.buf.substring(1) : '-' + this.buf;
                    }
                    return this.buf;
                };
                Calculator.prototype.showResult = function () {
                    var operation = '';
                    this.valueArr.push(this.buf);
                    this.buf = '';
                    for (var i = 0; i < this.valueArr.length; i++) {
                        operation += this.valueArr[i];
                    }
                    this.result = eval(operation);
                    console.log(operation);
                    this.valueArr = [];
                    this.buf = this.result;
                    return this.result;
                };
                return Calculator;
            }());
            exports_1("Calculator", Calculator);
        }
    };
});
