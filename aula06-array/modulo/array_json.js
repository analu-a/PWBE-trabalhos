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


const manipulandoArrayJson = function(){
    /*
    Existem diversos tipos de dados para integração
     de tecnologias (XML já é ultrapassado)
    ------------------------------------------
    Exemplo: XML <atributo> valor </atributo>
    ------------------------------------------
    JSON = funciona com estrutura de chaves
    { atributo: valor } -> JSON
    JSON não tem looping só o array
    ------------------------------------------
    O que define um array são as chaves e os indices
    Exemplo:   let listaCores = [
        {id: 1, nome: 'Branco'},
        {id: 2, nome: 'Preto'},
        {id: 3, nome: 'Cinza'},
        {id: 4, nome: 'Rosa'},
        {id: 5, nome: 'Vermelho'},
        {id: 6, nome: 'Azul'}
    ]
    cada virgula é um indice
    Podemos dizer que o Array é uma caixa grande e o JSON 
    são pequenas caixinhas dentro dele

    */

    //Criando um JSON manual
    let contato = {nome: 'José da Silva', telefone:'47727889', email:'jose@gmail.com'}
    let contato2 = {nome: 'Maria da Silva', telefone:'11111111', email:'Maria@gmal.com'}
    let contato3 = {nome: 'Ana da Silva', telefone:'12312312', email:'Ana@gmal.com'}

    let arrayContatos = [contato, contato2, contato3]

    //Criando novos atributos JSON de forma dinâmica
    contato.celular = '978884566'

    contato.data_nascimento = '2000-05-10'
    contato.idade = 23
    // console.log(contato)
    // console.log('Nome: ' + contato.nome)
    // console.log('Telefone: ' + contato.telefone)
    // console.log('Email: ' + contato.email)
    // console.log('Celular: ' + contato.celular)
    // console.log('Data de Nascimento: ' + contato.data_nascimento)
    // console.log('Idade: ' + contato.idade)

    // console.log(arrayContatos)

    // console.log(arrayContatos[0])

    arrayContatos.forEach(function(dados){

      
           console.log('Nome: ' + dados.nome)
           console.log('Telefone: ' + dados.telefone)
           console.log('Email: ' + dados.email)

           //Tratamento para validar a impressão dos valores
           if(dados.celular !=undefined){
            console.log('Celular: ' + dados.celular)
           }
          if (dados.data_nascimento != undefined) {
            console.log('Data de Nascimento: ' + dados.data_nascimento)
          }
          if (dados.idade != undefined) { 
            console.log('Idade: ' + dados.idade)          
          }
          

    })
}

const produtosArrayJson = function(){
    let listaCores = [
        {id: 1, nome_marca: 'Branco'},
        {id: 2, nome_marca: 'Preto'},
        {id: 3, nome_marca: 'Cinza'},
        {id: 4, nome_marca: 'Rosa'},
        {id: 5, nome_marca: 'Vermelho'},
        {id: 6, nome_marca: 'Azul'}
    ]

    let listaMarcas =[
        {id:1, nome: 'Dell'},
        {id:2, nome: 'Lenovo'},
        {id:3, nome: 'Aplle'},
        {id:4, nome: 'Logitech'},
        {id:5, nome: 'Positivo'},
        {id:6, nome: 'Multilaser'},
        {id:7, nome: 'Razer'},
    ]

    let listaCategorias = [
        {id:1, nome: 'Hardware', descricao: 'Hardware'},
        {id:2, nome: 'Periférico', descricao: 'Periférico'},
        {id:3, nome: 'Gamer', descricao: 'Gamer'},
        {id:4, nome: 'Acessórios', descricao: 'Acessórios'},
    ]

    //Cria um objeto do tipo JSON para array  de produtos
    let JSONProdutos = {}

    //Cria um objeto do tipo array para guardar os produtos
    let ARRAYProdutos = []

    //Objeto para criar produtos
    let produto1 = {
         id: 1,
         nome: 'Mouse', 
         descricao: 'Mouse optico com fio',
         categoria: listaCategorias[1],
         marca: listaMarcas[0],
         cor:[
            listaCores[0],
            listaCores[1],
            listaCores[2],
         ] 
    }

    let produto2 = {
        id: 2,
        nome: 'Teclado', 
        descricao: 'Teclado com fio ',
        categoria: listaCategorias[1],
        marca: listaMarcas[3],
        cor:listaCores
           
        
    }

    let produto3 = {
        id: 3,
        nome: 'Monitor', 
        descricao: 'Tela HD 4k ',
        categoria: listaCategorias[3],
        marca: listaMarcas[1],
        cor:[
            listaCores[0],
            listaCores[1]
        ]
           
    }

    
    let produto4 = {
        id: 3,
        nome: 'Gabinete', 
        descricao: 'Gabinete legal',
        categoria: listaCategorias[0],
        marca: listaMarcas[4],
        cor:listaCores   
    }

    //Adicionando produtos no array de produtos
    ARRAYProdutos.push(produto1)
    ARRAYProdutos.push(produto2)
    ARRAYProdutos.push(produto3)
    ARRAYProdutos.push(produto4)

    //Adiciona o atributo produto e coloca o array de produtos
    JSONProdutos.produto = ARRAYProdutos

    //Adiciona o atributo count e coloca a qtd de produtos
    JSONProdutos.count = ARRAYProdutos.length

    //200 em uma API significa que a requisição foi executada com sucesso
    //404 Erro do cliente, talvez você tenha digitado o site errado
    //500 o servidor tá fora do ar 
    JSONProdutos.status = 200

    return JSONProdutos

}

const mostrarProdutos = function(listaMarcas, listaCategorias,listaCores, JSONProdutos){

    forEach(function(dados){
        console.log('Nome' + dados.nome)
        console.log('Descrição' + dados.nome)
        console.log('Nome' + dados.nome)
        console.log('Nome' + dados.nome)
        console.log('Nome' + dados.nome)

    })
    


}



// produtosArrayJson()
// manipulandoArrayJson()

// console.log(filtrarProduto('ana'))
// percorrendoArray()