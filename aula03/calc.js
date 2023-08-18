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

var readline = require('readline')
var entradaDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

//Entrada de dados
entradaDados.question('Qual Operação você vai querer utilizar? [Soma(+), Subtração(-), Multiplicação(X), Divisão]', function(operacoes){
let escolha = operacoes.toLowerCase()
    entradaDados.question('Digite o primeiro número: ', function(numero1){
        let n1 = numero1.replace(',','.')
        entradaDados.question('Digite o segundo número: ', function(numero2){
            let n2 = numero2.replace(',','.')

            //Transformando em números
            n1 = Number(n1)
            n2 = Number(n2)
          
            //Condicionais/resolvendo bugs
            if(operacoes != '+' && operacoes != '-' && operacoes != 'x' && operacoes != '/'){

                console.log('Digite apenas operadores válidos!')

            }else if (isNaN(n1) || isNaN(n2) || n1 == '' || n2 == ''){
            console.log('Digite apenas números! \n Tente novamente')

         } else{

            //Calculos
            switch (escolha){

                case 'x':   

                
                    let multipica = n1 * n2
                    console.log('O resultado é: ' + multipica)
                break

                    case '+':
                        let soma = n1 + n2
                        console.log('O resultado é: ' + soma)
                        break

                        case '-':
                            let subtrair = n1 -  n2
                            console.log('O resultado é: ' + subtrair)
                            break

                            case '/':
                                //Impede de dividir por zero
                                if(escolha == '/' && n2 == 0){

                                    console.log('Desculpe, zero não é divisivel')
                                    console.log('Tente novamente!')

                                } else{
                                    let dividir = n1 / n2
                                    console.log('O resultado é: ' + dividir)
                                    break
                                }

                               
                                
            }
        }
            
            entradaDados.close()

        })
    })
})

 

    

