//anotações interessantes de javascript

//Strings
nome = "Lucas"
sobrenome = "Garcia"
nome.concat(sobrenome)//primeira maneira de escrever nome completo

//outras formas:

// concatenado = nome+sobrenome -> vai grudar 
// concatenado = nome + " " + sobrenome -> vai grudar 
// concatenado = nome + "\n" + sobrenome -> vai grudar 

//melhor forma de concatenar:
concatenado = `${nome} ${sobrenome}` 
console.log(concatenado)

//printar aspas -> " \" "

//função split 
let frase = "Olá Lucas Garcia!"
frase.split("");// -> separa todas as letras
frase.split(" ")// -> separa em cada espaço
//função replace
let fraseModificada = frase.replace("," , "!")//é necessário criar nova variável para salvar novo valor
console.log(fraseModificada)

//Numbers
let divisao = 5/3
Math.floor(divisao)// -> arredonda valor para baixo
Math.ceil(divisao)// -> arredonda valor para cima

//Arrays
let array = [] 
array.push // -> adiciona próximo item no array
array.pop // -> remove ultimo item do array
array.shift // -> remove primeiro item do array
array.unshift // -> adiciona no primeiro item do array
array.some (item => item === 5)// -> verifica se algum item vale 5
array.every (item => item === 5)// -> verifica se todo item vale 5
array.reverse // -> reverte o array

//Objects
let obj = {} 
obj.name = "Lucas"
obj.age = 23

Object.values(obj) // -> exibe os valores de cada chave do objeto
Object.keys(obj) // -> exibe as chaves do objeto

//maneira simplificada de declarar um objeto
let person= {name:"Lucas", age:23}
person["nameOfBrother"]="João" // -> adiciona a chave nameOfBrother e passa o valor João
let mom = "nameOfMom"
person[mom] = "Maria" // -> adiciona a chave nameOfMom que foi já associada à variável mom e passa o valor Maria
console.log(person)

//Empty, Undefined, Nulll

//Empty -> Variável valor zero
var vazio= 0
//Null -> Variável sem valor
//Undefined -> Variável não declarada/indefinida

!abacaxi //-> true porque abacaxi é undefined então o contrário é true