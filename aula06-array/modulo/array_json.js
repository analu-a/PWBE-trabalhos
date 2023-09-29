/* ************************************************************** *
* Objetivo: aprender a trabalhar com estruturas de dados Array e  *
* JSON                                                            *
* Data: 29/09/2023                                                *
* Autor: Ana Luiza                                                *
* Versão: 1.0                                                     *
* *************************************************************** */ 

//[ ] -> Representa a estrutura array
//{ } -> Representa a estrutura JSON

// Criando um array forma manual
const introducaoArray = function(){
    let listaDeNomes = ['José', 'Ana', 'Luiz', 'Maria', 'Carlos', 'Eduardo']

    // Exibe os dados do array
    console.log(listaDeNomes)

    //Exibe os dados do array em formato de tabela
    console.table(listaDeNomes)

    // Retorna a quantidade de elementos de um array
    console.log(listaDeNomes.length)

    //Adiciona elementos ao final da lista
    listaDeNomes.push('Roberto')

    //Adiciona elementos no inicio da lista
    listaDeNomes.unshift('Ricardo')
    
    //Remove o ultimo elemento do array
    listaDeNomes.pop()
    
    //Remove o primeiro elemento do array
    listaDeNomes.shift()
    console.table(listaDeNomes)

    //Remove um elemento baseado no indice(posição), podendo definir a quantidade de itens a serem excluídos
    // EX: splice(2,3) -> o 2 é o indice(posição) e o 3 é referente a quantidade de itens
    listaDeNomes.splice(2,1)
    console.table(listaDeNomes)

    listaDeNomes.push('André da Silva', 'Ricardo da Silva', 'joão da Silva', 10)
    console.log(listaDeNomes)

    console.log(typeof(listaDeNomes[8]))

}

const percorrendoArray = function(){
    let listaDeProdutos = ['Mouse', 'Teclado', 'Monito', 'Impressora', 'Mouse Pad', 'Gabinete', 'Processador', 'HD']

    //while
    // let cont = 0
    // while(cont < listaDeProdutos.length){
    //     console.log('Nome do produto ' + listaDeProdutos[cont])
    //     cont +=1
    // }

    //FOR
//     for(let cont = 0; cont < listaDeProdutos.length; cont++){
//         console.log('Nome do produto ' + listaDeProdutos[cont])
//     }
// }

//FOREACH
// listaDeProdutos.forEach(function(produto){

//     console.log('Nome do produto ' + produto)
// })

//Retorna o indice(posição) do elemento que foi encontrado
//Caso não exista o item buscado retorna -1
console.log(listaDeProdutos.indexOf('Impressora'))

//Retorna verdadeiro ou falso
console.log(listaDeProdutos.includes('Mouse'))


}

const filtrarProduto = function(nomeProduto){
    let listaDeProdutos = ['Mouse', 'Teclado', 'Monito', 'Impressora', 'Mouse Pad', 'Gabinete', 'Processador', 'HD']
    let nome = String(nomeProduto)

    let status = false

    listaDeProdutos.forEach(function(produto){
        if(produto.toUpperCase() == nome.toUpperCase()){
            status = true
        }
       
    })
    return status
}
console.log(filtrarProduto('ana'))

// percorrendoArray()