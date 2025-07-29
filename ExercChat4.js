let nomeProduto = ['Fone', 'Mouse', 'Teclado', 'Monitor']
let qtdEstoque = [10, 3, 0, 0]

for (let i = 0; i < nomeProduto.length; i++) {
    if (qtdEstoque[i] == 0) {
        console.log(`Produto ${nomeProduto[i]} esta em falta`);

    } else {
        console.log(`Existem ${qtdEstoque[i]} desse produto em estoque`);

    }
}