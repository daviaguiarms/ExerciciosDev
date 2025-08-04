const alunos = ['Davi', 'Laura', 'Brener', 'Heitor', 'Irias', 'Joao']

const frequencia = [3, 2, 5, 4, 2, 6]

const mediaNotas = [10, 9, 4, 6, 3, 8]

const fezTrabalhoFinal = [true, true, true, true, false, false]

for (let i = 0; i < alunos.length; i++) {
    if (frequencia[i] > 5) {
        console.log(`${alunos[i]} foi reprovado por frequencia`);

    } else if (mediaNotas[i] >= 6) {
        console.log(`${alunos[i]} foi aprovado`);

    } else if (mediaNotas[i] >= 4 && fezTrabalhoFinal[i]) {
        console.log(`${alunos[i]} foi aprovado na final`);

    } else {
        console.log(`${alunos[i]} foi reprovado`);

    }

}