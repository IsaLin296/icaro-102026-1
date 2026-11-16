const botonPortada = document.querySelector("#boton-portada");
const portada = document.querySelector("#portada-perfil");

// Un botón nativo también dispara click al activarlo con el teclado.
botonPortada.addEventListener("click", () => {
    const ampliada = portada.classList.toggle("portada-ampliada");
    botonPortada.setAttribute("aria-pressed", String(ampliada));
});

botonPortada.hidden = false;
