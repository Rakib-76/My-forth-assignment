function cashOut(money){
        const chargeMoney = '1.75%';
        const cashOutAmount = money*1.75/100;
        return cashOutAmount;

}
const result = cashOut(2000);
console.log("Your  cash out charge: ", result);                                                            