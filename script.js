const themeBtn = document.getElementById("theme");
const printBtn = document.getElementById("print");

function applyTheme(dark) {
  document.body.classList.toggle("dark", dark);
  themeBtn.textContent = dark ? "☀️" : "🌙";
}

// Restaurer le thème sauvegardé (sans erreur si le stockage est indisponible)
try {
  applyTheme(localStorage.getItem("theme") === "dark");
} catch (e) {
  applyTheme(false);
}

themeBtn.addEventListener("click", () => {
  const dark = !document.body.classList.contains("dark");
  applyTheme(dark);
  try { localStorage.setItem("theme", dark ? "dark" : "light"); } catch (e) {}
});

printBtn.addEventListener("click", () => window.print());
