//Promisses -> objetos assincronos
//sintaxe básica padrão
const myPromise = new Promise((resolve, reject) =>{
    window.setTimeout(()=>{
        resolve(console.log('Resolvida!'));
    }, 2000);
});

//Await -> indica que precisa esperar a promisse para obter o resultado (precisa declarar await)
await myPromise
    .then((result)=> result + 'passando pelo then')
    .then((result)=> result + ' e agora finalizou')
    .catch((error)=>console.log(error.message));
    //Após 2 segundos, retornará o valor 
    //'Resolvida! passando pelo then e agora finalizou' 
    
    //--------------------------------------------------------------------
    //declarando funções async
    async function resolvePromise() {
        const myPromise = new Promise((resolve, reject)=> {
            window.setTimeout(()=>{
                resolve('Resolvida');
            }, 3000);
        });
        
    }
    //separando a parte da solução
    const resolved = await myPromise
    .then((result)=> result + 'Passando pelo then')
    .then((result)=> result + 'e agora finalizou')
    .catch((error)=> console.log(error.message));
    //---------------------------------------------------------------------
    //É possivel ainda usar o try...catch
    function tryPromise(){

    async function resolvePromise() {
        const myPromise = new Promise((resolve, reject)=> {
            window.setTimeout(()=>{
                resolve('Resolvida');
            }, 3000);
        });

       let result; //setar variável result que será analisada pelo bloco try..catch

    }
    //implementando bloco try...catch
    try {
        result = await myPromise
        .then((result)=> result + 'Passando pelo then')
        .then((result)=> result + 'e agora finalizou')
    } catch (error) {
        result = error.message;
    }
    return result;
}