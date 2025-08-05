const nome = []
const idade = []
const passaporteValido = []
const pagouTaxa = []
const acompanhado = []

let newNome = prompt("Digite o nome do passageiro ou digite (não) para sair")

while (newNome !== 'não') {
    newNome = prompt("Digite o nome do passageiro ou digite (não) para sair")
    if (newNome === 'não') break;
    let newIdade = prompt("Digite a idade")
    let newPassaporte = prompt("O passaporte esta valido? (sim = true e nao = false)")
    let newPagoutaxa = prompt("A taxa foi paga? (sim = true e nao = false)")
    let newAcompanhado = prompt("O menor de idade esta acompanhado? (sim = true e nao = false)")

    nome.push(newNome)
    idade.push(Number(newIdade))
    passaporteValido.push(newPassaporte === 'true')
    pagouTaxa.push(newPagoutaxa === 'true')
    acompanhado.push(newAcompanhado === 'true')

}

for (let i = 0; i < nome.length; i++) {
    if (idade[i] < 18 && !acompanhado[i]) {
        console.log(`Passageiro ${nome[i]} viagem nao autorizada`);

    } else if (!pagouTaxa[i]) {
        console.log(`${nome[i]} esta com a taxa pendente`);

    } else if (!passaporteValido[i]) {
        console.log(`${nome[i]} esta com o passaporte invalido`);
    } else {
        console.log(`${nome[i]} pode embarcar`);

    }
}