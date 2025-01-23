<?php
if ( $_SERVER["REQUEST_METHOD"] == "POST") {
    // Récupérer les données du formulaire
    $nom = htmlspecialchars($_POST['nom']);
    $prenom = htmlspecialchars($_POST['prenom']);
    $structure = htmlspecialchars($_POST['structure']);
    $email = htmlspecialchars($_POST['mail']);
    $subject = htmlspecialchars($_POST['objet']);
    $message = htmlspecialchars($_POST['message']);

    // Adresse e-mail où envoyer le message
    $to = "Khelcomservicessenegal@gmail.com";
    $headers = "From: $email\r\n";
    $headers .= "Reply-To: $email\r\n";
    $headers .= "Content-Type: text/plain; charset=UTF-8\r\n";

    // Construire le contenu de l'e-mail
    $email_message = "Vous avez reçu un nouveau message depuis votre site.";
    $email_message .= "Nom: $nom\n";
    $email_message .= "Nom: $prenom\n";
    $email_message .= "Nom: $structure\n";
    $email_message .= "Email: $email\n";
    $email_message .= "Sujet: $subject\n";
    $email_message .= "Message:\n$message\n";

    // Envoyer l'e-mail
    if (mail($to, $subject, $email_message, $headers)) {
        echo "Votre message a été envoyé avec succès !";
        header('Location: index.php');  // Redirige vers la page principale ou une confirmation
        exit();  // Arrête le script pour ne pas exécuter la suite
    } else {
        echo "Une erreur s'est produite lors de l'envoi du message. Veuillez réessayer.";
    }
} else {
    echo "Méthode non autorisée.";
}
?>


