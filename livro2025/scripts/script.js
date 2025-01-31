
// Função para abrir o link
//inicio
function abreLink(link, id) {
       if (typeof controle == 'undefined') {// verifica se a variável controle foi definida. 
              criarLink(link, id);
              controle = true;
              console.log(controle);
              
       }
       else {
              fecharLink();
              criarLink(link, id);
              console.log(controle);
       }
        
        

}

//cria iframe
function criarLink(link, id) {
  var div = document.getElementById(id);
  var newdiv = document.createElement('iframe');
  newdiv.src = link;
  var iframe = div.appendChild(newdiv);
  var IncluirId = document.querySelector ('iframe');
  IncluirId.id = 'conteudo';
 
}

//fecha iframe
function fecharLink() {
  var div = document.getElementById('conteudo');
  div.remove();
  
}
//fim

//função destacar item do menu
// inicio
function destacar(obj) { 
       obj.style.backgroundColor = "#B22222";
}

function NaoDestacar(obj)
{
 obj.style.backgroundColor = "#333";
    
}
//fim