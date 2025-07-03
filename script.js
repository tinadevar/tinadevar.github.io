function updateThemeIcon(theme) {
    const themeToggle = document.getElementById("theme-toggle");
    if (themeToggle) {
      themeToggle.textContent = theme === "dark" ? "☀️" : "🌙";
    }
  }
  
  function setupThemeToggle() {
    const savedTheme = localStorage.getItem("theme") || "light";
    document.documentElement.setAttribute("data-theme", savedTheme);
    updateThemeIcon(savedTheme);
  
    const themeToggle = document.getElementById("theme-toggle");
    if (themeToggle && !themeToggle.dataset.listenerAttached) {
      themeToggle.dataset.listenerAttached = "true";
      themeToggle.addEventListener("click", () => {
        const currentTheme = document.documentElement.getAttribute("data-theme");
        const newTheme = currentTheme === "dark" ? "light" : "dark";
        document.documentElement.setAttribute("data-theme", newTheme);
        localStorage.setItem("theme", newTheme);
        updateThemeIcon(newTheme);
      });
    }
  }
  
  // 1. Try immediately on DOM ready (for index.html)
  document.addEventListener("DOMContentLoaded", () => {
    setupThemeToggle();
  
    // 2. If button not found, use MutationObserver to wait for dynamic nav
    if (!document.getElementById("theme-toggle")) {
      const observer = new MutationObserver(() => {
        if (document.getElementById("theme-toggle")) {
          setupThemeToggle();
          observer.disconnect();
        }
      });
      observer.observe(document.body, { childList: true, subtree: true });
    }
  });
  