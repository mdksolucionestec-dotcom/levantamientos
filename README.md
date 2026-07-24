# MDreieck Campo · Levantamientos de sitio

App de campo que funciona **completa sin internet**. Solo el envío a Drive necesita señal.

## Archivos

| Archivo | Qué es |
|---|---|
| `index.html` | Lista de levantamientos + crear nuevo |
| `sitio.html` | Preguntas del sitio (clima, servicios, suelo, GPS, permisos, lengua) |
| `evidencias.html` | Fotos y videos con comentarios + notas + envío |
| `app.js` | **Configuración** y toda la lógica compartida |
| `estilos.css` | Estilos |
| `sw.js`, `manifest.json`, `icon-*.png` | Instalación en el teléfono (offline) |
| `Codigo.gs` | Backend de Google Apps Script |

## Configuración: un solo lugar

Todo se configura en las primeras líneas de **`app.js`**. Ya no hay que editar cada HTML.

```js
const SURL     = 'https://script.google.com/.../exec';
const DRIVE_ID = 'ID_CARPETA_DRIVE';
const SHEET_ID = 'ID_GOOGLE_SHEET';
// LOGO ya viene incrustado con el logo de MDreieck
```

Del lado de Google: pon tus IDs en `Codigo.gs`, ejecuta `testScript` ▶ para autorizar permisos, y luego **Implementar → Nueva implementación → Aplicación web** (Ejecutar como: Yo · Acceso: Cualquier usuario). Guardar el código no basta: sin implementación nueva, la URL sigue sirviendo la versión anterior.

## Flujo

**1. Crear** — proyecto, nombre del sitio/localidad, quien captura y fecha. El folio aparece al instante, sin internet.

**2. Datos del sitio** — clima (lluvias, viento, desbordamiento), drenaje y agua, si se va la electricidad, tipo de suelo, latitud/longitud/coordenadas/altitud con botón de GPS, permisos y lengua de la población.

**3. Evidencias** — tomar foto, grabar video o subir archivos. Cada uno con su comentario. Más un recuadro de notas generales.

**4. Enviar a Drive** — genera el PDF y sube todo.

El levantamiento **nunca se cierra solo**. Queda `En captura` y se puede editar cuantas veces haga falta. Si envías sin señal, pasa a `Por enviar` y se manda cuando haya internet.

## Folio

`LEV-VER-001` — las tres primeras letras del proyecto, con consecutivo propio por proyecto:

```
VERACRUZ → LEV-VER-001, LEV-VER-002, LEV-VER-003
PUEBLA   → LEV-PUE-001, LEV-PUE-002
```

Se genera en el teléfono, al instante y sin conexión. El contador nunca retrocede, aunque borres levantamientos.

> **Si varios técnicos usan la app**, cada teléfono lleva su propio consecutivo, así que dos podrían generar `LEV-VER-001`. Como la carpeta en Drive incluye el nombre del sitio, no se mezclan archivos, pero conviene repartir proyectos por técnico o revisar la hoja de Sheets.

## El PDF

Hoja carta, estilo documento:

1. **Carátula** — logo MDreieck, encabezado con proyecto y sitio, y todos los datos capturados agrupados por sección, incluidas las notas.
2. **Fotos en cola** — una por hoja, grande, con su comentario debajo.
3. **Índice de videos** — nombre y comentario (los videos no se incrustan, van aparte).

## Estructura en Drive

```
📁 LEV-VER-001 - Col. Centro, Poza Rica
  📄 Reporte_LEV-VER-001.pdf
  📁 FOTOS   → Foto_01_LEV-VER-001.jpg …
  📁 VIDEOS  → Video_01_LEV-VER-001.mp4 …
```

Las fotos se guardan en alta calidad (hasta 2400 px). El PDF usa una versión reducida para no pesar de más, pero en Drive quedan las originales. El comentario de cada archivo se guarda como descripción en Drive.

## Instalar en el teléfono (obligatorio para el modo sin internet)

1. Abrir la app **una vez con internet** y esperar unos segundos.
2. Chrome: menú ⋮ → **Instalar aplicación** / Agregar a pantalla de inicio.
3. Abrir desde el icono. Ya funciona en modo avión.

**Al subir cambios**, sube el número en la primera línea de `sw.js` (`mdk-campo-v1` → `v2`). Si no, los teléfonos seguirán usando la versión vieja guardada.

## Errores comunes

| Síntoma | Solución |
|---|---|
| No abre sin internet | Falta instalarla desde el navegador con señal |
| Subí cambios y no se ven | Sube la versión en `sw.js` y recarga |
| Sube pero no aparece en Sheets | Falta **nueva implementación** del Apps Script |
| El video no sube | Arriba de ~40 MB conviene grabar más corto |
| No sale la altitud | Muchos Android no la reportan; se puede escribir a mano |
| PDF sin logo | El logo ya viene incrustado en `app.js`; si lo cambias, respeta el formato `data:image/png;base64,...` |
