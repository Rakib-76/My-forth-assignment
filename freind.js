function  isBestFriend( f1 , f2 ) {
    if(typeof f1 !== "object" || typeof f2 !=="object"){
        return "Invalid";
    }
    if((f1.bestFreind === f2.roll) && (f1.roll === f2.bestFreind)){
        return true;
    }
    else{
        return false;
    }
}
const freind1 = { name: "Alamin",roll: 1,    bestFreind: 1};     
const freind2 ={ name: "Tareq", roll: 1, bestFreind: 1};
// const freind2 = 21;
const combineObject = isBestFriend (freind1, freind2);
console.log(combineObject);
