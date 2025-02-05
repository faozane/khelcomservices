<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $to = "Khelcomservicessenegal@gmail.com";
    $subject = htmlspecialchars($_POST['objet']);

    $message = "Nouveau message de :\n";
    $message .= "Nom: " . htmlspecialchars($_POST['nom']) . "\n";
    $message .= "Prénom: " . htmlspecialchars($_POST['prenom']) . "\n";
    $message .= "Structure: " . htmlspecialchars($_POST['structure']) . "\n";
    $message .= "Email: " . htmlspecialchars($_POST['mail']) . "\n\n";
    $message .= "Message:\n" . htmlspecialchars($_POST['message']);

    $headers = "From: " . htmlspecialchars($_POST['mail']) . "\r\n";
    $headers .= "Reply-To: " . htmlspecialchars($_POST['mail']) . "\r\n";
    $headers .= "X-Mailer: PHP/" . phpversion();

    if (mail($to, $subject, $message, $headers)) {
        echo "<script>alert('Message envoyé avec succès !'); window.location.href = 'index.html';</script>";
    } else {
        echo "<script>alert('Erreur lors de l\'envoi du message.'); window.history.back();</script>";
    }
} else {
    header("Location: index.html");
}
