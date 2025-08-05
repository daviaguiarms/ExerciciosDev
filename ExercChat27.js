const ranking = [
    { nome: 'Davi', totalPontos: 500, penalidades: 1, classificadoDireto: true },
    { nome: 'Laura', totalPontos: 350, penalidades: 1, classificadoDireto: true },
    { nome: 'Brener', totalPontos: 200, penalidades: 3, classificadoDireto: false },
    { nome: 'Heitor', totalPontos: 370, penalidades: 1, classificadoDireto: false },
    { nome: 'Irias', totalPontos: 325, penalidades: 2, classificadoDireto: false },
    { nome: 'Joao', totalPontos: 100, penalidades: 1, classificadoDireto: false }
]

for (let i = 0; i < ranking.length; i++) {
    if (ranking[i].classificadoDireto) {
        console.log(`${ranking[i].nome} ja esta classifcado para a final`);

    } else if (ranking[i].totalPontos < 300 || ranking[i].penalidades >= 2) {
        console.log(`${ranking[i].nome} esta desclassificado`);

    } else if (ranking[i].totalPontos > 300 && ranking[i].penalidades < 2) {
        console.log(`${ranking[i].nome} vai para a final`);

    }

}

ranking.sort((a, b) => b.totalPontos - a.totalPontos)

for (let x = 0; x < ranking.length; x++) {
    console.log(`O jogador ${ranking[x].nome} ficou em ${x + 1} lugar com ${ranking[x].totalPontos}`);
}



