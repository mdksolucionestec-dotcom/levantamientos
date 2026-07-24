/*******************************************************************
 * MDreieck Campo · núcleo compartido
 * Configura aquí UNA sola vez; index, sitio y evidencias lo usan.
 *******************************************************************/

/* ===================== CONFIGURACIÓN ===================== */
/* Si algún día vuelves a implementar el Apps Script, cambia esta URL. */
const SURL     = 'https://script.google.com/macros/s/AKfycbwzdIBZVP_DbsVNX9scc8-qi9wlOKW2Gi6FM5NqXasgUTtf5HF27PvY1YvdUyAXDwzKeg/exec';
const DRIVE_ID = '1RugRIdGyuSumyKYg-OQqEMruU9umwztf';
const SHEET_ID = '1P3DNpSKZsC0bDRlQeCZGFJ0EGJuRzIH-gzC1JGCtPQA';
const LOGO     = 'data:image/png;base64,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';
const LOGO_RATIO = 2.0500;   // ancho/alto del logo, para no deformarlo
/* ========================================================= */

const CONFIGURADO = SURL && SURL !== 'URL_DEL_APPS_SCRIPT';

/* Calidad de las fotos que se guardan y se suben a Drive */
const FOTO_MAX = 2400, FOTO_CAL = 0.92;
/* Versión reducida que se incrusta en el PDF (para que no pese de más) */
const PDF_MAX  = 1500, PDF_CAL  = 0.85;

/* ============ ESQUEMA DE PREGUNTAS DEL SITIO ============
   Una sola definición alimenta el formulario y el PDF.      */
const SECCIONES_SITIO = [
  { titulo:'Clima', ic:'🌦️', items:[
    { id:'lluvias',     label:'¿Hay lluvias?',              tipo:'sino' },
    { id:'lluviasDet',  label:'Detalle de lluvias',         tipo:'text', ph:'Temporada, intensidad…' },
    { id:'viento',      label:'¿Hay vientos fuertes?',      tipo:'sino' },
    { id:'vientoDet',   label:'Detalle de viento',          tipo:'text', ph:'Dirección, temporada…' },
    { id:'desbord',     label:'¿Riesgo de desbordamiento?', tipo:'sino' },
    { id:'desbordDet',  label:'Detalle de desbordamiento',  tipo:'text', ph:'Río, canal, historial…' }
  ]},
  { titulo:'Servicios', ic:'🚰', items:[
    { id:'drenaje',     label:'¿Hay drenaje?',              tipo:'sino' },
    { id:'agua',        label:'¿Hay agua?',                 tipo:'sino' },
    { id:'serviciosDet',label:'Detalle de drenaje y agua',  tipo:'text', ph:'Tipo, disponibilidad…' },
    { id:'electricidad',label:'¿Se va la electricidad?',    tipo:'sino' },
    { id:'electDet',    label:'Frecuencia / detalle',       tipo:'text', ph:'Cada cuánto, cuánto dura…' }
  ]},
  { titulo:'Terreno', ic:'🪨', items:[
    { id:'tipoSuelo',   label:'Tipo de suelo',              tipo:'text', ph:'Arcilloso, rocoso, arenoso…' }
  ]},
  { titulo:'Ubicación', ic:'📍', items:[
    { id:'lat',         label:'Latitud',                    tipo:'text', ph:'19.041400' },
    { id:'lon',         label:'Longitud',                   tipo:'text', ph:'-98.206300' },
    { id:'coords',      label:'Coordenadas',                tipo:'text', ph:'Se llena solo con el GPS' },
    { id:'altitud',     label:'Altitud (m)',                tipo:'text', ph:'2135' },
    { id:'direccion',   label:'Dirección aproximada',       tipo:'text', ph:'Se llena sola al tomar el GPS' }
  ]},
  { titulo:'Instalación del poste', ic:'🗼', items:[
    { id:'sitioPoste',  label:'Sitio / nombre del poste',    tipo:'text', ph:'Ej. Poste Zacamulpan' },
    { id:'intensidad',  label:'Intensidad de señal',         tipo:'text', ph:'Ej. 4 Barras' },
    { id:'terreno',     label:'Tipo de terreno',             tipo:'text', ph:'Tepetate, Piedra Bola, Arena…' },
    { id:'cimentacion', label:'Tipo de cimentación',         tipo:'text', ph:'Ej. Dado cimentación prefabricado' },
    { id:'dimension',   label:'Dimensiones',                 tipo:'text', ph:'Ej. 50×50×1.50' },
    { id:'acceso',      label:'Tipo de acceso',              tipo:'text', ph:'Acceso a camión válido / corto…' },
    { id:'comentInst',  label:'Comentarios de instalación',  tipo:'text', ph:'Estación meteorológica, días, base…' },
    { id:'tiempoSol',   label:'Tiempo de sol',               tipo:'text', ph:'Mayormente soleado, nublado…' }
  ]},
  { titulo:'Accesos y comunidad', ic:'📋', items:[
    { id:'permisos',    label:'¿Se requiere solicitar permisos?', tipo:'sino' },
    { id:'permisosDet', label:'¿Cuáles y con quién?',       tipo:'text', ph:'Ejido, municipio, propietario…' },
    { id:'lengua',      label:'Lengua de la población',     tipo:'text', ph:'Español, Náhuatl, Totonaco…' }
  ]}
];

