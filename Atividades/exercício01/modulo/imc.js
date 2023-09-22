const calculoImc = function (peso, altura){

    let valorPeso = String(peso).replace(',' , '.')
    let valorAltura = String(altura).replace(',' , '.')

    let resultadoImc 
   

   resultadoImc = Number(valorPeso) / (Number(valorAltura) * Number(valorAltura))

   
   return resultadoImc
    
} 


const validacaoPeso = function(resultadoImc){

    let situacaoImc
    

    if(resultadoImc < 18.5){
        situacaoImc = 'Você está abaixo do peso'
     
        }else if(resultadoImc >= 18.5 && resultadoImc <= 24.9){
            situacaoImc = 'Você está com o peso normal'
     
        }else if(resultadoImc >= 25 && resultadoImc <= 29.9){
            situacaoImc = 'Você está acima do peso'
     
        }else if(resultadoImc >= 30 && resultadoImc <= 34.9){
            situacaoImc = 'Você está com obesidade I'
     
        }else if(resultadoImc >= 35 && resultadoImc <= 39.9){
            situacaoImc ='Você está com obesidade II'
     
        }else if(resultadoImc >= 40){
            situacaoImc ='Você está com obesidade III'
        }
        return situacaoImc
}

// console.log(calculoImc('50' , '2,0')), console.log(validacaoPeso('18.5'))

module.exports = {
    calculoImc,
    validacaoPeso
}