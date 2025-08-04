const ranking = [
    { nome: 'Davi', pontos: 500, bonus: true },
    { nome: 'Laura', pontos: 400, bonus: true },
    { nome: 'Brener', pontos: 150, bonus: false },
    { nome: 'Heitor', pontos: 200, bonus: false },
    { nome: 'Irias', pontos: 110, bonus: false },
    { nome: 'Joao', pontos: 350, bonus: false }
];

for (let i = 0; i < ranking.length; i++) {
    if (ranking[i].pontos > 200 && !ranking[i].bonus) {
        ranking[i].pontos += 50;
        ranking[i].bonus = true;
        console.log(`${ranking[i].nome} recebeu 50 pontos de bônus`);
    }
}

ranking.sort((a, b) => b.pontos - a.pontos);

for (let i = 0; i < ranking.length; i++) {
    console.log(`${i + 1}º lugar: ${ranking[i].nome} com ${ranking[i].pontos} pontos`);
}
