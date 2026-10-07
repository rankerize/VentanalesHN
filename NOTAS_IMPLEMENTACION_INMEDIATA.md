# ⚡ Guía de Implementación Inmediata: Lo que le Copiamos y Mejoramos a la Competencia

> **Propósito:** Lista de snippets, textos, elementos UX y datos estructurados listos para inyectar **HOY MISMO** en `index.html`, `cotizar.html`, `categorias/cortinas-motorizadas.html` y `SEO_IA_ESPECIFICACION.md`.

---

## 🎯 1. Nuevos Bloques de Texto y Copywriting (Para inyectar en HTML)

### A. Banner / Modal: "Visita Técnica + Maletín de Muestras a Domicilio"
*(Inspirado en Canet y Estilos y Detalles - Inyectar en `index.html` y `cotizar.html`)*

```html
<!-- BANNER CONVERSIÓN VISITA TÉCNICA -->
<section class="bg-dark text-white py-5 my-4 border-top border-bottom">
  <div class="container text-center text-md-left">
    <div class="row align-items-center">
      <div class="col-md-8">
        <span class="badge badge-light text-dark mb-2">Servicio Exclusivo en Tegucigalpa y SPS</span>
        <h3 class="font-weight-bold text-white">¿Indeciso con las telas o medidas de tus ventanas y cortinas?</h3>
        <p class="lead text-light mb-md-0">
          Llevamos nuestro <strong>Maletín de Muestras Físicas</strong> a tu casa u oficina. Medimos tus espacios y te asesoramos <strong>sin costo ni compromiso</strong>.
        </p>
      </div>
      <div class="col-md-4 text-md-right">
        <a href="https://wa.me/50499999999?text=Hola,%20quisiera%20agendar%20una%20visita%20t%C3%A9cnica%20con%20muestras%20a%20domicilio" class="btn btn-light btn-lg font-weight-bold">
          <i class="fab fa-whatsapp text-success mr-2"></i>Agendar Visita Gratis
        </a>
      </div>
    </div>
  </div>
</section>
```

---

### B. Módulo del Proceso Transparente en 5 Pasos
*(Inspirado en Estilos y Detalles - Inyectar en `empresa.html` o bajo el Hero de `index.html`)*

```html
<section class="py-5 bg-light">
  <div class="container">
    <h2 class="text-center font-weight-bold mb-4">Nuestro Proceso de Trabajo Sin Sorpresas</h2>
    <div class="row text-center">
      <div class="col-md-2-4 col-sm-6 mb-4">
        <div class="p-3 bg-white shadow-sm h-100">
          <span class="h1 text-dark d-block">01</span>
          <h5 class="font-weight-bold">Contacto Inmediato</h5>
          <p class="small text-muted">Escríbenos por WhatsApp o cotiza en línea en 1 minuto.</p>
        </div>
      </div>
      <div class="col-md-2-4 col-sm-6 mb-4">
        <div class="p-3 bg-white shadow-sm h-100">
          <span class="h1 text-dark d-block">02</span>
          <h5 class="font-weight-bold">Muestras en Vivo</h5>
          <p class="small text-muted">Visitamos tu espacio con muestrarios de telas y perfiles.</p>
        </div>
      </div>
      <div class="col-md-2-4 col-sm-6 mb-4">
        <div class="p-3 bg-white shadow-sm h-100">
          <span class="h1 text-dark d-block">03</span>
          <h5 class="font-weight-bold">Cotización Clara</h5>
          <p class="small text-muted">Presupuesto detallado con precio final sin cargos ocultos.</p>
        </div>
      </div>
      <div class="col-md-2-4 col-sm-6 mb-4">
        <div class="p-3 bg-white shadow-sm h-100">
          <span class="h1 text-dark d-block">04</span>
          <h5 class="font-weight-bold">Fabricación a Medida</h5>
          <p class="small text-muted">Ensamblado de precisión en aluminio, PVC o confección de telas.</p>
        </div>
      </div>
      <div class="col-md-2-4 col-sm-6 mb-4">
        <div class="p-3 bg-white shadow-sm h-100">
          <span class="h1 text-dark d-block">05</span>
          <h5 class="font-weight-bold">Instalación y Garantía</h5>
          <p class="small text-muted">Montaje limpio con hasta 3 años de garantía respaldada.</p>
        </div>
      </div>
    </div>
  </div>
</section>
```

