function calculaIdade(anos){
    return `Daqui a ${anos} anos, ${this.nome} terá ${this.idade + anos} anos de idade`;
}

const pessoa1 = {
    nome: 'Carlos',
    idade: 5,
};

const pessoa2 = {
    nome: 'Ana',
    idade: 35,
};

const pessoa3= {
    nome: 'José',
    idade: 51,
};

const animal = {
    nome: 'Tobbi',
    idade: 2,
    raca: 'Pitbull'
};

console.log(calculaIdade.call(pessoa3, 10));//usando a função call especifica a pessoa e passa 10 como parâmetro inicial de anos
console.log(calculaIdade.call(animal, 3));//usando a função call especifica a pessoa e passa 10 como parâmetro inicial de anos

console.log(calculaIdade.apply(pessoa3, [10]));//usando a função apply especifica a pessoa e passa 10 como parâmetro inicial de anos
console.log(calculaIdade.apply(animal, [3]));//usando a função apply especifica a pessoa e passa 10 como parâmetro inicial de anos



