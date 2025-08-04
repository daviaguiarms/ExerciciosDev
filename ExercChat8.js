const nomeCompradores = []

const idadeCompradores = []

const pagouIngresso = []

let newComprador = prompt("Digite o nome do novo comprador (Digite não para parar)")

let newIdade = prompt("Digite a idade do novo comprador")

let newPagamento = prompt("Digite se o novo comprador pagou ingresso (sim = true e nao = false)")

while (newComprador !== 'não') {
    nomeCompradores.push(newComprador)

    idadeCompradores.push(Number(newIdade))

    pagouIngresso.push(newPagamento === 'true')

    let newComprador = prompt("Digite o nome do novo comprador (Digite não para parar)")
    if (newComprador === 'não') break;

    let newIdade = prompt("Digite a idade do novo comprador")
    let newPagamento = prompt("Digite se o novo comprador pagou ingresso (sim = true e nao = false)")
}

for (let i = 0; i < nomeCompradores.length; i++) {
    if (pagouIngresso[i]) {
        console.log(`${nomeCompradores[i]} acesso liberado`);

    } else if (idadeCompradores[i] < 18) {
        console.log(`${nomeCompradores[i]} cadastro invalido`);

    } else {
        console.log(`${nomeCompradores[i]} precisa regularizar o pagamento`);

    }
}