class CustomMatch{
    constructor(num){
        this.Num=num
    }
    
    Plus(num1){
        return new CustomMatch(num1+this.Num);
    }
    Minus(num2){
        return new CustomMatch(this.Num-num2);
    }
    Multiply(num3){
        return new CustomMatch(this.Num*num3);
    }
    Divide(num4){
        return this.Num/num4;
    }

}

let aa=new CustomMatch(50)
var result=aa.Plus(6).Minus(30).Multiply(3).Divide(2)
console.log(result);