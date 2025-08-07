const rankingJogadores = [
    { Nome: 'Davi', pontuacao: 500, partidas: 5, bonusRecebido: true },
    { Nome: 'Laura', pontuacao: 400, partidas: 3, bonusRecebido: false },
    { Nome: 'Brener', pontuacao: 320, partidas: 2, bonusRecebido: false },
    { Nome: 'Heitor', pontuacao: 150, partidas: 1, bonusRecebido: false },
    { Nome: 'Irias', pontuacao: 200, partidas: 6, bonusRecebido: false },
    { Nome: 'Joao', pontuacao: 250, partidas: 4, bonusRecebido: false }
]


for (let i = 0; i < rankingJogadores.length; i++) {
    if (rankingJogadores[i].partidas < 3) {
        console.log(`${rankingJogadores[i].Nome} precisa de mais participações`);

    } else if (rankingJogadores[i].pontuacao > 300 && !rankingJogadores[i].bonusRecebido) {
        rankingJogadores[i].pontuacao += 50
        console.log(`${rankingJogadores[i].Nome} recebeu 50 pontos de bonus`);

    }


}
rankingJogadores.sort((a, b) => b.pontuacao - a.pontuacao)
for (let x = 0; x < rankingJogadores.length; x++) {
    console.log(`${rankingJogadores[x].Nome} ficou em ${x + 1} lugar com ${rankingJogadores[x].pontuacao}`);
}

