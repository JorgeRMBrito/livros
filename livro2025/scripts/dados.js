

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

      //fecharLink();
   
  });
 abreLink ('alter_of_pg2.html', 'iframe');


} 
  
