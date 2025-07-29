let nomeProduto = ['Arroz', 'feijao', 'Milho', 'Batata']

let quantidadeEstoque = [0, 3, 7, 0]

for (let i = 0; i < nomeProduto.length; i++) {
    if (quantidadeEstoque[i] == 0) {
        console.log(`Produto ${nomeProduto[i]} esta ESGOTADO`);
    } else if (quantidadeEstoque[i] < 5) {
        console.log(`Produto ${nomeProduto[i]} esta com BAIXO estoque (${quantidadeEstoque[i]} unidades)`);

    } else if (quantidadeEstoque[i] >= 5) {
        console.log(`Produto ${nomeProduto[i]} esta com estoque ok (${quantidadeEstoque[i]} unidades)`);

    }


}