function gravarFormulario () {
    document.getElementById('formulario_1').addEventListener('submit', function(event) {
        event.preventDefault(); // Impede o envio padrão do formulário
    
        // Obtendo os valores dos campos
        const sup_dia = document.getElementById('sup_dia').value;
        const med_dia = document.getElementById('med_dia').value;
        const adjunto = document.getElementById('adjunto').value;
        const cmte_guarda = document.getElementById('cmte_guarda').value;
        const encarregado = document.getElementById('encarregado').value;

        console.log(sup_dia, med_dia, adjunto, cmte_guarda, encarregado);
       
    
        // Criando um objeto para armazenar os dados
        const dados = {
            sup_dia: sup_dia,
            med_dia: med_dia,
            adjunto: adjunto,
            cmte_guarda: cmte_guarda,
            encarregado: encarregado
        };

          // Armazenando os dados no localStorage
    localStorage.setItem('dadosFormulario', JSON.stringify(dados));

    // Exibindo uma mensagem de sucesso
    alert('Dados salvos com sucesso!');
    
    // Opcional: Limpar o formulário após o envio
    document.getElementById('Formulario').reset();
});
    
} 
  