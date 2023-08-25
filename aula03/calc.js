/* ************************************************************** *
* Objetivo: Fazer uma calculadora, receber números e realizar     * 
calculos                                                          *
* Data: 11/08/2023                                                *
* Autor: Ana Luiza                                                *
* Versão: 1.0                                                     *
* *************************************************************** */ 

/* Para caso apareça um undefined:
if(resultado != undefined)
console.log('resultado')
*/


//Import da biblioteca de calculos matemáticos
var calculosMatematicos = require('./modulo/calculosMatematicos.js')

var readline = require('readline')
var entradaDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

//Entrada de dados
entradaDados.question('Qual Operação você vai querer utilizar? [Soma(+), Subtração(-), Multiplicação(X), Divisão(/)]', function(operacoes){
let escolha = operacoes.toLowerCase()
    entradaDados.question('Digite o primeiro número: ', function(numero1){
        let n1 = numero1.replace(',','.')
        entradaDados.question('Digite o segundo número: ', function(numero2){
            let n2 = numero2.replace(',','.')

           
            //Condicionais/resolvendo bugs
            //Impede que sejam colocados caracteres diferentes das operações lógicas
            if(operacoes != '+' && operacoes != '-' && operacoes != 'x' && operacoes != '/'){

                console.log('Digite apenas operadores válidos!')

                //Impede que sejam digitados algo diferente de números ou impede que fique vazio sem números
            }else if (isNaN(n1) || isNaN(n2) || n1 == '' || n2 == ''){
            console.log('Digite apenas números! \n Tente novamente')

         } else{

             //Transformando em números
             n1 = Number(n1)
             n2 = Number(n2)
           
            
            resultado = calculosMatematicos.calculadora(n1, n2, operacoes)
            if(resultado)
                console.log(resultado)

            entradaDados.close()

            
    
         }
})

})
})


        
    

