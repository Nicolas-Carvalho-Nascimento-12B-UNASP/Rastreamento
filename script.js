document.addEventListener('DOMContentLoaded', () => {
    const statusElement = document.getElementById('status');
    const detailsElement = document.getElementById('details');
    const timelineItems = document.querySelectorAll('#timeline li');

    // Função para atualizar o status
    function updateStatus(newStatus, newDetails, completedStages) {
        statusElement.textContent = newStatus;
        detailsElement.textContent = newDetails;
        
        timelineItems.forEach((item, index) => {
            if (index < completedStages) {
                item.classList.add('completed');
                item.classList.remove('current');
            } else if (index === completedStages) {
                item.classList.add('current');
            } else {
                item.classList.remove('completed', 'current');
            }
        });
    }

    // Atualizando o status para "Saiu para entrega"
    updateStatus('Saiu para entrega', 'O pacote saiu para entrega e chegará em breve.', 4);
});