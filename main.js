// desligar visibilidade de um elemento (com querySelectorAll parece não funcionar)
document.querySelector("h1").style.display = "none";


// selecionar todos os elementos h2
let titulos = document.querySelectorAll('h2');
// loop para apagar um a um até acabar
for (let i = 0; i < titulos.length; i++) {
  titulos[i].remove();
}


// mudar cor do fundo
document.querySelector("body").style.backgroundColor = "blue";


// criar link
let link = document.createElement('a');
// definir url
link.href = "https://www.fba.up.pt/";
// definir posição
document.querySelector("header>nav").appendChild(link);
// definir texto
document.querySelector("header>nav>a").innerHTML = "Novo Link"
