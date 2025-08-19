const agenda = [
    { nome: 'Davi', telefone: 339876478 },
    { nome: 'Robin', telefone: 319555474 },
    { nome: 'Flavio', telefone: 329876477 },
    { nome: 'Carlos', telefone: 359876471 },
    { nome: 'Joao', telefone: 399234479 },
    { nome: 'Jose', telefone: 389456472 }
]


const addContato = (name, tel) => {
    agenda.push({ nome: name, telefone: tel })
}


const editTel = (person, newTel) => {
    let encontrado = false
    agenda.forEach((contato) => {
        if (person === contato.nome) {
            encontrado = true
            contato.telefone = newTel
        }
    })

    if (!encontrado) {
        console.log('Esse contato não existe');

    }
}


const removerPorNome = (quem) => {
    let index = agenda.findIndex(contato => contato.nome === quem)
    if (index !== -1) {
        agenda.splice(index, 1)
    } else {
        console.log('Esse contato nao foi encontrado');

    }
}

const listarTodos = () => {
    agenda.forEach((todos) => {
        console.log(`Nome: ${todos.nome} - Telefone: ${todos.telefone}`);
        
    })
}


addContato('Gica', 32444345665)
editTel('Davi', 777777777)
removerPorNome('Jose')
console.log('Lista de contatos: ');
listarTodos()
console.log(agenda);



