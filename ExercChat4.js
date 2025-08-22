const products = [
    { produto: 'Oleo', preco: 15, qtd: 2 },
    { produto: 'Gas', preco: 180, qtd: 1 },
    { produto: 'Arroz', preco: 20, qtd: 4 },
    { produto: 'Feijao', preco: 30, qtd: 3 },
    { produto: 'Milho', preco: 10, qtd: 5 },
    { produto: 'Macarrao', preco: 8, qtd: 6 }
];

const reporEstoque = () => {
    products.forEach((item) => {
        if (item.qtd < 3) {
            console.log(`Produto ${item.produto} com baixo estoque, necessita reposição`);

        } else {
            console.log(`Produto ${item.produto} esta com o estoque OK`);

        }
    })
}


const ordenar = () => {
    products.sort((a, b) => (b.preco * b.qtd) - (a.preco * a.qtd))

    products.forEach((item, i) => {
        let total = item.preco * item.qtd
        console.log(`${i + 1} - ${item.produto} - Total: ${total.toFixed(2)}`);
    })

    console.log(products);
}

const estatisticas = () => {
    let productsDiferentes = products.length
    let total = products.reduce((acum, som) => acum + som.qtd, 0)
    console.log(`Quantidade de produtos diferentes no estoque ${productsDiferentes}`);
    console.log(`O total de produtos em quantidade é ${total}`);

    let maior = 0
    products.forEach((e) => {
        if (e.preco > maior) {
            maior = e.preco      
            console.log(`O produto mais caro é o ${e.produto} com o valor de ${maior}`);
        }
    })
}

reporEstoque();
console.log(' ');
ordenar();
console.log(' ');
estatisticas()

