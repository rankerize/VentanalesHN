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

---

## 📌 Sesión 6 de Octubre, 2026 (noche) — Capa minimalista

* **Decisión:** se mantienen los colores del sitio actual (gris antracita #383b3d, negro mate #2a2a2a, #191b1d, blanco, #f8fafc). Se descarta el rojo del lienzo de Claude Design.
* **Nueva hoja `assets/css/minimal.css`**, cargada al final de las 26 páginas: sin sombras ni saltos al pasar el cursor, esquinas rectas, etiquetas como texto con línea fina, titulares solo en Overpass (se retiró Playfair), botones planos/contorno, encabezados de sección alineados a la izquierda y con más aire, tarjetas foto + texto sin caja, formularios con línea inferior.
* Se retiró del Home la franja de miniaturas (repetía fotos del carrusel).
* **Nuevo `assets/js/minimal-nav.js`:** menú hamburguesa en celular para todas las páginas (antes el menú desbordaba la pantalla en móvil).
* Arreglado el pie de página (texto encimado) y 2 fotos rotas en `categorias/cortinas-motorizadas.html`.
* Para revertir: quitar la línea de `minimal.css` del `<head>`.

---

## 📌 Sesión 6 de Octubre, 2026 (noche) — Clustering SEMrush, Arquitectura de Catálogo & Landings Creadas

### 🚀 1. Estrategia de Captación Total de Impresiones (SEO Hub & Spoke)
Se procesaron más de **550+ palabras clave crudas de SEMrush** divididas en 6 grandes verticales de producto. Para maximizar las impresiones en Google Search Console y transformar búsquedas genéricas en leads calificados B2B y B2C, se estructuraron catálogos dedicados por categoría:

1. **Muebles de Cocina a Medida (`categorias/muebles-de-cocina.html`):**
   * **Volumen Objetivo:** 4,500+ búsquedas/mes (`muebles de cocina` = **1,900/mes con KD 14**).
   * **Componentes del Catálogo:** Cocinas de Madera & Cuarzo/Mármol, Muebles Aéreos en Melamina Hidrófuga y Cocinas Abiertas con Isla Central.
2. **Cortinas para Sala (`categorias/cortinas-para-sala.html`):**
   * **Volumen Objetivo:** 650+ búsquedas/mes (`cortinas para sala` = **320/mes con KD 15**).
   * **Componentes del Catálogo:** Sheer Elegance (Duo Flex), Roller Blackout y Romanas de Tela Fina con opción motorizada.
3. **Cortinas para Oficina & Proyectos B2B (`categorias/cortinas-para-oficina.html`):**
   * **Volumen Objetivo:** 500+ búsquedas/mes B2B (`cortinas para oficina tegucigalpa`, `cortinas enrollables tegucigalpa`, `cortinas blackout`).
   * **Componentes del Catálogo:** Roller Sunscreen (1%, 3%, 5%), Blackout para salas de conferencias y Motorización Somfy para edificios.
4. **Pérgolas, Bioclimáticas & Toldos (`categorias/pergolas-exteriores.html`):**
   * **Volumen Objetivo:** 3,800+ búsquedas/mes (`pergola` = **1,000/mes**, `panel sandwich honduras` = **470/mes**).
   * **Componentes del Catálogo:** Pérgolas Bioclimáticas, Techos de Policarbonato, Panel Sándwich Termoacústico y Toldos Retráctiles.
5. **Soluciones Hospitalarias & Corporativas (`categorias/soluciones-hospitalarias-corporativas.html`):**
   * **Volumen Objetivo:** Proyectos B2B e Institucionales (Gobierno, Clínicas, Hospitales).
   * **Componentes del Catálogo:** Paneles Divisorios Modulares de Habitación, Cortinas Clínicas Antibacterianas NFPA 701, Cortinas para Baños Hospitalarios (Impermeables), Rieles Médicos de Aluminio y Puertas Herméticas para Quirófanos.
6. **Decoración e Interiorismo (`categorias/decoracion-interiorismo.html`):**
   * **Volumen Objetivo:** Proyectos Residenciales, Hoteleros y Comerciales.
   * **Componentes del Catálogo:** Alfombras Comerciales & Hoteles (*Heavy Duty*), Espejos a Medida (Retroiluminados LED), Paneles & Puertas Acústicas, Puertas de Baño en Vidrio Templado y Asesoría 3D.

---

### 🎨 2. Inventario Completo de Subcategorías Tradicionales Integradas
Para asegurar que la migración conserve el 100% de la oferta técnica histórica de Ventanales HN, se verificó e incorporó el siguiente inventario exacto:

* **Cortinas y Persianas (12 modelos):** Cortinas Blackout, Cortinas de Exterior, Cortinas Decorativas, Cortinas Motorizadas y Automatizadas (Somfy), Cortinas Neolux / Sheer Elegance, Cortinas Pinch Pleat (Pliegue Pinza), Cortinas Ripplefold (Onda Perfecta), Cortinas Roller (Sunscreen / Translúcidas), Cortinas Romanas, Cortinas Sheer, Paneles Deslizantes (Panel Japonés) y Puertas Plegables.
* **Decoración e Interiorismo (8 soluciones):** Alfombras comerciales y corporativas, Alfombras para hoteles, Alfombras residenciales y comerciales, Servicio de Diseño de Interiores & Renders 3D, Espejos a la Medida, Paneles Acústicos, Puertas Acústicas y Puertas/Canceles para baño en vidrio templado.
* **Soluciones Hospitalarias (5 líneas):** Cortinas Antibacteriales (Iones de Plata), Cortinas Hospitalarias (NFPA 701), Cortinas para Baños Hospitalarios (100% Impermeables), Rieles Hospitalarios de Aluminio extruido y Paneles Divisorios Modulares de Habitación / Biombos.
* **Sectores B2B Atendidos:** Auditorios y Espacios Especializados, Condominios y Residenciales, Hoteles y Hospitality, Oficinas y Corporativos, Restaurantes y Terrazas.
* **Toldos y Exteriores (8 soluciones):** Cortinas para Exterior (Zip Track / Cortaviento), Pérgolas Manuales y Motorizadas, Protección Solar Exterior, Techo Eléctrico Tipo Louver (Bioclimática), Tensoformas / Velas de Sombra, Toldos a Medida, Toldos Motorizados y Toldos Retráctiles.

---

### 🚫 3. Filtro de Ruido & Keywords Negativas Identificadas
Para proteger el presupuesto publicitario y enfocar el contenido orgánico en compradores reales, se aislaron y documentaron los siguientes falsos positivos:
* **Música & Entretenimiento:** *Soda Stereo Persiana Americana, The Killers Somebody Told Me, Rod Stewart, Britney Spears Blackout, Scorpions, Muse, Fortnite, As told by ginger*.
* **Artículos de Consumo Masivo / Plástico Barato:** *carpas en la mundial* (ferretería masiva), *toldo para pick up*, *toldo para moto*, *toldos de camión*.
* **Alimentos / Dulces:** *panela, queso panela, agua de panela* (azúcar de caña).
* **Software / IT:** *windows control panel, nvidia control panel, patch panel, ips panel*.
* **Búsquedas Teóricas / DIY:** *cómo hacer cortinas, cómo hacer muebles de cocina, como limpiar persianas*.

---

### 📐 4. Pautas Obligatorias para Futuros Agentes / Desarrolladores (Handover)

Cualquier subagente, agente secundario o desarrollador que modifique o amplíe el sitio `ventanaleshn.com` **DEBE cumplir con las siguientes directivas obligatorias**:

1. **Sello "100% Fabricación A la Medida":**
   * Toda nueva página o componente debe destacar que Ventanales HN **no vende productos prefabricados de caja**, sino que diseña y fabrica según las medidas exactas del cliente.
2. **Estructura Estilo Catálogo Visual:**
   * Las landing pages de producto deben usar la cuadrícula `.catalog-grid` con tarjetas `.catalog-card`, etiquetas de beneficio, especificaciones técnicas en lista bullet y dos botones de acción:
     - `btn-card-quote`: Enlace a `../cotizar.html?producto=<SLUG>`
     - `btn-card-ws`: Enlace a WhatsApp con mensaje contextualizado de precarga.
3. **Navegación Unificada:**
   * Toda nueva categoría debe incluirse en el menú desplegable `<ul class="dropdown-menu">` de `header` y en el menú del `footer`.
4. **Estilo Visual & Tipografía:**
   * Mantener las variables CSS oficiales: `--primary: #383b3d`, `--primary-dark: #2a2a2a`, `--accent-gold: #c5a47e`, `--dark-bg: #191b1d`.
   * Tipografías: `Overpass` (Titulares/Display) y `Poppins` (Cuerpo/Subtítulos).
5. **Documentos de Referencia en el Repositorio:**
   * `CATEGORIAS_ARQUITECTURA_URL.md`: Matriz oficial de URLs y Sitemap jerárquico.
   * `INFORME_SEMRUSH_COMPLETO_VENTANALES.md`: Reporte de métricas SEO y volumen por nicho.



---

## 📌 Sesión 6 de Octubre, 2026 (noche II) — Análisis de Competencia & Guías de Integración WordPress/Nativas

* **Estudio de Competencia Directa (Honduras):**
  * Rastreó y analizó a los dos competidores principales: **Canet Central América** (`canetcam.com`) y **Estilos y Detalles** (`estilosydetalles.net`).
  * Entregable generado: `ANALISIS_COMPETENCIA_CANET_ESTILOS_Y_DETALLES.md`.
* **Innovaciones e Implementaciones Inmediatas:**
  * **Visualización de Cortinas:** Adopción de la especificación técnica de Canet (Factores de Apertura Screen 1%, 3%, 5% y Blackout 100%, protección UV 99%, certificación ignífuga NFPA 701).
  * **Servicio a Domicilio:** Banner y sección de *Visita Técnica + Maletín de Muestras Físicas a Domicilio en Tegucigalpa y SPS*.
  * **Proceso de Servicio:** Estructuración del customer journey en 5 Pasos transparentes.
  * Entregable generado: `NOTAS_IMPLEMENTACION_INMEDIATA.md`.
* **Arquitectura para Migración a WordPress + Tema Astra:**
  * Guía paso a paso para montar el sitio en Astra Pro + Spectra / Elementor + Custom Fields (ACF) + Rank Math SEO.
  * Entregable generado: `GUIA_MIGRACION_WORDPRESS_ASTRA.md`.
* **Formularios 100% Nativos Sin Plugins (WPCode + PHP):**
  * Desarrollo del snippet PHP nativo para procesar cotizaciones vía `wp_mail()` y AJAX sin cargar plugins de formularios.
  * Entregable generado: `FORMULARIO_SIN_PLUGINS_WPCODE.md`.