/* ================== ALMACENAMIENTO ================== */
function getLevs(){
  try{ return JSON.parse(localStorage.getItem('mdk_levs')||'[]'); }catch(e){ return []; }
}
function saveLevs(l){
  try{ localStorage.setItem('mdk_levs', JSON.stringify(l)); return true; }
  catch(e){ alert('No se pudo guardar: el teléfono se quedó sin espacio. Envía los levantamientos terminados.'); return false; }
}
function getLev(id){ return getLevs().find(l=>l.id===id) || null; }
function guardarLev(lev){
  const levs=getLevs(); const i=levs.findIndex(l=>l.id===lev.id);
  if(i<0) levs.push(lev); else levs[i]=lev;
  return saveLevs(levs);
}

/* ================== FOLIO (100% local) ==================
   LEV-VER-001 · toma las 3 primeras letras del proyecto.
   Se genera al instante, sin pedir nada al servidor.        */
function siglas(proyecto){
  const s = String(proyecto||'').normalize('NFD').replace(/[\u0300-\u036f]/g,'')
    .toUpperCase().replace(/[^A-Z0-9]/g,'');
  return (s.slice(0,3) || 'GEN').padEnd(3,'X');
}
function nuevoFolio(proyecto){
  const pre = siglas(proyecto);
  let cont = {};
  try{ cont = JSON.parse(localStorage.getItem('mdk_folios')||'{}'); }catch(e){}
  // nunca retrocede: toma el mayor entre el contador y lo ya existente
  const usados = getLevs().filter(l=>l.prefijo===pre).length;
  const n = Math.max(cont[pre]||0, usados) + 1;
  cont[pre] = n;
  try{ localStorage.setItem('mdk_folios', JSON.stringify(cont)); }catch(e){}
  return { folio:'LEV-'+pre+'-'+String(n).padStart(3,'0'), prefijo:pre, consec:n };
}

function crearLev({proyecto, sitio, capturadoPor, fecha}){
  const f = nuevoFolio(proyecto);
  return {
    id: 'lev_'+Date.now()+'_'+Math.random().toString(36).slice(2,7),
    folio: f.folio, prefijo: f.prefijo, consec: f.consec,
    proyecto, sitio, capturadoPor, fecha,
    datos: {}, medios: [], notas: '',
    enviado: false, listoParaEnviar: false,
    creado: new Date().toISOString()
  };
}

/* Elimina el levantamiento Y sus fotos/videos de IndexedDB.
   Si solo se borrara de la lista, los archivos seguirían
   ocupando espacio en el teléfono para siempre.          */
async function borrarLev(id){
  const lev = getLev(id);
  if(lev){
    for(const m of (lev.medios||[])){
      try{ await idbDel(m.id); }catch(e){}
    }
  }
  return saveLevs(getLevs().filter(l=>l.id!==id));
}

/* ================== INDEXEDDB (fotos y videos) ==================
   Los archivos NO caben en localStorage; van aquí.               */
const DB_NAME='mdk_campo', DB_VER=1, STORE='medios';
function idbOpen(){
  return new Promise((res,rej)=>{
    const r=indexedDB.open(DB_NAME,DB_VER);
    r.onupgradeneeded=()=>{ const db=r.result;
      if(!db.objectStoreNames.contains(STORE)) db.createObjectStore(STORE,{keyPath:'id'}); };
    r.onsuccess=()=>res(r.result); r.onerror=()=>rej(r.error);
  });
}
async function idbPut(rec){ const db=await idbOpen();
  return new Promise((res,rej)=>{ const t=db.transaction(STORE,'readwrite');
    t.objectStore(STORE).put(rec); t.oncomplete=()=>res(true); t.onerror=()=>rej(t.error); }); }
async function idbGet(id){ const db=await idbOpen();
  return new Promise((res,rej)=>{ const t=db.transaction(STORE,'readonly');
    const q=t.objectStore(STORE).get(id); q.onsuccess=()=>res(q.result||null); q.onerror=()=>rej(q.error); }); }
