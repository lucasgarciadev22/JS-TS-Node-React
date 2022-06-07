(function () {
    const $ = (query: string): HTMLInputElement | null => document.querySelector(query);//cria uma query cujo output será um elemento input html (ou retorna null)

    function patio() {
        function ler() {}
        function adicionar() {}
        function remover() {}
        function salvar() {}
        function render() {}
    }

    $("#cadastrar")?.addEventListener("click",()=> {
        const nome =$("#nome")?.value;//captura input de nome no html 
        const placa =$("#placa")?.value;//captura input de placa no html (? - opcional)
        console.log({nome, placa});
        

        if (!nome || !placa) {
            alert("Os campos Nome e Placa são obrigatórios!");
            return;
        }
    });//adiciona um evento de click no botão cadastar associado ao HTML input da query

  



})();