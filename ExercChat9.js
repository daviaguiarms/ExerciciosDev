let nomePessoa = ['Gica', 'Enzo', 'Davi', 'Laura']

let idade = [13, 18, 20, 19]

let temCarteira = [false, false, true, true]

for (let i = 0; i < nomePessoa.length; i++) {
    if (idade[i] >= 18 && temCarteira[i]) {
        console.log(`${nomePessoa[i]} pode dirigir`);

    } else {
        console.log(`${nomePessoa[i]} NAO pode dirigir`);

    }
}

