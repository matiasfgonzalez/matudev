# matutech

Landing y catálogo de producto de **matutech** — Matías Francisco González,
desarrollador de producto en Paraná, Entre Ríos.

No es un portfolio de maquetas: la página es un catálogo de doce cosas que
existen, con lo que resuelve cada una, por qué conviene y con qué está hecha.

```bash
npm install
npm run dev      # http://localhost:3000
```

---

## Cómo está armado

```
app/
  lib/
    site.ts          Marca, contacto y navegación. Un solo lugar que tocar.
    products.ts      El catálogo: fuente única de la grilla, la ficha,
                     los contadores del hero y los datos estructurados.
  components/
    aurora.tsx           El fondo animado (sin JavaScript)
    brand.tsx            Logotipo, wordmark e íconos de redes
    reveal.tsx           MotionProvider + animaciones al desplazar
    navbar.tsx           Barra fija, tema y menú móvil
    hero-section.tsx     Tesis + constelación de productos
    products-section.tsx Filtros + grilla
    product-card.tsx     Tarjeta del catálogo
    product-sheet.tsx    Ficha completa (modal)
    services-section.tsx · process-section.tsx · stack-section.tsx
    about-section.tsx · faq-section.tsx · contact-section.tsx
    footer.tsx · whatsapp-float.tsx
  globals.css        El sistema de diseño entero
  layout.tsx         Tipografías, metadatos, viewport y tema inicial
  page.tsx           Composición + JSON-LD
  icon.tsx           Ícono de pestaña generado
  opengraph-image.tsx Vista previa al compartir el enlace
public/
  products/          Capturas de los productos
  brand/             Marcas de producto
```

---

## El sistema de diseño

Tres estilos, **una capa cada uno**. Mezclados sin jerarquía quedan en barro.

| Capa             | Estilo       | Dónde vive                                        |
| ---------------- | ------------ | ------------------------------------------------- |
| **Atmósfera**    | Aurora       | El fondo fijo. Nunca lleva texto encima.          |
| **Superficie**   | Glassmorphism| Todo lo que contiene contenido: tarjetas, nav, ficha. |
| **Control**      | Neumorfismo  | Sólo lo que se aprieta: botones, filtros, pods.   |

El color de acción es **ámbar** y es lo único cálido de la página, así que
ninguna llamada a la acción se confunde con decoración.

Los tokens están en [`app/globals.css`](app/globals.css). Los que más se tocan:

```css
--au-jade: #19e3a5;   /* aurora */
--au-cyan: #22b8ff;
--au-violet: #8b5cf6;
--au-magenta: #e252c7;

--signal: #ffb224;         /* relleno de las acciones */
--signal-strong: #ffb224;  /* el mismo ámbar como texto (se oscurece en claro) */
```

**El modo claro no usa fondo blanco.** El neumorfismo necesita un tono medio
(`#e7ebf3`) para que la luz y la sombra se lean; sobre blanco puro sólo se ve
la sombra.

### Tipografía

| Rol      | Familia              | Para qué                                  |
| -------- | -------------------- | ----------------------------------------- |
| Display  | Bricolage Grotesque  | Titulares. Variable, con eje óptico.      |
| Cuerpo   | Manrope              | Texto corrido.                            |
| Datos    | JetBrains Mono       | Cifras, versiones, etiquetas y stack.     |

---

## Cargar o editar productos

Todo el catálogo sale de [`app/lib/products.ts`](app/lib/products.ts). Agregar
uno es agregar un objeto al arreglo: la grilla, los filtros, los contadores del
hero, el pie y los datos estructurados se actualizan solos.

Un producto sin `link` no muestra enlace roto: la ficha ofrece una demo por
WhatsApp.

Para el ícono, agregá una entrada en
[`app/components/product-icons.tsx`](app/components/product-icons.tsx) usando un
ícono de **lucide-react** — una sola familia en toda la página, sin emojis.

---

## Decisiones que conviene no deshacer

| Decisión | Por qué |
| --- | --- |
| El movimiento reducido se resuelve con `MotionConfig`, no con una rama en el render | Preguntar por la preferencia al dibujar da un árbol en el servidor y otro en el cliente. La hidratación no cuadra, y el contenido se queda en `opacity: 0` — invisible justo para quien pidió menos animación. |
| `.glass` no fija `position` | Le ganaba a la utilidad `absolute` de Tailwind y las tarjetas flotantes caían al flujo normal. La posición la pide quien la usa. |
| La ficha de producto se monta en `document.body` | `<main>` tiene `z-index` propio y crea contexto de apilamiento: sin portal, el modal queda debajo de la barra fija. |
| `viewport` es su propio `export` en el layout | Dentro de `metadata` está deprecado desde Next 14. |
| El tema se fija con un script en `<head>` antes del primer pintado | Sin eso, quien eligió modo claro ve un destello oscuro en cada carga. |
| El botón de WhatsApp de la barra se esconde con un contenedor | `.btn` fija `display: inline-flex` y le gana a la utilidad `hidden`. |
| El `<noscript>` devuelve la opacidad | Las animaciones de entrada dejan el contenido en `opacity: 0` hasta que corre el JavaScript. |

---

## Comandos

```bash
npm run dev      # desarrollo
npm run build    # compilar
npm run start    # servir lo compilado
npm run lint     # ESLint
```

---

## Contacto

**Matías Francisco González** — Paraná, Entre Ríos, Argentina

[WhatsApp](https://wa.me/5493454432164) ·
[matiasgonzalez.652@gmail.com](mailto:matiasgonzalez.652@gmail.com) ·
[LinkedIn](https://www.linkedin.com/in/matias-gonzalez-1a75b6223/) ·
[GitHub](https://github.com/matiasfgonzalez)
