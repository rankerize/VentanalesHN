# Especificación SEO + IA · Rediseño ventanaleshn.com

> Preparado por Grovi Studio · Octubre 2026
> Acompaña al rediseño en Claude Design (6 páginas: Home, Landing Cortinas, Proyectos, Blog, Entrada de blog, Contacto).
> Todo lo que está entre [corchetes] lo debe confirmar Ventanales antes de publicar.

---

## 1. Reglas globales (aplican a todo el sitio)

| Elemento | Regla |
| :--- | :--- |
| URL | Minúsculas, con guiones, sin parámetros. Barra final consistente (`/`). |
| `<title>` | Único por página, 50–60 caracteres, palabra clave al inicio y “· Ventanales” al final. |
| Meta description | Única, 140–155 caracteres. En el blog = el texto de “En resumen”. |
| H1 | Uno solo por página, el mismo del diseño. |
| Canonical | `<link rel="canonical">` autorreferenciado en todas las páginas. |
| Idioma | `<html lang="es-HN">` + `<meta property="og:locale" content="es_HN">`. |
| Open Graph | `og:title`, `og:description`, `og:image` (1200×630), `og:url`, `og:type`. |
| Imágenes | WebP, `width`/`height` declarados, `loading="lazy"` excepto la principal, `alt` descriptivo (qué + dónde, ej. “Cortina blackout motorizada en habitación de hotel, Tegucigalpa”). |
| Semántica | `<header>`, `<nav>`, `<main>`, `<article>`, `<aside>`, `<footer>`, `<address>` para NAP, `<time datetime>` para fechas. |
| NAP | Nombre, dirección y teléfono idénticos en todo el sitio, Google Business Profile, Facebook, Instagram y Houzz. |
| Bloque “En resumen” | Toda landing y todo artículo abre con 2–4 líneas que respondan exactamente lo que promete el H1. Es lo que más citan las IAs. |
| FAQ | Respuestas de 40–60 palabras, directas, con datos concretos (precios, plazos, ciudades). Nunca dejar placeholders publicados. |
| Archivos raíz | `robots.txt`, `sitemap.xml` y `llms.txt` (incluidos en esta carpeta). |
| Velocidad | LCP < 2,5 s, CLS < 0,1. Servir fuentes con `font-display: swap`. |

---

## 2. Ficha por página

### 2.1 Home — `/`
- **Title:** Cortinas, toldos y mobiliario en Tegucigalpa · Ventanales
- **Meta:** Más de 25 años diseñando, fabricando e instalando cortinas, toldos, pérgolas y mobiliario a medida en Honduras. Showroom en Vertis, Tegucigalpa.
- **H1:** Cortinas, toldos y mobiliario a medida para espacios con personalidad
- **Schema:** `HomeAndConstructionBusiness` (LocalBusiness) + `WebSite` + `FAQPage`

