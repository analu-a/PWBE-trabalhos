function calculo(codigoItem, precoItem){


    let resultado
    let resultado1
    let resultado2
    let codigo = codigoItem
    let preco = precoItem 

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
    

   } else if(codigo > 4){
    console.log("Opção inválida!!!")
   }

   if(resultado != undefined){
    return Number(resultado).toFixed(2)
} else{
    return false
}
}

module.exports ={
    calculo
}