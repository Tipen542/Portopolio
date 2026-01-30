// ===== LOGIN TRANSITION =====
function login() {
    const login = document.getElementById("loginPage");
    const portfolio = document.getElementById("portfolioPage");

    login.classList.add("fade-out");

    setTimeout(() => {
        login.classList.add("hidden");
        portfolio.classList.remove("hidden");
        portfolio.classList.add("fade-in");
        typingEffect();
    }, 700);
}

// ===== CUSTOM TOAST =====
function hubungi() {
    const toast = document.createElement("div");
    toast.className = "toast";
    toast.innerHTML = "✨ Terima kasih sudah mengunjungi portofolio saya!";

    document.body.appendChild(toast);
    setTimeout(() => toast.classList.add("show"), 100);

    setTimeout(() => {
        toast.classList.remove("show");
        setTimeout(() => toast.remove(), 400);
    }, 2500);
}

// ===== THEME SAVE =====
function toggleTheme() {
    document.body.classList.toggle("dark");
    localStorage.setItem("theme", document.body.classList.contains("dark") ? "dark" : "light");
}

window.onload = () => {
    if (localStorage.getItem("theme") === "dark") {
        document.body.classList.add("dark");
    }
};

// ===== TYPING EFFECT =====
function typingEffect() {
    const text = "Creative Web Developer • suka deisgn • suka otomotif";
    const el = document.querySelector(".card p");
    el.innerHTML = "";
    let i = 0;

    const typing = setInterval(() => {
        el.innerHTML += text.charAt(i);
        i++;
        if (i === text.length) clearInterval(typing);
    }, 35);
}

// ===== SCROLL REVEAL =====
const revealElements = document.querySelectorAll(".card, nav");

window.addEventListener("scroll", () => {
    revealElements.forEach(el => {
        const pos = el.getBoundingClientRect().top;
        if (pos < window.innerHeight - 100) {
            el.classList.add("show");
        }
    });
});

// ===== CUSTOM CURSOR =====
const cursor = document.createElement("div");
cursor.className = "cursor";
document.body.appendChild(cursor);

document.addEventListener("mousemove", e => {
    cursor.style.left = e.clientX + "px";
    cursor.style.top = e.clientY + "px";
});

// ===== MAGNETIC BUTTON =====
document.querySelectorAll("button").forEach(btn => {
    btn.addEventListener("mousemove", e => {
        const rect = btn.getBoundingClientRect();
        btn.style.transform = `
            translate(
                ${(e.clientX - rect.left - rect.width / 2) / 6}px,
                ${(e.clientY - rect.top - rect.height / 2) / 6}px
            )
        `;
    });
    btn.addEventListener("mouseleave", () => {
        btn.style.transform = "translate(0,0)";
    });
});