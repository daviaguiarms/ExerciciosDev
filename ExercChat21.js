const nomeAluno = ['Davi', 'Laura', 'Brener', 'Heitor', 'Irias', 'Joao']

const notes = [10, 9, 3, 5, 9, 2]

const faltas = [2, 1, 3, 5, 4, 1]

const finalJob = [true, true, false, true, false, false]

for (let i = 0; i < nomeAluno.length; i++) {
    let notaBonus = notes[i];

    if (finalJob[i]) {
        notaBonus += 1;
    }

    if (faltas[i] > 3) {
        console.log(`O aluno ${nomeAluno[i]} foi reprovado por faltas (Faltas: ${faltas[i]})`);

    } else if (notaBonus >= 6) {
        console.log(`O aluno ${nomeAluno[i]} foi aprovado com a nota ${notaBonus}`);

    } else {
        console.log(`O aluno ${nomeAluno[i]} foi reprovado com a nota ${notaBonus}`);

    }

}