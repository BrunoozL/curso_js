/* 
    FUNÇÕES
    Toda vez que precisamos modificar coisas/itens/variáveis, processas
    informações, criamos uma função

    Elas também ajudam a organizar e permitir a reutilização de códigos
*/

// Cria funnção
function exibirSaudacao()
{
    console.log("Bem vindo ao meu programa!");
}

// Executa a função
exibirSaudacao();

// Sobrecarga de função, recebendo um parâmetro
function exibirSaudacao(nome)
{
    console.log("Olá ", nome, ". Seja bem-vindo!");
}

nome = prompt("Digite seu nome:");
exibirSaudacao(nome);

/*
    Retorno
    As funções podem retornar ou não valores
    Utilizamos o Retorno, quando o resultado da função é necessário para oputra operação
*/

function calcularMedia(notas)
{
    var media = 0;
    notas.forEach((nota) => 
    {
        media += nota;
    });
    return media / notas.length;
}

do 
{
    notas = [];
    var nota = parseFloat(prompt("Digite uma nota:"));
    var continua = parseInt(prompt("Deseja adicionar mias notas? \n 1 - SIM\n 0 - NÃO"));
}while (continua > 0);
console.log("Média final é: ", calcularMedia(notas));