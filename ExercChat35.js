const heroi = ['Batman', 'SuperMan', 'SpiderMan', 'Wolwerine', 'Hulk', 'PanteraNegra']
const pontosAtuais = [5000, 250, 600, 3000, 1500, 800]
const nivelAtual = [5, 0, 1, 1, 1, 1]

for (let i = 0; i < heroi.length; i++) {
    if (nivelAtual[i] === 5) {
        console.log(`${heroi[i]} não evolui mais`);

    } else if (pontosAtuais[i] >= 2000) {
        nivelAtual[i] = 4;
        console.log(`${heroi[i]}: subiu para o nivel 4`);

    } else if (pontosAtuais[i] >= 1000) {
        nivelAtual[i] = 3;
        console.log(`${heroi[i]}: subiu para o nivel 3`);
    } else if (pontosAtuais[i] >= 500) {
        nivelAtual[i] = 2;
        console.log(`${heroi[i]}: subiu para o nivel 2`);
    } else if (pontosAtuais[i] >= 200) {
        nivelAtual[i] = 1;
        console.log(`${heroi[i]}: subiu para o nivel 1`);
    }

}
for (let x = 0; x < heroi.length; x++) {
    console.log(`${heroi[x]}: ${pontosAtuais[x]} pontos e nivel: ${nivelAtual[x]}`);
}