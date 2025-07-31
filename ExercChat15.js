const entregadores = ['Davi', 'Jorge', 'Gui', 'Fab', 'Joao']

const km = [50, 25, 18, 10, 36]

const foiEntregue = [true, true, false, true, false]

for (let i = 0; i < entregadores.length; i++) {
    if (foiEntregue[i]) {
        console.log(`O entregador ${entregadores[i]} concluiu a entrega e percorreu ${km[i]} km`);

    } else {
        console.log(`O entregador ${entregadores[i]} NAO concluiu a entrega e percorreu ${km[i]} km`);

    }
}