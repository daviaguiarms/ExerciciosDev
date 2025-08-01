const nomeFunci = ['Davi', 'Laura', 'Brener', 'Heitor', 'Irias', 'Joao']

const horasTrabalhadas = [60, 45, 30, 25, 40, 35]

const metaHoras = [40, 40, 40, 40, 40, 40]

const recebeuBonus = [true, true, false, false, false, false]

for (let i = 0; i < nomeFunci.length; i++) {
    if (recebeuBonus[i]) {
        console.log(`O funcionário ${nomeFunci[i]} ja recebeu bonus antes`);

    } else if (horasTrabalhadas[i] >= metaHoras[i]) {
        console.log(`O funcionario ${nomeFunci[i]} recebeu um bonus de 200 reais pela meta batida`);

    } else {
        const horasFaltando = metaHoras[i] - horasTrabalhadas[i];
        console.log(`Falta ${horasFaltando} horas para o funcionario ${nomeFunci[i]} atingir a meta`);

    }
}