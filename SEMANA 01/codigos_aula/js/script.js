// Exibe um alerta na tela
alert("Olá mundo");

/*
   Aqui o comentário pode ter várias linhas
   Bem utilizado quando precisamos descrever muitos
   detalhes OU deixar marcações de versão
*/

var nome = "Essa é uma variável de Texto (String)";
var idade; // Cria uma variável nula (null)
idade = 30; // Adiciona um número inteiro na variável (number)
var altura = 1.01; // Variável com número flutuante (number)
var diretor = false; // Variável do tipo booleana (boolean)
var numeroTexto = '10';

// Teste de cálculo da média
var nota1 = 10;
var nota2 = 7;
var media = (nota1 + nota2) / 2;

// Teste de array
var notas = [];
notas[0] = 10;
notas[1] = 7;
notas[2] = 5;
var mediaArray = (notas[0] + notas[1] + notas[2]) / notas.length; // length divide pelo tamanho (nesse caso)

// Teste do if e else
/* 
   Obs: o uso dos 3 iguais (===) indica que
   para o if ser verdadeiro, tanto o conteúdo dentro
   da variável quanto o tipo da variável tem que ser o mesmo.
   Nese caso, o if está errado
*/
if (numeroTexto === 10)
{
    alert("São iguais");
} 
else
{
    alert("Não são iguais");
}

var notasSemestre = [10, 8, 5, 4];
var mediaSemestre = notasSemestre[0] + notasSemestre[1] + notasSemestre[2] + notasSemestre[3];
mediaSemestre = mediaSemestre / notasSemestre.length;
alert("Média: " + mediaSemestre);

// Estruturas de repetição

// Aperte F12 para ver o painel de desenvolvedor do navegador
console.log("========== WHILE ==========");

/* 
    Repete um código ENQUANTO a condição for verdadeira
    Podendo ser criado um contador, por padrão: var i = 0;
*/

var i = 0;
var media = 0;
var tamanho = notas.length;

while(i < tamanho)
{
    // Podemos utilizar o i para controlar o array
    console.log("Nota [ " + (i + 1) +  " ]:", notas[i]);
    media += notas[i]; // Soma o conteúdo a direita com o conteúdo inicial da var
    i++ // Incrementa o i em i + 1
}

console.log("Média Final do WHILE: ", media / notas.length);

// ============================== FOR ==============================
// Recebe 3 parâmetros, variável de controle; condição; mudança/incremento

console.log("========== FOR ==========");
media = 0;

for (var i = 0; i < notas.length; i++)
{
    console.log("Nota [ " + (i + 1) +  " ]:", notas[i]);
    media += notas[i];
}

console.log("Média Final do FOR: ", media / notas.length);

/*
    Usando recursos do JS
    Iremos usar o Arrow Function como parâmetro () => {}
    As variáveis são padrões no forEach: valorDaPosição, posição
    A cada item, executa o que está dentro das chaves
*/

console.log("========== FOREACH ==========");

media = 0;

notas.forEach((notas, i) =>
{
    console.log("Nota [ " + (i + 1) + " ]:", notas)
    media += notas;
} 
);

console.log("Média final do FOREACH: ", media / notas.length);

// forEach e foreach são a mesma função, o primeiro usa nomenclatura correta
// foreach não é mais reconhecido
notas.foreach(function (notas, i)
{

}
);

console.log("Resultado: ", () =>
{
    media = (10 + 30 + 50) / 3;
    return media;
}
)