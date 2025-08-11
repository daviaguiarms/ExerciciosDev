const livro = ['Hobbit', 'SpiderMan', 'Verity', 'Outside', 'it', 'Secret']
const disponivel = [true, true, false, true, false, false]
const nmrEmprestimo = [4, 6, 3, 2, 9, 5]

const emprestarLivro = (indice) => {
    if (disponivel[indice]) {
        disponivel[indice] = false
        nmrEmprestimo[indice] += 1;
    } else {
        console.log(`livro ${livro[indice]} ja esta emprestado`);

    }
}

const devolverLivro = (indice) => {
    if (!disponivel[indice]) {
        disponivel[indice] = true
        console.log(`${livro[indice]} devolvido com sucesso`);

    }
}

let question = prompt('Se voce quer pegar um livro emprestado digite pegar, e se deseja devolver digite devolver')
let escolhaLivro = prompt('Escolha qual livro quer pegar (0 a 5)')

let indiceLivro = Number(escolhaLivro)
if (question === 'pegar') {
    emprestarLivro(indiceLivro);
} else if (question === 'devolver') {
    devolverLivro(indiceLivro);
} else {
    console.log(`Opção invalida`);

}

for (let x = 0; x < livro.length; x++) {
    console.log(` ${livro[x]} - Disponivel: ${disponivel[x]} - Numero de emprestimos: ${nmrEmprestimo[x]}`);

}