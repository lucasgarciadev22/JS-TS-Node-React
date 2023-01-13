interface Veiculo { //interface veiculo pra ser usado no patio()
    nome: string;
    placa: string;
    entrada: Date | string; //instância de data para o horário que o usuario entrar com o veiculo
}
(function () {
    const $ = (query: string): HTMLInputElement | null => document.querySelector(query);//cria uma query cujo output será um elemento input html (ou retorna null)

    function calcTempo(mil: number){
        const min = Math.floor(mil/60000); //calcular minutos
        const sec = Math.floor((mil % 60000)/1000);//calcular segundos

        return `${min}min e ${sec}s`;
    }

    function patio(){
        function ler() : Veiculo[] { //verifica se existe patio no localStorage e exibe os carros já salvos no patio
            return localStorage.patio ? JSON.parse(localStorage.patio) : [];
        }

        function adicionar(veiculo: Veiculo, salva?: boolean) {//manda interface veiculo
            const row = document.createElement("tr"); //cria row na tabela a ser construida 
            
            row.innerHTML = `
            <td>${veiculo.nome}</td>
            <td>${veiculo.placa}</td>
            <td>${veiculo.entrada}</td>
            <td>
             <button class="delete" data-placa = "${veiculo.placa}">X</button>
            </td> `;

            //concatenando tabela criada com tbody patio do index.html
            $("#patio")?.appendChild(row); 

            //verifica se deve salvar ou não no localStorage
            if (salva) salvar([...ler(), veiculo])//spread de todos as infos antigas do array lido anteriormente, e adicionando o novo veiculo
            
            //passando informações para serem implementadas em remover()
            row.querySelector(".delete")?.addEventListener("click", function(){ //procura um evento de clique em um botão de classe .delete entre as rows da tabela
                remover(this.dataset.placa) //para this ter eveito foi removido em tsconfig o elemento strict :true ;
            })
        } 
        

        function remover(placa: string) {
            //verifica se placa já está em localStorage
            const {entrada, nome} = ler().find(veiculo => veiculo.placa === placa); //substituir target: es5 para target: es6 em tsconfig pra implementar o find()
        
            const tempo = calcTempo(new Date().getTime() - new Date (entrada).getTime()); //passa a função criada para ler milissegundos e retornar minutos e segundos
            
            if (!confirm (`O veículo ${nome} permaneceu por ${tempo} no patio. Deseja encerrar?`)) {
                
                return; // retorna nulo pois apenas remove o carro do patio
            }
              //filtra todas as placas diferentes da que se dejea remover e atualiza a lista
              salvar(ler().filter((veiculo)=> veiculo.placa !== placa));
              render();
        }

        function salvar(veiculos : Veiculo[]) {//salva no localStorage os veículos
            localStorage.setItem("patio", JSON.stringify(veiculos));
        }
        function render() {//limpa as informações de patio e exibe apenas o que fica em localStorage
           
            $("#patio")!.innerHTML = ""; //força a limpeza no tbody patio do index.hmtl
            const patio = ler();//faz a leitura de um array enviado para  ler()

            if(patio.length){
                patio.forEach((veiculo) => adicionar(veiculo)); //passa por todos os veículos do patio salvos em localStorage e exibe-os
            }
        }

        return {ler, adicionar, remover, salvar, render};
    }

    patio().render();//chama função de renderizar a lista de veículos do patio

    $("#cadastrar")?.addEventListener("click",()=> {
        const nome =$("#nome")?.value;//captura input de nome no html 
        const placa =$("#placa")?.value;//captura input de placa no html (? - opcional)
        console.log({nome, placa});
        

        if (!nome || !placa) {
            alert("Os campos Nome e Placa são obrigatórios!");
            return;
        } else if(nome!="" && placa!="" ){ //aiciona somente se string não for vazia
            patio().adicionar({nome, placa, entrada:new Date().toISOString()}, true);// importante passar a Date para formato ISO para a função getTime() ser implementada corretamente
        }

        
    });//adiciona um evento de click no botão cadastar associado ao HTML input da query

  



})();