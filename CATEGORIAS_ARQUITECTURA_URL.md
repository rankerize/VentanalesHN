# 🗺️ Arquitectura Oficial de URLs y Categorías — Ventanales HN

**Dominio:** `https://ventanaleshn.com`  
**Estructura de Directorio:** `/categorias/`  
**Objetivo:** Captación masiva de impresiones SEO orgánicas y conversión directa B2B/B2C en Honduras.  

---

## 📐 Matriz General de Categorías y URLs

| # | Nombre de Categoría | URL Oficial | Segmento Principal | Keywords Clave Objetivo (SEMrush) | Estado |
| :-: | :--- | :--- | :---: | :--- | :-: |
| 1 | **Hub Principal de Categorías** | `/categorias/index.html` | B2B & B2C | *categorias de productos ventanales hn, catalogo ventanales honduras* | ✅ Creada |
| 2 | **Muebles de Cocina a Medida** | `/categorias/muebles-de-cocina.html` | B2C / B2B | `muebles de cocina` (1.9k), `muebles aereos de cocina`, `muebles de cocina tegucigalpa`, `muebles de cocina de madera` | ✅ Creada |
| 3 | **Cortinas para Sala (Residencial)** | `/categorias/cortinas-para-sala.html` | B2C | `cortinas para sala` (320), `cortinas modernas para sala`, `cortinas blackout`, `sheer elegance` | ✅ Creada |
| 4 | **Cortinas para Oficina & B2B** | `/categorias/cortinas-para-oficina.html` | B2B Corporativo | `cortinas para oficina tegucigalpa`, `cortinas enrollables tegucigalpa`, `roller sunscreen`, `blackout salas conferencia` | ✅ Creada |
| 5 | **Cortinas Motorizadas & Persianas** | `/categorias/cortinas-motorizadas.html` | B2B / B2C | `persianas`, `persianas electricas`, `motores somfy cortinas`, `persianas venecianas`, `persianas verticales` | ✅ Creada |
| 6 | **Pérgolas Bioclimáticas & Exteriores** | `/categorias/pergolas-exteriores.html` | B2B / B2C | `pergola` (1.0k), `pergolas de madera`, `pergolas de metal`, `panel sandwich honduras` (470), `toldos tegucigalpa` | ✅ Creada |
| 7 | **Ventanas de PVC & Aluminio** | `/categorias/ventanas-pvc-aluminio.html` | B2B / B2C | `ventanas de pvc` (590), `ventanas corredizas` (480), `ventanas pvc kömmerling`, `ventanales panoramicos` | ✅ Creada |
| 8 | **Walk-in Closets & Mobiliario** | `/categorias/mobiliario-a-medida.html` | B2C / B2B | `closet de madera` (720), `walking closet` (390), `closet a medida tegucigalpa`, `puertas corredizas closet` | ✅ Creada |
| 9 | **Soluciones Hospitalarias & Corporativas** | `/categorias/soluciones-hospitalarias-corporativas.html` | B2B Institucional | `paneles divisorios hospitalarios`, `cortinas clinicas antibacterianas`, `rieles medicos`, `puertas hermeticas quirofano` | ✅ Creada |
| 10 | **Fachadas de Vidrio Templado** | `/categorias/fachadas-vidrio-templado.html` | B2B Corporativo | `fachadas de vidrio`, `vidrio templado tegucigalpa`, `ventanales de vidrio`, `vidrio smart electrocromico` | ✅ Creada |
| 11 | **Decoración e Interiorismo** | `/categorias/decoracion-interiorismo.html` | B2C / B2B | `decoracion interiorismo honduras`, `remodelacion de interiores`, `acabados arquitectonicos` | ✅ Creada |

---

## 🌳 Árbol Jerárquico de Categorías (Sitemap Visual)

```
ventanaleshn.com/
│
├── index.html (Home)
├── cotizar.html (Cotizador Interactivo & Lead Engine)
├── empresa.html (Nosotros)
│
├── categorias/
│   ├── index.html (Hub Principal de Productos)
│   │
│   ├── 🍳 Muebles & Cocinas:
│   │   ├── muebles-de-cocina.html
│   │   └── mobiliario-a-medida.html (Closets & Walk-in Closets)
│   │
│   ├── 🪟 Cortinas & Persianas:
│   │   ├── cortinas-para-sala.html
│   │   ├── cortinas-para-oficina.html
│   │   └── cortinas-motorizadas.html
│   │
│   ├── 🏡 Exteriores & Pérgolas:
│   │   └── pergolas-exteriores.html
│   │
│   ├── 🏢 Cerramientos & Arquitectura:
│   │   ├── ventanas-pvc-aluminio.html
│   │   └── fachadas-vidrio-templado.html
│   │
│   └── 🏥 Especializadas:
│       ├── soluciones-hospitalarias-corporativas.html
│       └── decoracion-interiorismo.html
```

---

## 🛠️ Directivas de Enrutamiento y Canonicalización para Desarrolladores / Agentes

1. **Uso de URLs amigables (Clean URLs):**  
   En servidores Apache/Nginx con rewrite habilitado, las URLs deben mapear sin extensión (ej: `/categorias/muebles-de-cocina`).
2. **Canonical Tags Obligatorios:**  
   Cada página debe incluir en su `<head>`:  
   `<link rel="canonical" href="https://ventanaleshn.com/categorias/<SLUG>.html" />`
3. **OpenGraph & Meta Tags Específicos:**  
   Cada categoría cuenta con su metadescripción optimizada con las keywords principales de SEMrush para asegurar un alto Click-Through-Rate (CTR) en los resultados de Google.
