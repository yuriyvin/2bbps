document.addEventListener("DOMContentLoaded", function () {
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
});


// Скрипт для меню-гамбургера
document.getElementById("mobile-menu").addEventListener("click", function() {
    const navList = document.querySelector(".nav-list");
    navList.classList.toggle("show");
});

