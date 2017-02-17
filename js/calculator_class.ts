export class Calculator {
    private result: string = '';
    private valueArr: string[] = [];
    private buf: string = '';

    public reset(){
        this.result = '';
        this.valueArr = [];
        this.buf = '';
    }

    public clickBtn(input:string, isOper: boolean): string{
        if(!isOper){
            this.buf = this.buf + input;        
            return this.buf;
        } else {
            this.valueArr.push(this.buf);
            this.valueArr.push(input);
            this.buf = '';
        }    
    }

    public clickOther(input:string):string{
        if(input == "%"){  
            this.buf = eval(this.buf +'/ 100'); 
        } else if(input == "."){
            this.buf = (this.buf.length == 0) ? '0.' : this.buf + '.';
        } else {
            this.buf = (this.buf.indexOf('-') != -1) ? this.buf.substring(1) : '-' + this.buf;
		} 
        return this.buf;
    }
    
    public showResult(): string{
        let operation: string = '';
        this.valueArr.push(this.buf);
        this.buf = '';

        for(let i = 0; i < this.valueArr.length; i++){
            operation += this.valueArr[i];
        }

        this.result = eval(operation);
        console.log(operation);
        this.valueArr = [];
        this.buf = this.result;

        return this.result;
    }
}