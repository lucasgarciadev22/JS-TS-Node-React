const alunos = [
    {
        nome: 'Lucas',
        nota: 10,
        turma: '1B',
    },

    {
        nome: 'Ana',
        nota: 5,
        turma: '1B',
    },

    {
        nome: 'Lana',
        nota: 7,
        turma: '2C',
    }

];


function alunosAprovados(array, media){

    let aprovados =[];
    for (let i=0; i< array.length; i++){

    //object destructuring -> filtra as propriedades desejadas do objeto
    const {nota, nome} = array[i];

    if(nota >=media){
        aprovados.push(nome);
    }

    }
    return aprovados;
}
console.log(`Os alunos aprovados são: ${alunosAprovados(alunos, 7)}`);