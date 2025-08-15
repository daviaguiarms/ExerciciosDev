const nome = ['Davi', 'Jorge', 'jose', 'Joao', 'Gugu', 'Paulo']
const notas = [10, 4, 6, 8, 9, 7]

const aprovados = () => {
    nome.forEach((pessoa, i) => {
        if (notas[i] >= 7) {
            console.log(`${pessoa} foi aprovado`);

        } 
    })
}

const reprovados = () => {
    nome.forEach((people, x) => {
        if (notas[x] < 7) {
            console.log(`${people} foi reprovado`);

        } 
    })
}


const atualizarNota = (aluno, bonus) => {
    let exist = false

    nome.forEach((person, x) => {
        if (aluno === person) {
            exist = true;
            notas[x] += bonus;
            console.log(`${person} ganhou ${bonus} pontos de bonus`);

        }

    })

    if (!exist) {
        console.log(`Este aluno nao existe`);

    }

}

aprovados()
reprovados()
atualizarNota('Davi', 2)
atualizarNota('AAA', 4)

