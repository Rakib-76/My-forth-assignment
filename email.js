function  validEmail( email ) {
    if (typeof email !== "string"){
        return "Invalid";
    }
    if (email.startsWith( "+") || email.startsWith("-") || email.startsWith("_") || email.startsWith("@") || email.startsWith(".")){
        return false;
    }
    else 
    if(email.includes(" ")){
        return false;
    }
    else
    if(!email.endsWith(".com") || !email.includes("@")){
        return false;
    }  
    else{
        return true;
    }
    
}
// const result1 = validEmail('rakib97@gmail.net');
// const result2 = validEmail('-rakib97@gmail.com');
// const result3 = validEmail('+rakib97@gmail.com');
// const result4 = validEmail('@rakib97@gmail.com');
// const result5 = validEmail('rakib97@gmail');
// const result6 = validEmail('ha san97@gmail.com');
// const result7 = validEmail('rakib97@gmail.com');
// console.log(result1 , result2, result3, result4 ,result5 ,result6,result7 );

// const result = validEmail("rakibhasan97@gmail.com");
const result = validEmail(32);
console.log(result);
