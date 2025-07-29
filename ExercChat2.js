let nomes = ['Robin', 'Davi', 'Gugu']

let idades = [18, 20, 16]

let peso = [26, 21, 14]

for (let i = 0; i < nomes.length; i++) {
    if (idades[i] >= 18 && peso[i] <= 23) {
        console.log(`Passageiro ${nomes[i]} pode embarcar`);
    } else {
        console.log(`Passageiro ${nomes[i]} NAO pode embarcar`);

    }
}

let contador = 5

while (contador > 0) {
    console.log(`Onibus saindo em ${contador} segundos`);
    contador--;
}

console.log("Onibus partiu.....");
