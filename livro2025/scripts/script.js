
//cria iframe
function criarLink(link, id) {
  var div = document.getElementById(id);
  var newdiv = document.createElement('iframe');
  var iframe = div.appendChild(newdiv);
  newdiv.src = link;
  var IncluirId = document.querySelector ('iframe');
 IncluirId.id = 'conteudo';
    
 
}

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

//FUNÇÕES DO ALTERAÇÃO 2
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

//FUNÇÃO PARA PEGAR OS DADOS DO FORMULÁRIO E GRAVAR NO LOCAL STORAGE
// A função é chamada quando o formulário é enviado

function gravarFormulario() {
  console.log("inicio");
  document.getElementById('formulario_1').addEventListener('submit', function(event) {
    event.preventDefault(); // Impede o envio padrão do formulário
      
    
    // Obtendo os valores dos campos
    const sup_dia = document.getElementById('sup_dia').value;
    const med_dia = document.getElementById('med_dia').value;
    const adjunto = document.getElementById('adjunto').value;
    const cmte_guarda = document.getElementById('cmte_guarda').value;
    const encarregado = document.getElementById('encarregado').value;    
    const cofre = document.getElementById('cofre').value;
    const oxigenio = document.getElementById('oxigenio').value;
    
    // Obtendo os valores dos campos de seleção

    var radioAgua = document.getElementsByName ("agua");
    for (var i = 0; i < radioAgua.length; i ++) {
      if (radioAgua[i].checked) {
        var agua = radioAgua[i].value;
        }
      }  

    var radioEnergia = document.getElementsByName ("energia");
    for (var i = 0; i < radioEnergia.length; i ++) {
      if (radioEnergia[i].checked) {
        var energia = radioEnergia[i].value;
        }
      }
      
    var radioGerador = document.getElementsByName ("gerador");
    for (var i = 0; i < radioGerador.length; i ++) {
        if (radioGerador[i].checked) {
          var gerador = radioGerador[i].value;
          }
        }

    var radioMorgue = document.getElementsByName ("morgue");
    for (var i = 0; i < radioMorgue.length; i ++) {
      if (radioMorgue[i].checked) {
        var morgue = radioMorgue[i].value;
      }
    } 

    var radioElevador = document.getElementsByName ("elevador");
    for (var i = 0; i < radioElevador.length; i ++) {
      if (radioElevador[i].checked) {
        var elevador = radioElevador[i].value;
      }
    } 

            
      /*
      
      
      const elevador = document.getElementsByName('elevador').value; */

      console.log(sup_dia, med_dia, adjunto, cmte_guarda, encarregado, energia, agua, gerador, elevador, morgue);
          
      // Criando um objeto para armazenar os dados
      const dados = {
        sup_dia: sup_dia,
        med_dia: med_dia,
        adjunto: adjunto,
        cmte_guarda: cmte_guarda,
        encarregado: encarregado,
        agua: agua,
        gerador: gerador,
        energia: energia,
        morgue: morgue,
        elevador: elevador,
        cofre: cofre,
        oxigenio: oxigenio
      };

      // Armazenando os dados no localStorage
      localStorage.setItem('dadosFormulario', JSON.stringify(dados));

      // Exibindo uma mensagem de sucesso
      alert('Dados salvos com sucesso!');
          
      // Opcional: Limpar o formulário após o envio
     document.getElementById("formulario_1").reset();

     location.replace('alter_of_pg2.html');
 
});



} 