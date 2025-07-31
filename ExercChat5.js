const vendedores = ['Davi', 'Laura', 'Brener', 'Heitor', 'Irias']

const qtdVendas = [30, 25, 13, 18, 0]

const vlrTotalVendido = [300, 250, 130, 180, 0]

const meta = [200, 200, 200, 200, 200]

for (let i = 0; i < vendedores.length; i++) {
    if (vlrTotalVendido[i] >= meta[i]) {
        console.log(`${vendedores[i]} bateu a meta com sucesso e receberá um bônus`);

    } else {
        let chegarMeta = meta[i] - vlrTotalVendido[i];
        console.log(`Falta ${chegarMeta} reais para o vendedor ${vendedores[i]} alcançar a meta `);

    }

    if (qtdVendas[i] === 0) {
        console.log(`${vendedores[i]} fez 0 vendas esse mês`);

    }
}