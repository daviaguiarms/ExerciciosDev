// Dados dos jogadores
const nomes = ['Davi', 'Laura', 'Bruno', 'Heitor'];
const pontuacoesAtuais = [100, 120, 90, 80];
const partidasJogadas = [4, 4, 4, 4];
const historicoVitorias = [
  [true, false, true, true],   
  [false, true, false, false],  
  [true, true, true, true],     
  [false, false, true, false],  
];


const ranking = [];

for (let i = 0; i < nomes.length; i++) {
  const vitorias = historicoVitorias[i].filter((resultado) => resultado).length;
  const derrotas = historicoVitorias[i].length - vitorias;

  let pontosExtras = vitorias * 10;
  if (vitorias > derrotas) {
    pontosExtras += 20; 
  }

  const pontuacaoFinal = pontuacoesAtuais[i] + pontosExtras;

  ranking.push({
    nome: nomes[i],
    pontuacao: pontuacaoFinal,
    vitorias: vitorias
  });
}


ranking.sort((a, b) => b.pontuacao - a.pontuacao);


console.log('🏆 Ranking Final dos Jogadores:\n');
ranking.forEach((jogador, index) => {
  console.log(
    `${index + 1}º lugar: ${jogador.nome} - ${jogador.pontuacao} pontos (${jogador.vitorias} vitórias)`
  );
});
