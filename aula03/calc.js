/* ************************************************************** *
* Objetivo: Fazer uma calculadora, receber números e realizar     * 
calculos                                                          *
* Data: 11/08/2023                                                *
* Autor: Ana Luiza                                                *
* Versão: 1.0                                                     *
* *************************************************************** */ 

var readline = require('readline')
var entradaDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

entradaDados.question('Qual Operação você vai querer utilizar?', function(operacoes){
let escolha = operacoes
    entradaDados.question('Digite o primeiro número: ', function(numero1){

        entradaDados.question('Digite o segundo número: ', function(numero2){

            switch (escolha){

                case 'X':
                    numero1 * numero2

                    case '+':
                        numero1 + numero2

                        case '-':
                            numero1 - numero2

                            case '':
                                nu
            }
        })
    })
})

 

    

