const nomePassageiro = ['Davi', 'Laura', 'Brener', 'Heitor', 'Irias', 'Joao']

const age = [20, 19, 13, 15, 19, 12]

const temPassagem = [true, true, true, false, false, true]

const temDocumento = [true, true, true, true, false, false]

const acompanhado = [false, false, true, false, false, false]

for (let i = 0; i < nomePassageiro.length; i++) {
    if (age[i] >= 18 && temDocumento[i] && temPassagem[i]) {
        console.log(`O passageiro ${nomePassageiro[i]} pode embarcar`);
    } else if (age[i] < 18 && temDocumento[i] && temPassagem[i] && acompanhado[i]) {
        console.log(`O passageiro ${nomePassageiro[i]} pode embarcar com acompanhante`);

    } else {
        console.log(`O passageiro ${nomePassageiro[i]} NAO pode embarcar`);

    }
}