```json
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "HomeAndConstructionBusiness",
      "@id": "https://www.ventanaleshn.com/#negocio",
      "name": "Design Solutions By Ventanales",
      "alternateName": "Ventanales",
      "url": "https://www.ventanaleshn.com/",
      "logo": "https://www.ventanaleshn.com/assets/img/logo/logo.png",
      "image": "[URL foto del showroom]",
      "description": "Empresa hondureña con más de 25 años de experiencia en cortinas y persianas, toldos, pérgolas, mobiliario a medida, automatización e interiorismo.",
      "telephone": "+504 8992-0617",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Centro de Negocios Vertis, local 105, Complejo Próceres, frente a Novacentro",
        "addressLocality": "Tegucigalpa",
        "addressRegion": "Francisco Morazán",
        "addressCountry": "HN"
      },
      "geo": { "@type": "GeoCoordinates", "latitude": "[lat]", "longitude": "[lng]" },
      "openingHours": "[Mo-Fr 08:00-17:00]",
      "areaServed": { "@type": "Country", "name": "Honduras" },
      "sameAs": [
        "https://www.instagram.com/ventanaleshn/",
        "https://business.facebook.com/ventanaleshn/",
        "https://www.pinterest.es/ventanalesdesignsolutions/",
        "https://www.houzz.com/pro/ventanales/ventanales-soluciones-decorativas/"
      ]
    },
    {
      "@type": "WebSite",
      "@id": "https://www.ventanaleshn.com/#web",
      "url": "https://www.ventanaleshn.com/",
      "name": "Ventanales",
      "inLanguage": "es-HN",
      "publisher": { "@id": "https://www.ventanaleshn.com/#negocio" }
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        { "@type": "Question", "name": "¿Qué hace Ventanales?", "acceptedAnswer": { "@type": "Answer", "text": "Design Solutions By Ventanales es una empresa hondureña con más de 25 años de experiencia en cortinas y persianas, toldos, pérgolas, mobiliario a medida, automatización e interiorismo. Diseña, fabrica e instala cada proyecto." } },
        { "@type": "Question", "name": "¿Dónde está el showroom de Ventanales?", "acceptedAnswer": { "@type": "Answer", "text": "En el Centro de Negocios Vertis, local 105, Complejo Próceres, frente a Novacentro, Tegucigalpa. WhatsApp: +504 8992-0617." } },
        { "@type": "Question", "name": "¿Trabajan proyectos para empresas, hoteles y hospitales?", "acceptedAnswer": { "@type": "Answer", "text": "Sí. Ventanales tiene soluciones comerciales, corporativas, hoteleras y hospitalarias, además de proyectos residenciales." } },
        { "@type": "Question", "name": "¿Cómo pido una cotización?", "acceptedAnswer": { "@type": "Answer", "text": "Por el formulario de contacto o por WhatsApp al +504 8992-0617, indicando el producto, la ciudad y las medidas aproximadas del espacio." } }
      ]
    }
  ]
}
```

### 2.2 Landing Cortinas — `/productos/cortinas-y-persianas/`
- **Title:** Cortinas y persianas a medida en Tegucigalpa · Ventanales
- **Meta:** Cortinas roller, blackout, decorativas, Neolux y motorizadas a medida en Tegucigalpa. Asesoría, medición, fabricación e instalación. Cotiza por WhatsApp.
- **H1:** Cortinas y persianas a medida en Tegucigalpa
- **Keywords objetivo:** cortinas Tegucigalpa · cortinas blackout Honduras · cortinas roller Tegucigalpa · persianas a medida · cortinas motorizadas Honduras
- **Schema:** `Service` + `FAQPage` (solo preguntas con respuesta real) + `BreadcrumbList`

```json
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "name": "Cortinas y persianas a medida",
      "serviceType": "Fabricación e instalación de cortinas y persianas",
      "provider": { "@id": "https://www.ventanaleshn.com/#negocio" },
      "areaServed": { "@type": "City", "name": "Tegucigalpa" },
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Tipos de cortina",
        "itemListElement": [
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Cortinas roller" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Cortinas blackout" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Cortinas decorativas" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Persianas Neolux" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Cortinas motorizadas" } }
        ]
      }
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Inicio", "item": "https://www.ventanaleshn.com/" },
        { "@type": "ListItem", "position": 2, "name": "Productos", "item": "https://www.ventanaleshn.com/productos/" },
        { "@type": "ListItem", "position": 3, "name": "Cortinas y persianas", "item": "https://www.ventanaleshn.com/productos/cortinas-y-persianas/" }
      ]
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        { "@type": "Question", "name": "¿Cuál es la diferencia entre una cortina roller y una blackout?", "acceptedAnswer": { "@type": "Answer", "text": "La roller con tela screen filtra la luz y conserva la vista hacia afuera; la blackout bloquea la luz por completo. Pueden combinarse en un sistema doble." } }
      ]
    }
  ]
}
```
> Agregar al `FAQPage` las demás preguntas (precio, medición, plazos, motorización, ciudades) cuando Ventanales entregue las respuestas.

