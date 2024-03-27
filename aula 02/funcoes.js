//let num1 = 3//
//const num2 = 6
//var msg = "Esse é o número"

// console.log(msg , num1)
// console.log(num1 + num2)
// console.log(typeof num1)
// console.log(typeof msg)

//function somar () {
    // n1 = 2 
    // n2 = 7
    // console.log("O resultado é:", n1+n2)
// }

// function SomarComParametros (n1, n2) {
    // let resultado = "O resultado é:" + (n1+n2)
    // console.log(resultado)
// }



const teste = (n) => {
    let result = n % 2

     if(result == 1) {
        return "Numero ímpar"
    }
    
        return "Número par"
    
    
}

console.log(teste(101))
