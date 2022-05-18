

 function push(array){
let meuArray =[];
    for (let i=0; i<array.length; i++){
        meuArray.push(array[i]+"Olá");

 }
return meuArray;
 }
 const meuArray = [0,5,4];
 console.log(push(meuArray));

 const retornaNomes = function(){
    return this.nome;
};

let bruno = retornaNomes.bind({nome:"Bruno"});
console.log(bruno);