
/*Tenho que colocar entre () o que o meu codigo vai 
pecisar mandar para a outra pasta, que são as variaveis 
abaixo, não precisa do resultado, porque ele vai ser obtido 
no proprio function */
function calculo(codigoItem, precoItem){


    let resultado
    let resultado1
    let resultado2
    let codigo = codigoItem
    let preco = precoItem 

//Calculo de acordo com os codigos (1,2,3,4)    
    if(codigo == "1"){
        resultado1 = preco * 0.08
        resultado = preco - resultado1
        

   }else if(codigo == "2"){
    resultado1 = preco * 0.04
    resultado = preco - resultado1
   

   } else if(codigo == "3"){
    resultado = preco / 2
    

   } else if(codigo == "4"){
    resultado1 = preco * 0.08
    resultado2 = preco + resultado1
    resultado = resultado2 / 4
    
//Validação de erro
   } else if(codigo > 4){
    console.log("Opção inválida!!!")
   }

//Return dos resultados dos calculos
   if(resultado != undefined){
    return Number(resultado).toFixed(2)
} else{
    return false
}
}

//Expostação de biblioteca
module.exports ={
    calculo
}