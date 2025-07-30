const passageiro = ['Davi', 'Rob', 'Laura', 'Maria', 'Babi', 'Jose']

const age = [20, 14, 19, 50, 40, 17]

const temPassagem = [true, true, true, false, false, true]

for (let i = 0; i < passageiro.length; i++) {
    if (age[i] < 18) {
        console.log(`Passageiro ${passageiro[i]} deve ser maior de 18 anos`);

    } else if (!temPassagem[i]) {
        console.log(`Passageiro ${passageiro[i]} deve pagar a passagem`);

    } else {
        console.log(`Passageiro ${passageiro[i]} pode embarcar`);

    }
}

