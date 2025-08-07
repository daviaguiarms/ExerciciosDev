const jogadores = [
    { nome: 'Davi', pontuacao: 1700, partidasJogadas: 3 },
    { nome: 'Laura', pontuacao: 1200, partidasJogadas: 2 },
    { nome: 'Brener', pontuacao: 400, partidasJogadas: 4 },
    { nome: 'Heitor', pontuacao: 500, partidasJogadas: 5 },
    { nome: 'Irias', pontuacao: 500, partidasJogadas: 6 },
    { nome: 'Joao', pontuacao: 300, partidasJogadas: 0 }
];


const jogadoresValidos = [];

for (let i = 0; i < jogadores.length; i++) {
    const jogador = jogadores[i];
    if (jogador.pontuacao < 0 || jogador.partidasJogadas === 0) {
        console.log(`${jogador.nome} possui dados inválidos e será removido do ranking.`);
    } else {
        jogadoresValidos.push(jogador);
    }
}


jogadoresValidos.sort((a, b) => b.pontuacao - a.pontuacao);


console.log("\nRanking Final:");
for (let i = 0; i < jogadoresValidos.length; i++) {
    console.log(`${jogadoresValidos[i].nome}: ${i + 1}º lugar com ${jogadoresValidos[i].pontuacao} pontos`);
}


let somaPontuacoes = 0;
for (let i = 0; i < jogadoresValidos.length; i++) {
    somaPontuacoes += jogadoresValidos[i].pontuacao;
}

const media = somaPontuacoes / jogadoresValidos.length;
console.log(`\nPontuação média dos jogadores válidos: ${media}`);
