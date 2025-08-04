const products = ['Mouse', 'Teclado', 'Monitor', 'Notebook', 'MousePad']

const quantidadeEstoque = [12, 3, 18, 4, 6]

const diasSemReposicao = [2, 1, 4, 5, 4]

const emPromocao = [false, true, true, false, true]

for (let i = 0; i < products.length; i++) {
    if (quantidadeEstoque[i] < 5 && diasSemReposicao[i] > 3) {
        console.log(`${products[i]} com estoque critico`);

    } else if (emPromocao[i] && quantidadeEstoque[i] < 10) {
        console.log(`${products[i]} esta em promoçao com baixo estoque`);

    } else {
        console.log(`${products[i]} esta com estoque normal`);

    }
}