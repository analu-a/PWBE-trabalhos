/* ************************************************************** *
* Objetivo: Realizar o calculo de um determinada tabuada          *
* Data: 01/09/2023                                                *
* Autor: Ana Luiza                                                *
* Versão: 1.0                                                     *
* *************************************************************** */ 

var calculoTabuada = require('./modulo/calculoTabuada.js')
var readline = require('readline')

var entradaDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

entradaDados.question('Digite uma tabuada: ', function(valorTabuada){
    let tabuada = valorTabuada
    
    entradaDados.question('digite o contador inicial: ', function(valorInicial){
        let contador = valorInicial

        entradaDados.question('Digite o contador final: ', function(valorFinal){
            let contadorFinal = valorFinal

//Chama a função da tabuada encaminhando os valores que o usuário digitou
            console.log(calculoTabuada.calcularTabuada(tabuada, contador, contadorFinal))
        })
    })
})

