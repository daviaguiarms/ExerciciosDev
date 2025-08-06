const rankingVendedores = [
    { Nome: 'Davi', vendas: 6000 },
    { Nome: 'Laura', vendas: 4000 },
    { Nome: 'Brener', vendas: 3200 },
    { Nome: 'Heitor', vendas: 1500 },
    { Nome: 'Irias', vendas: 2000 },
    { Nome: 'Joao', vendas: 2500 }
]

for (let i = 0; i < rankingVendedores.length; i++) {
    if (rankingVendedores[i].vendas > 5000) {
        console.log(`${rankingVendedores[i].Nome}: SUPER VENDEDOR`);

    } else if (rankingVendedores[i].vendas >= 3000) {
        console.log(`${rankingVendedores[i].Nome}: Vendedor destaque`);

    } else {
        let faltou = 3000 - rankingVendedores[i].vendas
        console.log(`Faltou ${faltou} vendas para o vendedor ${rankingVendedores[i].Nome} atingir a meta`);

    }
}

rankingVendedores.sort((a, b) => b.vendas - a.vendas)

for (let x = 0; x < rankingVendedores.length; x++) {
    console.log(`${rankingVendedores[x].Nome} ficou em ${x + 1} lugar com ${rankingVendedores[x].vendas}`);


}

