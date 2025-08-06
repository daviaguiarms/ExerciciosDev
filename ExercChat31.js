const nome = []
const idade = []
const pagamentoFeito = []

let newNome = prompt("Digite o nome ou 'sair' para sair")

while (newNome !== 'sair') {
    let newIdade = prompt("Digite a idade")
    let newPagamento = prompt('Digite true se o pagamento foi realizado ou false se nao foi')

    nome.push(newNome)
    idade.push(Number(newIdade))
    pagamentoFeito.push(newPagamento === 'true')

    newNome = prompt("Digite o nome ou 'não' para sair")

}


for (let i = 0; i < nome.length; i++) {
    if (!pagamentoFeito[i]) {
        console.log(`${nome[i]}: Pagamento pendente`);

    } else if (idade[i] < 18) {
        console.log(`${nome[i]}: Precisa de autorização dos responsaveis`);

    } else {
        console.log(`${nome[i]}: Entrada liberada`);

    }

    

}

console.log(`Foram cadastradas ${nome.length} pessoas`);