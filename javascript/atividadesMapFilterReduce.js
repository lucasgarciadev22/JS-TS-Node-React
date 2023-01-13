//Map usando this

//objetos
const maca = { value: 2,};
const laranja = {value:4,};

const nums = [1,2]; //array que tem os seus indices usados em itemArray

//função que contém o método .map e multiplicará o index pelo valor do objeto
function mapComThis(array, thisArg){//(array: index, thisArg: value)
    return array.map(function (itemArray){
        return itemArray*this.value;} ,thisArg);
}

console.log('this -> maçã', mapComThis(nums, maca));
console.log('this -> laranja', mapComThis(nums, laranja));
//--------------------------------------------------------------------------
//Map sem this

//função que contém o método .map e multiplicará o index pelo valor do objeto
function mapSemThis(array){//(array: index, thisArg: value)
    return array.map(function (itemArray){
        return itemArray*2;
});
};

const nums2 =[2,4,6,8,10];

console.log(mapSemThis(nums2));//gera novo array
//---------------------------------------------------------------------------
//Filter

function filtrarParOuImpar(array, callbackFn){
    if(callbackFn == callbackPares){
        return array.filter(callbackPares);
    }else if (callbackFn == callbackImpares) {
        return array.filter(callbackImpares);
    }
    
}
//critério do filtro de números pares
function callbackPares(itemArray){
return itemArray %2 ===0;
}
//critério do filtro de números ímpares
function callbackImpares(itemArray){
    return itemArray %2 !==0;
    }

const nums3 =[1,2,3,4,5,6,7,8,9,10];
//exibe filtro par ou impar
console.log(filtrarParOuImpar(nums3,callbackPares));
///-------------------------------------------------------------------------------

//Reduce
//função empilha os números em um único valor final
function somaNums(array){
    return array.reduce(function(prev,current) {
        console.log({prev})
        console.log({current});
        return prev + current;
    },0);
}

const array2=[1,2];

console.log(somaNums(array2));

//lista de preços atividade para exibir saldo anterior e posterior

const lista = [
    {name: 'sabão', preco: 30},
    {name: 'cereal',preco: 12},
    {name: 'toalha', preco: 8}
];

saldoDisponivel = 100;
//função recebe como valor inicial o saldoDisponivel e após 'empilhar' os valores da lista, ele subtrai o saldoDisponivel
function calculaSaldo(saldoDisponivel, lista){
    return lista.reduce(function(prev,current,index) {
        console.log('Rodada: ', index+1);
        console.log({prev})
        console.log({current});
        return prev - current.preco;
    },saldoDisponivel);
}

console.log(calculaSaldo(saldoDisponivel,lista));





