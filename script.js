document.addEventListener("DOMContentLoaded", function () {
    // ====== ЛОГІКА НАДСИЛАННЯ ФОРМИ ======
    const form = document.getElementById("customForm");

    if (!form) {
        console.error("❌ Форма не знайдена! Перевір ID форми в index.html");
        return;
    }

    form.addEventListener("submit", function (event) {
        event.preventDefault(); // Зупиняємо стандартне відправлення форми

        let formData = new URLSearchParams();

        formData.append("entry.414234966", document.getElementById("name").value);
        formData.append("entry.1875318402", document.getElementById("dob").value);
        formData.append("entry.1211270116", document.getElementById("phone").value);
        formData.append("entry.642628220", document.getElementById("comment").value);

        fetch("https://docs.google.com/forms/u/0/d/e/1FAIpQLSfXntXAZ6m15GI-mT4NSu_PKd9Fkv2wzMqrgwtVYID4pkJBBg/formResponse", {
            method: "POST",
            body: formData.toString(),
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            mode: "no-cors"
        }).then(() => {
            document.getElementById("responseMessage").textContent = "✅ Дані успішно надіслані!";
            form.reset();
        }).catch(() => {
            document.getElementById("responseMessage").textContent = "❌ Помилка надсилання!";
        });
    });

    // ====== ЛОГІКА НАВІГАЦІЇ ======
    const hamburger = document.querySelector('.hamburger');
    const navbarLinks = document.querySelector('.navbar-links');
    const menuLinks = document.querySelectorAll(".navbar-links a");

    // Відкриття/закриття меню по кліку на гамбургер
    hamburger.addEventListener('click', () => {
        navbarLinks.classList.toggle('open');
    });

    // Закриття меню після кліку на пункт меню
    menuLinks.forEach(link => {
        link.addEventListener("click", () => {
            navbarLinks.classList.remove("open");
        });
    });
});
