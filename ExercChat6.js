let nome = ['Davi', 'Carlos', 'Laura', 'Flavia', 'Babi']

let idades = [20, 16, 19, 22, 17]

let eEstudante = [true, true, true, false, false]

for (let i = 0; i < nome.length; i++) {
    if (idades[i] >= 18 || eEstudante[i]) {
        console.log(`${nome[i]} pode entrar no evento`);

    } else {
        console.log(`${nome[i]} NAO pode entra no evento`);
    }

}