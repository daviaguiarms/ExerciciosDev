const nomeHospedes = ['Davi', 'Laura', 'Brener', 'Heitor', 'Irias', 'Joao']

const diasReservados = [7, 5, 2, 4, 1, 4]

const pagouReserva = [true, true, true, true, true, false]

const acompanhante = [true, false, false, false, true, false]

const idade = [20, 19, 15, 13, 18, 12]

for (let i = 0; i < nomeHospedes.length; i++) {
    if (!pagouReserva[i]) {
        console.log(`${nomeHospedes[i]}: reserva inválida`);

    } else if (diasReservados[i] < 2) {
        console.log(`${nomeHospedes[i]}: precisa reservar mais noites`);

    } else if (idade[i] < 18 && !acompanhante[i]) {
        console.log(`${nomeHospedes[i]}: so pode entrar com acompanhante`);

    } else {
        console.log(`${nomeHospedes[i]}: reserva concluida`);

    }
}