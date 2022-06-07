"use strict";
(function () {
    var _a;
    const $ = (query) => document.querySelector(query); //cria uma query cujo output será um elemento input html (ou retorna null)
    (_a = $("#cadastrar")) === null || _a === void 0 ? void 0 : _a.addEventListener("click", () => {
        var _a, _b;
        const nome = (_a = $("#nome")) === null || _a === void 0 ? void 0 : _a.value; //captura input de nome no html 
        const placa = (_b = $("#placa")) === null || _b === void 0 ? void 0 : _b.value; //captura input de placa no html (? - opcional)
        console.log({ nome, placa });
        if (!nome || !placa) {
            alert("Os campos Nome e Placa são obrigatórios!");
            return;
        }
    }); //adiciona um evento de click no botão cadastar associado ao HTML input da query
})();
