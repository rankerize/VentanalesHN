# Documentación Técnica y Diagnóstico SEO: ventanaleshn.com

> **Propósito del Documento:** Servir como fuente centralizada de información técnica, auditoría SEO y arquitectura web de `ventanaleshn.com` para agentes IA, desarrolladores y consultores SEO.  
> **Última Actualización:** 6 de Octubre, 2026  
> **Dominio Principal:** `https://www.ventanaleshn.com/` (Honduras - HN)

---

## 1. 📌 Ficha General del Sitio Web

| Parámetro | Detalle |
| :--- | :--- |
| **Sitio Web** | [https://www.ventanaleshn.com/](https://www.ventanaleshn.com/) |
| **Empresa / Marca** | Design Solutions By Ventanales |
| **País Objetivo** | Honduras (`hn`) |
| **Sector / Industria** | Arquitectura, ventanas, vidriería, solares, cortinas y soluciones decorativas |
| **Desarrollador Original** | Svenka (`svenka.com`) |

---

## 2. 🛠️ Stack Tecnológico Completo

* **Backend / Lenguaje:** PHP **8.4.26** (`x-powered-by: PHP/8.4.26`).
* **Servidor Web:** Apache (Linux).
* **Capa CDN / Caché:** **StackCDN** (Nodo `MIA1` - Miami).
* **Plantilla / CMS:** Plantilla en PHP basada en **Porto HTML Template (Demo Architecture 2)** con constructor visual frontend **ContentBuilder.js** (`contentbuilder-runtime.min.js`).
* **Framework Frontend:** Bootstrap (v4/v5).
* **Librerías JS & CSS UI:** FontAwesome Free, Simple Line Icons, Owl Carousel, Magnific Popup, Animate.css.
* **Fuentes Web:** Google Fonts (*Poppins*, *Overpass*, *PT Serif*).
* **Entorno de Origen:** Comentarios en HTML apuntan a desarrollo local en `http://localhost/ventanales/`.

---

## 3. 🗺️ Infraestructura SEO: Sitemap y Robots.txt

| Recurso | Estado HTTP | Observación |
| :--- | :--- | :--- |
| `/sitemap.xml` | `403 Forbidden` / Inexistente | No hay mapa de sitio publicado ni indexable. |
| `/robots.txt` | `200 OK` (Falso) | **No existe un archivo plano.** El servidor intercepta la URL y devuelve la página de inicio en HTML. |

---

## 4. 📊 Rendimiento SEO y Tráfico (Datos Semrush - Octubre 2026)

* **Tráfico Orgánico Estimado (HN):** ~94 visitas mensuales.
* **Palabras Clave Posicionadas (HN):** 4 palabras clave en la base de datos de Honduras.
  1. `ventanales` (Posición #1 | Vol: 110 | Tráfico: 93.6%)
  2. `ventanas` (Posición #40 | Vol: 1,000 | Tráfico: 0%)
* **Intención de Búsqueda:** 100% Informativa / Marca.
* **Tráfico de Pago (Google Ads):** 0 visitas (Sin campañas activas).
* **Perfil de Backlinks:** 355 backlinks de 281 dominios de referencia. Contiene anclajes de SPAM/PBN.

---

## 5. 🔍 Auditoría SEO On-Page (Spider & Crawl Analysis)

1. **Respuestas HTTP 429 (Too Many Requests):** Rate limiting agresivo en rastreos automatizados.
2. **Títulos y H1 Duplicados:** 97% de las URLs comparten `"Bienvenidos | Design Solutions By Ventanales"`.
3. **Ausencia de Meta Description:** 87% de las páginas carecen de meta descripción.
4. **Ausencia de Canonical Tags:** 97% de las URLs sin etiqueta canonical.
5. **Falta de Datos Estructurados:** 0 páginas cuentan con JSON-LD / Schema.org.

---

## 6. 🤖 Evaluación de Preparación para Agentes IA (IsItAgentReady)

* **Puntuación:** **Level 0 / 5 (Not Ready)**
* **Faltantes:** `robots.txt` real con reglas para bots IA, `sitemap.xml`, encabezados `Link` RFC 8288, negociación Markdown y API catalog.

---

## 📁 Archivos Relacionados en el Workspace

* **Informe Semrush PDF:** `Semrush-Visión_general_de_dominio_(Desktop)-ventanaleshn_com-6th_Oct_2026.pdf`
* **Histórico Semrush CSV:** `overview-trend-2026-10-06T16_28_09Z.csv`
* **Auditoria Crawler Excel:** `data/www.ventanaleshn.com/auditoria.xlsx` (en `/Users/cesarandresjimenezarci/Documents/clonscreamig/data/www.ventanaleshn.com/auditoria.xlsx`)