---

## 🛠️ 2. Agregados Técnicos a la Ficha de Cortinas y Persianas

### Especificaciones de Telas (Lo que Canet usa para justificar precios altos)
Agregar este bloque de viñetas en `categorias/cortinas-motorizadas.html` o fichas de cortinas:

* **Factores de Apertura Disponibles:**
  * `Screen 1%` : Máxima privacidad durante el día y control térmico del 99% de rayos UV.
  * `Screen 3%` : Equilibrio perfecto entre visibilidad al exterior y filtración de calor.
  * `Screen 5%` : Alta entrada de iluminación natural manteniendo el confort visual.
  * `Blackout 100%` : Oscurecimiento absoluto para dormitorios, salas de proyección y salas de junta.
* **Seguridad y Certificación:** Telas ignífugas (*NFPA 701*), libres de plomo y con protección contra decoloración solar.
* **Motorización Inteligente:** Motores tubulares ultra-silenciosos compatibles con **Alexa, Google Home, Siri Shortcuts** o mandos a distancia multicanal.

---

## 🧮 3. Actualización al Cotizador (`cotizar.html`)

Añadir las nuevas opciones de **Cortinas & Persianas** al selector del cotizador para que el usuario no solo cotice ventanas de PVC/Aluminio:

```html
<!-- En el <select id="tipoProducto"> de cotizar.html -->
<optgroup label="Cortinas & Protection Solar">
  <option value="cortina-screen-1">Cortina Roller Screen 1% (Privacidad & UV)</option>
  <option value="cortina-screen-3">Cortina Roller Screen 3% (Visibilidad media)</option>
  <option value="cortina-blackout">Cortina Blackout 100% (Oscurecimiento Total)</option>
  <option value="cortina-neolux">Cortina Neolux / Dual Shade (Día y Noche)</option>
  <option value="toldo-exterior">Toldo o Cortina de Exterior para Terraza</option>
</optgroup>
```

Y en los adicionales:
```html
<div class="form-check">
  <input class="form-check-input" type="checkbox" id="motorizacionSmart">
  <label class="form-check-label" for="motorizacionSmart">
    Agregar Motorización Smart (Control por Voz / Alexa / App Móvil)
  </label>
</div>
```

---

## 📈 4. Fragmento JSON-LD para SEO Local y Rich Snippets

Inyectar en el `<head>` de `index.html` para posicionar en Tegucigalpa y San Pedro Sula con la ventaja de la garantía de 3 años y servicio a domicilio:

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "HomeGoodsStore",
  "name": "Design Solutions By Ventanales - Ventanales HN",
  "url": "https://www.ventanaleshn.com",
  "logo": "https://www.ventanaleshn.com/assets/img/logo.png",
  "description": "Fabricación e instalación de ventanas de aluminio, PVC termoacústico, vidriería templada y cortinas motorizadas en Honduras.",
  "address": [
    {
      "@type": "PostalAddress",
      "addressLocality": "Tegucigalpa",
      "addressRegion": "Francisco Morazán",
      "addressCountry": "HN"
    },
    {
      "@type": "PostalAddress",
      "addressLocality": "San Pedro Sula",
      "addressRegion": "Cortés",
      "addressCountry": "HN"
    }
  ],
  "areaServed": ["Tegucigalpa", "San Pedro Sula", "La Ceiba", "Roatán", "Honduras"],
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Servicios de Ventanería y Cortinas",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Visita Técnica y Muestrario a Domicilio Gratis"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Product",
          "name": "Ventanas de PVC y Aluminio con Vidrio Templado"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Product",
          "name": "Cortinas Enrollables Screen y Blackout Motorizadas"
        }
      }
    ]
  }
}
</script>
```
