// ===============================
// PORTFOLIO SCRIPT
// ===============================

// Ambil elemen
const contactBtn = document.getElementById("contactBtn");
const themeToggle = document.getElementById("themeToggle");
const card = document.querySelector(".card");

// ===============================
// Animasi Masuk (on load)
// ===============================
window.addEventListener("load", () => {
    card.style.opacity = "0";
    card.style.transform = "translateY(40px)";

    setTimeout(() => {
        card.style.transition = "0.8s ease";
        card.style.opacity = "1";
        card.style.transform = "translateY(0)";
    }, 200);
});

// ===============================
// Tombol Hubungi Saya
// ===============================
contactBtn.addEventListener("click", () => {
    showAlert("Terima kasih sudah mengunjungi portofolio saya 🙌");
});

// ===============================
// Dark / Light Mode
// ===============================
themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark");

    // Ganti ikon
    if (document.body.classList.contains("dark")) {
        themeToggle.textContent = "☀️";
    } else {
        themeToggle.textContent = "🌙";
    }
});

// ===============================
// Custom Alert (lebih keren)
// ===============================
function showAlert(message) {
    const alertBox = document.createElement("div");
    alertBox.className = "custom-alert";
    alertBox.textContent = message;

    document.body.appendChild(alertBox);

    setTimeout(() => {
        alertBox.classList.add("show");
    }, 100);

    setTimeout(() => {
        alertBox.classList.remove("show");
        setTimeout(() => {
            alertBox.remove();
        }, 300);
    }, 2500);
}
