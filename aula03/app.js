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
 ----------------------
 |  Operadores lógicos |
 |---------------------|
 |E   AND   &&         |
 |OU  OR    ||         |
 |Negação  NOT  !      |
 ---------------------
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
            var nota1 = Number(bimestre1)

            // Registro nota 2
            entradaDados.question('Digite a nota do seu 2º bimestre: ', function(bimestre2){
                var nota2 = Number(bimestre2)

                  // Registro nota 3
                  entradaDados.question('Digite a nota do seu 3º bimestre: ', function(bimestre3){
                     var nota3 = Number(bimestre3)

                     // Registro nota 4
                    entradaDados.question('Digite a nota do seu 4º bimestre: ', function(bimestre4){
                        var nota4 = Number(bimestre4)

                        var media = (nota1 + nota2 + nota3 + nota4)/4

                    console.log(`Olá,${nome}`)
                    console.log(`Nota 1° bimestre:${nota1}`)
                    console.log(`Nota 2° bimestre:${nota2}`)
                    console.log(`Nota 3° bimestre:${nota3}`)
                    console.log(`Nota 4° bimestre:${nota4}`)
                    console.log(`Sua média é:${media}`)

                        if(nota1 == '')

                    entradaDados.close()
  
                })  
           
            })

        })
   
    })

})

