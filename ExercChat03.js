const controleFunc = [
    { nome: 'Davi', salarioBase: 7000, horasExtras: 8, vlrHoraExtra: 200 },
    { nome: 'laura', salarioBase: 6000, horasExtras: 9, vlrHoraExtra: 200 },
    { nome: 'joao', salarioBase: 3500, horasExtras: 2, vlrHoraExtra: 200 },
    { nome: 'jorge', salarioBase: 5000, horasExtras: 5, vlrHoraExtra: 200 },
    { nome: 'pablo', salarioBase: 3000, horasExtras: 3, vlrHoraExtra: 200 }
]

const totalSalario = (funcionario) => {
    return funcionario.salarioBase + (funcionario.horasExtras * funcionario.vlrHoraExtra)
}

let totalFolha = 0
let maiorSalario = { nome: '', valor: 0 }
let menorSalario = { nome: '', valor: Infinity }

for (let i = 0; i < controleFunc.length; i++) {
    const total = totalSalario(controleFunc[i])
    totalFolha += total
    console.log(`Total salarios ${controleFunc[i].nome}: ${total.toFixed(2)}`);

    if (total > 5000) {
        console.log(`${controleFunc[i].nome} ganhou acima da media`);

    }

    if (total > maiorSalario.valor) {
        maiorSalario = { nome: controleFunc[i].nome, valor: total }
    }

    if (total < menorSalario.valor) {
        menorSalario = { nome: controleFunc[i].nome, valor: total }
    }

}

console.log(`total da folha: ${totalFolha.toFixed(2)}`);
console.log(`Funcionario com maior salario: ${maiorSalario.nome} _ ${maiorSalario.valor}`);
console.log(`Funcionario com menor salario: ${menorSalario.nome} _ ${menorSalario.valor}`);

