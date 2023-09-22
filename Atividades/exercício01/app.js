/* ************************************************************** *
* Objetivo: Fazer uma calculadora IMC e classificar os valores    *
* Data: 15/09/2023                                                *
* Autor: Ana Luiza                                                *
* Versão: 1.0                                                     *
* *************************************************************** */ 

var imc = require('./modulo/imc.js')
var readline = require('readline')
var entradaDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

entradaDados.question('Digite seu peso: ' , function(valorPeso){
    let peso = valorPeso

    entradaDados.question('Digite sua altura: ', function(valorAltura){
        let altura = valorAltura
        let mostrar =  imc.calculoImc(peso,altura)
        let mostrarValidacao =  imc.validacaoPeso(mostrar)
    
    console.log(mostrar.toFixed(2))
    console.log(mostrarValidacao)

   


    entradaDados.close()
    })
    
})

