
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


//CRUD input no alteraçao2
var line = 1;
  
//script para adicionar input
function addInput(divName) {
    line++;
    var newdiv = document.createElement('div');
    
    newdiv.innerHTML  = " <div class = 'form__container' id = 'newdiv"+line+"'><label class = 'form__container__label' id = 'newdiv"+line+"' for='input'>Alteração ["+line+"]</label><textarea class = 'form__container__input__alteracao' id='text"+line +"' type='text' name='text"+line +"' required></textarea></div>";
 
    document.getElementById(divName).appendChild(newdiv);
    alert ("Inserindo a linha "+ line);
    
}

//script para remover input
function removeInput(id) {
  if (line==1) {
    alert ("Não é possivel excluir a linha 1.")
  }

  else {
    var escolha = confirm ("Deseja excluir a linha "+line+"?");
    if (escolha == true) {
      const span = document.getElementById("text"+line);
      span.remove();
      const div = document.getElementById ("newdiv"+line);
      div.remove();
      alert ("Linha "+line+" excluida com sucesso.")
      line --;
    }

    else {
      alert ("Linha "+line+" preservada.")
    }
  }   
}