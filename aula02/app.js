/*************************************************************************** *
 * Objetivo: Manipular entrada e saída de dados para o usúario               *
 * Data: 04/08/2023                                                          *
 * Autor: Ana Luiza                                                          *
 * Versão: 1.0                                                               *
 * ************************************************************************* */

// Import da biblioteca de entrada de dados via teclado
var readline = require('readline');


// Criando um objeto entradaDeDados para ser uma referencia da biblioteca READLINE
var entradaDeDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


// Função de callBack que permite apresentar uma mensagem no terminal, e captar 
// a digitação do usúario
// Obs: O dado digitado chegará para dentro da função através do seu argumento (nomeUsuario)


// Entrada de dados nome
entradaDeDados.question('Digite seu nome: ', function (nomeUsuario) {

    //  Recebe o nome digitado
    var nome = nomeUsuario;


    // Entrada de dados idade
    entradaDeDados.question('Digite sua idade: ', function (idadeUsuario) {
        var idade = idadeUsuario;


        // Entrada de dados telefone
        entradaDeDados.question('Digite seu telefone: ', function (telefoneUsuario) {
            var telefone = telefoneUsuario;

            // Entrada de dados e-mail
            entradaDeDados.question('Digite seu e-mail: ', function (emailUsuario) {
                var email = emailUsuario;

                console.log('---------------------------------------------')

                // Exibe mensagem no terminal com o nome digitado
                console.log('Bem vindo ao aplicativo, ' + nome);
                console.log('Sua idade informada foi: ' + idade);
                console.log('Seu telefone informado foi: ' + telefone);
                console.log('Seu e-mail informado foi: ' + email);

                // Encerra o processamento de entrada de dados
                entradaDeDados.close();
            })
        })
    })
});