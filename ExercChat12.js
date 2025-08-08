const nome = ['Mouse', 'Teclado', 'Monitor', 'Notebook', 'MousePad']
const qtdEstoque = [10, 3, 6, 2, 2, 8]
const minReposicao = [5, 5, 5, 5, 5, 5]


const reporEstoque = (indice, quantidade) => {
    qtdEstoque[indice] += quantidade
    console.log(`Produto ${nome[indice]} reposto. Quantidade: ${qtdEstoque[indice]}`);

}

for (let i = 0; i < nome.length; i++) {
    if (qtdEstoque[i] < minReposicao[i]) {
        console.log(`${nome[i]} precisa de reposição. Quantidade atual: ${qtdEstoque[i]}`);
        reporEstoque(i, 5);

    } else {
        console.log(`${nome[i]} com quantidade normal. Quantidade: ${qtdEstoque[i]}`);

    }
}

for (let x = 0; x < nome.length; x++) {
    console.log(``);

    console.log(`Produto ${nome[x]}: ${qtdEstoque[x]} unidades`);


}


