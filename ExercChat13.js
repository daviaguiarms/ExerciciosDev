const pessoas = ['Davi', 'Laura', 'Pepe']

const confirm = [true, true, false]

for (let i = 0; i < pessoas.length; i++) {
    if (confirm[i]) {
        console.log(`${pessoas[i]} vai comparecer ao evento`);

    } else {
        console.log(`${pessoas[i]} NAO vai comparecer ao evento`);

    }
}