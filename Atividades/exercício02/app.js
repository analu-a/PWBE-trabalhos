/* ************************************************************** *
* Objetivo: Calcular médias escolares e mostrar situação do aluno *
* Data: 22/09/2023                                                *
* Autor: Ana Luiza                                                *
* Versão: 1.0             


Nome do aluno;
● Nome do professor;
● Sexo do professor e do aluno;
● Nome do curso;
● Nome da disciplina;
● 4 Notas que podem ser entre 0 e 100;*
* *************************************************************** */

var media = require('./modulo/media.js')
var readline = require('readline')

var entradaDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

let notaExame

entradaDados.question('Nome do aluno(a): ', function (nomeAluno) {
    let nome = nomeAluno

    entradaDados.question('Sexo do aluno(a): ', function (generoAluno) {
        let sexoAluno = generoAluno

        entradaDados.question('Nome do professor(a): ', function (professor) {
            let nomeProfessor = professor

            entradaDados.question('Sexo do professor(a): ', function (genero) {
                let sexoProfessor = genero

                entradaDados.question('Nome do curso(a): ', function (curso) {
                    let nomeCurso = curso


                    entradaDados.question('Nome da disciplina: ', function (disciplina) {
                        let nomeDisciplina = disciplina


                        entradaDados.question('Nota 1: ', function (valor1) {
                            let nota1 = valor1

                            entradaDados.question('Nota 2: ', function (valor2) {
                                let nota2 = valor2

                                entradaDados.question('Nota 3: ', function (valor3) {
                                    let nota3 = valor3

                                    entradaDados.question('Nota 4: ', function (valor4) {
                                        let nota4 = valor4

                                        if(nota1 <0 || nota1 >100 || nota2 <0 || nota2 >100 || nota3 <0 || nota3 >100 || nota4 <0 || nota4 >100  ){
                                            console.log('ERRO: Digite valores entre 0 e 100')
                                        } else{

                                            let mostrarMedia = media.calculoMedia(nota1, nota2, nota3, nota4)
                                            console.log(mostrarMedia)

                                        }



                                            // if(resultadoMedia >= 50 && resultadoMedia <= 69){
                                            //    console.log('Que pena, você ficou em exame, digite sua nota: ')

                                            //    notaExame.calcularValorExame
                                            // }



                                    })
                                })
                            })
                        })
                    })
                })
            })
        })
    })
})

