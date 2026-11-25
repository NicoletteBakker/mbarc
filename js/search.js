/*************************
 * Normalizar texto (quita acentos)
 *************************/
function normalizeText(str) {
  return str
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase();
}

/*************************
 * Buscar dentro de la página actual
 *************************/
function searchInPage(query) {
  if (!query) return;

  const normalizedQuery = normalizeText(query);

  // Quitar resaltados anteriores
  document.querySelectorAll(".search-highlight").forEach(el => {
    el.outerHTML = el.innerText;
  });

  const elements = document.querySelectorAll("h1, h2, h3, p, li, a, div, span");

  let found = false;
  let firstMatch = null;

  elements.forEach(el => {
    const originalHTML = el.innerHTML;
    const normalizedHTML = normalizeText(originalHTML);

    if (normalizedHTML.includes(normalizedQuery)) {
      found = true;

      // Regex para resaltar solo la palabra buscada
      const regex = new RegExp(query, "gi");

      el.innerHTML = originalHTML.replace(regex, match => {
        return `<span class="search-highlight">${match}</span>`;
      });

      // Guardar el primer resultado para hacer scroll
      if (!firstMatch) {
        firstMatch = el.querySelector(".search-highlight");
      }
    }
  });

  if (!found) {
    alert("No results found on this page");
    return;
  }

  // Scroll suave al primer resultado
  if (firstMatch) {
    firstMatch.scrollIntoView({
      behavior: "smooth",
      block: "center"
    });
  }
}


/*************************
 * Listener del buscador
 *************************/
document.addEventListener("DOMContentLoaded", () => {
  const searchInput = document.getElementById("site-search");
  if (!searchInput) return;

  searchInput.addEventListener("keydown", function(e) {
    if (e.key === "Enter") {
      e.preventDefault();
      searchInPage(this.value.trim());
    }
  });
});
