/* ************************************************************** *
* Objetivo: Arquivo de funções para calcular uma tabuada          *
* Data: 01/09/2023                                                *
* Autor: Ana Luiza                                                *
* Versão: 1.0                                                     *
* *************************************************************** */ 

/*Outro jeito de validar valor maior e menor
let valorAuxiliar 
 valorAuxiliar = contInicial
contInicial = contFinal
 contFinal = valorAuxiliar
*/ 

//Outro modelo de função
const calcularTabuada = function(valorTabuada, contadorInicial, contadorFinal){

    //Entrada de dados que chegam pelos argumentos
    let tabuada = String(valorTabuada).replace(',','.')
    let contInicial = String(contadorInicial).replace(',','.')
    let contFinal = String(contadorFinal).replace(',','.')
    
    let resultado
    let status = false
   

    //Validação para organizar valores menores e maiores
    if(contFinal < contInicial){
        contFinal = contadorInicial
        contInicial = contadorFinal
    }

    if(tabuada == '' || contInicial == '' || contFinal == ''){
        console.log('ERRO: é obrigatório a entrada de todos os dados')
    } else if(isNaN(tabuada) || isNaN(contInicial) || isNaN(contFinal)){
        console.log('ERRO: É obrigatório a entrada apenas de números')
    } else{

        contInicial = Number(contInicial)
        contFinal = Number(contFinal)
        tabuada = Number(tabuada)

        //Exemplo usando while
        while(contInicial <= contFinal){

            resultado = tabuada*contInicial
            console.log(`${tabuada} X ${contInicial} = ${resultado}`)
            contInicial++

            status = true
        }
    }

    return status

}

console.log(calcularTabuada(0,10))
