const participantes = ['Davi', 'Laura', 'Brener', 'Heitor', 'Irias', 'Joao']

const pontuacao = [100, 90, 30, 85, 80, 40]

const faltas = [1, 1, 5, 2, 6, 2]

const finalista = [true, true, false, false, false, false]

for (let i = 0; i < participantes.length; i++) {
    const faltou = 80 - pontuacao[i]
    const faltaAmais = faltas[i] - 2
    if (finalista[i]) {
        console.log(`${participantes[i]} ja é finalista`);

    } else if (pontuacao[i] < 80) {

        if (faltas[i] > 2) {
            console.log(`${participantes[i]} teve ${faltou} pontos a menos e ${faltaAmais} faltas a mais`);

        } else {
            console.log(`Faltou ${faltou} pontos para ${participantes[i]} ser finalista`);
        }

    } else if (faltas[i] > 2) {
        console.log(`${participantes[i]} teve ${faltaAmais} faltas a mais do que poderia para ser finalista`);

    } else {
        console.log(`Parabens ${participantes[i]}, voce se tornou finalista`);

    }

}