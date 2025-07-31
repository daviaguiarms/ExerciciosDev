const movies = ['Stich', 'Tarzan', 'Barbie', 'SuperMan', 'Batman']

const notas = [9, 4, 6, 8, 10]

for (let i = 0; i < movies.length; i++) {
    if (notas[i] >= 8) {
        console.log(`O filme ${movies[i]} foi bem avaliado com nota ${notas[i]}`);

    } else {
        console.log(`O filme ${movies[i]} teve uma avaliação mediana com nota ${notas[i]}`);

    }
}