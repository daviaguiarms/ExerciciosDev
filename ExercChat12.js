const cliente = ['Davi', 'Cleber', 'Bruno', 'Gugu']

const vlrTotal = [5000, 200, 750, 499]

for (let i = 0; i < cliente.length; i++) {
    if (vlrTotal[i] >= 1000) {
        console.log(`${cliente[i]} é cliente vip`);

    } else if (vlrTotal[i] >= 500 && vlrTotal[i] < 1000) {
        console.log(`${cliente[i]} é cliente fidelidade comum`);

    } else {
        console.log(`${cliente[i]} ainda nao tem beneficios`);

    }
}