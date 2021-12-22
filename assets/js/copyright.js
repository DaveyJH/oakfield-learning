document.addEventListener("DOMContentLoaded", () => {
  const copyright = document.getElementById("current-year");
  copyright.textContent = new Date().getFullYear();
});