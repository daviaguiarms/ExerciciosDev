let nome = ['Davi', 'Laura', 'Jose', 'Gugu', 'Jorge']
let media = [10, 8, 5, 7, 5]

for (let i = 0; i < nome.length; i++) {
    if (media[i] >= 7) {
        console.log(`Aluno ${nome[i]} foi aprovado!`);

    } else {
        console.log(`Aluno ${nome[i]} foi reprovado`);

    }
}