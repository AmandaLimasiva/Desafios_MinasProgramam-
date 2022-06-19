let nome = prompt('Informe seu nome: ')
let age = parseFloat(prompt('Informe sua idade: '))

function nA (nome, age){

    if(age > 18){
        return(`${nome} tem ${age}. E é maior de idade :) `)
    }else{
        return(`${nome} tem ${age}. E é menor de idade :( )`)
    }
}


console.log(nA(nome,age));