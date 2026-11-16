# Clase 7 · Tu ficha en la agenda

Agregá tu ficha a la agenda del curso. Vas a cambiar de rama, incorporar un archivo nuevo y guardar tus cambios en un commit. Las tres fichas de ejemplo son ficticias.

## 1. Entrá al repositorio

Si ya clonaste el repositorio del curso, abrí una terminal en esa carpeta. Si todavía no lo tenés, clonalo desde la carpeta donde guardás tus proyectos.

```bash
git clone https://github.com/alezvi/icaro-102026-1.git sitio-web
cd sitio-web
```

Ejecutá `git status --short` para ver si tenés cambios pendientes. Si aparecen, revisalos con el docente antes de cambiar de rama.

## 2. Cambiá a la rama del ejercicio

Cuando el docente publique la rama, ejecutá estos comandos.

```bash
git fetch origin
git switch --track origin/clase-07-agenda-contactos
```

Si ya tenías esa rama en tu copia local, usá `git switch clase-07-agenda-contactos`. Abrí `agenda-contactos/index.html` en el navegador para ver la maqueta.

## 3. Creá tu rama de trabajo

Reemplazá `nombre-apellido` por tu nombre y apellido, en minúsculas, con guiones y sin tildes.

```bash
git switch -c ficha/nombre-apellido
```

## 4. Completá tu ficha

1. Guardá tu foto o avatar en `images/avatars/` con el patrón `nombre-apellido.ext`. Conservá la extensión real de tu archivo. Puede ser, por ejemplo, `lucia-perez.jpg` o `lucia-perez.png`.
2. En `agenda-contactos/index.html`, copiá una ficha completa (`<li class="contacto">`) y agregala al final de la lista, antes de `</ul>`.
3. En tu ficha, reemplazá el nombre y escribí una o dos frases sobre lo que contaste en la primera clase. Debajo de la síntesis, indicá la ciudad desde donde te conectás, por ejemplo, «Desde Rosario».
4. Reemplazá el `<span>` de las iniciales por una imagen como la de abajo. Cambiá el nombre y la extensión para que coincidan con tu archivo. Usá `alt=""` porque el nombre ya aparece junto a la imagen.

```html
<img class="avatar" src="../images/avatars/lucia-perez.jpg" alt="">
```

## 5. Revisá y guardá tus cambios

Recargá la página y comprobá que se vea tu foto, que el nombre esté en negrita y que se lean la síntesis y la ciudad también en una ventana angosta.

Ejecutá los comandos desde la raíz del repositorio. En la segunda línea, usá la ruta de tu propia imagen.

```bash
git diff -- agenda-contactos/index.html
git add agenda-contactos/index.html images/avatars/lucia-perez.jpg
git diff --cached --name-only
```

La lista debe mostrar la página y tu imagen. Guardá el commit y revisá que aparezca en el historial de tu rama.

```bash
git commit -m "Agrega mi ficha a la agenda"
git log -1 --oneline
git status --short --branch
```

## 6. Desafío individual de HTML y CSS

Agregá tres intereses a tu ficha, debajo de la ciudad. Elegí palabras o frases cortas que te representen.

### Resultado esperado

- Cada interés aparece como una etiqueta con fondo suave, bordes redondeados y texto legible.
- Con espacio suficiente, las tres etiquetas se ven una al lado de la otra, con separación entre ellas.
- Cuando achicás la ventana, las etiquetas que ya no entran pasan a la línea siguiente. El avatar y el texto siguen alineados y la página se puede leer sin desplazarse hacia los costados.

Probá tu ficha en una ventana ancha y en una angosta. Cuando logres el resultado esperado, guardá la ampliación en un segundo commit.

## Perfil modelo

Desde la agenda, hacé clic en el nombre de Julia Ríos para abrir [el perfil modelo](perfil.html). La ficha y la página de detalle se enlazan con rutas relativas, así podés volver a la agenda desde el perfil.

- **Portada.** Guardá la imagen panorámica que elijas en `images/portadas/`. Si adaptás el modelo, actualizá el `src` y describí la imagen en `alt`.
- **Frase y repositorio.** El elemento `<blockquote>` contiene una frase. El enlace de ejemplo apunta al repositorio del curso. Podés cambiar su `href` por la dirección de tu repositorio.
- **YouTube y Spotify.** Cada `<iframe>` carga un reproductor de un servicio externo. Usá contenido público que se pueda insertar, cambiá el `src` del reproductor y actualizá también el enlace directo y el `title`. [Cómo insertar un video de YouTube](https://support.google.com/youtube/answer/171780?hl=es) · [Cómo insertar contenido de Spotify](https://developer.spotify.com/documentation/embeds/tutorials/creating-an-embed)
- **Contacto.** Explorá cómo se asocia cada `<label>` con su campo. El correo usa `type="email"` y el mensaje, un `<textarea>`. El botón de envío está deshabilitado.

### Del evento a la transición

Probá **Ampliar portada** con un clic y con el teclado. En `perfil.js`, el evento `click` agrega o quita la clase `portada-ampliada` y actualiza el estado del botón. En `perfil.css`, esa clase cambia la altura de la imagen y `transition` suaviza el cambio.

### Cómo probar los reproductores

Los reproductores requieren conexión a Internet. Para probarlos, abrí el perfil desde un servidor local. Si tenés Python instalado, ejecutá este comando desde la raíz del repositorio.

```bash
python -m http.server 8000 --bind 127.0.0.1
```

Entrá a `http://127.0.0.1:8000/agenda-contactos/perfil.html` en el navegador. También podés usar los enlaces directos debajo de los reproductores.
