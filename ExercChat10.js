let produto = ['Chuteira', 'Meiao', 'Caneleira', 'Camsisa', 'Short']

let precoOriginal = [300, 40, 55, 200, 150]



for (let i = 0; i < produto.length; i++) {
    if (precoOriginal[i] > 100) {
        let comDesconto = precoOriginal[i] - (20 / 100) * precoOriginal[i];
        console.log(`Produto ${produto[i]}: novo preço R$ ${comDesconto}`);

    } else if (precoOriginal[i] >= 50 && precoOriginal[i] <= 100) {
        let comDesconto = precoOriginal[i] - (10 / 100) * precoOriginal[i];
        console.log(`Produto ${produto[i]} novo preço R$ ${comDesconto}`);

    } else {
        console.log(`Produto ${produto[i]} NAO entra na promoção`);

    }
}