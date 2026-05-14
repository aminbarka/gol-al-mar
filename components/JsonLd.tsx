const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://golalmar.es";

const address = {
  "@type": "PostalAddress",
  streetAddress: "Chiringuito Habana Blue, Playa de Vilanova",
  addressLocality: "Vilanova i la Geltrú",
  addressRegion: "Cataluña",
  postalCode: "08800",
  addressCountry: "ES",
};

const geo = {
  "@type": "GeoCoordinates",
  latitude: 41.2122968,
  longitude: 1.7248974,
};

const venue = {
  "@type": "Place",
  name: "Habana Blue, Playa de Vilanova",
  address,
  geo,
};

const offer = {
  "@type": "Offer",
  price: "0",
  priceCurrency: "EUR",
  availability: "https://schema.org/InStock",
  url: SITE_URL,
};

const organizer = { "@id": `${SITE_URL}/#organization` };

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${SITE_URL}/#organization`,
      name: "Gol al Mar",
      url: SITE_URL,
      logo: { "@type": "ImageObject", url: `${SITE_URL}/favicon.ico` },
      contactPoint: {
        "@type": "ContactPoint",
        telephone: "+34-612-209-293",
        contactType: "customer service",
        availableLanguage: ["Spanish"],
        email: "goolaalmaar@gmail.com",
      },
    },
    {
      "@type": "LocalBusiness",
      "@id": `${SITE_URL}/#localbusiness`,
      name: "Gol al Mar",
      description:
        "Proyección de todos los partidos del Mundial 2026 en una pantalla gigante en la Playa de Vilanova. Entrada libre.",
      url: SITE_URL,
      telephone: "+34-612-209-293",
      email: "goolaalmaar@gmail.com",
      address,
      geo,
      priceRange: "€",
      openingHoursSpecification: [
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: [
            "Monday", "Tuesday", "Wednesday", "Thursday",
            "Friday", "Saturday", "Sunday",
          ],
          opens: "20:30",
          closes: "23:59",
          validFrom: "2026-06-12",
          validThrough: "2026-07-19",
        },
      ],
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: SITE_URL,
      name: "Gol al Mar",
      description:
        "Mira todos los partidos del Mundial 2026 en directo en una pantalla gigante justo en la Playa de Vilanova.",
      publisher: organizer,
      inLanguage: "es-ES",
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "¿Es de entrada libre Gol al Mar?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Sí, la entrada es completamente gratuita. Solo necesitas reservar tu sitio para que sepamos cuántos sois y podamos preparar suficientes bebidas frías.",
          },
        },
        {
          "@type": "Question",
          name: "¿Dónde está Gol al Mar?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Estamos en el chiringuito Habana Blue, justo en la Playa de Vilanova i la Geltrú (Cataluña, España). Coordenadas GPS: 41.2122968, 1.7248974.",
          },
        },
        {
          "@type": "Question",
          name: "¿A qué hora empiezan los partidos en Gol al Mar?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Las puertas abren a las 20:30 y los partidos del Mundial 2026 empiezan a las 21:00. Es mejor llegar pronto para elegir buen sitio en la arena.",
          },
        },
        {
          "@type": "Question",
          name: "¿Hay que reservar para ver el Mundial en la playa?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "No es obligatorio, pero sí recomendable. Puedes reservar gratis por WhatsApp para que podamos preparar suficientes sitios.",
          },
        },
        {
          "@type": "Question",
          name: "¿Cuántos partidos del Mundial 2026 se proyectan?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Proyectamos los 64 partidos del Mundial 2026, desde el partido inaugural el 12 de junio hasta la gran final el 19 de julio de 2026.",
          },
        },
      ],
    },
    {
      "@type": "SportsEvent",
      name: "Gol al Mar — Partido Inaugural: USA vs. México · Mundial 2026",
      description:
        "Proyección del partido inaugural del Mundial 2026 en pantalla gigante frente al mar en la Playa de Vilanova. Entrada libre.",
      startDate: "2026-06-12T21:00:00+02:00",
      endDate: "2026-06-12T23:00:00+02:00",
      eventStatus: "https://schema.org/EventScheduled",
      eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
      location: venue,
      organizer,
      offers: offer,
      sport: "Soccer",
    },
    {
      "@type": "SportsEvent",
      name: "Gol al Mar — España Primer Partido de Grupo · Mundial 2026",
      description:
        "Proyección del primer partido de grupo de España en el Mundial 2026 en pantalla gigante en la Playa de Vilanova. Entrada libre.",
      startDate: "2026-06-15T21:00:00+02:00",
      endDate: "2026-06-15T23:00:00+02:00",
      eventStatus: "https://schema.org/EventScheduled",
      eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
      location: venue,
      organizer,
      offers: offer,
      sport: "Soccer",
    },
    {
      "@type": "SportsEvent",
      name: "Gol al Mar — Final del Mundial 2026",
      description:
        "Proyección de la Gran Final del Mundial 2026 en pantalla gigante en la Playa de Vilanova i la Geltrú. El partido más grande del mundo frente al mar. Entrada libre.",
      startDate: "2026-07-19T21:00:00+02:00",
      endDate: "2026-07-19T23:30:00+02:00",
      eventStatus: "https://schema.org/EventScheduled",
      eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
      location: venue,
      organizer,
      offers: offer,
      sport: "Soccer",
    },
  ],
};

export default function JsonLd() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
      }}
    />
  );
}
