document.addEventListener('DOMContentLoaded', (event) => {
    const textarea = document.getElementById('email');

    textarea.addEventListener('click', function() {
        this.value = '';
    });
});