async function idbDel(id){ const db=await idbOpen();
  return new Promise((res,rej)=>{ const t=db.transaction(STORE,'readwrite');
    t.objectStore(STORE).delete(id); t.oncomplete=()=>res(true); t.onerror=()=>rej(t.error); }); }

/* ================== UTILIDADES ================== */
/* navigator.onLine solo dice si hay interfaz de red; miente seguido
   (VPN, datos inestables, algunos Android). Se usa como pista, nunca
   para bloquear: el envío siempre se intenta de verdad.            */
function online(){ return navigator.onLine !== false; }
function esc(s){ return String(s==null?'':s)
  .replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;'); }
function fmtSize(b){ return b>1048576 ? (b/1048576).toFixed(1)+' MB' : Math.round(b/1024)+' KB'; }
function fmtFecha(f){
  if(!f) return '';
  const d=new Date(f+'T00:00:00'); if(isNaN(d)) return f;
  return d.toLocaleDateString('es-MX',{day:'2-digit',month:'short',year:'numeric'});
}
function nombreCarpeta(lev){ return lev.folio+' - '+(lev.sitio||lev.proyecto||''); }
function blobToBase64(blob){
  return new Promise((res,rej)=>{ const r=new FileReader();
    r.onload=()=>{ const s=r.result, i=s.indexOf('base64,'); res(i>=0?s.slice(i+7):s); };
    r.onerror=()=>rej(r.error); r.readAsDataURL(blob); });
}
function blobToDataURL(blob){
  return new Promise((res,rej)=>{ const r=new FileReader();
    r.onload=()=>res(r.result); r.onerror=()=>rej(r.error); r.readAsDataURL(blob); });
}
function cargarImg(src){ return new Promise(res=>{ const im=new Image();
  im.onload=()=>res(im); im.onerror=()=>res(null); im.src=src; }); }

/* Reduce una imagen manteniendo proporción. Devuelve dataURL. */
async function reducir(blobOrUrl, maxPx, calidad){
  const src = typeof blobOrUrl==='string' ? blobOrUrl : await blobToDataURL(blobOrUrl);
  const im = await cargarImg(src);
  if(!im) return null;
  let w=im.naturalWidth||im.width, h=im.naturalHeight||im.height;
  if(w>maxPx || h>maxPx){ const r=Math.min(maxPx/w, maxPx/h); w=Math.round(w*r); h=Math.round(h*r); }
  const c=document.createElement('canvas'); c.width=w; c.height=h;
  const ctx=c.getContext('2d'); ctx.fillStyle='#fff'; ctx.fillRect(0,0,w,h);
  ctx.drawImage(im,0,0,w,h);
  return c.toDataURL('image/jpeg', calidad);
}
/* Comprime un archivo de imagen a blob de alta calidad para guardar. */
function comprimirFoto(file){
  return new Promise(res=>{
    const fr=new FileReader();
    fr.onload=async e=>{
      const url=await reducir(e.target.result, FOTO_MAX, FOTO_CAL);
      if(!url) return res(null);
      const bin=atob(url.slice(url.indexOf('base64,')+7));
      const arr=new Uint8Array(bin.length);
      for(let i=0;i<bin.length;i++) arr[i]=bin.charCodeAt(i);
      res(new Blob([arr],{type:'image/jpeg'}));
    };
    fr.onerror=()=>res(null);
    fr.readAsDataURL(file);
  });
}

/* ================== VALORES PARA MOSTRAR ================== */
function valorCampo(lev, item){
  const v = (lev.datos||{})[item.id];
  if(item.tipo==='sino') return v ? v : '—';
  return (v && String(v).trim()) ? v : '—';
}
function coordsTexto(lev){
  const d=lev.datos||{};
  if(d.coords && String(d.coords).trim()) return d.coords;
  if(d.lat && d.lon) return d.lat+', '+d.lon;
  return 'Sin ubicación capturada';
}

/* ============== REDACCIÓN AUTOMÁTICA DEL INFORME ==============
   Arma el texto del reporte con lo que sí se capturó. Lo que quedó
   vacío simplemente no se menciona, para que no queden frases sueltas. */

function fechaLarga(f){
  if(!f) return '';
  const d=new Date(f+'T00:00:00'); if(isNaN(d)) return f;
  return d.toLocaleDateString('es-MX',{day:'numeric',month:'long',year:'numeric'});
}
/* une una lista con comas y una "y" antes del último */
function listar(a){
  if(!a.length) return '';
  if(a.length===1) return a[0];
  return a.slice(0,-1).join(', ') + ' y ' + a[a.length-1];
}

function redactarInforme(lev){
  const d = lev.datos || {};
  const v  = k => { const x=d[k]; return (x!=null && String(x).trim()) ? String(x).trim() : null; };
  const si = k => v(k)==='Sí';
  const no = k => v(k)==='No';
  const P = [];

  /* --- Introducción --- */
  let p = 'El ' + (fechaLarga(lev.fecha) || 'día de la visita') +
    ' se llevó a cabo el levantamiento técnico del sitio ' +
    (lev.sitio ? '«'+lev.sitio+'»' : 'indicado') +
    ', correspondiente al proyecto ' + (lev.proyecto||'sin especificar') + '. ' +
    'La información fue capturada en campo por ' + (lev.capturadoPor||'el personal asignado') + '.';
  if(v('direccion')) p += ' El sitio se localiza en ' + v('direccion') + '.';
  if(v('lat') && v('lon')){
    p += ' Las coordenadas registradas son ' + v('lat') + ', ' + v('lon');
    p += v('altitud') ? ', a una altitud aproximada de ' + v('altitud') +
         ' metros sobre el nivel del mar.' : '.';
  }
  P.push(p);

  /* --- Clima --- */
  const clima = [];
  if(si('lluvias'))  clima.push('presencia de lluvias' + (v('lluviasDet') ? ' ('+v('lluviasDet')+')' : ''));
  if(si('viento'))   clima.push('vientos de consideración' + (v('vientoDet') ? ' ('+v('vientoDet')+')' : ''));
  if(si('desbord'))  clima.push('riesgo de desbordamiento' + (v('desbordDet') ? ' ('+v('desbordDet')+')' : ''));
  if(clima.length){
    P.push('En cuanto a las condiciones ambientales, se identificó' + (clima.length>1?'ron':'') +
      ' ' + listar(clima) +
      '. Estas condiciones deberán considerarse en la programación de los trabajos, ' +
      'en la protección del equipo y en las medidas de seguridad del personal.');
  } else if(no('lluvias') || no('viento') || no('desbord')){
    P.push('No se identificaron condiciones climáticas adversas que representen un riesgo ' +
      'para la ejecución de los trabajos.');
  }

  /* --- Servicios --- */
  const serv = [];
  if(si('drenaje')) serv.push('cuenta con drenaje');
  else if(no('drenaje')) serv.push('no cuenta con drenaje');
  if(si('agua')) serv.push('dispone de suministro de agua');
  else if(no('agua')) serv.push('no dispone de suministro de agua');
  let ps = '';
  if(serv.length) ps = 'Respecto a los servicios disponibles, el sitio ' + listar(serv) + '.';
  if(v('serviciosDet')) ps += (ps?' ':'') + v('serviciosDet') + '.';
  if(si('electricidad')){
    ps += (ps?' ':'') + 'Se reportan interrupciones en el suministro eléctrico' +
      (v('electDet') ? ' ('+v('electDet')+')' : '') +
      ', por lo que se recomienda contemplar un respaldo de energía.';
  } else if(no('electricidad')){
    ps += (ps?' ':'') + 'El suministro eléctrico se reporta estable.';
  }
  if(ps) P.push(ps);

  /* --- Terreno --- */
  if(v('tipoSuelo')){
    P.push('El terreno presenta un suelo de tipo ' + v('tipoSuelo') +
      ', condición que deberá considerarse para la cimentación y el anclaje de los equipos.');
  }

  /* --- Instalación del poste --- */
  const inst = [];
  if(v('intensidad'))  inst.push('una intensidad de señal de ' + v('intensidad'));
  if(v('terreno'))     inst.push('terreno de ' + v('terreno'));
  if(v('cimentacion')){
    let c = 'cimentación tipo ' + v('cimentacion');
    if(v('dimension')) c += ' (' + v('dimension') + ')';
    inst.push(c);
  } else if(v('dimension')){
    inst.push('dimensiones de ' + v('dimension'));
  }
  if(v('acceso')) inst.push(v('acceso').toLowerCase());
  if(inst.length){
    let pi = 'En cuanto a la instalación del poste';
    pi += v('sitioPoste') ? ' «' + v('sitioPoste') + '», ' : ', ';
    pi += 'se registró ' + listar(inst) + '.';
    if(v('comentInst')) pi += ' ' + v('comentInst') +
      (/[.!?]$/.test(v('comentInst').trim()) ? '' : '.');
    if(v('tiempoSol')) pi += ' Condiciones de asoleamiento: ' + v('tiempoSol') + '.';
    P.push(pi);
  } else if(v('comentInst') || v('tiempoSol') || v('sitioPoste')){
    let pi = 'Respecto a la instalación del poste' +
      (v('sitioPoste') ? ' «' + v('sitioPoste') + '»' : '') + ', ';
    pi += (v('comentInst') ? v('comentInst') : '') +
          (v('comentInst') && v('tiempoSol') ? '. ' : '') +
          (v('tiempoSol') ? 'Tiempo de sol: ' + v('tiempoSol') : '') + '.';
    P.push(pi);
  }

  /* --- Permisos y comunidad --- */
  let pc = '';
  if(si('permisos')){
    pc = 'Para la ejecución de los trabajos será necesario gestionar permisos previos' +
      (v('permisosDet') ? ' ante ' + v('permisosDet') : '') + '.';
  } else if(no('permisos')){
    pc = 'No se requieren permisos especiales para el ingreso al sitio.';
  }
  if(v('lengua')){
    pc += (pc?' ':'') + 'La población de la zona se comunica en ' + v('lengua') +
      ', por lo que se recomienda considerarlo en la coordinación con la comunidad ' +
      'y en la señalización de las áreas de trabajo.';
  }
  if(pc) P.push(pc);

  /* --- Evidencia --- */
  const nf = (lev.medios||[]).filter(m=>m.kind==='foto').length;
  const nv = (lev.medios||[]).filter(m=>m.kind==='video').length;
  if(nf || nv){
    let pe = 'Como respaldo del levantamiento se integran ' + nf + ' fotografía' + (nf===1?'':'s');
    if(nv) pe += ' y ' + nv + ' video' + (nv===1?'':'s') +
      (nv===1 ? ', este último entregado' : ', estos últimos entregados') + ' como archivo' +
      (nv===1?'':'s') + ' independiente' + (nv===1?'':'s');
    pe += '. El material se anexa al final de este documento con sus comentarios correspondientes.';
    P.push(pe);
  }

  /* --- Notas --- */
  if(lev.notas && lev.notas.trim()){
    P.push('Observaciones adicionales: ' + lev.notas.trim());
  }
  return P;
}

/* ================== PDF (hoja carta) ==================
   Carátula con logo y datos + fotos en cola con comentarios.  */
const PW = 215.9, PH = 279.4;          // Carta en mm
const AZUL = [26,16,128], GRIS = [106,102,136], TINTA = [27,24,48];

/* Detecta el formato del logo para addImage */
function fmtImg(d){ return String(d).indexOf('image/png')>=0 ? 'PNG' : 'JPEG'; }

/* Membrete: logo a la izquierda, folio y sitio a la derecha, regla azul.
   El logo va sobre blanco porque su fondo es blanco.                    */
const TOPE_CONTENIDO = 44;   // dónde empieza el contenido bajo el membrete

function encabezado(doc, lev, titulo){
  const lw = 36, lh = lw / (typeof LOGO_RATIO!=='undefined' ? LOGO_RATIO : 2.05);
  let puesto = false;
  if(LOGO){
    try{ doc.addImage(LOGO, fmtImg(LOGO), 15, 12, lw, lh); puesto = true; }catch(e){}
  }
  if(!puesto){
    doc.setTextColor.apply(doc, AZUL); doc.setFont('helvetica','bold'); doc.setFontSize(16);
    doc.text('MDreieck', 15, 24);
  }
  doc.setTextColor.apply(doc, AZUL); doc.setFont('helvetica','bold'); doc.setFontSize(11.5);
  doc.text(lev.folio, PW-15, 19, {align:'right'});
  doc.setTextColor.apply(doc, GRIS); doc.setFont('helvetica','normal'); doc.setFontSize(8);
  const enc = (lev.proyecto||'') + (lev.sitio ? '  ·  '+lev.sitio : '');
  doc.text(doc.splitTextToSize(enc, 110)[0]||'', PW-15, 24.5, {align:'right'});
  doc.setFillColor.apply(doc, AZUL); doc.rect(15, 33, PW-30, 1.1, 'F');
}
function piePagina(doc, lev, izq){
  doc.setFillColor.apply(doc, AZUL); doc.rect(0,PH-11,PW,11,'F');
  doc.setTextColor(255,255,255); doc.setFont('helvetica','normal'); doc.setFontSize(7);
  doc.text(izq||lev.folio, 12, PH-4.5);
  doc.text(new Date().toLocaleDateString('es-MX'), PW-12, PH-4.5, {align:'right'});
}
function tituloBloque(doc, y, txt){
  if(y > PH-40){
    doc.addPage(); encabezado(doc, PDF_LEV, 'Reporte de levantamiento');
    piePagina(doc, PDF_LEV, PDF_LEV.folio);
    y = TOPE_CONTENIDO;
  }
  doc.setFillColor(239,234,251); doc.roundedRect(12, y-5, PW-24, 9, 2, 2, 'F');
  doc.setTextColor.apply(doc, AZUL); doc.setFont('helvetica','bold'); doc.setFontSize(9);
  doc.text(String(txt).toUpperCase(), 15, y+1.2);
  return y + 12;
}
/* Fila etiqueta / valor en dos columnas */
function filaDato(doc, y, label, valor){
  if(y > PH-24){ doc.addPage(); encabezado(doc, PDF_LEV, 'Reporte de levantamiento'); y=TOPE_CONTENIDO; }
  doc.setTextColor.apply(doc, GRIS); doc.setFont('helvetica','bold'); doc.setFontSize(7.5);
  doc.text(String(label).toUpperCase(), 15, y);
  doc.setTextColor.apply(doc, TINTA); doc.setFont('helvetica','normal'); doc.setFontSize(10);
  const lines = doc.splitTextToSize(String(valor==null?'—':valor), PW-30);
  doc.text(lines, 15, y+5);
  const alto = 5 + lines.length*4.6 + 4;
  doc.setDrawColor(224,221,240); doc.setLineWidth(0.2);
  doc.line(15, y+alto-2.5, PW-15, y+alto-2.5);
  return y + alto;
}

/* Párrafo de texto corrido, con salto de página automático */
function parrafo(doc, y, texto, tam){
  doc.setTextColor.apply(doc, TINTA);
  doc.setFont('helvetica','normal'); doc.setFontSize(tam||10.5);
  const lines = doc.splitTextToSize(String(texto), PW-30);
  const alto = (tam||10.5) * 0.46;
  for(let i=0;i<lines.length;i++){
    if(y > PH-20){
      doc.addPage(); encabezado(doc, PDF_LEV, 'Reporte de levantamiento');
      piePagina(doc, PDF_LEV, PDF_LEV.folio);
      y = TOPE_CONTENIDO;
      doc.setTextColor.apply(doc, TINTA);
      doc.setFont('helvetica','normal'); doc.setFontSize(tam||10.5);
    }
    doc.text(lines[i], 15, y);
    y += alto;
  }
  return y + 4;
}

/* Fila compacta: etiqueta a la izquierda, valor a la derecha */
function filaCompacta(doc, y, label, valor, par){
  const xL = 15, wL = 52, xV = 70, wV = PW - 15 - xV;
  doc.setFontSize(8);
  const lv = doc.splitTextToSize(String(valor==null||valor===''?'—':valor), wV);
  const ll = doc.splitTextToSize(String(label), wL);
  const filas = Math.max(lv.length, ll.length);
  const alto = filas*3.5 + 3.2;

  if(y + alto > PH-16){
    doc.addPage(); encabezado(doc, PDF_LEV, 'Reporte de levantamiento');
    piePagina(doc, PDF_LEV, PDF_LEV.folio);
    y = TOPE_CONTENIDO;
  }
  if(par){ doc.setFillColor(248,247,252); doc.rect(xL-3, y-3.4, PW-24, alto, 'F'); }
  doc.setTextColor.apply(doc, GRIS); doc.setFont('helvetica','bold'); doc.setFontSize(7.5);
  doc.text(ll, xL, y);
  doc.setTextColor.apply(doc, TINTA); doc.setFont('helvetica','normal'); doc.setFontSize(8.5);
  doc.text(lv, xV, y);
  return y + alto;
}

let PDF_LEV = null;   // referencia para la paginación automática

async function generarPDF(lev, progreso){
  if(!window.jspdf || !window.jspdf.jsPDF){
    alert('jsPDF no está disponible. Abre la app una vez con internet para que se guarde.');
    return null;
  }
  PDF_LEV = lev;
  const { jsPDF } = window.jspdf;
  const doc = new jsPDF({ unit:'mm', format:'letter', orientation:'portrait' });
  const fotos  = (lev.medios||[]).filter(m=>m.kind==='foto');
  const videos = (lev.medios||[]).filter(m=>m.kind==='video');

  /* ---------- Hoja 1: informe redactado ---------- */
  encabezado(doc, lev, 'Reporte de levantamiento');
  piePagina(doc, lev, lev.folio + '  ·  Informe');
  let y = TOPE_CONTENIDO;

  doc.setTextColor.apply(doc, TINTA); doc.setFont('helvetica','bold'); doc.setFontSize(16);
  doc.text('Informe de levantamiento de sitio', 15, y); y += 6.5;
  doc.setFont('helvetica','normal'); doc.setFontSize(9.5); doc.setTextColor.apply(doc, GRIS);
  doc.text(lev.folio + '   ·   ' + (lev.sitio||'') , 15, y); y += 4.6;
  doc.text(fechaLarga(lev.fecha), 15, y); y += 10;

  redactarInforme(lev).forEach(txt => { y = parrafo(doc, y, txt); });

  /* ---------- Detalle de lo capturado, compacto ---------- */
  y += 4;
  y = tituloBloque(doc, y, 'Detalle de la información capturada');
  let par = false;
  y = filaCompacta(doc, y, 'Proyecto', lev.proyecto, par=!par);
  y = filaCompacta(doc, y, 'Sitio / localidad', lev.sitio, par=!par);
  y = filaCompacta(doc, y, 'Capturado por', lev.capturadoPor, par=!par);
  y = filaCompacta(doc, y, 'Fecha de captura', fmtFecha(lev.fecha), par=!par);
  y = filaCompacta(doc, y, 'Fotografías / videos', fotos.length+' / '+videos.length, par=!par);

  SECCIONES_SITIO.forEach(sec=>{
    y = tituloBloque(doc, y, sec.titulo);
    par = false;
    sec.items.forEach(item=>{ y = filaCompacta(doc, y, item.label, valorCampo(lev, item), par=!par); });
  });

  if(lev.notas && lev.notas.trim()){
    y = tituloBloque(doc, y, 'Notas y comentarios adicionales');
    y = filaCompacta(doc, y, 'Observaciones', lev.notas.trim(), false);
  }

  /* ---------- Fotos en cola, una por hoja ---------- */
  for(let i=0; i<fotos.length; i++){
    const m = fotos[i];
    if(progreso) progreso('Armando PDF…', 'Foto '+(i+1)+' de '+fotos.length+'.');
    const rec = await idbGet(m.id);
    if(!rec || !rec.blob) continue;
    const url = await reducir(rec.blob, PDF_MAX, PDF_CAL);
    if(!url) continue;
    const im = await cargarImg(url);

    doc.addPage();
    encabezado(doc, lev, 'Evidencia fotográfica');
    const tieneCom = !!(m.comentario && m.comentario.trim());
    const boxX=15, boxY=39, boxW=PW-30;
    const boxH=(PH-14) - boxY - (tieneCom ? 26 : 0);
    if(im){
      const nw=im.naturalWidth||im.width, nh=im.naturalHeight||im.height;
      const r=Math.min(boxW/nw, boxH/nh);
      const w=nw*r, h=nh*r;
      doc.addImage(url,'JPEG', boxX+(boxW-w)/2, boxY, w, h, '', 'FAST');
      if(tieneCom){
        const cy = boxY + h + 7;
        doc.setTextColor.apply(doc, GRIS); doc.setFont('helvetica','bold'); doc.setFontSize(7.5);
        doc.text('COMENTARIO', 15, Math.min(cy, PH-26));
        doc.setTextColor.apply(doc, TINTA); doc.setFont('helvetica','normal'); doc.setFontSize(9.5);
        const lines = doc.splitTextToSize(m.comentario.trim(), PW-30).slice(0,4);
        doc.text(lines, 15, Math.min(cy+5, PH-21));
      }
    }
    piePagina(doc, lev, lev.folio+'  ·  Foto '+(i+1)+' de '+fotos.length);
  }

  /* ---------- Índice de videos ---------- */
  if(videos.length){
    doc.addPage();
    encabezado(doc, lev, 'Videos');
    let vy = TOPE_CONTENIDO;
    doc.setTextColor.apply(doc, GRIS); doc.setFont('helvetica','normal'); doc.setFontSize(9.5);
    const nota = doc.splitTextToSize(
      'Los videos no se incluyen en el PDF. Se entregan como archivos independientes en la subcarpeta VIDEOS de este levantamiento en Drive.', PW-30);
    doc.text(nota, 15, vy); vy += nota.length*4.6 + 8;
    videos.forEach((m,i)=>{ vy = filaDato(doc, vy, 'Video '+(i+1)+' · '+m.name, m.comentario || 'Sin comentarios'); });
    piePagina(doc, lev, lev.folio+'  ·  Videos');
  }
  return doc;
}
function nombrePDF(lev){ return 'Reporte_'+lev.folio+'.pdf'; }

/* ================== ENVÍO A DRIVE ==================
   Cada archivo va en su propia petición: payloads pequeños
   y un video grande no tumba todo el envío.                */
function postJSON(obj){
  if(!CONFIGURADO) return Promise.resolve();
  return fetch(SURL, { method:'POST', mode:'no-cors',
    headers:{'Content-Type':'text/plain;charset=utf-8'},
    body: JSON.stringify(obj) });
}

async function enviarLev(lev, progreso){
  const fotos  = (lev.medios||[]).filter(m=>m.kind==='foto');
  const videos = (lev.medios||[]).filter(m=>m.kind==='video');
  const carpeta = nombreCarpeta(lev);

  /* 1. PDF */
  progreso('Generando PDF…','Carátula, datos y fotografías.');
  const doc = await generarPDF(lev, progreso);
  let pdfData = null;
  if(doc){
    const s = doc.output('datauristring');
    const i = s.indexOf('base64,');
    pdfData = i>=0 ? s.slice(i+7) : s;
    doc.save(nombrePDF(lev));               // copia en el teléfono
  }

  /* 2. Ficha + PDF */
  progreso('Enviando a Drive…','Creando la carpeta del sitio.');
  const d = lev.datos||{};
  await postJSON({
    accion:'levantamiento', folderId:DRIVE_ID, sheetId:SHEET_ID,
    carpeta, folio:lev.folio, proyecto:lev.proyecto, sitio:lev.sitio,
    capturadoPor:lev.capturadoPor, fecha:lev.fecha,
    lat:d.lat||'', lon:d.lon||'', coords:coordsTexto(lev), altitud:d.altitud||'',
    datos:d, notas:lev.notas||'',
    totalFotos:fotos.length, totalVideos:videos.length,
    pdf: pdfData ? { name:nombrePDF(lev), data:pdfData } : null
  });

  /* 3. Fotos, una por petición y en alta calidad */
  for(let i=0;i<fotos.length;i++){
    progreso('Subiendo fotos…','Foto '+(i+1)+' de '+fotos.length+'.');
    const rec = await idbGet(fotos[i].id);
    if(!rec || !rec.blob) continue;
    await postJSON({ accion:'archivo', folderId:DRIVE_ID, carpeta, sub:'FOTOS',
      folio:lev.folio,
      archivo:{ name:fotos[i].name, mimeType:'image/jpeg',
        comentario:fotos[i].comentario||'', data: await blobToBase64(rec.blob) } });
  }

  /* 4. Videos, uno por petición */
  for(let i=0;i<videos.length;i++){
    progreso('Subiendo videos…','Video '+(i+1)+' de '+videos.length+'. Puede tardar.');
    const rec = await idbGet(videos[i].id);
    if(!rec || !rec.blob) continue;
    await postJSON({ accion:'archivo', folderId:DRIVE_ID, carpeta, sub:'VIDEOS',
      folio:lev.folio,
      archivo:{ name:videos[i].name, mimeType:videos[i].mimeType||'video/mp4',
        comentario:videos[i].comentario||'', data: await blobToBase64(rec.blob) } });
  }
}

/* Convierte coordenadas en dirección usando el geocodificador que ya
   trae Apps Script. No requiere contratar ninguna API ni clave extra.
   Si no hay señal devuelve null y el campo se puede escribir a mano. */
async function direccionDesdeCoords(lat, lon){
  if(!CONFIGURADO) return null;
  try{
    const ctrl = new AbortController();
    const t = setTimeout(()=>ctrl.abort(), 10000);
    const r = await fetch(SURL + '?accion=geo&lat=' + encodeURIComponent(lat) +
      '&lon=' + encodeURIComponent(lon), { signal: ctrl.signal });
    clearTimeout(t);
    const d = await r.json();
    return (d && d.direccion) ? d.direccion : null;
  }catch(e){ return null; }
}

/* Comprueba si el Apps Script responde. A diferencia del envío,
   esta consulta SÍ puede leer la respuesta, así que sirve para
   saber con certeza si la configuración quedó bien.          */
async function probarConexion(){
  if(!CONFIGURADO){
    return { ok:false, msg:'Falta pegar la URL del Apps Script en app.js (constante SURL).' };
  }
  try{
    const ctrl = new AbortController();
    const t = setTimeout(()=>ctrl.abort(), 12000);
    const r = await fetch(SURL, { signal: ctrl.signal });
    clearTimeout(t);
    const txt = await r.text();
    if(txt.indexOf('"status"') >= 0 && txt.indexOf('ok') >= 0){
      return { ok:true, msg:'El servidor respondió correctamente. Los envíos sí llegarán a Drive.' };
    }
    if(txt.toLowerCase().indexOf('<!doctype html') >= 0 || txt.indexOf('accounts.google.com') >= 0){
      return { ok:false, msg:'El servidor pide iniciar sesión. Vuelve a implementar el Apps Script con Acceso: "Cualquier usuario".' };
    }
    return { ok:false, msg:'Respondió algo inesperado. Revisa que la URL termine en /exec.' };
  }catch(e){
    return { ok:false, msg:'No se pudo conectar. Revisa que haya internet y que la URL sea la correcta (debe terminar en /exec).' };
  }
}

/* ================== SERVICE WORKER ================== */
if('serviceWorker' in navigator){
  window.addEventListener('load', function(){
    navigator.serviceWorker.register('sw.js').catch(function(){});
  });
}
