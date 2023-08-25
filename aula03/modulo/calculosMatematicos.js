//Modelo tradicional de criar funções
function calculadora(numero1, numero2, tipoCalculo){

    let n1 = numero1
    let n2 = numero2
    let operacao = tipoCalculo
    let resultado

            //Calculos
            switch (operacao){

                
                //MULTIPLICAÇÃO
                case 'x':   
                    resultado = n1 * n2
                    
                break

                //SOMA
                case '+':
                    resultado = n1 + n2
                    
                 break

                        //SUBTRAÇÃO
                  case '-':
                            resultado = n1 -  n2
                            
                            break

                            //DIVISÃO
                            case '/':
                                //Impede de dividir por zero
                                if(operacao == '/' && n2 == 0){

                                    console.log('Desculpe, zero não é divisivel n/ Tente novamente!')
                                    

                                } else{
                                     resultado = n1 / n2
                                  
                                    break
                                }

                             
                                
            }
            if(resultado != undefined){
                return Number(resultado).toFixed(2)
            } else{
                return false
            }
            

}

//Permite deixar uma função publica para outros projetos
module.exports ={
    calculadora
}