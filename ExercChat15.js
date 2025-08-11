const ranking = [
    { Nome: 'Davi', vendas: 400, meta: 100 },
    { Nome: 'Laura', vendas: 400, meta: 100 },
    { Nome: 'Brener', vendas: 50, meta: 100 },
    { Nome: 'Heitor', vendas: 70, meta: 100 },
    { Nome: 'Irias', vendas: 200, meta: 100 },
    { Nome: 'Joao', vendas: 25, meta: 100 }
]


const bonus = (indice) => {
    if (ranking[indice].vendas >= ranking[indice].meta) {
        ranking[indice].vendas += ranking[indice].vendas * 0.10
        console.log(`${ranking[indice].Nome} ganhou 10% de bonus e agora tem ${ranking[indice].vendas} em vendas`);

    } else {
        console.log(`${ranking[indice].Nome} tem ${ranking[indice].vendas} em vendas`);
    }
}

for (let i = 0; i < ranking.length; i++) {
    bonus(i)
}

ranking.sort((a, b) => b.vendas - a.vendas);
 let soma = 0
for (let x = 0; x < ranking.length; x++) {
    console.log(`${ranking[x].Nome} ficou em ${x + 1} lugar com ${ranking[x].vendas} vendas`);
   
    soma += ranking[x].vendas
}

let media = soma / ranking.length;
console.log(`À media de vendas é ${media}`);

