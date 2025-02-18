function  electionResult( votes) {
    let mangoes = [];
    let bananas = [];
    if(!Array.isArray(votes)){
        return "Invalid";
    }
    for(let i=0; i < votes.length; i++){
        if(votes[i] === "mango"){
            mangoes.push(votes[i]);
        }
    }


        for(let i=0; i < votes.length; i++){
            if(votes[i] === "banana"){
                bananas.push(votes[i]);
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
const result = electionResult(["mango","mango","mango", "lichi","banana","banana","banan"]);
// const result =electionResult("kola");
console.log("The winner is :", result);
