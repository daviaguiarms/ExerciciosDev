const products = [
    { produto: 'Oleo', preco: 15, qtd: 2 },
    { produto: 'Gas', preco: 180, qtd: 1 },
    { produto: 'Arroz', preco: 20, qtd: 4 },
    { produto: 'Feijao', preco: 30, qtd: 3 },
    { produto: 'Milho', preco: 10, qtd: 5 },
    { produto: 'Maçã', preco: 5, qtd: 3 }
]

const addItem = (item, custo, qtdProduct) => {
    products.push({ produto: item, preco: custo, qtd: qtdProduct });
    console.log(`${item} adicionado com sucesso`);

}


const removeItem = (produto) => {
    let index = products.findIndex(p => p.produto === produto)
    if (index !== -1) {
        console.log(`${products[index].produto} removido com sucesso`);
        products.splice(index, 1) 
    } else {
        console.log('Produto não encontrado');
    }
}

let total = 0
const valorTotal = () => {
    total = products.reduce((acumul, adc) => acumul + (adc.preco * adc.qtd), 0);
    console.log(`O valor total da compra é: ${total.toFixed(2)} reais`);

}

const desconto = () => {
    if (total > 200) {
        total -= total * 0.10
        console.log('Desconto de 10% adicionado');
        console.log(`O valor da compra agora é ${total}`);


    } else {
        console.log('O valor da conta é mt baixo para ter desconto');

    }
}


addItem('Pao', 8, 3);
removeItem('Milho');
valorTotal();
desconto();
console.log(products);
