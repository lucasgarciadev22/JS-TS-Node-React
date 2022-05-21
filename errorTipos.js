//Throw -> define o que será a mensagem de erro

//Função sem mensagem de erro apropriada
function verificaPalindromo(string){
    if (!string) return "String inválida";

    return string === string.split('').reverse().join('');
}

verificaPalindromo();

//Função com mensagem de erro
function verificaPalindromo(string){
    if (!string) {throw "String inválida"};

    return string === string.split('').reverse().join('');
}

verificaPalindromo();
//--------------------------------------------------------------------------------

//Try...catch -> personaliza a mensagem de erro

function verificaPalindromo(string){
    if (!string) {throw "String inválida"};

    return string === string.split('').reverse().join('');
}
//exemplo de uso de uma função para try...catch
function tryCatch (string){
    try{
        verificaPalindromo(string)
    }
    catch (error) {
    console.log(error); //pode-se usar throw (error) para exibir mensagem vermelha de erro
    }
}

tryCatch();
//-----------------------------------------------------------------------------------

//Finally -> instrução que é chamada independentemente de ter erros ou não

function verificaPalindromo(string){
    if (!string) {throw "String inválida"};

    return string === string.split('').reverse().join('');
}
//exemplo de uso de uma função para try...catch
function tryCatch (string){
    try{
        verificaPalindromo(string)
    }
    catch (error) {
    throw(error); //pode-se usar throw (error) para exibir mensagem vermelha de erro
    }
    finally{
        console.log('A string enviada foi:' + string);
    }
}

tryCatch(' ');