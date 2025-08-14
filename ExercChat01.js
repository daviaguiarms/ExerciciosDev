const funcionarios = [
    { nome: 'Davi', salario: 7000, anosDeEmpresa: 8, cargo: 'Senior' },
    { nome: 'laura', salario: 6000, anosDeEmpresa: 9, cargo: 'Senior' },
    { nome: 'joao', salario: 1800, anosDeEmpresa: 2, cargo: 'Junior' },
    { nome: 'jorge', salario: 5000, anosDeEmpresa: 5, cargo: 'pleno' },
    { nome: 'Paulo', salario: 4000, anosDeEmpresa: 6, cargo: 'pleno' },
    { nome: 'pablo', salario: 1500, anosDeEmpresa: 3, cargo: 'Junior' }
]

funcionarios.forEach((funcionario) => {
    if (funcionario.salario < 2000) {
        console.log(`${funcionario.nome} recebeu um bonus extra de R$300`);
        funcionario.salario += 300

    }

    if (funcionario.anosDeEmpresa > 5) {
        console.log(`${funcionario.nome} recebeu um aumento de 10%`);
        funcionario.salario += (funcionario.salario * 0.10)
    }

    
})

let custoTotal = funcionarios.reduce((total, f) => total + f.salario, 0)

console.log(`O total da folha de pagamento é de R$${custoTotal.toFixed(2)}`);


funcionarios.sort((a, b) => b.salario - a.salario)

console.log('Lista de salarios: ');
funcionarios.forEach((func) => {
    console.log(`${func.nome} - Salario: R$${func.salario.toFixed(2)}`);


})