<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Formdan gelen verileri alalım
    $name = htmlspecialchars($_POST['name']);
    $email = htmlspecialchars($_POST['email']);
    $message = htmlspecialchars($_POST['message']);

    // Verileri kontrol et (örnek olarak e-posta doğrulama)
    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        die("Geçersiz e-posta adresi!");
    }

    // Verileri işleme (ör. veritabanına kaydetme, e-posta gönderme)
    // Burada örnek olarak bir e-posta gönderebiliriz
    $to = "yavuzozgur539@gmail.com"; // Alıcı e-posta adresi
    $subject = "Yeni İletişim Formu Mesajı";
    $body = "Ad: $name\nE-posta: $email\nMesaj: $message";
    $headers = "From: $email";

    if (mail($to, $subject, $body, $headers)) {
        echo "Mesajınız başarıyla gönderildi!";
    } else {
        echo "Mesaj gönderilirken bir hata oluştu.";
    }

    // Başka bir sayfaya yönlendirme
    // header("Location: teşekkürler.html");
    // exit;
} else {
    // Form gönderilmeden bu sayfaya erişildiğinde
    echo "Form gönderilmedi!";
}
?>
