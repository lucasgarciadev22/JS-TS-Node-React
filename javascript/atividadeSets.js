//Array que será usado para clone usando função de set (..spread)
const meuArray =[30,32,40,5,223,1024,8000,10];

function valoresUnicos(array){
    const mySet = new Set(array);

    return [...mySet]//retorna um spread dos valores de mySet baseado em meuArray
}

console.log(valoresUnicos(meuArray));//executa função tendo meuArray como argumento