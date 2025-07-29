let nome = ['Davi', 'Jorge', 'jose', 'Joao']

let idades = [20, 22, 16, 30]

let boolean = [true, false, false, true]

for (let i = 0; i < nome.length; i++) {
    if (idades[i] >= 18 && boolean[i]) {
        console.log(`Passageiro ${nome[i]} pode embarcar`);

    } else {
        console.log(`Passageiro ${nome[i]} NAO pode embarcar`);

    }
}

let c = 5

while (c > 0) {
    console.log(`Onibus saindo em ${c} segundos`);
    c--;
}

console.log('Onibus partiu...');
