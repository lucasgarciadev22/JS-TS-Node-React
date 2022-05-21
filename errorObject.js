//Error -> usado para criar um objeto de erro personalizado

// new Error(message, fileName, lineNumber) -> sintaxe padrão
//parâmetros opcionais

//criando objeto erro e suas propriedades
const myError = new Error('Mensagem de erro');
myError.name = 'Invalid Message '

throw myError;