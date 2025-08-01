const products = ['Mouse', 'Teclado', 'Monitor', 'Notebook', 'MousePad'];

const quantity = [5, 2, 4, 0, 1]

for (let i = 0; i < products.length; i++) {
    if (quantity[i] === 0) {
        console.log(`O produto ${products[i]} esta ESGOTADO`);

    } else if (quantity[i] < 3) {
        console.log(`O produto ${products[i]} precisa de reposição`);

    }
}

let question = prompt("Deseja adicionar um novo produto (sim/não)?")

while (question === 'sim') {
    let newName = prompt('Digite o nome do produto')
    let newQuantity = Number(prompt("Digite a quantidade do novo produto"))

    products.push(newName)
    quantity.push(Number(newQuantity))

    question = prompt("Deseja adicionar outro produto (sim/não)?")

}

console.log(products);
console.log(quantity);



