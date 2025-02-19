function cashOut(money){
        if(isNaN(money) || money <= 0){
                return "Invalid";
        }
        
        const cashOutAmount = money*1.75/100;
        return cashOutAmount;

}
const result = cashOut(2000);
console.log("Your  cash out charge: ", result);                                                            