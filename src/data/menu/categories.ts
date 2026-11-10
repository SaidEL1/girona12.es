import type { MenuCategory, MenuSubcategory } from "@/types";

export const menuCategories: MenuCategory[] = [
  {
    id: "cat-desayunos-ligeros",
    slug: "desayunos-ligeros",
    name: {
      es: "Desayuno ligero",
      en: "Light breakfast",
      ar: "فطور خفيف",
    },
    sortOrder: 10,
    sourcePages: [1],
  },
  {
    id: "cat-desayuno-expres",
    slug: "desayuno-expres",
    name: {
      es: "Desayuno exprés",
      en: "Express breakfast",
      ar: "الفطور السريع",
    },
    sortOrder: 20,
    sourcePages: [1],
  },
  {
    id: "cat-desayunos",
    slug: "desayunos",
    name: {
      es: "Desayunos",
      en: "Breakfast",
      ar: "وجبات إفطار",
    },
    description: {
      es: "Disponibles hasta las 16:00",
      en: "Available until 4:00 PM",
      ar: "متوفرة حتى الساعة الرابعة زوالاً",
    },
    sortOrder: 30,
    sourcePages: [2],
  },
  {
    id: "cat-desayunos-casa",
    slug: "desayunos-de-la-casa",
    name: {
      es: "Desayunos de la casa",
      en: "House breakfast",
      ar: "وجبات إفطار منزلية",
    },
    sortOrder: 40,
    sourcePages: [2],
  },
  {
    id: "cat-ensaladas",
    slug: "ensaladas",
    name: {
      es: "Ensaladas",
      en: "Salads",
      ar: "سلطات باردة",
    },
    sortOrder: 50,
    sourcePages: [3, 5],
  },
  {
    id: "cat-entrantes-calientes",
    slug: "entrantes-calientes",
    name: {
      es: "Entrantes calientes",
      en: "Hot starters",
      ar: "مقبلات ساخنة",
    },
    sortOrder: 60,
    sourcePages: [3, 5],
  },
  {
    id: "cat-pastas",
    slug: "pastas",
    name: {
      es: "Pastas",
      en: "Pasta",
      ar: "مقرونة",
    },
    sortOrder: 70,
    sourcePages: [3, 5],
  },
  {
    id: "cat-burgers-kebabs",
    slug: "burgers-y-kebabs",
    name: {
      es: "Hamburguesas y kebabs",
      en: "Burgers and kebabs",
      ar: "البرغر والكباب",
    },
    sortOrder: 80,
    sourcePages: [4, 6],
  },
  {
    id: "cat-cajas-platos",
    slug: "cajas-y-platos",
    name: {
      es: "Cajas y platos de kebab",
      en: "Kebab boxes and plates",
      ar: "بوكسات وأطباق",
    },
    sortOrder: 90,
    sourcePages: [4, 6],
  },
  {
    id: "cat-pizzas",
    slug: "pizzas",
    name: {
      es: "Pizzas",
      en: "Pizzas",
      ar: "البيتزا",
    },
    sortOrder: 100,
    sourcePages: [7, 15],
  },
  {
    id: "cat-carnes-pescados",
    slug: "carnes-y-pescados",
    name: {
      es: "Carnes y pescados",
      en: "Meat and fish",
      ar: "الأطباق الرئيسية (لحوم وأسماك)",
    },
    sortOrder: 110,
    sourcePages: [8],
  },
  {
    id: "cat-marroquies",
    slug: "platos-marroquies",
    name: {
      es: "Platos marroquíes",
      en: "Moroccan dishes",
      ar: "الأطباق المغربية الأصلية",
    },
    sortOrder: 120,
    sourcePages: [8],
  },
  {
    id: "cat-postres",
    slug: "postres",
    name: {
      es: "Postres",
      en: "Desserts",
      ar: "التحليات والحلويات",
    },
    sortOrder: 130,
    sourcePages: [8],
  },
];

export const menuSubcategories: MenuSubcategory[] = [
  {
    id: "sub-tostadas",
    categoryId: "cat-desayunos-ligeros",
    slug: "tostadas",
    name: { es: "Tostadas", en: "Toasts", ar: "توستادا" },
    sortOrder: 1,
  },
  {
    id: "sub-tortillas",
    categoryId: "cat-desayunos-ligeros",
    slug: "tortillas-huevos-bolleria",
    name: {
      es: "Tortillas, huevos y bollería",
      en: "Omelettes, eggs and pastries",
      ar: "طورطيات، البيض والمعجنات",
    },
    sortOrder: 2,
  },
  {
    id: "sub-burgers",
    categoryId: "cat-burgers-kebabs",
    slug: "hamburguesas",
    name: { es: "Hamburguesas", en: "Burgers", ar: "البرغر" },
    sortOrder: 1,
  },
  {
    id: "sub-kebabs",
    categoryId: "cat-burgers-kebabs",
    slug: "kebabs",
    name: { es: "Kebabs", en: "Kebabs", ar: "الكباب" },
    sortOrder: 2,
  },
];