### 2.3 Proyectos — `/proyectos/`
- **Title:** Proyectos de cortinas y mobiliario en Honduras · Ventanales
- **Meta:** Proyectos hospitalarios, corporativos, comerciales, hoteleros y residenciales de Ventanales en Honduras: diseño, fabricación e instalación.
- **H1:** Espacios que transformamos en Honduras
- **Schema:** `CollectionPage` + `BreadcrumbList`. Cada proyecto individual (`/proyectos/<slug>/`) lleva `CreativeWork` con `locationCreated`, `about` (productos) y fotos con `alt`.
- **Nota:** filtros por sector como enlaces rastreables (`/proyectos/hospitalarios/`) o con `?sector=` + canonical a `/proyectos/`.

### 2.3.1 Proyecto individual — `/proyectos/<sector>/<slug>/` (plantilla)
- **Hallazgo en el sitio actual:** `/proyectos` muestra ~85 tarjetas, pero solo enlazan a ~5 URLs del tipo `/producto/NEP6QK`, una por categoría. Cada una tiene solo un H1 ("PROYECTOS HOSPITALARIOS"), una frase y 2 imágenes: contenido mínimo, URLs sin palabras clave y mezcladas con productos.
- **Nueva estructura:** una URL por proyecto real, ej. `/proyectos/hospitalarios/cortinas-blackout-hospital-x-tegucigalpa/`. Redirigir 301 las `/producto/<ID>` de proyectos a `/proyectos/<sector>/`.
- **Title:** [Producto] para [Cliente], [Ciudad] · Proyecto Ventanales (≤ 60 caracteres)
- **Meta:** el texto de "En resumen" del proyecto.
- **H1:** [Producto principal] para [Cliente o tipo de espacio], [Ciudad]
- **Estructura obligatoria:** ruta → sector/ciudad/año → H1 → bajada → foto principal → **En resumen** → El reto / La solución / El resultado → testimonio → ficha (cliente, sector, ubicación, año, alcance, productos con enlace a su landing) → galería con pie de foto en cada imagen → antes y después → proyectos relacionados del mismo sector → CTA "Quiero un proyecto similar".
- **Mínimo por proyecto:** 6 fotos con `alt` descriptivo, 250–400 palabras, ciudad y productos nombrados en el texto.
- **Schema:** `CreativeWork` + `BreadcrumbList` (+ `Review` solo si el testimonio es real y autorizado)

```json
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "CreativeWork",
      "name": "[Cortinas blackout motorizadas] para [nombre del hospital], [ciudad]",
      "description": "[Texto de En resumen]",
      "creator": { "@id": "https://www.ventanaleshn.com/#negocio" },
      "dateCreated": "[AAAA]",
      "locationCreated": { "@type": "Place", "name": "[Nombre del lugar]", "address": { "@type": "PostalAddress", "addressLocality": "[Ciudad]", "addressCountry": "HN" } },
      "about": [ { "@type": "Thing", "name": "Cortinas blackout" }, { "@type": "Thing", "name": "Motorización" } ],
      "image": [ "[URL foto 1]", "[URL foto 2]", "[URL foto 3]" ],
      "inLanguage": "es-HN"
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Inicio", "item": "https://www.ventanaleshn.com/" },
        { "@type": "ListItem", "position": 2, "name": "Proyectos", "item": "https://www.ventanaleshn.com/proyectos/" },
        { "@type": "ListItem", "position": 3, "name": "Hospitalarios", "item": "https://www.ventanaleshn.com/proyectos/hospitalarios/" }
      ]
    }
  ]
}
```

### 2.4 Blog — `/blog/`
- **Title:** Guías de cortinas y decoración en Honduras · Ventanales
- **Meta:** Guías prácticas para elegir cortinas, toldos, pérgolas y mobiliario a medida, escritas por el equipo de diseño de Ventanales en Tegucigalpa.
- **H1:** Guías de cortinas, toldos y decoración en Honduras
- **Schema:** `Blog` + `BreadcrumbList`. Categorías como páginas reales (`/blog/cortinas/`), no solo filtros.

