# Brand Book & Guía de Identidad de Marca
## Design Solutions By Ventanales (`ventanaleshn.com`)

> **Propósito:** Documento normativo oficial que define los colores HEX exactos, fuentes de Google Fonts, logotipos y patrones UI extraídos del sitio web original `ventanaleshn.com`.  
> **Fecha de Emisión:** Octubre 2026  
> **Cliente:** Design Solutions By Ventanales (Honduras)

---

## 1. 📌 Ficha General de la Marca

* **Nombre de Marca:** Design Solutions By Ventanales
* **Dominio Principal:** `https://www.ventanaleshn.com/`
* **Sector:** Arquitectura, ventanería termoacústica en PVC y aluminio, cortinas motorizadas, fachadas de vidrio y pérgolas.
* **Mercado Objetivo:** Honduras (Tegucigalpa, San Pedro Sula, Roatán, La Ceiba).
* **Desarrollador Web Original:** Svenka (`svenka.com`).
* **Plantilla Base Original:** Porto HTML Theme (*Demo Architecture 2*).

---

## 2. 🎨 Paleta de Colores Oficial (Extraída del CSS Real)

La paleta cromática de **Design Solutions By Ventanales** refleja elegancia arquitectónica, sobriedad y acabados de alta gama en aluminio y cristal.

### 🔹 Colores Principales (Brand Colors)

| Nombre del Color | Código HEX | Uso en la Web | Muestra |
| :--- | :--- | :--- | :--- |
| **Gris Antracita (Primary)** | `#383b3d` | Color principal de acentos, fondos de héroe, pie de página y botones. | `RGB(56, 59, 61)` |
| **Negro Mate (Secondary Dark)** | `#2a2a2a` | Encabezados H1-H3, títulos de productos y menú principal. | `RGB(42, 42, 42)` |
| **Gris Oscuro Nocturno (Dark)** | `#212529` | Fondo de pie de página y componentes de alto contraste. | `RGB(33, 37, 41)` |
| **Blanco Puro (Light Surface)** | `#ffffff` | Fondo de cabecera (Header), tarjetas y contenedores principales. | `RGB(255, 255, 255)` |
| **Gris Fondo Neutro (Light BG)** | `#f8fafc` | Fondo general de páginas para lectura limpia. | `RGB(248, 250, 252)` |

### 🔹 Colores Secundarios y de Texto

| Nombre del Color | Código HEX | Uso en la Web |
| :--- | :--- | :--- |
| **Gris Texto Secundario** | `#444444` | Texto de párrafos y enlaces en estado hover. |
| **Gris Muted (Default Text)** | `#777777` | Metadatos, subtítulos y descripciones secundarias. |
| **Verde WhatsApp (Conversión)** | `#25D366` | Botón flotante y llamadas a la acción directas a cotización. |

---

## 3. 🔤 Sistema Tipográfico Oficial

Las fuentes fueron extraídas directamente de la llamada oficial de Google Fonts en el HTML original:  
`https://fonts.googleapis.com/css?family=Poppins:300,400,500,600,700,800%7COverpass:200,400,600,700,800,900%7CPT+Serif`

### 1. **Overpass** (Titulares y Encabezados)
* **Familia:** `'Overpass', sans-serif`
* **Pesos Usados:** `400` (Regular), `600` (SemiBold), `700` (Bold), `800` (ExtraBold).
* **Uso:** Títulos principales de páginas, títulos de tarjetas de proyectos y llamadas principales.

### 2. **Poppins** (Cuerpo de Texto y Menús)
* **Familia:** `'Poppins', sans-serif`
* **Pesos Usados:** `300` (Light), `400` (Regular), `500` (Medium), `600` (SemiBold), `700` (Bold).
* **Uso:** Menú de navegación principal, párrafos, descripciones de productos y botones UI.

### 3. **PT Serif** (Acentos Editoriales)
* **Familia:** `'PT Serif', serif`
* **Pesos Usados:** `400` (Regular), `400Italic`, `700` (Bold).
* **Uso:** Citas, testimonios de arquitectos y leyendas editoriales.

---

## 🖼️ 4. Logotipo e Identidad Gráfica

Los archivos de logotipo e icono de la marca se encuentran descargados en el repositorio en la carpeta `assets/img/`:

* **Logotipo Principal:** [`assets/img/logo.png`](file:///Users/cesarandresjimenezarci/Documents/Clientes/ventanaleshn/assets/img/logo.png) (320px de ancho original, sobre fondo claro o transparente).
* **Favicon / Isotipo:** [`assets/img/favicon.png`](file:///Users/cesarandresjimenezarci/Documents/Clientes/ventanaleshn/assets/img/favicon.png)

### Reglas de Uso del Logotipo:
1. El logotipo original en imagen `assets/img/logo.png` debe usarse en la cabecera superior y pie de página.
2. Mantener un área de protección mínima equivalente a la altura de la letra "D" alrededor del logotipo.
3. No deformar las proporciones de aspecto ni aplicar filtros de color que distorsionen el texto de *Design Solutions By Ventanales*.

---

## 🛠️ 5. Especificaciones de Código CSS (Variables Oficiales)

Para utilizar en los nuevos desarrollos y plantillas del sitio web:

```css
/* Custom Brand Variables - Design Solutions By Ventanales */
:root {
  /* Colors */
  --color-primary: #383b3d;      /* Gris Antracita */
  --color-secondary: #2a2a2a;    /* Negro Mate */
  --color-dark: #212529;         /* Oscuro */
  --color-light: #ffffff;        /* Blanco */
  --color-bg: #f8fafc;           /* Fondo Claro */
  --color-text: #444444;         /* Texto Principal */
  --color-muted: #777777;        /* Texto Secundario */
  --color-whatsapp: #25d366;     /* Verde WhatsApp */

  /* Typography */
  --font-heading: 'Overpass', sans-serif;
  --font-body: 'Poppins', sans-serif;
  --font-serif: 'PT Serif', serif;

  /* Borders & Radius */
  --border-radius: 4px;
  --border-radius-lg: 8px;
}
```
