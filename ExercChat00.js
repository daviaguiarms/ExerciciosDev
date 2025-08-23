const nome = ['Mouse', 'Notebook', 'Teclado', 'MousePad', 'Placa', 'Monitor']
const preco = [60, 1500, 200, 50, 400, 600]

const historico = []
const registrarVenda = (produto, quantidade) => {
    let encontrado = false

    nome.forEach((item, i) => {
        if (produto === item) {
            encontrado = true
            let totalVenda = preco[i] * quantidade
            historico.push({
                nome: item,
                qtd: quantidade,
                total: totalVenda
            })

            console.log(`Venda registrada ${item} - Quantidade: ${quantidade} - Total em R$ ${totalVenda.toFixed(2)}`);

        }

    })

    if (!encontrado) {
        console.log('Esse produto nao foi encontrado');

    }

}

registrarVenda('Notebook', 3);
registrarVenda('Mouse', 2);
registrarVenda('Placa', 4);
registrarVenda('Monitor', 2);






