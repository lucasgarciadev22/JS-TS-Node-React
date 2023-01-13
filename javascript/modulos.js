//Modules -> arquivos .js que importam e exportam informações criando uma árvore de dependência

//Export ->named exports
//sintaxe básica padrão
// export function mostrarIdade(pessoa){
//     return `A idade de ${pessoa.nome é ${pessoa.idade}`;
// }
// //ou
// function mostrarCidade(pessoa) {
//     return `A cidade de ${pessoa.nome é ${pessoa.cidade}`;
    
// }
// export{
//     mostrarCidade
// }
export default mostrarCidade;
//-------------------------------------------------------------------
//Import -> named imports
//sintaxe básica padrão
import{funcao, variavel, classe} from './arquivo.js'
//Import -> default imports
import valorDefault from './arquivo.js'

//Trocar nome de arquivos de imports 
import {arquivo as Apelido} from './arquivo.js';

Apelido.metodo();
//Importando todos os dados de um arquivo 
import * as INFOS from './arquivo.js';
INFOS.metodoA();

console.log(INFOS.variavel);
// -----------------------------------------------------------------

//Vinculando ao HTML 
//<script type="module" src="./main.js"></script>