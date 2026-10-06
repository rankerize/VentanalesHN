# Bitácora de Sesión: ventanaleshn.com

> **Cliente / Proyecto:** Design Solutions By Ventanales (`ventanaleshn.com`)  
> **Fecha de la Sesión:** 6 de Octubre, 2026  
> **Estado:** Sesión finalizada / Proyecto documentado para cambio de contexto

---

## 📌 1. Resumen de la Sesión

En esta sesión se realizó un **análisis integral 360°** de la presencia digital de `ventanaleshn.com`, abarcando la revisión de reportes descargados (Semrush PDF y CSV), inspección del stack tecnológico en vivo, ejecución del rastreo SEO con *SEO Spider*, evaluación de *Agent Readiness* y la creación de la propuesta estratégica a 30-60-90 días.

---

## 📂 2. Archivos e Insumos Procesados

1. **`Semrush-Visión_general_de_dominio_(Desktop)-ventanaleshn_com-6th_Oct_2026.pdf`**  
   * Tráfico orgánico estimado: ~94 visitas/mes (100% marca: *"ventanales"*).
   * Alerta de backlinks tóxicos/PBN con anclajes en inglés (*"premium backlink services..."*).
2. **`overview-trend-2026-10-06T16_28_09Z.csv`**  
   * Histórico de tráfico 2016-2026 mostrando fluctuaciones y recuperación paulatina en 2025-2026.
3. **Auditoría SEO Spider (`auditoria.xlsx`)**  
   * Ubicación: `/Users/cesarandresjimenezarci/Documents/clonscreamig/data/www.ventanaleshn.com/auditoria.xlsx`
   * Hallazgos: 144/149 URLs con títulos y H1s duplicados, 87% sin meta descriptions, 97% sin canonicals.

---

## 🛠️ 3. Hallazgos Técnicos y Diagnóstico

* **Backend / Lenguaje:** PHP **8.4.26** (`x-powered-by: PHP/8.4.26`).
* **Servidor & CDN:** Apache + **StackCDN** (Nodo MIA1).
* **Plantilla / Editor:** Porto HTML Theme (*Architecture 2*) + `ContentBuilder.js`.
* **Desarrollador Original:** Svenka (`svenka.com`).
* **Sitemap XML:** Ausente / `403 Forbidden`.
* **Robots.txt:** Inexistente (devuelve HTML de inicio).
* **Agent Readiness:** Nivel **0/5 (Not Ready)**.

---

## 📄 4. Entregables Generados en el Proyecto

* **[index.html](file:///Users/cesarandresjimenezarci/Documents/Clientes/ventanaleshn/index.html):** Prototipo de sitio web moderno y optimizado para Ventanales HN, organizado por categorías de producto (Ventanas PVC/Aluminio, Cortinas Motorizadas, Fachadas, Pérgolas, Templados), portafolio de proyectos en Honduras y cotizador interactivo directo a WhatsApp.
* **[SITE_INFO.md](file:///Users/cesarandresjimenezarci/Documents/Clientes/ventanaleshn/SITE_INFO.md):** Ficha técnica completa del sitio web y arquitectura.
* **[PLAN_ESTRATEGICO_PROPUESTA_30_60_90.md](file:///Users/cesarandresjimenezarci/Documents/Clientes/ventanaleshn/PLAN_ESTRATEGICO_PROPUESTA_30_60_90.md):** Plan comercial y hoja de ruta estratégica a 30-60-90 días para el cliente.
* **[Diagnostico-VentanalesHN-Presentacion.html](file:///Users/cesarandresjimenezarci/Documents/Clientes/ventanaleshn/Propuesta/Diagnostico-VentanalesHN-Presentacion.html):** Presentación comercial interactiva en HTML (19 slides) basada en el sistema de diseño visual de Grovi Studio, con simuladores interactivos de SOM y Pauta.
* **[BITACORA.md](file:///Users/cesarandresjimenezarci/Documents/Clientes/ventanaleshn/BITACORA.md):** Este registro de sesión.

---

## 🚀 5. Próximos Pasos (Para la Siguiente Sesión)

1. **Aprobación de Propuesta:** Presentar [PLAN_ESTRATEGICO_PROPUESTA_30_60_90.md](file:///Users/cesarandresjimenezarci/Documents/Clientes/ventanaleshn/PLAN_ESTRATEGICO_PROPUESTA_30_60_90.md) a la directiva de VentanalesHN.
2. **Acceso a Plataformas:** Solicitar accesos a Google Search Console, Google Analytics y cPanel / FTP del servidor.
3. **Despliegue Mes 1:** Subir `robots.txt`, publicar `sitemap.xml` y enviar archivo `disavow.txt` a Search Console.

---

## 📌 Sesión 6 de Octubre, 2026 (tarde) — Rediseño en Claude Design

* **Rediseño visual** en Claude Design (lienzo "Rediseño Ventanales HN", 6 páginas): Home, Landing Cortinas y Persianas, Proyectos, Blog, Entrada de blog y Contacto/Cotización. Marca: rojo #A00017, Jost + Instrument Sans, logo actual.
* **Ajustes SEO/IA en el diseño:** bloque "En resumen" en landing y artículos (lo que mejor ha funcionado para IA), FAQ en Home y Landing, ruta de navegación, autor + fecha de actualización, extractos en el blog.
* **Entregables nuevos:** `Implementacion-SEO-IA/SEO_IA_ESPECIFICACION.md` (title, meta, H1 y Schema JSON-LD por página), `robots.txt`, `llms.txt`.
* **Pendiente:** fotos reales (el diseño usa espacios marcados), y los datos que se listan en la sección 5 de la especificación.
* **Proyectos:** se agregó la plantilla de proyecto individual (ficha, reto/solución/resultado, galería, antes/después, relacionados). Hallazgo: hoy los ~85 proyectos solo enlazan a ~5 URLs `/producto/<ID>` con contenido mínimo. Propuesta: una URL por proyecto en `/proyectos/<sector>/<slug>/` + redirecciones 301 (ver sección 2.3.1 de la especificación).
