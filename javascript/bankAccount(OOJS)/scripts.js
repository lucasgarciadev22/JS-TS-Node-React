//atividade de orientação a objetos com Javascript -> simulação conta bancária

class ContaBancaria {
    constructor(agencia,numero,tipo){
        this.agencia = agencia;
        this.numero = numero;
        this.tipo = tipo;
        this._saldo = 0;// underline para diferencias do getter e setter
    }
//definindo getters e setters
    get(){
        return this._saldo;
    }
    set(valor){
        this._saldo = valor;//seta valor inicial do _saldo
    }

    sacar(valor){
        if(valor > this._saldo){
            return "Saldo insuficiente para esta transação"
        }
        this._saldo = this._saldo -valor;//atualiza valor do setter _saldo
        return this._saldo;
    }

    depositar(valor){
        this._saldo = this._saldo + valor;

        return this._saldo;
    }
}

class ContaCorrente extends ContaBancaria{
    constructor(agencia,numero,cartaoCredito){
        super(agencia,numero);//chama classe pai
        this.tipo = 'corrente'//define tipo de conta
        this._cartaoCredito = cartaoCredito;
    }
    //definindo getters e setters
    get cartaoCredito(){
        return this._cartaoCredito;
    }
    set cartaoCredito(valor){
        this._cartaoCredito = valor;
    }
}

class ContaPoupanca extends ContaBancaria{
    constructor(agencia,numero){
        super(agencia,numero);//chama classe pai
        this.tipo = 'poupanca'//define tipo de conta
    }
}

class ContaEstudante extends ContaBancaria{
    constructor(agencia,numero){
        super(agencia,numero);//chama classe pai
        this.tipo = 'estudante'//define tipo de conta
    }
//sobrescrever método sacar limitando a conta estudante em R$500,00
    sacar(valor){
        if(valor > 500){
            return 'Não é permitido saque superior à R$500,00'
        }
        this._saldo = this._saldo - valor;
    }
}