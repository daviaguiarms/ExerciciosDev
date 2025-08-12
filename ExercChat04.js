const jogadores = [
    { nome: 'Davi', pontos: 10, historico: [true, false, true, true] },
    { nome: 'Laura', pontos: 5, historico: [false, false, false] },
    { nome: 'Brener', pontos: 0, historico: [] },
    { nome: 'Heitor', pontos: 8, historico: [true, true, true] },
    { nome: 'Irias', pontos: 12, historico: [false, true, false] }
];

// Remove jogadores com 0 partidas
const jogadoresValidos = jogadores.filter(j => j.historico.length > 0);

for (let jogador of jogadoresValidos) {
    let vitorias = 0;
    let derrotas = 0;

    for (let partida of jogador.historico) {
        if (partida) {
            jogador.pontos += 3;
            vitorias++;
        } else {
            jogador.pontos += 1;
            derrotas++;
        }
    }

    // Bônus de +5 se tiver mais vitórias que derrotas
    if (vitorias > derrotas) {
        jogador.pontos += 5;
    }

    jogador.totalVitorias = vitorias;
}

// Ordena ranking
jogadoresValidos.sort((a, b) => b.pontos - a.pontos);

// Mostra ranking
console.log("🏆 Ranking Final:");
jogadoresValidos.forEach((j, i) => {
    console.log(`${i + 1}º ${j.nome} - ${j.pontos} pontos (Vitórias: ${j.totalVitorias})`);
});
