/**
 * El catálogo. Fuente única de verdad para la grilla, el buscador y la ficha.
 *
 * Todo lo que se afirma acá sale de un repositorio real. Si un producto no
 * tiene URL pública, no se inventa: la ficha ofrece una demo por WhatsApp.
 */

export type Platform = 'movil' | 'web' | 'escritorio' | 'infra';

export type Status = 'store' | 'live' | 'beta' | 'building' | 'rnd';

export type Product = {
  id: string;
  name: string;
  /** Qué es, en tres palabras. Va arriba del nombre. */
  kicker: string;
  platform: Platform;
  status: Status;
  /** Una línea. Lo que se lee en la tarjeta. */
  pitch: string;
  /** El dolor concreto que saca del día de alguien. */
  problem: string;
  /** Por qué conviene. Beneficio primero, función después. */
  benefits: { title: string; body: string }[];
  /** Qué hace, sin adornos. */
  features: string[];
  /** Números y hechos verificables. Se muestran en mono. */
  specs: { label: string; value: string }[];
  stack: string[];
  /** Hue del aurora que toma la ficha. */
  accent: 'jade' | 'cyan' | 'violet' | 'magenta' | 'signal';
  /** Captura principal, si existe. */
  shot?: { src: string; alt: string; frame: 'phone' | 'browser' };
  gallery?: { src: string; alt: string }[];
  /** Enlace público, si lo hay. */
  link?: { href: string; label: string };
};

export const platformLabels: Record<Platform, string> = {
  movil: 'Apps móviles',
  web: 'Plataformas web',
  escritorio: 'Escritorio',
  infra: 'Infraestructura',
};

export const statusLabels: Record<Status, { label: string; tone: string }> = {
  store: { label: 'En Google Play', tone: 'is-live' },
  live: { label: 'En producción', tone: 'is-live' },
  beta: { label: 'En pruebas', tone: 'is-beta' },
  building: { label: 'En desarrollo', tone: 'is-building' },
  rnd: { label: 'Investigación', tone: 'is-rnd' },
};

