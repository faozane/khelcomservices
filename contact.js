// contact.js
document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const inputs = Array.from(this.elements).filter(element => 
        element.tagName === 'INPUT' || element.tagName === 'TEXTAREA'
    );

    let isValid = true;
    
    inputs.forEach(input => {
        if (!input.value.trim()) {
            input.classList.add('is-invalid');
            isValid = false;
        } else {
            input.classList.remove('is-invalid');
        }
    });

    if (isValid) {
        this.submit();
    }
});

// Gestion des erreurs en temps réel
document.querySelectorAll('.form-control').forEach(input => {
    input.addEventListener('input', function() {
        if (this.value.trim()) {
            this.classList.remove('is-invalid');
        }
    });
});