function toggleMode() {
  const html = document.documentElement;
  html.classList.toggle("light");

  const img = document.querySelector("#profile img");

  if (html.classList.contains("light")) {
    img.setAttribute("src", "./assets/avatar-light.png");
    img.setAttribute(
      "alt",
      "Foto de Rute séria, maquiada, usando jaleco branco aberto com uma blusa preta por dentro, fundo parede branca."
    );
  } else {
    img.setAttribute("src", "./assets/avatar.png");
    img.setAttribute(
      "alt",
      "Foto de Rute séria, maquiada, usando jaleco branco fechado, fundo parede branca."
    );
  }
}
