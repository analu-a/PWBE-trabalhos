const calculoMedia = function (valor1,valor2,valor3,valor4){
    let nota1 = String(valor1).replace(',','.')
    let nota2 = String(valor2).replace(',','.')
    let nota3 = String(valor3).replace(',','.')
    let nota4 = String(valor4).replace(',','.')
    let resultadoMedia

    resultadoMedia = (Number(nota1) + Number(nota2) + Number(nota3) + Number(nota4)) / 4

    return resultadoMedia

}

const situacaoAluno = function ( resultadoMedia){

   let statusAluno

    if(resultadoMedia > 0 && resultadoMedia < 50){
        statusAluno = 'Reprovado'
    } else if(resultadoMedia >69 && resultadoMedia <100){
        statusAluno = 'Aprovado'
    } 
    return statusAluno
}

const calcularValorExame = function (valorExame, resultadoMedia){
    let notaExame = String(valorExame).replace(',','.')
    let novaMedia
    resultadoMedia = Number(resultadoMedia)

       novaMedia = (resultadoMedia + Number(notaExame)) / 2

       return novaMedia
    }

    const situacaoExame = function(novaMedia){
        let situacaoMediaExame

        if(novaMedia >= 60){
            situacaoMediaExame = 'Aprovado'

        } else if(novaMedia < 60){
            situacaoMediaExame = 'Reprovado'
        }

        return situacaoMediaExame
    }

  module.exports = {
    calculoMedia,
    situacaoAluno,
    calcularValorExame,
    situacaoExame
  }


// console.log(situacaoExame('50'))

// console.log(calcularValorExame('50','10'))