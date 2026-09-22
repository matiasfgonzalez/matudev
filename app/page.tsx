import { Aurora } from './components/aurora';
import { Navbar } from './components/navbar';
import { HeroSection } from './components/hero-section';
import { ProductsSection } from './components/products-section';
import { ServicesSection } from './components/services-section';
import { ProcessSection } from './components/process-section';
import { StackSection } from './components/stack-section';
import { AboutSection } from './components/about-section';
import { FaqSection } from './components/faq-section';
import { ContactSection } from './components/contact-section';
import { Footer } from './components/footer';
import { WhatsAppFloat } from './components/whatsapp-float';
import { MotionProvider } from './components/reveal';
import { site, links } from './lib/site';
import { products } from './lib/products';

/* Datos estructurados: lo mismo que lee una persona, en el formato que leen
   los buscadores. El catálogo se arma desde la misma fuente que la grilla. */
function structuredData() {
  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'ProfessionalService',
        '@id': `${site.url}#business`,
        name: site.brand,
        description:
          'Desarrollo de aplicaciones móviles, plataformas web y herramientas de escritorio a medida.',
        url: site.url,
        email: site.email,
        telephone: `+${site.phoneE164}`,
        areaServed: 'AR',
        availableLanguage: 'es',
        address: {
          '@type': 'PostalAddress',
          addressLocality: 'Paraná',
          addressRegion: 'Entre Ríos',
          addressCountry: 'AR',
        },
        founder: {
          '@type': 'Person',
          name: site.legalName,
          jobTitle: site.role,
          sameAs: [links.github, links.linkedin],
        },
      },
      {
        '@type': 'ItemList',
        '@id': `${site.url}#catalogo`,
        name: 'Catálogo de productos de matutech',
        numberOfItems: products.length,
        itemListElement: products.map((p, i) => ({
          '@type': 'ListItem',
          position: i + 1,
          item: {
            '@type': 'SoftwareApplication',
            name: p.name,
            description: p.pitch,
            applicationCategory: p.kicker,
            operatingSystem:
              p.platform === 'movil'
                ? 'Android'
                : p.platform === 'escritorio'
                  ? 'Windows, macOS, Linux'
                  : 'Web',
            ...(p.link ? { url: p.link.href } : {}),
          },
        })),
      },
    ],
  };
}

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData()).replace(/</g, '\\u003c'),
        }}
      />

      <a href="#contenido" className="skip-link btn btn--signal btn--sm">
        Saltar al contenido
      </a>

      <Aurora />

      <MotionProvider>
        <Navbar />

        <main id="contenido" className="relative" style={{ zIndex: 1 }}>
          <HeroSection />
          <ProductsSection />
          <ServicesSection />
          <ProcessSection />
          <StackSection />
          <AboutSection />
          <FaqSection />
          <ContactSection />
        </main>

        <Footer />
        <WhatsAppFloat />
      </MotionProvider>
    </>
  );
}
