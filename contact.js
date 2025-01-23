$('#contact-form').on('submit', function(e) {
    e.preventDefault();
    
    const formData = {
        nom: $('input[name="nom"]').val(),
        prenom: $('input[name="prenom"]').val(),
        structure: $('input[name="structure"]').val(),
        email: $('input[name="mail"]').val(),
        structure: $('input[name="structure"]').val(),
        objet: $('input[name="objet"]').val(),
        message: $('textarea[name="message"]').val()
    };

    // Configuration pour EmailJS
    emailjs.init("VOTRE_USER_ID");
    
    emailjs.send("service_id", "template_id", {
        to_email: "bidemiamoussa@gmail.com",
        from_name: `${formData.email} ${formData.prenom} ${formData.nom}`,
        structure: formData.structure,
        subject: formData.objet,
        message: formData.message
    })
    .then(
        function(response) {
            alert("Message envoyé avec succès!");
            $('#contact-form')[0].reset();
        },
        function(error) {
            alert("Une erreur s'est produite. Veuillez réessayer.");
        }
    );
});