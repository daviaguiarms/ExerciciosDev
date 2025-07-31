const aluno = ['Davi', 'Laura', 'Brener', 'Heitor', 'Irias']

const notas = [10, 10, 3, 7, 6]

const entregouTrab = [true, true, false, false, true]

for (let i = 0; i < aluno.length; i++) {
    if (notas[i] >= 7 && entregouTrab[i]) {
        console.log(`O aluno(a) ${aluno[i]} foi aprovado com destaque`);

    } else if (notas[i] >= 7 && !entregouTrab[i]) {
        console.log(`O aluno(a) ${aluno[i]} foi aprovado mas sem destaque`);

    } else if (notas[i] >= 5) {
        console.log(`O aluno ${aluno[i]} esta em recuperação`);

    } else {
        console.log(`O aluno ${aluno[i]} foi reprovado`);

    }
}

