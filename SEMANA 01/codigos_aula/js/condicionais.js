// Solicita um dado para o usuário
// O retorno do PROMPT é STRING
var nome = prompt("Digite seu nome:");

// PARSEINT() converte STRING em number(INTEIRO)
var anoNascimento = parseInt(prompt("Ano de Nascimento:"));

alert("Ano colocado: " + anoNascimento)

var idade = 2024 - anoNascimento;

if(idade >= 18)
{
    alert(nome + " é MAIOR de idade!");
}
else if (idade < 18)
{
    alert(nome + " é MENOR de idade!");
}
else
{
    alert("Digite um ano correto BURRO!")
} 