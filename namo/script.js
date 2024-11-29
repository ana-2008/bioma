document.addEventListener('DOMContentLoaded', () => {
    const fieldsets = document.querySelectorAll('.fieldset'); // Seleciona todos os fieldsets

    fieldsets.forEach(fieldset => {
        const inputs = fieldset.querySelectorAll('input[type="checkbox"]');
        const feedbackDiv = fieldset.querySelector('.feedback_div'); // Supondo que cada fieldset tenha seu feedback separado
        const feedback = fieldset.querySelector('.feedback'); // Classe para mensagens de feedback

        inputs.forEach(input => {
            input.addEventListener('click', () => {
                // Desabilita todos os inputs do fieldset atual após a escolha
                inputs.forEach(inp => (inp.disabled = true));

                // Verifica se a resposta está correta
                if (input.classList.contains('correto')) {
                    feedbackDiv.style.display = "flex";
                    feedback.textContent = "Resposta correta!";
                } else {
                    feedbackDiv.classList.add("erro");
                    feedbackDiv.style.display = "flex";
                    feedback.textContent = "Resposta incorreta!";
                }
            });
        });
    });

    
});

function limparRespostas(){
    const fieldsets = document.querySelectorAll('.fieldset'); // Seleciona todos os fieldsets

    fieldsets.forEach(fieldset => {
        const inputs = fieldset.querySelectorAll('input[type="checkbox"]');
        const feedbackDiv = fieldset.querySelector('.feedback_div'); // Supondo que cada fieldset tenha seu feedback separado
        const feedback = fieldset.querySelector('.feedback'); // Classe para mensagens de feedback

        feedbackDiv.style.display = "none"
        feedback.textContent = ""
        inputs.forEach(inp => {
            inp.disabled = false
            inp.checked = false
        });
    })
}

