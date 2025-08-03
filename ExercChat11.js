const eleitores = ['Davi', 'Laura', 'Brener', 'Heitor', 'Irias', 'Joao']

const ageEleitores = [20, 19, 13, 15, 19, 16]

const temTitulo = [true, true, false, false, false, true]

const votou = [true, false, false, false, false, true]

for (let i = 0; i < eleitores.length; i++) {
    if (ageEleitores[i] < 16) {
        console.log(`${eleitores[i]} deve ter mais de 16 anos para votar`);

    } else if (!temTitulo[i]) {
        console.log(`${eleitores[i]} deve ter titulo de eleitor para votar`);

    } else if (votou[i]) {
        console.log(`${eleitores[i]} ja fez o seu voto`);

    } else {
        console.log(`${eleitores[i]} pode votar`);

    }

}