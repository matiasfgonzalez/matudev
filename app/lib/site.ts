/**
 * Datos de marca en un solo lugar.
 * Cambiar acá se propaga a metadatos, navbar, contacto y footer.
 */

export const site = {
  brand: 'matutech',
  legalName: 'Matías Francisco González',
  role: 'Desarrollador de producto · Full Stack',
  tagline: 'Software que sale a producción.',
  location: 'Paraná, Entre Ríos · Argentina',
  timezone: 'GMT-3',
  url: 'https://matutech.dev',
  email: 'matiasgonzalez.652@gmail.com',
  phoneDisplay: '+54 9 3454 43-2164',
  phoneE164: '5493454432164',
  since: 2021,
} as const;

/** Mensaje precargado del botón de WhatsApp. */
export function whatsappLink(message: string) {
  return `https://wa.me/${site.phoneE164}?text=${encodeURIComponent(message)}`;
}

export const links = {
  whatsapp: whatsappLink(
    'Hola Matías, vi matutech y quiero contarte lo que necesito.'
  ),
  whatsappProduct: (product: string) =>
    whatsappLink(`Hola Matías, me interesa ${product}. ¿Lo podemos ver?`),
  email: `mailto:${site.email}?subject=${encodeURIComponent('Consulta desde matutech')}`,
  github: 'https://github.com/matiasfgonzalez',
  linkedin: 'https://www.linkedin.com/in/matias-gonzalez-1a75b6223/',
  instagram: 'https://instagram.com/matute_2gonzalez',
} as const;

export const nav = [
  { label: 'Productos', href: '#productos' },
  { label: 'Servicios', href: '#servicios' },
  { label: 'Proceso', href: '#proceso' },
  { label: 'Stack', href: '#stack' },
  { label: 'Sobre mí', href: '#sobre-mi' },
] as const;
