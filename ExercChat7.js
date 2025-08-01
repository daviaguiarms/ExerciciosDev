const inscritos = ['Davi', 'Laura', 'Brener', 'Heitor', 'Irias', 'Joao']

const confirmacao = [true, false, true, true, false, true]

const idadeInscritos = [20, 19, 14, 16, 22, 17]

const pagouEntra = [true, true, false, true, true, false]

const acompanhado = [false, false, true, true, false, false]

for (let i = 0; i < inscritos.length; i++) {
    if (!confirmacao[i]) {
        console.log(`${inscritos[i]} rejeitado por falta de confirmação`);

    } else if (idadeInscritos[i] < 18) {

        if (!pagouEntra[i]) {
            console.log(`${inscritos[i]} rejeitado por falta de pagamento`);

        } else if (!acompanhado[i]) {
            console.log(`${inscritos[i]} rejeitado por falta de acompanhante`);

        } else {
            console.log(`${inscritos[i]} pode entrar no evento`);

        }

    } else {
        console.log(`${inscritos[i]} pode entrar no evento`);
    }

}