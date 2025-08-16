const alunos = [
    { nome: 'Davi', nota: 9 },
    { nome: 'Gugu', nota: 4 },
    { nome: 'Vivi', nota: 6 },
    { nome: 'Gui', nota: 8 },
    { nome: 'Wesley', nota: 5 },
    { nome: 'Guh', nota: 7 }
]


const alterarNota = (pessoa, bonus) => {
    let existe = false
    alunos.forEach((person) => {
        if (pessoa === person.nome) {
            existe = true
            person.nota += bonus;
            console.log(`${person.nome} recebeu um bonus de ${bonus} pontos`);

        }
    })

    if (!existe) {
        console.log(`Este aluno não existe`);

    }
}


const alunosAprovados = () => {
    alunos.forEach((aluno) => {
        if (aluno.nota >= 7) {
            console.log(`${aluno.nome} foi aprovado com a nota: ${aluno.nota}`);

        }
    })

}

const alunosReprovados = () => {
    for (let alunoo of alunos) {
        if (alunoo.nota < 7) {
            console.log(`${alunoo.nome} foi reprovado com a nota: ${alunoo.nota}`);

        }
    }
}

alterarNota('Davi', 1)
alunosAprovados();
alunosReprovados();