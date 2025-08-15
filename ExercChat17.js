const nome = ['Davi', 'Laura', 'Brener', 'Heitor', 'Irias', 'Joao']
const mediaAtual = [10, 8, 4, 5, 7, 9]
const faltas = [3, 2, 5, 6, 1, 7]
const situacao = []

const avaliarAluno = () => {
    let aprovados = 0
    let reprovados = 0
    let recuperacao = 0
    for (let i = 0; i < nome.length; i++) {
        if (mediaAtual[i] >= 7 && faltas[i] <= 5) {
            console.log(`${nome[i]} foi aprovado`);
            situacao.push('Aprovado')
            aprovados++;


        } else if (mediaAtual[i] < 5 || faltas[i] > 10) {
            console.log(`${nome[i]} foi reprovado`);
            situacao.push('Reprovado');
            reprovados++;

        } else {
            console.log(`${nome[i]} esta em recuperação`);
            situacao.push('Recuperação');
            recuperacao++;

        }
    }
    console.log(`Aprovados: ${aprovados}`);
    console.log(`Reprovados: ${reprovados}`);
    console.log(`Em recuperação: ${recuperacao}`);
    console.log("\n📋 Situação final:")
    
    for (let i = 0; i < nome.length; i++) {
        console.log(`${nome[i]} - ${situacao[i]}`)
    }
}

avaliarAluno()