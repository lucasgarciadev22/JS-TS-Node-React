// a função gets é implementada dentro do sistema para ler as entradas(inputs) dos dados e a função print para imprimir a saída (output) de dados.
// Abaixo segue um exemplo de código que você pode ou não utilizar

//TODO: Complete os espaços em branco com uma possível solução para o desafio



// const num = parseInt(gets())
// let word = [];

// for (let i = 0; i < num; i++) {
              
//     let C = gets();//read key
    
//     word.push(C)
    
//     //     let T = word[i].length/100
//     T = (word[i].length/100).toFixed(2)
    
//     console.log(T)
// }

// a função gets é implementada dentro do sistema para ler as entradas(inputs) dos dados e a função print para imprimir a saída (output) de dados.
// Abaixo segue um exemplo de código que você pode ou não utilizar

// let count = 0;
// let n = [];
// let media = 0;
// let soma = 0;
// //TODO: Complete os espaços em branco com uma possível solução para o desafio
// n.push(34)
// n.push(56)
// n.push(44)
// n.push(23)
// n.push(-2)

// n.forEach(num => {

//   if (n[count]>=0) {
    
//     count ++
    
//     soma += n[count]
//   }
    
// });

// media = soma/count

// console.log(media.toFixed(2));

// a função gets é implementada dentro do sistema para ler as entradas(inputs) dos dados e a função print para imprimir a saída (output) de dados.
// Abaixo segue um exemplo de código que você pode ou não utilizar

let count = 0;
let n = 0;
let media = 0;
let soma = 0;
//TODO: Complete os espaços em branco com uma possível solução para o desafio

do {
n = parseInt(gets())

if (n>0){
  
soma += n
count ++
  
}

}while (n >0)

media = soma/count

print(media.toFixed(2));

// a função gets é implementada dentro do sistema para ler as entradas(inputs) dos dados e a função print para imprimir a saída (output) de dados.
// Abaixo segue um exemplo de código que você pode ou não utilizar

let N = parseInt(gets());

//TODO: Complete os espaços em branco com uma possível solução para o problema

let fib = ((Math.pow(((Math.sqrt(5)+1)/ 2),N)) - (Math.pow(((Math.sqrt(5)-1)/ 2),N)))/Math.sqrt(5);

print(fib.toFixed(1));
