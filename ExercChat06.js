const estoqueLoja = [
    { nome: 'mouse', qtdEstoque: 10, precoUni: 150, disponivel: true },
    { nome: 'pc', qtdEstoque: 5, precoUni: -100, disponivel: false },
    { nome: 'notebook', qtdEstoque: 0, precoUni: 1000, disponivel: true },
    { nome: 'monitor', qtdEstoque: 8, precoUni: 100, disponivel: true },
    { nome: 'teclado', qtdEstoque: 12, precoUni: 120, disponivel: false },
    { nome: 'mousePad', qtdEstoque: 12, precoUni: 150, disponivel: true }

];

const newEstoque = estoqueLoja.filter(e => e.precoUni > 0)
let soma = 0

for (let produto of estoqueLoja) {
    if (produto.precoUni < 0) {
        console.log(`${produto.nome} foi removido`);

    }

}

for (let item of newEstoque) {
    if (item.qtdEstoque <= 0) {
        console.log(`${item.nome} esta indisponivel`);
        item.disponivel = false

    }

    soma += (item.precoUni * item.qtdEstoque)


}

console.log(`Valor total do estoque: ${soma}`);
newEstoque.sort((a, b) => (b.qtdEstoque * b.precoUni) - (a.qtdEstoque * a.precoUni))

console.log(`Lista de produtos disponiveis em valor total:`);
for (let product of newEstoque) {
    if (product.disponivel) {

        console.log(`${product.nome}: ${product.qtdEstoque * product.precoUni} reais`);

    }
}