export const products: Product[] = [
  {
    id: 'gymtrack',
    name: 'GymTrack',
    kicker: 'Cuaderno de entrenamiento',
    platform: 'movil',
    status: 'store',
    pitch:
      'Registrá series, récords y salidas a correr. Todo vive en el teléfono: sin cuenta, sin nube y sin publicidad.',
    problem:
      'Anotar el entrenamiento en el bloc de notas funciona hasta que querés saber si mejoraste. Ahí no hay progreso, hay una lista.',
    benefits: [
      {
        title: 'Funciona sin señal',
        body: 'El catálogo entero viaja dentro de la app. En el subsuelo del gimnasio no hay Wi-Fi y la app no lo necesita.',
      },
      {
        title: 'Tus datos son tuyos',
        body: 'No hay cuenta ni servidor. Cambiás de teléfono y te llevás todo en un archivo JSON.',
      },
      {
        title: 'El descanso te avisa igual',
        body: 'Un módulo nativo propio prende la pantalla cuando termina la serie, aunque el teléfono esté bloqueado en el bolsillo.',
      },
      {
        title: 'Corregís sin romper nada',
        body: 'Editás un entrenamiento viejo y los récords se recalculan solos, incluso los que estaban tapados.',
      },
    ],
    features: [
      'Rutinas con series, repeticiones, RPE, superseries y 1RM estimado',
      'Catálogo de 1.323 ejercicios con su animación, buscable por cómo se ve',
      'Alarma de descanso que prende la pantalla sobre el bloqueo',
      'Salidas a pie y en bici con GPS, mapa y parciales por kilómetro',
      'Calculadora de discos: le decís el peso y te dibuja la barra cargada',
      'Récords personales con bitácora y reconstrucción histórica',
      'Imagen 9:16 lista para compartir el entrenamiento en historias',
      'Respaldo y restauración completa en un archivo',
    ],
    specs: [
      { label: 'Versión', value: '1.5.0' },
      { label: 'Ejercicios', value: '1.323' },
      { label: 'Base de datos', value: 'SQLite local' },
      { label: 'Cuenta', value: 'No requiere' },
    ],
    stack: [
      'React Native',
      'Expo SDK 57',
      'TypeScript',
      'SQLite',
      'Módulo nativo Android',
    ],
    accent: 'jade',
    shot: {
      src: '/products/gymtrack-1.jpg',
      alt: 'Pantalla de inicio de GymTrack con la rutina del día y el resumen semanal',
      frame: 'phone',
    },
    gallery: [
      {
        src: '/products/gymtrack-2.jpg',
        alt: 'Listado de rutinas de GymTrack',
      },
      {
        src: '/products/gymtrack-3.jpg',
        alt: 'Historial de entrenamientos de GymTrack',
      },
    ],
    link: {
      href: 'https://play.google.com/store/apps/details?id=com.matutech.gymtrack',
      label: 'Bajarla de Google Play',
    },
  },

  {
    id: 'menu-listo',
    name: 'Menú Listo',
    kicker: 'Menús digitales por suscripción',
    platform: 'web',
    status: 'building',
    pitch:
      'Cada bar arma su carta desde un panel propio, la publica en su URL y recibe los pedidos por WhatsApp.',
    problem:
      'Imprimir la carta cada vez que cambia un precio cuesta plata y tiempo. El PDF en el grupo de WhatsApp queda viejo el mismo día.',
    benefits: [
      {
        title: 'Cambiás un precio y ya está',
        body: 'La carta que ve el cliente es la del panel. No hay reimpresión, no hay versión vieja circulando.',
      },
      {
        title: 'El QR impreso no se vence',
        body: 'El enlace del negocio es fijo. Podés dar de baja y reactivar el local sin que cambie el QR de las mesas.',
      },
      {
        title: 'Del menú al pedido sin app',
        body: 'El cliente arma el pedido en el navegador y llega a tu WhatsApp escrito. No hay que instalar nada.',
      },
      {
        title: 'Arrancás gratis',
        body: 'Armar la carta no cuesta nada. La suscripción entra cuando querés que sea pública.',
      },
    ],
    features: [
      'Multi-negocio: cada local con su panel, su tema y su URL',
      'Asistente de alta en 4 pasos, del nombre al primer producto y el QR',
      'Categorías, fotos, precios, horarios y colores por negocio',
      'Vista previa privada antes de publicar',
      'Compuerta de publicación atada a la suscripción',
      'Pedidos por WhatsApp con el detalle armado',
      'Panel de super admin con estado de cada local',
      'Baja reversible: el local sale de servicio sin perder nada',
    ],
    specs: [
      { label: 'Modelo', value: 'Suscripción mensual' },
      { label: 'Arquitectura', value: 'Multi-tenant' },
      { label: 'Base de datos', value: 'PostgreSQL' },
      { label: 'Falta', value: 'Cobro automático' },
    ],
    stack: [
      'Next.js 16',
      'React 19',
      'TypeScript',
      'Prisma 7',
      'PostgreSQL',
      'Tailwind v4',
      'Zod',
      'Sentry',
    ],
    accent: 'signal',
  },

  {
    id: 'db-guardian',
    name: 'DB Guardian',
    kicker: 'Respaldos de PostgreSQL',
    platform: 'escritorio',
    status: 'beta',
    pitch:
      'Aplicación de escritorio que programa, verifica y restaura respaldos de PostgreSQL con las herramientas oficiales.',
    problem:
      'El respaldo que nadie probó no es un respaldo. La mayoría se entera el día que tiene que restaurar.',
    benefits: [
      {
        title: 'Sin herramientas raras',
        body: 'Usa pg_dump, pg_restore y psql, los mismos que ya confiás. Lo que genera lo abre cualquier DBA.',
      },
      {
        title: 'Las contraseñas no viajan',
        body: 'Cada una se cifra con una clave que deriva el sistema operativo. Copiar la base local a otra máquina no sirve de nada.',
      },
      {
        title: 'Sabés si el archivo sirve',
        body: 'Cada respaldo lleva su huella SHA-256 y se verifica antes de restaurar.',
      },
      {
        title: 'Corre solo',
        body: 'Las tareas programadas sobreviven al reinicio de la aplicación y quedan registradas con duración, peso y estado.',
      },
    ],
    features: [
      'Proyectos que agrupan las bases de un cliente o entorno',
      'Conexiones con SSL, timeout y prueba real antes de guardar',
      'pg_dump en los cuatro formatos con checksum SHA-256',
      'Programaciones cron persistentes',
      'Restauración con verificación de integridad previa',
      'Historial exportable a CSV',
      'Registro de auditoría inmutable',
      'Diagnóstico de herramientas, permisos, disco y conectividad',
    ],
    specs: [
      { label: 'Plataformas', value: 'Windows · macOS · Linux' },
      { label: 'Cifrado', value: 'DPAPI · Keychain · libsecret' },
      { label: 'Integridad', value: 'SHA-256' },
      { label: 'Formatos', value: '4 de pg_dump' },
    ],
    stack: [
      'Electron',
      'Next.js',
      'TypeScript',
      'Prisma',
      'SQLite',
      'Vitest',
      'Pino',
    ],
    accent: 'cyan',
  },

  {
    id: 'turnospro',
    name: 'TurnosPro',
    kicker: 'Reservas para profesionales',
    platform: 'web',
    status: 'live',
    pitch:
      'Tus clientes eligen horario solos, a cualquier hora, y vos dejás de ser la agenda.',
    problem:
      'Coordinar turnos por mensaje come la mañana entera y siempre termina con dos personas anotadas a las 15:00.',
    benefits: [
      {
        title: 'Recuperás la mañana',
        body: 'El cliente reserva desde el link. Vos ves la agenda ya armada.',
      },
      {
        title: 'Menos ausencias',
        body: 'Los recordatorios por correo salen solos antes de cada turno.',
      },
      {
        title: 'Imagen de empresa',
        body: 'Una página de reserva propia dice más de tu negocio que un chat lleno de mensajes.',
      },
    ],
    features: [
      'Reserva pública con disponibilidad en vivo',
      'Servicios con duración y precio configurables',
      'Agenda por profesional',
      'Recordatorios y confirmaciones por correo',
      'Panel con estados de turno y métricas',
    ],
    specs: [
      { label: 'Estado', value: 'En producción' },
      { label: 'Correo', value: 'Resend' },
      { label: 'Base de datos', value: 'PostgreSQL' },
    ],
    stack: ['Next.js', 'Node.js', 'Prisma', 'PostgreSQL', 'Resend', 'Vercel'],
    accent: 'violet',
    shot: {
      src: '/products/turnospro.png',
      alt: 'Panel de TurnosPro con la agenda de turnos',
      frame: 'browser',
    },
    link: { href: 'https://www.buscatusturnos.com.ar/', label: 'Ver en vivo' },
  },

  {
    id: 'club-cuotas',
    name: 'Club Cuotas',
    kicker: 'Cuotas de club deportivo',
    platform: 'web',
    status: 'live',
    pitch:
      'Quién pagó, quién debe y desde cuándo. La pregunta más incómoda del club, resuelta en una pantalla.',
    problem:
      'La planilla de cuotas la lleva uno solo, en su teléfono, y nadie más sabe quién está al día.',
    benefits: [
      {
        title: 'Se termina la discusión',
        body: 'Cada jugador ve su propio estado de cuenta. El tesorero deja de ser el que persigue.',
      },
      {
        title: 'El pago se aprueba, no se supone',
        body: 'El jugador informa, el administrador aprueba. Queda el registro de los dos lados.',
      },
      {
        title: 'Pensado para el celular',
        body: 'Se usa en el vestuario y en la cancha, no en una oficina.',
      },
    ],
    features: [
      'Torneos y competencias en paralelo',
      'Padrón de jugadores del club',
      'Cuotas únicas, mensuales, de inscripción o extraordinarias',
      'Flujo de pago con aprobación del administrador',
      'Roles diferenciados: administrador y jugador',
    ],
    specs: [
      { label: 'Estado', value: 'En producción' },
      { label: 'Diseño', value: 'Mobile-first' },
      { label: 'Autenticación', value: 'Clerk' },
    ],
    stack: ['Next.js 16', 'TypeScript', 'Prisma', 'PostgreSQL', 'Clerk', 'Zod'],
    accent: 'jade',
    shot: {
      src: '/products/club-cuotas.png',
      alt: 'Pantalla de Club Cuotas con el estado de pagos de los jugadores',
      frame: 'browser',
    },
    link: { href: 'https://club-cuotas.vercel.app/', label: 'Ver en vivo' },
  },

  {
    id: 'golazo',
    name: 'GOLAZO',
    kicker: 'Gestión de torneos de fútbol',
    platform: 'web',
    status: 'live',
    pitch:
      'Cargás el resultado y la tabla de posiciones ya está actualizada para todos.',
    problem:
      'Las posiciones se llevan en una planilla que alguien pasa a limpio el lunes. Hasta entonces, cada equipo tiene su propia versión de la tabla.',
    benefits: [
      {
        title: 'Una sola tabla',
        body: 'El resultado impacta en las posiciones al guardarlo. No hay recuento manual ni versiones que discutir.',
      },
      {
        title: 'El torneo tiene público',
        body: 'Fixture, planteles, estadísticas y noticias quedan en una web que el hincha puede compartir.',
      },
      {
        title: 'Cada rol ve lo suyo',
        body: 'Administradores, equipos y público entran a la misma plataforma con permisos distintos.',
      },
    ],
    features: [
      'Torneos con sus reglas, equipos y planteles',
      'Programación de partidos y carga de resultados',
      'Tabla de posiciones y estadísticas calculadas',
      'Gestión de árbitros con baja lógica',
      'Noticias con edición y publicación',
      'Fútbol de hoy: partidos del mundo por liga, con resultados en vivo',
    ],
    specs: [
      { label: 'Estado', value: 'En producción' },
      { label: 'Multimedia', value: 'Cloudinary' },
      { label: 'Roles', value: 'Admin · Equipo · Público' },
    ],
    stack: [
      'Next.js',
      'TypeScript',
      'Prisma',
      'PostgreSQL',
      'Clerk',
      'Cloudinary',
      'Radix UI',
    ],
    accent: 'signal',
  },

  {
    id: 'mistock',
    name: 'MiStock',
    kicker: 'Inventario del hogar',
    platform: 'movil',
    status: 'beta',
    pitch:
      'Escaneás el código de barras y la app sabe qué producto es, cuánto te queda y dónde conviene comprarlo.',
    problem:
      'Comprás la tercera botella de aceite porque no te acordabas de que había dos en el fondo de la alacena.',
    benefits: [
      {
        title: 'La lista se arma sola',
        body: 'Lo que baja del mínimo pasa directo a la lista de compras.',
      },
      {
        title: 'Sabés dónde está más barato',
        body: 'Cada producto guarda precio por negocio, así el total estimado es real.',
      },
      {
        title: 'Anda sin internet',
        body: 'Todo vive en SQLite dentro del teléfono. La góndola del súper no tiene señal y no importa.',
      },
      {
        title: 'Sin suscripción',
        body: 'El producto es gratuito entero. No hay funciones detrás de un muro.',
      },
    ],
    features: [
      'Stock con cantidad actual y mínimo por producto',
      'Escaneo de código de barras con autocompletado vía Open Food Facts',
      'Lista de compras manual o generada desde el stock bajo',
      'Precios por negocio y total estimado del carrito',
      'Gastos mensuales con filtro por año y mes',
      'Viajes con presupuesto, gasto por categoría y promedio diario',
      'Modo claro y oscuro persistente',
    ],
    specs: [
      { label: 'Plataforma', value: 'Android' },
      { label: 'Datos', value: 'Offline-first' },
      { label: 'Precio', value: 'Gratis' },
      { label: 'Catálogo', value: 'Open Food Facts' },
    ],
    stack: [
      'React Native',
      'Expo SDK 54',
      'TypeScript',
      'Zustand',
      'expo-sqlite',
    ],
    accent: 'cyan',
  },

  {
    id: 'egresados',
    name: 'Directorio de Egresados',
    kicker: 'SaaS académico',
    platform: 'web',
    status: 'live',
    pitch:
      'El padrón de egresados de una facultad, publicable y buscable, con varias carreras sobre el mismo modelo.',
    problem:
      'El listado de egresados vive en un Excel que se copia por correo y nadie sabe cuál es la última versión.',
    benefits: [
      {
        title: 'Sirve para toda la facultad',
        body: 'Perfil y programa se vinculan por inscripción: agregás un doctorado nuevo sin tocar el modelo de datos.',
      },
      {
        title: 'Se siente rápido',
        body: 'Barra de progreso al navegar y esqueletos por ruta: la pantalla responde antes de que lleguen los datos.',
      },
      {
        title: 'Entra con Google',
        body: 'Sin usuarios nuevos que administrar ni contraseñas que resetear.',
      },
    ],
    features: [
      'Perfiles con foto, programa y año de egreso',
      'Varias carreras, doctorados y especializaciones en paralelo',
      'Tabla con orden, filtros y búsqueda',
      'Panel de administración con validación estricta',
      'Tema claro y oscuro',
    ],
    specs: [
      { label: 'Modelo', value: 'Perfil ↔ Programa' },
      { label: 'Base de datos', value: 'Neon PostgreSQL' },
      { label: 'Fotos', value: 'UploadThing' },
    ],
    stack: [
      'Next.js 16',
      'React Server Components',
      'Prisma 7',
      'Neon',
      'Clerk',
      'TanStack Table',
      'Zod',
    ],
    accent: 'violet',
  },

  {
    id: 'whatsapp-service',
    name: 'WhatsApp Service',
    kicker: 'API multi-sesión + panel',
    platform: 'infra',
    status: 'building',
    pitch:
      'Varios negocios conectan su WhatsApp a la vez y mandan mensajes desde su propio sistema, por API.',
    problem:
      'Automatizar avisos por WhatsApp suele terminar en una cuenta compartida, un teléfono prendido en un rincón y cero trazabilidad.',
    benefits: [
      {
        title: 'Una sesión por negocio',
        body: 'Cada cuenta es independiente, con su QR y su persistencia. Nadie ve los mensajes de otro.',
      },
      {
        title: 'No hay que volver a escanear',
        body: 'La sesión se guarda: reiniciar el servicio no obliga a pasar por el QR de nuevo.',
      },
      {
        title: 'Queda registro',
        body: 'API Key por usuario y bitácora de actividad. Se sabe quién mandó qué.',
      },
    ],
    features: [
      'REST API multi-sesión con businessId por cuenta',
      'Autenticación por QR en base64, lista para cualquier frontend',
      'Envío de mensajes de texto por API',
      'Iniciar, consultar, listar, reiniciar y cerrar sesiones',
      'Autenticación dual: JWT de Clerk y API Key',
      'Panel con métricas, gráficos y estado de cada sesión',
      'Empaquetado en Docker',
    ],
    specs: [
      { label: 'Servicio', value: 'Node.js + Express' },
      { label: 'Panel', value: 'Next.js 16' },
      { label: 'Estado', value: 'MVP en curso' },
    ],
    stack: [
      'Node.js',
      'Express',
      'whatsapp-web.js',
      'Prisma',
      'PostgreSQL',
      'Clerk',
      'Docker',
      'TanStack Query',
    ],
    accent: 'jade',
  },

  {
    id: 'fisiogestiona',
    name: 'FisioGestiona',
    kicker: 'Gestión de centros de kinesiología',
    platform: 'web',
    status: 'live',
    pitch:
      'Pacientes, turnos, sesiones e historia clínica en un solo lugar, con permisos por rol.',
    problem:
      'La historia clínica en papel no se busca, no se comparte entre profesionales y no sobrevive a una mudanza.',
    benefits: [
      {
        title: 'La sesión queda escrita',
        body: 'Cada atención se documenta con notas y tratamiento, atada al paciente y a su historia.',
      },
      {
        title: 'Cada profesional ve lo suyo',
        body: 'Roles de administrador y profesional con permisos distintos sobre la misma base.',
      },
      {
        title: 'El negocio en números',
        body: 'Panel con métricas y gráficos de turnos, sesiones y ocupación.',
      },
    ],
    features: [
      'Alta, búsqueda y paginado de pacientes',
      'Calendario de turnos con estados: pendiente, confirmado, cancelado, completado',
      'Registro de sesiones con notas y tratamientos',
      'Panel analítico con gráficos',
      'Roles ADMIN y PROFESSIONAL',
      'Modo claro y oscuro persistente',
    ],
    specs: [
      { label: 'Estado', value: 'En producción' },
      { label: 'Autenticación', value: 'Clerk' },
      { label: 'Diseño', value: 'Mobile-first' },
    ],
    stack: ['Next.js', 'TypeScript', 'Prisma', 'PostgreSQL', 'Clerk'],
    accent: 'cyan',
  },

  {
    id: 'trazo',
    name: 'Trazo',
    kicker: 'Análisis deportivo por video',
    platform: 'escritorio',
    status: 'rnd',
    pitch:
      'Subís el video del partido, marcás un jugador y un intervalo, y obtenés lo que hizo en metros y segundos reales.',
    problem:
      'El análisis de video termina siendo "mirá acá". Sin metros ni segundos, la corrección es una opinión.',
    benefits: [
      {
        title: 'Números, no impresiones',
        body: 'Distancia, velocidad y aceleración calibradas contra la cancha real, no contra los píxeles.',
      },
      {
        title: 'El error se corrige',
        body: 'Editor de trayectorias con recálculo reversible: si el seguimiento confundió dos jugadores, lo arreglás y se recalcula.',
      },
      {
        title: 'Multideporte por diseño',
        body: 'El motor de visión no sabe de deportes. Básquet, vóley y fútbol son archivos de configuración.',
      },
    ],
    features: [
      'Sala de video: subir, catalogar, reproducir por frame y marcar jugadas',
      'Detección y seguimiento de jugadores',
      'Calibración de cancha para pasar de píxeles a metros',
      'Métricas físicas por jugador e intervalo',
      'Editor de trayectorias con recálculo reversible',
      'Análisis de postura: ángulos, saltos y asimetría',
      'Comparador de repeticiones',
    ],
    specs: [
      { label: 'Visión', value: 'YOLO11 · ONNX' },
      { label: 'Video', value: 'PyAV' },
      { label: 'Fases', value: '4 de 8 completas' },
    ],
    stack: [
      'Next.js',
      'TypeScript',
      'Python 3.12',
      'ONNX Runtime',
      'OpenCV',
      'PyAV',
    ],
    accent: 'magenta',
  },

  {
    id: 'federal-fc',
    name: 'Federal Fútbol Club',
    kicker: 'Identidad digital de un club',
    platform: 'web',
    status: 'live',
    pitch:
      'Un grupo de amigos que juega al fútbol, con la historia, los logros y el próximo partido en una web propia.',
    problem:
      'Todo lo que pasa en el club vive en un grupo de WhatsApp y se pierde al mes siguiente.',
    benefits: [
      {
        title: 'Queda para mostrar',
        body: 'Historia, plantel y logros en una dirección que se pasa por mensaje y se ve bien.',
      },
      {
        title: 'Carga rápido en el celular',
        body: 'Sitio estático desplegado en el borde. Entra en segundos con datos móviles.',
      },
    ],
    features: [
      'Historia y presentación del club',
      'Plantel y perfiles',
      'Próximos partidos y resultados',
      'Animaciones al desplazar',
    ],
    specs: [
      { label: 'Estado', value: 'En producción' },
      { label: 'Despliegue', value: 'Cloudflare Pages' },
      { label: 'Render', value: 'Estático' },
    ],
    stack: [
      'Next.js',
      'TypeScript',
      'Tailwind CSS',
      'Framer Motion',
      'Radix UI',
    ],
    accent: 'violet',
    shot: {
      src: '/products/federal-fc.png',
      alt: 'Sitio de Federal Fútbol Club',
      frame: 'browser',
    },
    link: {
      href: 'https://federal-futbol-club-page.pages.dev/',
      label: 'Ver en vivo',
    },
  },
];

/** Contadores reales del catálogo, para la franja de prueba social. */
export const catalogStats = {
  total: products.length,
  live: products.filter((p) => p.status === 'live' || p.status === 'store')
    .length,
  platforms: new Set(products.map((p) => p.platform)).size,
};
