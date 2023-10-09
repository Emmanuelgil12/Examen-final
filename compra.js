function showModal(type) {
    document.getElementById(`${type}-modal`).style.display = 'flex'; // Asegurarse de que sea 'flex'
}

function closeModal(type) {
    document.getElementById(`${type}-modal`).style.display = 'none';
}
function goBack() {
    window.history.back();
}
