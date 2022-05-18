function trocarPares(array){
    for (let i=0; i< array.length; i++){
        if (array[i] ===0){
        console.log("Número é zero!")
    } else if (array[i] % 2 ===0){ //verifica se número é divisível por 2 e troca ele por 0
        console.log(`Substituindo ${array[i]} por zero...`)
        array[i] =0;

    }  
}
return array;
}

let array= [1, 3, 4, 6, 80, 33, 23, 90];
trocarPares(array);
console.log("Array final é: "+trocarPares(array));