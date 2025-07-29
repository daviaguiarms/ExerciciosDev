let nomes = ['pa', 'pe','pe', 'pi', 'po']

let idades = [12, 15, 22, 17, 19]

for (let i = 0; i < nomes.length; i++){
    if(idades[i] < 18){
        console.log(`Passageiro ${nomes[i]}  NAO pode embarcar`)
    } else {
        console.log(`Passageiro ${nomes[i]} pode embarcar`)
    }
}

let contagem = 5 

while(contagem > 0){
    console.log(`Vai sair em ${contagem} segundos`)
    contagem--;
}

console.log('Onibus partiu...')