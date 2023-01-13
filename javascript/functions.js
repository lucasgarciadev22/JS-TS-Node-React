//função anônima
const soma = function (a,b){
    return a+b;
}

console.log(soma(1,2));
//-----------------------------------------------------------------
//função autoinvocável IIFE
(function(){
    let name = "Lucas Garcia"
    return name;
})(); 
//pode ser armazenado em uma variável para exibir
var nome = (function(){
    let name = "Lucas Garcia"
    return name;
})(); 
console.log(nome);
//----------------------------------------------------------------

//função com callback -> usa função como argumento para próxima função
const calc = function(operation, num1, num2){
    return operation(num1,num2);
}
//operations usadas no calc 
const somar = function(num1,num2){
    return num1 + num2;
}
const subtrair = function(num1,num2){
    return num1 - num2;
}
//resultador armazenados
const resultSoma = calc(soma, 1,2);
const resultSub = calc(subtrair, 1,2);
console.log(resultSoma);
console.log(resultSub);
//---------------------------------------------------------------------
//Função encontrar máximo (aplicando arguments)
function findMax(){
    let max = -Infinity; //valor inicial de max
    for (let i = 0; i< arguments.length; i++){
        if(arguments[i] >max){
            max = arguments[i];//novo valor de max atualizado de acordo com itens no array
        }
    }
    return max;

}
//------------------------------------------------------------------------
//Spread de Arrays (usa ao chamar função)
function sum(x,y,z) {
    return x+y+z;
}
const numbers = [1,2,3];

console.log(sum(...numbers));//soma todos os itens do array

//Rest de Arrays (usa ao declarar função)
function confereTamanho(...args){
    console.log(args.length)
}
console.log(confereTamanho(1,2,3));//mostra o tamanho total do array atual

//-------------------------------------------------------------------

//Swtich case
function getAnimal(id){
    switch(id){
        case 1:
            return "cão";
        case 2:
            return "gato";
        case 3:
            return "peixe";
        default:
            return "animal"
    }
}
console.log(getAnimal(1));
//------------------------------------------------------------------

//For...in -> Objetos usam muito esse comando
function listarProp(obj){
for (prop in obj){
    console.log(prop);
}
}

const myObj = {
    nome: "Lucas", idade: 23, cidade: "São Paulo"
}
console.log(listarProp(myObj));

//======================================================================

//This... exemplo
pessoa ={firstName: "Lara", lastName: "Croft", getFullName: function(){
    console.log((`${this.firstName} ${this.lastName}`)); ;
},};
console.log(pessoa);

//--------------------------------------------------------------------------

//Call -> especificando chamadas de this.

const pessoa2 ={
    nome: 'Miguel',
};

const animal = {
    nome: 'Bob',
};

function getSomething(){
    console.log(this.nome) // a função é genérica então ao usar call eu dou uma direção pra ela

}
getSomething.call(animal);
getSomething.call(pessoa2);

//Bind -> clonar estrutura de função e passar como parâmetro para outra função externa

let amazon = {
    name: "Amazon",
    noOfEmployees: 100,
}

let tesla = {
    name: "Tesla",
    noOfEmployees: 150,
}
//função genérica que vale para qualquer objeto que tenha a mesma estrutura de amazon e tesla
let getInfo = function() {
    console.log(`The ${this.name} has ${this.noOfEmployees} employees.`);
}

let amazon_Data = getInfo.bind(amazon);//aplica bind para objeto amazon
let tesla_Data = getInfo.bind(tesla);//aplica bind para objeto tesla

amazon_Data();
tesla_Data();

//Arrow  -> simplifica uma função... não faz hoisting, não tem arguments, nem call/ bind

const hello =() => "Hello";
console.log(hello());

const somaArrow = (a,b) => a+b;
console.log(somaArrow(4,6)); ;
