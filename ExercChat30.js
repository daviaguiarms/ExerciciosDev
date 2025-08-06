const nomeProdutos = ['Arroz', 'Feijao', 'Milho', 'Batata', 'Frango', 'Carne']

const qtdEstoque = [8, 12, 3, 5, 7, 15]

const diasSemReposicao = [2, 4, 5, 1, 2, 3]
let soma = 0
for (let i = 0; i < nomeProdutos.length; i++) {
    if (qtdEstoque[i] >= 10) {
        console.log(`${nomeProdutos[i]}: estoque normal`);

    } else if (qtdEstoque[i] >= 5) {
        console.log(`${nomeProdutos[i]}: alerta de baixo estoque`);

    } else if (diasSemReposicao[i] >= 3) {
        console.log(`${nomeProdutos[i]}: estoque critico`);

    } else {
        console.log(`${nomeProdutos[i]}: precisa de reposição`);

    }




    soma += qtdEstoque[i];


}
console.log(`Total de produtos em estoque: ${soma}`);