const livros = [
    { nome: 'Livro1', autor: 'Davi', emprestado: false },
    { nome: 'Livro2', autor: 'Lala', emprestado: true },
    { nome: 'Livro3', autor: 'Cristian', emprestado: false },
    { nome: 'Livro4', autor: 'Fabio', emprestado: false },
    { nome: 'Livro5', autor: 'Roger', emprestado: true },
    { nome: 'Livro6', autor: 'Flavia', emprestado: false }

]


const emprestarLivro = (nomeLivro) => {
    let existe = false
    livros.forEach((livro) => {
        if (nomeLivro === livro.nome && livro.emprestado === false) {
            existe = true
            livro.emprestado = true
            console.log(`${livro.nome} emprestado com sucesso`);

        } else if (nomeLivro === livro.nome && livro.emprestado === true) {
            console.log('Esse livro ja esta emprestado');

        }
    })

    if (!existe) {
        console.log('Este livro nao foi encontrado');

    }

}

const devolverLivro = (bookNome) => {
    let achado = false
    livros.forEach((book) => {
        if (bookNome === book.nome && book.emprestado === true) {
            achado = true
            book.emprestado = false
            console.log(`${book.nome} devolvido com sucesso`);

        } else if (bookNome === book.nome && book.emprestado === false) {
            console.log('Este livro ja foi devolvido');

        }
    })

    if (!achado) {
        console.log('Este livro nao foi encontrado');

    }
}


emprestarLivro('Livro1')
devolverLivro('Livro2')


console.log('Livros emprestados: ');
for (let livrin of livros) {
    if (livrin.emprestado === true) {
        console.log(`${livrin.nome}`);

    }
}

console.log('Livros disponiveis: ');

for (let item of livros) {
    if (item.emprestado === false) {
        console.log(`${item.nome}`);

    }
}




