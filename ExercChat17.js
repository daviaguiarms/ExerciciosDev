const hospedes = ['Davi', 'Joao', 'Juca', 'Brener', 'Heitor']

const qtdNoites = [7, 3, 5, 2, 6]

const tipoQuarto = ['luxo', 'standard', 'simples', 'simples', 'standard']

const pgtConfirm = [true, true, false, true, false]

for (let i = 0; i < hospedes.length; i++) {
    if (pgtConfirm[i]) {
        console.log(`A reserva foi confirmada para o hospede ${hospedes[i]}, noites: ${qtdNoites[i]}, tipo do quarto: ${tipoQuarto[i]}`);

    } else {
        console.log(`A reserva de ${hospedes[i]} foi cancelada por motivos de falta de pagamento`);

    }

}