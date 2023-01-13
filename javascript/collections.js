//Maps -> coleção de arrays [chave e valor] pode ser iterado por for...
const myMap = new Map();

myMap.set('apple','fruit'); // ADICIONAR
//Map(1) {"apple" => "fruit"}; 

myMap.get("apple");//CONSULTAR
//"fruit"

myMap.delete("apple");//DELETAR
//true

myMap.get("apple")
//undefined

//------------------------------------------------------------------------------
//Sets -> armazenam valores únicos
const mySet = new Set();

mySet.add(1);//ADICIONAR
mySet.add(5);

mySet.has(1);//CONSULTAR
//true

mySet.has(3);
//false

mySet.delete(5);//DELETAR

//SET X ARRAY -> mais limtado que os arrys
//---------------------------------------------------------------------------
//Map , Filter e Reduce

//MAP X FOREACH

//Usando map

const arr = [1,2,3,4,5];
array.map((item) => item*2); // arrow function com .map, retorna [2,4,6,8,10];

//Usando forEach
const array = [1,2,3,4,5];
array.forEach((item) => item*2); //retorna undefined
//-----------------------------------------------------------------------------
//Filter
//array.filter(callback, thisArg) --> sintaxe básica do filter...

const frutas = ['maçã argentina', 'maçã verde', 'laranja', 'abacaxi'];

frutas.filter((frutaFiltrada) => frutaFiltrada.includes('maçã'))//a função callback usa o item 'frutaFiltrada' e retorna quem contém 'maçã'
//retorna ['maça argentina','maça verde'];

//-------------------------------------------------------------------------
//array.reduce(callback, initialValue) --> sintaxe básica do filter...

const callbackFn = function(accumulator, currentValue, index, array) {
    //do something
}
array.reduce(callbackFn,initialValue)