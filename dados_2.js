console.log(19.90 * 0.6) // desconto de 40% sem usar as variáveis criadas.

let preco = 19.90;
let desconto = 0.4;
let precoComDesconto = preco * (1 - desconto) // desconto de 40% calculado com a variável do preço e com prioridade para o calculo ficar correto.
console.log(precoComDesconto)

let nome = "Caderno"
let categoria = "Papelaria"

console.log("Produto:" + nome 
+ ", Categoria: " + categoria
+ ", Preço: " + preco
+ ", Preço com Desconto: " + precoComDesconto);