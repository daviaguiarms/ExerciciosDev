const alunos = [
    { nome: 'Davi', pontos: [10, 7, 9, 8, 10], frequencia: 80 },
    { nome: 'Laura', pontos: [9, 8, 9, 4, 10], frequencia: 70 },
    { nome: 'Brener', pontos: [10, 5, 9, 7, 10], frequencia: 40 },
    { nome: 'Heitor', pontos: [8, 7, 6, 5, 10], frequencia: 20 },
    { nome: 'Irias', pontos: [4, 6, 9, 8, 0], frequencia: 60 },
    { nome: 'Joao', pontos: [1, 4, 9, 4, 6], frequencia: 100 }
]
let soma = 0
let mediaGeral = 0

for (let aluno of alunos) {
    let somaAluno = aluno.pontos.reduce((total, notas) => total + notas, 0)
    let mediaAluno = somaAluno / aluno.pontos.length

    soma += mediaAluno

    if (mediaAluno < 5) {
        console.log(`Aluno: ${aluno.nome} - Media: ${mediaAluno} - Status: foi reprovado`);


    } else if (mediaAluno >= 7 && aluno.frequencia >= 75) {
        console.log(`Aluno: ${aluno.nome} - Media: ${mediaAluno} - Status: foi aprovado`);

    } else {
        console.log(`Aluno: ${aluno.nome} - Media: ${mediaAluno} - Status: esta em recuperação`);

    } 

}

mediaGeral = soma / alunos.length

console.log(`A media geral dos alunos é ${mediaGeral.toFixed(2)}`);







