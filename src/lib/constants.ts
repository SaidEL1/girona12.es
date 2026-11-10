/** In-page anchors used by the Phase 01 shell. */
export const SECTION_IDS = {
  home: "inicio",
  intro: "introduccion",
  menu: "carta",
  digitalMenu: "carta-digital",
  featured: "destacados",
  gallery: "galeria",
  contact: "contacto",
  location: "ubicacion",
  reservation: "reservas",
} as const;

export type SectionId = (typeof SECTION_IDS)[keyof typeof SECTION_IDS];
