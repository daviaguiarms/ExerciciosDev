const vendedores = ['Davi', 'Laura', 'Brener', 'Heitor', 'Irias', 'Joao'];
const totalVendido = [1700, 1200, 400, 600, 500, 300];
const diasTrabalhados = [3, 4, 6, 5, 3, 2];

for (let i = 0; i < vendedores.length; i++) {
    const nome = vendedores[i];
    const vendas = totalVendido[i];
    const dias = diasTrabalhados[i];

    if (vendas >= 1000) {
        console.log(`Parabéns ${nome}, você recebeu um bônus de R$100!`);
    }

    if (vendas >= 500 && dias >= 4) {
        console.log(`Parabéns ${nome}, você bateu a meta!`);
    } else {
        let faltou = 500 - vendas;
        let diasFaltando = 4 - dias;

        // mensagens específicas
        if (faltou > 0 && diasFaltando > 0) {
            console.log(`${nome} não bateu a meta: faltaram R$${faltou} e ${diasFaltando} dia(s) de trabalho.`);
        } else if (faltou > 0) {
            console.log(`${nome} não bateu a meta: faltaram R$${faltou}.`);
        } else if (diasFaltando > 0) {
            console.log(`${nome} não bateu a meta: trabalhou ${diasFaltando} dia(s) a menos.`);
        }
    }
}
