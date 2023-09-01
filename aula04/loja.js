/* ************************************************************** *
* Objetivo: Fazer um programa que irá ajudar uma loja a fazer suas*
vendas                                                            *
* Data: 25/08/2023                                                *
* Autor: Ana Luiza                                                *
* Versão: 1.0                                                     *
* *************************************************************** */ 


var calculoPreco = require('./modulo/calculoPreco.js')

var readline = require('readline')
var entradaDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

// Informações do usuário

entradaDados.question('Olá, qual o valor do produto?' , function(Informacoes){
let preco = Informacoes.replace(',' , '.')


    entradaDados.question('Qual o código de compra?', function (cod){
        let codigo = cod

        preco = Number(preco)

   
        

        if(preco == "" || isNaN(preco)){
            console.log("Digite um valor válido!!!")
        }else{
        
            resultado = calculoPreco.calculo(codigo, preco)
            if(resultado){
                console.log(resultado)
            }
   
        }
   entradaDados.close()
    })

})



// function calculo (preco, total){
//     let resultado = total
//     let escolha = preco



// }