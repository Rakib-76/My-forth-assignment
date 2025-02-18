function  electionResult( fruits) {
    let mangoes = [];
    let bananas = [];
    if(!Array.isArray(fruits)){
        return "Invalid";
    }
    for(let i=0; i < fruits.length; i++){
        if(fruits[i] === "mango"){
            mangoes.push(fruits[i]);
        }
    }


        for(let i=0; i < fruits.length; i++){
            if(fruits[i] === "banana"){
                bananas.push(fruits[i]);
            }
        }
        if(mangoes.length > bananas.length){
            let man = mangoes[0];
            return man;
        }
      
        
        else 
        if(bananas.length > mangoes.length){ 
            const banana = bananas[0];  
            return banana;
        }

        else
        if (mangoes.length = bananas.length){
            return "Draw";
        }
        // console.log(bananas);

}
const result = electionResult(["mango","mango","mang", "lichi","banana","banana","banana"]);
// const result =electionResult("kola");
console.log("The winner is :", result);
