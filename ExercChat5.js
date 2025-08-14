const personagem = [
    { nome: 'Hulk', nivel: 10, xp: 80 },
    { nome: 'Bataman', nivel: 8, xp: 1000 },
    { nome: 'SuperMan', nivel: 6, xp: 80 },
    { nome: 'Pantera', nivel: 3, xp: 1000 },
    { nome: 'Spider', nivel: 6, xp: 3000 },
    { nome: 'Magic', nivel: 10, xp: 80 }
]

personagem.forEach((heroi) => {
    
    while (heroi.nivel < 10 && heroi.xp >=  heroi.nivel * 100) {
        console.log(`${heroi.nome} subiu de nivel`);
        heroi.xp -= 100 * heroi.nivel
        heroi.nivel += 1
    }

    if (heroi.nivel >= 10) {
        console.log(`O ${heroi.nome} atingiu o nivel maximo`);

    } 
})

for (let hero of personagem) {
    console.log(`${hero.nome} - Nivel: ${hero.nivel} - XP: ${hero.xp}`);

}