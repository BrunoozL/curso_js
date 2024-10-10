// Função CRIADA, mas não está sendo UTILIZADA!
function verElemento()
{
    var elemento = document.getElementById("titulo");
    console.log("Dados do Elemento: ", elemento);
    console.log("TAG: ", elemento.nodeName);
    console.log("TEXTO: ", elemento.textContent);
}

function mudarCorTexto()
{
    // Pega o ID que usuário atribuiu no input
    var elementoDesejado = document.getElementById("elemento").value;

    // Busca o elemento que o usuário deseja alterar
    var elemento = document.getElementById("elementoDesejado");
    elemento.style.color = "#ff0000";
}

function mudarCorFundo()
{
    var elementoDesejado = document.getElementById("elemento").value;
    
    var elemento = document.getElementById("elementoDesejado");
    elemento.style.backgroundColor = "yellow";
}

function adicionarComWrite()
{
    var textoDoImput = document.getElementById("elemento").value;

    var texto = document.getElementById("texto");

    document.write(textoDoImput);
}

function adicionarComInner()
{
    var textoDoImput = document.getElementById("elemento").value;

    var texto = document.getElementById("texto");

    texto.innerHTML += textoDoImput;
}

// Escrevendo apenas o seu nome, executa ela
verElemento();