### 2.5 Entrada de blog — `/blog/cortinas-roller-vs-blackout/`
- **Title:** Cortinas roller vs. blackout: cuál elegir · Ventanales
- **Meta:** Elige roller si quieres luz natural y vista; blackout si necesitas oscuridad total. Si quieres ambas, usa un sistema doble. Guía por ambiente.
- **H1:** Cortinas roller vs. blackout: cuál elegir para cada ambiente
- **Estructura obligatoria de cada artículo:** ruta → categoría/fecha → H1 → bajada → autor + “Actualizado” → foto principal → **En resumen** → índice → H2 en forma de pregunta o tarea → tabla o lista comparativa → enlaces internos a la landing del producto → bloque de autor → artículos relacionados.
- **Schema:** `BlogPosting` + `BreadcrumbList`

```json
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BlogPosting",
      "headline": "Cortinas roller vs. blackout: cuál elegir para cada ambiente",
      "description": "Elige roller si quieres luz natural y vista; blackout si necesitas oscuridad total. Si quieres ambas, usa un sistema doble.",
      "image": "[URL foto principal 1200×630]",
      "datePublished": "[AAAA-MM-DD]",
      "dateModified": "[AAAA-MM-DD]",
      "inLanguage": "es-HN",
      "author": { "@type": "Person", "name": "[Nombre del autor]", "jobTitle": "[Cargo]", "worksFor": { "@id": "https://www.ventanaleshn.com/#negocio" } },
      "publisher": { "@id": "https://www.ventanaleshn.com/#negocio" },
      "mainEntityOfPage": "https://www.ventanaleshn.com/blog/cortinas-roller-vs-blackout/",
      "about": [ { "@type": "Thing", "name": "Cortinas roller" }, { "@type": "Thing", "name": "Cortinas blackout" } ]
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Inicio", "item": "https://www.ventanaleshn.com/" },
        { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://www.ventanaleshn.com/blog/" },
        { "@type": "ListItem", "position": 3, "name": "Cortinas", "item": "https://www.ventanaleshn.com/blog/cortinas/" }
      ]
    }
  ]
}
```

### 2.6 Contacto — `/contacto/`
- **Title:** Contacto y cotización · Ventanales Tegucigalpa
- **Meta:** Cotiza cortinas, toldos, pérgolas o mobiliario a medida. Showroom en Centro de Negocios Vertis, Tegucigalpa. WhatsApp +504 8992-0617.
- **H1:** Cuéntanos de tu espacio
- **Schema:** `ContactPage` con `about` → `#negocio`.
- **Medición:** evento de conversión en GA4 al enviar el formulario y al hacer clic en WhatsApp (`generate_lead`, `whatsapp_click`).

---

## 3. Sitemap (`/sitemap.xml`)
Incluir solo URLs indexables con 200 OK: `/`, `/productos/…` (6 landings), `/proyectos/` y cada proyecto, `/blog/`, categorías del blog, cada artículo, `/empresa/`, `/contacto/`. Con `<lastmod>` real. Enviar a Google Search Console y Bing Webmaster Tools.

## 4. Visibilidad en IA — checklist
- [ ] `robots.txt` publicado (permite GPTBot, OAI-SearchBot, ClaudeBot, PerplexityBot, Google-Extended).
- [ ] `llms.txt` publicado en la raíz.
- [ ] Bloque “En resumen” en cada landing y artículo.
- [ ] FAQs con respuestas reales y concretas (precio, plazos, cobertura).
- [ ] Google Business Profile verificado con el mismo NAP, categorías y fotos.
- [ ] Perfil de Bing Places (lo usa ChatGPT) con el mismo NAP.
- [ ] Autor real con bio en cada artículo + página “Nosotros” con el equipo.
- [ ] Fechas de publicación y actualización visibles y en Schema.
- [ ] Reseñas de clientes en Google (mencionadas por las IAs al recomendar negocios locales).

## 5. Datos pendientes de Ventanales
Horario · correo de ventas · coordenadas del showroom · respuestas FAQ (precio por m², medición, plazos, motorización de cortinas existentes, ciudades atendidas) · nombres y fotos de proyectos · autores del blog con cargo y bio · número de proyectos instalados.
