import type { Dictionary } from "@/types";

export const es: Dictionary = {
  locale: "es",
  brand: {
    wordmark: "Gerona 12",
    name: "Restaurante Al Andalus",
    tagline: "Hospitalidad andalusí contemporánea",
  },
  nav: {
    home: "Inicio",
    restaurant: "El restaurante",
    menu: "Carta",
    gallery: "Galería",
    contact: "Contacto",
    openMenu: "Abrir menú de navegación",
    closeMenu: "Cerrar menú de navegación",
  },
  home: {
    headline: "Un sabor del patrimonio andalusí",
    support:
      "Restaurante Al Andalus ofrece una mesa serena donde la sensibilidad andalusí se expresa a través de la hospitalidad, el ritmo pausado y una cocina de carácter.",
    ctaMenu: "Descubre Nuestra Carta",
    ctaDiscover: "Descubre Nuestro Restaurante",
  },
  sections: {
    intro: {
      eyebrow: "Nuestra Historia",
      title: "Una presencia cálida, contemporánea y andalusí",
      body: "Gerona 12 presenta Restaurante Al Andalus como un espacio de hospitalidad cuidada: luz contenida, materiales nobles y una cocina que honra el carácter del sur con mirada actual. Sin artificio; con atención.",
    },
    menu: {
      eyebrow: "La carta",
      title: "Descubre la cocina de la casa",
      body: "La carta completa se publica a partir del menú oficial en PDF. Explore las categorías cuando el documento fuente esté disponible en el repositorio.",
      cta: "Descubre Nuestra Carta",
      pendingNote:
        "La carta se mostrará tras la extracción verificada del PDF oficial. No se publican platos ni precios provisionales.",
    },
    digitalMenu: {
      eyebrow: "Carta digital",
      title: "El menú original, página a página",
      body: "Consulte la carta oficial de Gerona 12 exactamente como en el PDF: las 26 páginas originales, sin rediseño ni cambios de contenido.",
      cta: "Ver nuestra carta",
      previewAlt: "Portada original del menú digital Gerona 12",
    },
    gallery: {
      eyebrow: "Galería",
      title: "La mesa, la luz, el ritmo",
      body: "Banner oficial del propietario (Banner AR). Las fotografías adicionales del restaurante se publicarán cuando se faciliten.",
      bannerAltPrimary:
        "Banner oficial Gerona 12 Al Andalus — página 1 (árabe)",
      bannerAltSecondary:
        "Banner oficial Gerona 12 Al Andalus — página 2 (árabe)",
      bannerCaption: "Banner AR",
      placeholder:
        "Espacio adicional reservado para fotografías oficiales del restaurante. No se muestran imágenes provisionales ni de archivo.",
    },
    closing: {
      title: "La mesa le espera",
      body: "Descubra la carta cuando esté disponible o continúe explorando el carácter de Al Andalus.",
      ctaMenu: "Descubre Nuestra Carta",
      ctaContact: "Contacto",
    },
  },
  menuPage: {
    title: "Nuestra carta",
    eyebrow: "Carta",
    intro:
      "La carta de Al Andalus se elabora exclusivamente a partir del menú oficial. Solo se publican platos y precios verificados.",
    searchPlaceholder: "Buscar un plato…",
    searchLabel: "Buscar en la carta",
    allCategories: "Todas",
    emptyTitle: "Carta en preparación",
    emptyBody:
      "El PDF fuente (docs/source/gerona12-full-menu.pdf) aún no está disponible en el repositorio. No se muestran platos inventados.",
    noResultsTitle: "Sin resultados",
    noResultsBody: "Pruebe otro término de búsqueda o seleccione otra categoría.",
    resultsCount: "platos",
    priceUnavailable: "Precio no disponible",
    backHome: "Volver al inicio",
  },
  originalMenuPage: {
    title: "Carta original",
    intro:
      "Visualización exacta de las páginas originales del menú PDF de Gerona 12.",
    previous: "Página anterior",
    next: "Página siguiente",
    page: "Página",
    pagesWord: "páginas",
    jumpLabel: "Ir a una página",
    jumpTitle: "Elegir página",
    jumpConfirm: "Ir",
    jumpCancel: "Cancelar",
  },
  footer: {
    rights: "Todos los derechos reservados.",
    discovery: "Al Baraka Digital",
    contactPending:
      "El teléfono, la dirección y el horario se publicarán cuando estén verificados.",
  },
  a11y: {
    skipToContent: "Saltar al contenido",
    languageSelector: "Idioma",
    primaryNav: "Navegación principal",
    footerNav: "Navegación del pie de página",
  },
  designFoundation: {
    title: "Base visual Gerona 12",
    intro:
      "Fundamentos decorativos derivados del menú original: esmeralda, oro, marfil y geometría islámica. Esta página es solo de verificación de diseño.",
    phaseLabel: "Fase 2A",
    tokensHeading: "Paleta",
    patternHeading: "Fondos geométricos",
    patternReadabilityNote:
      "Motivo geométrico del menú · opacidad suave para preservar la lectura",
    frameHeading: "Marcos ornamentales",
    separatorHeading: "Separadores",
    bandHeading: "Bandas del menú",
    note: "Los 26 JPEG originales del menú no se modifican. Sin fotografías externas.",
    swatches: {
      emerald: "Esmeralda",
      deepGreen: "Verde profundo",
      gold: "Oro real",
      ivory: "Marfil",
      darkText: "Texto oscuro",
    },
  },
};
