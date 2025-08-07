const nomeFuncionario = ['Davi', 'Laura', 'Brener', 'Heitor', 'Irias', 'Joao']

const horasDescanso = [9, 10, 12, 3, 5, 9]

const estaDisponivel = [true, false, true, true, true, false]

const docRegularizada = [true, true, false, true, true, false]

for (let i = 0; i < nomeFuncionario.length; i++) {
    if (!estaDisponivel[i]) {
        console.log(`${nomeFuncionario[i]}: indisponivel para plantão`);

    } else if (horasDescanso[i] < 8) {
        console.log(`${nomeFuncionario[i]}: não pode ser escalado (descanso insuficiente)`);

    } else if (!docRegularizada[i]) {
        console.log(`${nomeFuncionario[i]}: pendente de regularização`);

    } else {
        console.log(`${nomeFuncionario[i]}: escalado para plantão`);

    }
}