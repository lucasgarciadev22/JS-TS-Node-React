// function referencia(array, number){
//     if(!array || !number){
//         throw new ReferenceError ('Envie um parâmetro de array e um número');
//     }
//     if(typeof array !==  Object || typeof number!== Number){
//         throw new TypeError('Tipos de parâmetros inválidos!') 
//     }
//     if(array.length !== number){
//         throw new RangeError('Tamanho do array não corresponde ao valor de número enviado!')

//     }
// }

//implementando as validações dentro de uma função try...catch
function validaArrays (array,number){
try{
        if(!array && !number){
            throw new ReferenceError ('Envie um parâmetro de array e um número');
        }
        if(typeof array !== 'object'){
            throw new TypeError('Tipo de parâmetro do array deve ser Object!') 
        }
        if(typeof number !==  'number'){
            throw new TypeError('Tipo de parâmetro do número deve ser Number!') 
        }
        if(array.length !== number){
            throw new RangeError('Tamanho do array não corresponde ao valor de número enviado!')
        }
        return array;
}
//filtrando o catch por cada tipo de erro presente em try
catch (error) {
if(error instanceof ReferenceError){
    //exibe as propriedades do erro
    console.log('Este erro é um ReferenceError');
    console.log(error.message);

}
else if(error instanceof TypeError){
    //exibe as propriedades do erro
    console.log('Este erro é um TypeError');
    console.log(error.message);

}
else if(error instanceof RangeError){
    //exibe as propriedades do erro
    console.log('Este erro é um RangeError');
    console.log(error.message);

} else{
    console.log('Tipo de erro não esperado: '+error);
}
}
}

console.log(validaArrays());
console.log(validaArrays([],'5'));
console.log(validaArrays('[]',5));
console.log(validaArrays([1,2],5));
//sem erros
console.log(validaArrays([1,2,3,4,5],5));

