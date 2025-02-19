function  calculateWatchTime( times ){
    let somoy = {};
    let sum = 0;
    if(!Array.isArray(times)){
        return "Invalid";
    }
    for(const time of times){
        sum = sum + time;
    }
    const hours = Math.floor(sum / 3600);
    somoy.hours = hours;
    const minutes = Math.floor ((sum % 3600) / 60);
    somoy.minutes = minutes;
    const seconds = sum % 60;
    somoy.seconds = seconds;
    return  somoy;
    // return sum;
}
const result =calculateWatchTime([3600,200,300]);
// const result =calculateWatchTime(100);
console.log( result);
