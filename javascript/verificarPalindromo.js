//solução 1:

function verificaPalindromo(string){
    if(!string) return "String inválida";

    return string.split("").reverse().join("") === string; // transforma a string recebida em um array e aplica os métodos
}

console.log(verificaPalindromo("ovo")); // chama função e o resultado será boolean
console.log(verificaPalindromo("gato")); // chama função e o resultado será boolean

//solução 2:

function verificaPalindromo2(string){
    if(!string) return "String inválida";

    for(let i=0; i< string.length/2; i++){
        if(string[i] !== string[string.length -1 -i]){
            return false;
        }
    }
    return true;
}
console.log(verificaPalindromo2("abba"));