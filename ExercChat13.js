const nameProducts = ['Mouse', 'Notebook', 'Teclado', 'MousePad', 'Placa', 'Monitor']

const qtdProducts = [12, 17, 22, 33, 9, 26]

const minEstoque = [15, 15, 15, 15, 15, 15]

const diasSemRepor = [2, 3, 5, 1, 4, 2]

for (let i = 0; i < nameProducts.length; i++) {
    if (qtdProducts[i] >= minEstoque[i]) {
        console.log(`${nameProducts[i]} esta com estoque normal`);

    } else if (diasSemRepor[i] < 3) {
        console.log(`${nameProducts[i]} aguardando nova remessa`);

    } else {
        console.log(`${nameProducts[i]} esta em estado critico`);

    }
}