const products = [
    { produto: 'Oleo', preco: 15, qtd: 2 },
    { produto: 'Gas', preco: 180, qtd: 1 },
    { produto: 'Arroz', preco: 70, qtd: 4 },
    { produto: 'Feijao', preco: 60, qtd: 3 },
    { produto: 'Milho', preco: 10, qtd: 5 },
    { produto: 'Maçã', preco: 5, qtd: 3 }
]

const atualizar = (nome, newPreco) => {
    let existe = false

    products.forEach((item) => {
        if (nome === item.produto) {
            existe = true
            item.preco = newPreco
            console.log(`Preço do ${item.produto} atualizado com sucesso`);

        }
    })

    if (!existe) {
        console.log('Esse produto nao existe'); 

    }
}

let totalEstoque = 0
const relatorio = () => {
    products.forEach((e) => {
        let total = e.preco * e.qtd
        console.log(`Produto: ${e.produto} | Preço: ${e.preco.toFixed(2)} | Quantidade: ${e.qtd} | Total: ${total.toFixed(2)}`);

    })

    totalEstoque = products.reduce((acm, soma) => acm + (soma.preco * soma.qtd), 0);
    console.log(`Valor total do estoque: ${totalEstoque.toFixed(2)}`);
}

const filtro = () => {

    const filtrado = products.filter((item) => item.preco > 50);
    console.log(filtrado);

}

atualizar('Oleo', 20);
console.log(products);

relatorio();
filtro();


