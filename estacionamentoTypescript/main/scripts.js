(function () {
    var _a;
    const $ = (query) => document.querySelector(query); //cria uma query cujo output será um elemento input html (ou retorna null)
    function calcTempo(mil) {
        const min = Math.floor(mil / 60000); //calcular minutos
        const sec = Math.floor((mil % 60000) / 1000); //calcular segundos
        return `${min}min e ${sec}s`;
    }
    function patio() {
        function ler() {
            return localStorage.patio ? JSON.parse(localStorage.patio) : [];
        }
        function adicionar(veiculo, salva) {
            var _a, _b;
            const row = document.createElement("tr"); //cria row na tabela a ser construida 
            row.innerHTML = `
            <td>${veiculo.nome}</td>
            <td>${veiculo.placa}</td>
            <td>${veiculo.entrada}</td>
            <td>
             <button class="delete" data-placa = "${veiculo.placa}">X</button>
            </td> `;
            //concatenando tabela criada com tbody patio do index.html
            (_a = $("#patio")) === null || _a === void 0 ? void 0 : _a.appendChild(row);
            //verifica se deve salvar ou não no localStorage
            if (salva)
                salvar([...ler(), veiculo]); //spread de todos as infos antigas do array lido anteriormente, e adicionando o novo veiculo
            //passando informações para serem implementadas em remover()
            (_b = row.querySelector(".delete")) === null || _b === void 0 ? void 0 : _b.addEventListener("click", function () {
                remover(this.dataset.placa); //para this ter eveito foi removido em tsconfig o elemento strict :true ;
            });
        }
        function remover(placa) {
            //verifica se placa já está em localStorage
            const { entrada, nome } = ler().find(veiculo => veiculo.placa === placa); //substituir target: es5 para target: es6 em tsconfig pra implementar o find()
            const tempo = calcTempo(new Date().getTime() - new Date(entrada).getTime()); //passa a função criada para ler milissegundos e retornar minutos e segundos
            if (!confirm(`O veículo ${nome} permaneceu por ${tempo} no patio. Deseja encerrar?`)) {
                return; // retorna nulo pois apenas remove o carro do patio
            }
            //filtra todas as placas diferentes da que se dejea remover e atualiza a lista
            salvar(ler().filter((veiculo) => veiculo.placa !== placa));
            render();
        }
        function salvar(veiculos) {
            localStorage.setItem("patio", JSON.stringify(veiculos));
        }
        function render() {
            $("#patio").innerHTML = ""; //força a limpeza no tbody patio do index.hmtl
            const patio = ler(); //faz a leitura de um array enviado para  ler()
            if (patio.length) {
                patio.forEach((veiculo) => adicionar(veiculo)); //passa por todos os veículos do patio salvos em localStorage e exibe-os
            }
        }
        return { ler, adicionar, remover, salvar, render };
    }
    patio().render(); //chama função de renderizar a lista de veículos do patio
    (_a = $("#cadastrar")) === null || _a === void 0 ? void 0 : _a.addEventListener("click", () => {
        var _a, _b;
        const nome = (_a = $("#nome")) === null || _a === void 0 ? void 0 : _a.value; //captura input de nome no html 
        const placa = (_b = $("#placa")) === null || _b === void 0 ? void 0 : _b.value; //captura input de placa no html (? - opcional)
        console.log({ nome, placa });
        if (!nome || !placa) {
            alert("Os campos Nome e Placa são obrigatórios!");
            return;
        }
        else if (nome != "" && placa != "") { //aiciona somente se string não for vazia
            patio().adicionar({ nome, placa, entrada: new Date().toISOString() }, true); // importante passar a Date para formato ISO para a função getTime() ser implementada corretamente
        }
    }); //adiciona um evento de click no botão cadastar associado ao HTML input da query
})();
