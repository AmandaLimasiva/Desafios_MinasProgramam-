let nomeDoProduto = prompt("Informe o nome do Produto!")

console.log(nomeDoProduto)

let valorDoProduto = parseFloat(prompt("Informe o valor do produto :)"))
console.log(valorDoProduto)



if(valorDoProduto < 20){
    vendido = valorDoProduto * 0.45
    lucroFinal = vendido + valorDoProduto
    console.log(`⚫ O produto ${nomeDoProduto} custa ${lucroFinal} reais`)

}else if(valorDoProduto >= 20){
    vendido = valorDoProduto * 0.30
    lucroFinal = vendido + valorDoProduto
    console.log(`⚫ O produto ${nomeDoProduto} custa ${lucroFinal} reais na Mercearia da esquina.`)
}