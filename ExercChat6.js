const alunos = ['Davi', 'Laura', 'Brener', 'Heitor', 'Irias', 'Joao']

const ageAlunos = [20, 19, 13, 15, 19, 12]

const mensalidadePaga = [true, false, false, true, true, false]

const exameMedico = [true, true, false, true, false, false]

const acompanhante = [false, false, true, false, false, true]

for (let i = 0; i < alunos.length; i++) {
    if (!mensalidadePaga[i]) {
        console.log(`O aluno ${alunos[i]} deve pagar a mensalidade para entrar`);

    } else if (!exameMedico[i]) {
        console.log(`O aluno ${alunos[i]} deve ter exame medico valido para entrar`);

    } else if (ageAlunos[i] < 16 && !acompanhante[i]) {
        console.log(`O aluno ${alunos[i]} deve estar acompanhado para entrar `);

    } else {
        console.log(`${alunos[i]} pode entrar`);

    }
}