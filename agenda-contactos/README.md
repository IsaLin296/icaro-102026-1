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

## 4. Agregá tu foto y tu presentación

1. Guardá tu foto o avatar en `images/avatars/` con el patrón `nombre-apellido.ext`. Conservá la extensión real de tu archivo. Puede ser, por ejemplo, `lucia-perez.jpg` o `lucia-perez.png`.
2. En `agenda-contactos/index.html`, copiá una ficha completa (`<li class="contacto">`) y agregala al final de la lista, antes de `</ul>`.
3. En tu ficha, reemplazá el nombre y escribí una o dos frases sobre lo que contaste en la primera clase.
4. Reemplazá el `<span>` de las iniciales por una imagen como la de abajo. Cambiá el nombre y la extensión para que coincidan con tu archivo. Usá `alt=""` porque el nombre ya aparece junto a la imagen.

```html
<img class="avatar" src="../images/avatars/lucia-perez.jpg" alt="">
```

## 5. Revisá y guardá tus cambios

Recargá la página y comprobá que se vea tu foto, que el nombre esté en negrita y que la síntesis se lea también en una ventana angosta.

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
