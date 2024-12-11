document.addEventListener('DOMContentLoaded', function() {
    var menuBar = document.querySelector('#menu-bar');
    var navLinks = document.querySelector('.nav_links');

    navLinks.style.top = '-450px';

    menuBar.onclick = function() {
        if (navLinks.style.top === '-450px') {
            navLinks.style.top = '50px';
        } else {
            navLinks.style.top = '-450px';
        }
    };
});


document.getElementById("sendCode").addEventListener("click", function () {
  const email = document.getElementById("email").value;

  if (!email) {
    alert("Lütfen geçerli bir e-posta adresi girin!");
    return;
  }

  fetch("/send-code", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email }),
  })
    .then((response) => {
      if (response.ok) {
        alert("Kod başarıyla gönderildi!");
      } else {
        alert("Kod gönderilemedi. Lütfen tekrar deneyin.");
      }
    })
    .catch((error) => {
      console.error("Hata:", error);
      alert("Bir hata oluştu. Lütfen daha sonra tekrar deneyin.");
    });
});

  