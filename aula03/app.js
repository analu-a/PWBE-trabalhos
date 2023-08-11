/* ************************************************************** *
* Objetivo: Receber e manipular notas escolares e calcular a média*
* Data: 04/08/2023                                                *
* Autor: Ana Luiza                                                *
* Versão: 1.0                                                     *
* *************************************************************** */ 

/* 
 ---------------------------------------------------------
 |*var -->Permite criar uma variavel de escopo global,   |
 |ou seja irá existir em todo o projeto                  |
 |-------------------------------------------------------|
 |*let --> permite criar uma variavel de ecopo local     |
 |(bloco), ou seja, irá existir apenas dentro            |
 |daquele bloco                                          |
 |-------------------------------------------------------|
 |*const --> Permite criar uma constante que pode ser de |
 |escopo local ou global, sempre utilizamos              |
 |em situações onde não haverá mudança de conteúdo       |
 ---------------------------------------------------------
 */


/*
 ----------------------------------------------------------
 |             Operadores de comparação                   | 
 |--------------------------------------------------------|
 |==     Comparação de conteúdos EX: 1==1 EX: 1=='1'      |                      
 |<      Menor                                            |
 |>      Maior                                            |
 |<=     Menor ou igual                                   |
 |>=     Maior ou igual                                   |
 |!=     Diferente                                        |
 |===    Comparação de conteúdos iguais e tipo de dados   |
 |       iguais  EX: 1===1 EX: 1==='1'                    |
 |!==    Comparação de conteúdos diferentes e tipos de    |
 |       Dados iguais                                     |
 |==!    Comparação de conteúdos iguais e dados diferentes|
 ----------------------------------------------------------
 */

/*
 -----------------------
 |  Operadores lógicos |
 |---------------------|
 |E   AND   &&         |
 |OU  OR    ||         |
 |Negação  NOT  !      |
 -----------------------
 --------------------------------------------------------
 |Conversão de String para número                       |
 |------------------------------------------------------|
 |parseInt() - Converte uma String para números inteiros|
 |                                                      |
 |parseFloat() - Converte uma String para números reais |
 |                                                      |
 |Number() - Converte uma String para número inteiro ou |
 |real conforme a necessidade                           |
 --------------------------------------------------------
 */



// Import da biblioteca de dados via teclado
var readline = require('readline')

// Criando um objeto entradaDeDados para ser uma referencia da biblioteca READLINE
var entradaDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
// Registro do nome

entradaDados.question('Digite seu nome: ', function(nomeUsuario){
    let nome = nomeUsuario


        // Registro nota 1
        entradaDados.question('Digite a nota do seu 1º bimestre: ', function(bimestre1){
            let nota1 = bimestre1.replace(',','.')

            // Registro nota 2
            entradaDados.question('Digite a nota do seu 2º bimestre: ', function(bimestre2){
                let nota2 = bimestre2.replace(',','.')

                  // Registro nota 3
                  entradaDados.question('Digite a nota do seu 3º bimestre: ', function(bimestre3){
                     let nota3 = bimestre3.replace(',','.')

                     // Registro nota 4
                    entradaDados.question('Digite a nota do seu 4º bimestre: ', function(bimestre4){
                        //replace - serve para que o computador reconheça tanto . quanto , 
                        let nota4 = bimestre4.replace(',','.')


                       //Validação para a entrada de dados
                        if(nota1 == '' || nota2 == '' ||nota3 == '' || nota4 == '' ){
                            console.log('ERRO: É obrigatório informar todas as notas')

                            //Validação para barrar dados não númericos
                            //isNumber() - Verifica se a variavel é um número de acordo com o tipo (EX: se é uma String ou não)
                            //isNaN() - Verifica se a variavel é uma número, porem pelo conteúdo
                        } else if (isNaN(nota1) || isNaN(nota2) || isNaN(nota3) || isNaN(nota4)){

                            console.log('ERRO: Digitar apenas números')

                           //Validação de permissão de apenas números entre 0 e 10 
                        } else if(nota1 > 10 || nota1 < 0 || nota2 > 10 ||  nota2 < 0 || nota3 > 10 ||  nota3 < 0 || nota4 > 10 || nota4 < 0){
                            console.log('ERRO: Registre apenas números de 0 a 10')

                        } else {

                            var media = (Number(nota1) + Number(nota2) + Number(nota3) + Number(nota4))/4

                            //toUpperCase - Deixa todas as letras maiusculas
                            //toLowerCase - Deixa as letras minusculas
                            // toFixed() serve para ajustar a quantidade de casas decimais mostradas 
                            console.log(`Sua média é:${media.toFixed(1)}`)
                        }

                    entradaDados.close()
  
                })  
           
            })

        })
   
    })

})

