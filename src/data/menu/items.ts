import type { MenuItem } from "@/types";

/**
 * Verified menu items extracted from Full Menu Gerona 12 screenshots.
 * Spanish is canonical for prices when locales disagree.
 * Do not invent dishes beyond the PDF evidence set.
 */
export const menuItems: MenuItem[] = [
  {
    "dietaryLabels": [],
    "featured": false,
    "status": "published",
    "id": "toast-butter-jam",
    "categoryId": "cat-desayunos-ligeros",
    "subcategoryId": "sub-tostadas",
    "name": {
      "es": "Tostada de mantequilla y mermelada",
      "en": "Butter and jam toast",
      "ar": "توستادا بالزبدة والمربى"
    },
    "priceEur": 1.6,
    "priceLabel": "1,60 €",
    "sortOrder": 10,
    "source": {
      "pdf": "docs/source/gerona12-full-menu.pdf",
      "page": 1
    }
  },
  {
    "dietaryLabels": [],
    "featured": false,
    "status": "published",
    "id": "toast-oil-cheese",
    "categoryId": "cat-desayunos-ligeros",
    "subcategoryId": "sub-tostadas",
    "name": {
      "es": "Tostada de aceite y queso",
      "en": "Olive oil and cheese toast",
      "ar": "توستادا بزيت الزيتون والجبن"
    },
    "priceEur": 1.6,
    "priceLabel": "1,60 €",
    "sortOrder": 20,
    "source": {
      "pdf": "docs/source/gerona12-full-menu.pdf",
      "page": 1
    }
  },
  {
    "dietaryLabels": [],
    "featured": false,
    "status": "published",
    "id": "toast-tuna-tomato",
    "categoryId": "cat-desayunos-ligeros",
    "subcategoryId": "sub-tostadas",
    "name": {
      "es": "Tostada de atún y tomate",
      "en": "Tuna and tomato toast",
      "ar": "توستادا بالتونة والطماطم"
    },
    "priceEur": 1.8,
    "priceLabel": "1,80 €",
    "sortOrder": 30,
    "source": {
      "pdf": "docs/source/gerona12-full-menu.pdf",
      "page": 1
    }
  },
  {
    "dietaryLabels": [],
    "featured": false,
    "status": "published",
    "id": "toast-omelette",
    "categoryId": "cat-desayunos-ligeros",
    "subcategoryId": "sub-tostadas",
    "name": {
      "es": "Tostada de tortilla",
      "en": "Omelette toast",
      "ar": "توستادا بالبيض"
    },
    "priceEur": 1.9,
    "priceLabel": "1,90 €",
    "sortOrder": 40,
    "source": {
      "pdf": "docs/source/gerona12-full-menu.pdf",
      "page": 1
    }
  },
  {
    "dietaryLabels": [],
    "featured": false,
    "status": "published",
    "id": "omelette-french",
    "categoryId": "cat-desayunos-ligeros",
    "subcategoryId": "sub-tortillas",
    "name": {
      "es": "Tortilla francesa",
      "en": "French omelette",
      "ar": "طورطية عادية"
    },
    "priceEur": 1.9,
    "priceLabel": "1,90 €",
    "sortOrder": 50,
    "source": {
      "pdf": "docs/source/gerona12-full-menu.pdf",
      "page": 1
    }
  },
  {
    "dietaryLabels": [],
    "featured": false,
    "status": "published",
    "id": "omelette-cheese",
    "categoryId": "cat-desayunos-ligeros",
    "subcategoryId": "sub-tortillas",
    "name": {
      "es": "Tortilla de queso",
      "en": "Cheese omelette",
      "ar": "طورطية بالجبن"
    },
    "priceEur": 3,
    "priceLabel": "3,00 €",
    "sortOrder": 60,
    "source": {
      "pdf": "docs/source/gerona12-full-menu.pdf",
      "page": 1
    }
  },
  {
    "dietaryLabels": [],
    "featured": false,
    "status": "published",
    "id": "omelette-cheese-turkey",
    "categoryId": "cat-desayunos-ligeros",
    "subcategoryId": "sub-tortillas",
    "name": {
      "es": "Tortilla de queso y jamón de pavo",
      "en": "Cheese and turkey ham omelette",
      "ar": "طورطية بالجبن والديك الرومي"
    },
    "priceEur": 4.5,
    "priceLabel": "4,50 €",
    "sortOrder": 70,
    "source": {
      "pdf": "docs/source/gerona12-full-menu.pdf",
      "page": 1
    }
  },
  {
    "dietaryLabels": [],
    "featured": false,
    "status": "published",
    "id": "omelette-tuna-cheese",
    "categoryId": "cat-desayunos-ligeros",
    "subcategoryId": "sub-tortillas",
    "name": {
      "es": "Tortilla de atún y queso",
      "en": "Tuna and cheese omelette",
      "ar": "طورطية بالتونة والجبن"
    },
    "priceEur": 4.5,
    "priceLabel": "4,50 €",
    "sortOrder": 80,
    "source": {
      "pdf": "docs/source/gerona12-full-menu.pdf",
      "page": 1
    }
  },
  {
    "dietaryLabels": [],
    "featured": false,
    "status": "published",
    "id": "omelette-salmon",
    "categoryId": "cat-desayunos-ligeros",
    "subcategoryId": "sub-tortillas",
    "name": {
      "es": "Tortilla de salmón ahumado",
      "en": "Smoked salmon omelette",
      "ar": "طورطية بالسلمون المدخن"
    },
    "priceEur": 6,
    "priceLabel": "6,00 €",
    "sortOrder": 90,
    "source": {
      "pdf": "docs/source/gerona12-full-menu.pdf",
      "page": 1
    }
  },
  {
    "dietaryLabels": [],
    "featured": false,
    "status": "published",
    "id": "egg-1",
    "categoryId": "cat-desayunos-ligeros",
    "subcategoryId": "sub-tortillas",
    "name": {
      "es": "1 huevo a la plancha",
      "en": "1 fried egg",
      "ar": "بيضة مقلية واحدة"
    },
    "priceEur": 3,
    "priceLabel": "3,00 €",
    "sortOrder": 100,
    "source": {
      "pdf": "docs/source/gerona12-full-menu.pdf",
      "page": 1
    }
  },
  {
    "dietaryLabels": [],
    "featured": false,
    "status": "unpublished",
    "id": "egg-2",
    "categoryId": "cat-desayunos-ligeros",
    "subcategoryId": "sub-tortillas",
    "name": {
      "es": "2 huevos a la plancha",
      "en": "2 fried eggs",
      "ar": "بيضتان مقليتان"
    },
    "priceEur": 5,
    "priceLabel": "5,00 €",
    "sortOrder": 110,
    "source": {
      "pdf": "docs/source/gerona12-full-menu.pdf",
      "page": 19,
      "notes": "Present on English light-breakfast page at 5,00 €; absent from Spanish and Arabic light-breakfast pages. Unpublished (Spanish is canonical)."
    }
  },
  {
    "dietaryLabels": [],
    "featured": false,
    "status": "published",
    "id": "msemen-harcha",
    "categoryId": "cat-desayunos-ligeros",
    "subcategoryId": "sub-tortillas",
    "name": {
      "es": "Mssemen / Harsha",
      "en": "Moroccan msemen or harcha",
      "ar": "مسمن أو حرشة مغربية"
    },
    "priceEur": 2,
    "priceLabel": "2,00 €",
    "sortOrder": 120,
    "source": {
      "pdf": "docs/source/gerona12-full-menu.pdf",
      "page": 1
    }
  },
  {
    "dietaryLabels": [],
    "featured": false,
    "status": "published",
    "id": "croissant-butter",
    "categoryId": "cat-desayunos-ligeros",
    "subcategoryId": "sub-tortillas",
    "name": {
      "es": "Cruasán de mantequilla",
      "en": "Butter croissant",
      "ar": "كرواسون بالزبدة"
    },
    "priceEur": 2,
    "priceLabel": "2,00 €",
    "sortOrder": 130,
    "source": {
      "pdf": "docs/source/gerona12-full-menu.pdf",
      "page": 1
    }
  },
  {
    "dietaryLabels": [],
    "featured": false,
    "status": "published",
    "id": "breakfast-express",
    "categoryId": "cat-desayuno-expres",
    "name": {
      "es": "Desayuno exprés",
      "en": "Express breakfast",
      "ar": "الفطور السريع"
    },
    "description": {
      "es": "Zumo de naranja (20 cl), bebida caliente, 1 tostada al gusto y ensalada de frutas.",
      "en": "Orange juice (20 cl), hot drink, 1 toast of your choice and fruit salad.",
      "ar": "عصير برتقال (20 كل)، مشروب ساخن، توستادا من اختياركم وسلطة فواكه."
    },
    "priceEur": 4.5,
    "priceLabel": "4,50 €",
    "sortOrder": 140,
    "source": {
      "pdf": "docs/source/gerona12-full-menu.pdf",
      "page": 1
    }
  },
  {
    "dietaryLabels": [],
    "featured": false,
    "status": "published",
    "id": "breakfast-oriental",
    "categoryId": "cat-desayunos",
    "name": {
      "es": "Desayuno Oriental",
      "en": "Oriental Breakfast",
      "ar": "فطور شرقي"
    },
    "description": {
      "es": "Zumo de naranja, té o café, harsha o mssemen (elige 2 guarniciones), bollería, ensalada de frutas o yogur. Guarniciones: miel, mantequilla, queso, aceite de oliva, amlou y khlii.",
      "en": "Orange juice, tea or coffee, msemen or harcha with 2 toppings of your choice, pastries, fruit salad or yogurt. Toppings: honey, butter, cheese, olive oil, amlou, Moroccan khlii.",
      "ar": "يشمل عصير البرتقال، شاي أو قهوة، مسمن أو حرشة (مع خيارين إضافيين)، حلويات، سلطة فواكه أو زبادي. الأطباق الجانبية: عسل، زبدة، جبن، زيت زيتون، أملو وخليع."
    },
    "priceEur": 6.5,
    "priceLabel": "6,50 €",
    "sortOrder": 150,
    "source": {
      "pdf": "docs/source/gerona12-full-menu.pdf",
      "page": 2
    },
    "notes": {
      "es": "Disponible hasta las 16:00",
      "en": "Available until 4:00 PM",
      "ar": "متوفر حتى الساعة الرابعة زوالاً"
    }
  },
  {
    "dietaryLabels": [],
    "featured": false,
    "status": "published",
    "id": "breakfast-luxury-b",
    "categoryId": "cat-desayunos",
    "name": {
      "es": "Desayuno de lujo B",
      "en": "Luxury Breakfast B",
      "ar": "فطور فاخر"
    },
    "description": {
      "es": "Zumo de naranja, bebida caliente, tortitas, bollería, ensalada de frutas o yogur.",
      "en": "Orange juice, hot drink, pancakes, pastries, fruit salad or yogurt.",
      "ar": "يشمل عصير البرتقال، مشروب ساخن، بان كيك/كريب، حلويات، سلطة فواكه أو زبادي."
    },
    "priceEur": 7,
    "priceLabel": "7,00 €",
    "sortOrder": 160,
    "source": {
      "pdf": "docs/source/gerona12-full-menu.pdf",
      "page": 2
    },
    "notes": {
      "es": "Disponible hasta las 16:00",
      "en": "Available until 4:00 PM",
      "ar": "متوفر حتى الساعة الرابعة زوالاً"
    }
  },
  {
    "dietaryLabels": [],
    "featured": false,
    "status": "published",
    "id": "breakfast-girona12",
    "categoryId": "cat-desayunos",
    "name": {
      "es": "Desayuno Girona 12",
      "en": "Girona 12 Breakfast",
      "ar": "فطور جيرونا 12"
    },
    "description": {
      "es": "Zumo de naranja, té o café, tostada Girona 12 (queso crema, aguacate y salmón), bollería, ensalada de frutas o yogur.",
      "en": "Orange juice, tea or coffee, Girona 12 toast (cream cheese, avocado and salmon), pastries, fruit salad or yogurt.",
      "ar": "يشمل عصير البرتقال، شاي أو قهوة، توست جيرونا 12 (جبن، أفوكادو، سلمون)، حلويات، سلطة فواكه أو زبادي."
    },
    "priceEur": 8.5,
    "priceLabel": "8,50 €",
    "sortOrder": 170,
    "source": {
      "pdf": "docs/source/gerona12-full-menu.pdf",
      "page": 2
    },
    "notes": {
      "es": "Disponible hasta las 16:00",
      "en": "Available until 4:00 PM",
      "ar": "متوفر حتى الساعة الرابعة زوالاً"
    }
  },
  {
    "dietaryLabels": [],
    "featured": false,
    "status": "published",
    "id": "breakfast-moroccan",
    "categoryId": "cat-desayunos-casa",
    "name": {
      "es": "Desayuno marroquí",
      "en": "Moroccan Breakfast",
      "ar": "فطور مغربي"
    },
    "description": {
      "es": "Zumo de naranja, café o té, 2 huevos a la plancha o 1 tortilla francesa, jamón de pavo ahumado, ensalada de frutas o yogur.",
      "en": "Orange juice, coffee or tea, 2 fried eggs or 1 French omelette, smoked turkey ham, fruit salad or yogurt.",
      "ar": "يشمل عصير البرتقال، شاي أو قهوة، بيضتان مقليتان أو عجة، لانشون ديك رومي مدخن، سلطة فواكه أو زبادي."
    },
    "priceEur": 7.5,
    "priceLabel": "7,50 €",
    "sortOrder": 180,
    "source": {
      "pdf": "docs/source/gerona12-full-menu.pdf",
      "page": 2
    }
  },
  {
    "dietaryLabels": [],
    "featured": false,
    "status": "published",
    "id": "breakfast-chef",
    "categoryId": "cat-desayunos-casa",
    "name": {
      "es": "Desayuno Chef",
      "en": "Chef's Breakfast",
      "ar": "فطور الشيف"
    },
    "description": {
      "es": "Batido de fresa y naranja (20 cl), bebida caliente, tortilla de queso y pavo, ensalada de frutas o yogur.",
      "en": "Strawberry and orange smoothie (20 cl), hot drink, cheese and turkey omelette, fruit salad or yogurt.",
      "ar": "يشمل عصير الفراولة والبرتقال (20 كل)، مشروب ساخن، عجة بالجبن والديك الرومي، سلطة فواكه أو زبادي."
    },
    "priceEur": 8.5,
    "priceLabel": "8,50 €",
    "sortOrder": 190,
    "source": {
      "pdf": "docs/source/gerona12-full-menu.pdf",
      "page": 2
    }
  },
  {
    "dietaryLabels": [],
    "featured": false,
    "status": "published",
    "id": "salad-chicken",
    "categoryId": "cat-ensaladas",
    "name": {
      "es": "Ensalada de pollo",
      "en": "Chicken Salad",
      "ar": "سلطة بالدجاج"
    },
    "description": {
      "es": "Lechuga, tomate, maíz, pepino, zanahoria, pechuga de pollo y salsa vinagreta.",
      "en": "Lettuce, tomato, corn, cucumber, carrot, chicken breast, vinaigrette dressing.",
      "ar": "خس، طماطم، ذرة، خيار، جزر، صدر دجاج وصوص فييناغريت."
    },
    "priceEur": 5.5,
    "priceLabel": "5,50 €",
    "sortOrder": 200,
    "source": {
      "pdf": "docs/source/gerona12-full-menu.pdf",
      "page": 3
    }
  },
  {
    "dietaryLabels": [],
    "featured": false,
    "status": "published",
    "id": "salad-tuna",
    "categoryId": "cat-ensaladas",
    "name": {
      "es": "Ensalada de atún",
      "en": "Tuna Salad",
      "ar": "سلطة بالتون"
    },
    "description": {
      "es": "Tomate en rodajas, cebolla, aceitunas y atún.",
      "en": "Sliced tomato, onion, olives, tuna.",
      "ar": "شرائح طماطم، بصل، زيتون وتونة."
    },
    "priceEur": 6,
    "priceLabel": "6,00 €",
    "sortOrder": 210,
    "source": {
      "pdf": "docs/source/gerona12-full-menu.pdf",
      "page": 3
    }
  },
  {
    "dietaryLabels": [],
    "featured": false,
    "status": "published",
    "id": "salad-prawns",
    "categoryId": "cat-ensaladas",
    "name": {
      "es": "Ensalada de langostinos",
      "en": "King Prawn Salad",
      "ar": "سلطة بالقمروان"
    },
    "description": {
      "es": "Lechuga, cebolla, tomate, langostinos y salsa vinagreta.",
      "en": "Lettuce, onion, tomato, king prawns, vinaigrette dressing.",
      "ar": "خس، بصل، طماطم، قمرون وصوص فييناغريت."
    },
    "priceEur": 8,
    "priceLabel": "8,00 €",
    "sortOrder": 220,
    "source": {
      "pdf": "docs/source/gerona12-full-menu.pdf",
      "page": 3,
      "notes": "Spanish OCR on one page looked ambiguous (maíz/tomate duplicated); description aligned with EN/AR ingredients."
    }
  },
  {
    "dietaryLabels": [],
    "featured": false,
    "status": "published",
    "id": "starter-asparagus-eggs",
    "categoryId": "cat-entrantes-calientes",
    "name": {
      "es": "Revuelto de espárragos",
      "en": "Scrambled Eggs with Asparagus",
      "ar": "البيض بالهليون (الأسبراجوس)"
    },
    "description": {
      "es": "Huevo, ajo y espárragos.",
      "en": "Egg, garlic, asparagus.",
      "ar": "بيض، ثوم وهليون."
    },
    "priceEur": 5.5,
    "priceLabel": "5,50 €",
    "sortOrder": 230,
    "source": {
      "pdf": "docs/source/gerona12-full-menu.pdf",
      "page": 3
    }
  },
  {
    "dietaryLabels": [],
    "featured": false,
    "status": "published",
    "id": "starter-huevo-roto",
    "categoryId": "cat-entrantes-calientes",
    "name": {
      "es": "Huevo roto",
      "en": "Eggs with Potatoes",
      "ar": "البيض المقلي بالبطاطس والثوم"
    },
    "description": {
      "es": "Patatas, ajo y huevo.",
      "en": "Potatoes, garlic, egg.",
      "ar": "بطاطس، ثوم وبيض."
    },
    "priceEur": 4,
    "priceLabel": "4,00 €",
    "sortOrder": 240,
    "source": {
      "pdf": "docs/source/gerona12-full-menu.pdf",
      "page": 3
    }
  },
  {
    "dietaryLabels": [],
    "featured": false,
    "status": "published",
    "id": "starter-croquettes",
    "categoryId": "cat-entrantes-calientes",
    "name": {
      "es": "Croquetas caseras",
      "en": "Homemade Croquettes",
      "ar": "كروكيت الدار بالدجاج"
    },
    "description": {
      "es": "Croquetas de pollo.",
      "en": "Chicken croquettes.",
      "ar": "كروكيت دجاج."
    },
    "priceEur": 4.5,
    "priceLabel": "4,50 €",
    "sortOrder": 250,
    "source": {
      "pdf": "docs/source/gerona12-full-menu.pdf",
      "page": 3
    }
  },
  {
    "dietaryLabels": [],
    "featured": false,
    "status": "published",
    "id": "starter-spicy-prawns",
    "categoryId": "cat-entrantes-calientes",
    "name": {
      "es": "Langostinos picantes",
      "en": "Spicy King Prawns",
      "ar": "القمرون الحار"
    },
    "description": {
      "es": "Langostinos con salsa picante.",
      "en": "King prawns, spicy sauce.",
      "ar": "قمرون بصوص حار."
    },
    "priceEur": 6.5,
    "priceLabel": "6,50 €",
    "sortOrder": 260,
    "source": {
      "pdf": "docs/source/gerona12-full-menu.pdf",
      "page": 3
    }
  },
  {
    "dietaryLabels": [],
    "featured": false,
    "status": "published",
    "id": "starter-garlic-prawns",
    "categoryId": "cat-entrantes-calientes",
    "name": {
      "es": "Langostinos al ajillo",
      "en": "Garlic King Prawns",
      "ar": "القمرون بالثوم والمعدنوس"
    },
    "description": {
      "es": "Langostinos, ajo picante y perejil.",
      "en": "King prawns, spicy garlic, parsley.",
      "ar": "قمرون، ثوم حار ومعدنوس."
    },
    "priceEur": 6,
    "priceLabel": "6,00 €",
    "sortOrder": 270,
    "source": {
      "pdf": "docs/source/gerona12-full-menu.pdf",
      "page": 3
    }
  },
  {
    "dietaryLabels": [],
    "featured": false,
    "status": "published",
    "id": "starter-pastilla",
    "categoryId": "cat-entrantes-calientes",
    "name": {
      "es": "Pastila de pollo",
      "en": "Chicken Pastilla",
      "ar": "البسطيلة المغربية بالدجاج"
    },
    "description": {
      "es": "Pollo, cebolla, canela y azúcar.",
      "en": "Chicken, onion, cinnamon, sugar.",
      "ar": "دجاج، بصل، قرفة وسكر."
    },
    "priceEur": 4,
    "priceLabel": "4,00 €",
    "sortOrder": 280,
    "source": {
      "pdf": "docs/source/gerona12-full-menu.pdf",
      "page": 3
    }
  },
  {
    "dietaryLabels": [],
    "featured": false,
    "status": "published",
    "id": "starter-briouats",
    "categoryId": "cat-entrantes-calientes",
    "name": {
      "es": "Briwats",
      "en": "Moroccan Briouats",
      "ar": "بريوات"
    },
    "priceEur": 3,
    "priceLabel": "3,00 €",
    "sortOrder": 290,
    "source": {
      "pdf": "docs/source/gerona12-full-menu.pdf",
      "page": 3
    }
  },
  {
    "dietaryLabels": [],
    "featured": false,
    "status": "published",
    "id": "starter-harira",
    "categoryId": "cat-entrantes-calientes",
    "name": {
      "es": "Sopa harira",
      "en": "Harira Soup",
      "ar": "الحريرة المغربية"
    },
    "description": {
      "es": "Estilo marroquí.",
      "en": "Moroccan style.",
      "ar": "على الطريقة المغربية."
    },
    "priceEur": 3,
    "priceLabel": "3,00 €",
    "sortOrder": 300,
    "source": {
      "pdf": "docs/source/gerona12-full-menu.pdf",
      "page": 3
    }
  },
  {
    "dietaryLabels": [],
    "featured": false,
    "status": "published",
    "id": "pasta-mushroom-chicken",
    "categoryId": "cat-pastas",
    "name": {
      "es": "Macarrones",
      "en": "Macaroni with Mushroom Sauce",
      "ar": "مقرونة بصوص الفطر والدجاج"
    },
    "description": {
      "es": "Con salsa de champiñones, pollo y queso.",
      "en": "Mushroom sauce, chicken, cheese.",
      "ar": "صوص الفطر، دجاج وجبن."
    },
    "priceEur": 10,
    "priceLabel": "10,00 €",
    "sortOrder": 310,
    "source": {
      "pdf": "docs/source/gerona12-full-menu.pdf",
      "page": 3
    }
  },
  {
    "dietaryLabels": [],
    "featured": false,
    "status": "published",
    "id": "pasta-prawns",
    "categoryId": "cat-pastas",
    "name": {
      "es": "Pasta con langostinos",
      "en": "Pasta with King Prawns",
      "ar": "مقرونة بالقمروان وفواكه البحر"
    },
    "description": {
      "es": "Nata, langostinos, ajo, cebolla, tomate y queso.",
      "en": "Cream, king prawns, garlic, onion, tomato, cheese.",
      "ar": "كريمة، قمرون، ثوم، بصل، طماطم وجبن."
    },
    "priceEur": 12,
    "priceLabel": "12,00 €",
    "sortOrder": 320,
    "source": {
      "pdf": "docs/source/gerona12-full-menu.pdf",
      "page": 3
    }
  },
  {
    "dietaryLabels": [],
    "featured": false,
    "status": "published",
    "id": "pasta-curry-chicken",
    "categoryId": "cat-pastas",
    "name": {
      "es": "Pasta de pollo al curry",
      "en": "Chicken Curry Pasta",
      "ar": "مقرونة الدجاج بالكاري"
    },
    "description": {
      "es": "Nata, curry, pollo y queso.",
      "en": "Cream, curry, chicken, cheese.",
      "ar": "كريمة، كاري، دجاج وجبن."
    },
    "priceEur": 9,
    "priceLabel": "9,00 €",
    "sortOrder": 330,
    "source": {
      "pdf": "docs/source/gerona12-full-menu.pdf",
      "page": 3
    }
  },
  {
    "dietaryLabels": [],
    "featured": false,
    "status": "published",
    "id": "burger-goat-onion",
    "categoryId": "cat-burgers-kebabs",
    "subcategoryId": "sub-burgers",
    "name": {
      "es": "Hamburguesa de cebolla caramelizada y queso de cabra",
      "en": "Caramelized Onion and Goat Cheese Burger",
      "ar": "برغر بفرماج الماعز والبصلة المكرملة"
    },
    "description": {
      "es": "Lechuga, cebolla caramelizada, tomate, queso de cabra, patatas fritas y salsa.",
      "en": "Lettuce, caramelized onion, tomato, goat cheese, fries, sauce.",
      "ar": "خس، بصل مكرمل، طماطم، جبن ماعز، بطاطس مقلية وصوص."
    },
    "priceEur": 4.5,
    "priceOptions": [
      {
        "id": "solo",
        "label": {
          "es": "Solo",
          "en": "Single",
          "ar": "بوحدو"
        },
        "priceEur": 4.5,
        "priceLabel": "4,50 €"
      },
      {
        "id": "menu",
        "label": {
          "es": "Menú",
          "en": "Menu",
          "ar": "وجبة متكاملة"
        },
        "priceEur": 8,
        "priceLabel": "8,00 €"
      }
    ],
    "sortOrder": 340,
    "source": {
      "pdf": "docs/source/gerona12-full-menu.pdf",
      "page": 6,
      "notes": "Spanish hamburguesas page not in provided screenshots. Dishes and prices verified from English (and Arabic) PDF pages; Spanish names aligned to those dishes. Single/Menu columns from English."
    }
  },
  {
    "dietaryLabels": [],
    "featured": false,
    "status": "published",
    "id": "burger-chicken",
    "categoryId": "cat-burgers-kebabs",
    "subcategoryId": "sub-burgers",
    "name": {
      "es": "Hamburguesa de pollo",
      "en": "Chicken Burger",
      "ar": "برغر الدجاج الكلاسيكي"
    },
    "description": {
      "es": "Lechuga, tomate, pepinillos, queso cheddar y patatas fritas.",
      "en": "Lettuce, tomato, pickles, cheddar cheese, fries.",
      "ar": "خس، طماطم، خيار مخلل، جبن شيدر وبطاطس مقلية."
    },
    "priceEur": 4.5,
    "priceOptions": [
      {
        "id": "solo",
        "label": {
          "es": "Solo",
          "en": "Single",
          "ar": "بوحدو"
        },
        "priceEur": 4.5,
        "priceLabel": "4,50 €"
      },
      {
        "id": "menu",
        "label": {
          "es": "Menú",
          "en": "Menu",
          "ar": "وجبة متكاملة"
        },
        "priceEur": 8,
        "priceLabel": "8,00 €"
      }
    ],
    "sortOrder": 350,
    "source": {
      "pdf": "docs/source/gerona12-full-menu.pdf",
      "page": 6,
      "notes": "Spanish hamburguesas page not in provided screenshots. Dishes and prices verified from English (and Arabic) PDF pages; Spanish names aligned to those dishes. Single/Menu columns from English."
    }
  },
  {
    "dietaryLabels": [],
    "featured": false,
    "status": "published",
    "id": "burger-king-salmon",
    "categoryId": "cat-burgers-kebabs",
    "subcategoryId": "sub-burgers",
    "name": {
      "es": "Hamburguesa King de salmón",
      "en": "King Burger",
      "ar": "برغر الملك بالسلمون"
    },
    "description": {
      "es": "Lechuga, cebolla caramelizada, salmón, salsa y patatas fritas.",
      "en": "Lettuce, caramelized onion, salmon, sauce, fries.",
      "ar": "خس، بصل مكرمل، سلمون، صوص وبطاطس مقلية."
    },
    "priceEur": 6,
    "priceOptions": [
      {
        "id": "solo",
        "label": {
          "es": "Solo",
          "en": "Single",
          "ar": "بوحدو"
        },
        "priceEur": 6,
        "priceLabel": "6,00 €"
      },
      {
        "id": "menu",
        "label": {
          "es": "Menú",
          "en": "Menu",
          "ar": "وجبة متكاملة"
        },
        "priceEur": 10,
        "priceLabel": "10,00 €"
      }
    ],
    "sortOrder": 360,
    "source": {
      "pdf": "docs/source/gerona12-full-menu.pdf",
      "page": 6,
      "notes": "Spanish hamburguesas page not in provided screenshots. Dishes and prices verified from English (and Arabic) PDF pages; Spanish names aligned to those dishes. Single/Menu columns from English."
    }
  },
  {
    "dietaryLabels": [],
    "featured": false,
    "status": "published",
    "id": "burger-beef",
    "categoryId": "cat-burgers-kebabs",
    "subcategoryId": "sub-burgers",
    "name": {
      "es": "Hamburguesa de ternera",
      "en": "Beef Burger",
      "ar": "برغر اللحم البقري"
    },
    "description": {
      "es": "Lechuga, cebolla, tomate, queso cheddar y patatas fritas.",
      "en": "Lettuce, onion, tomato, cheddar cheese, fries.",
      "ar": "خس، بصل، طماطم، جبن شيدر وبطاطس مقلية."
    },
    "priceEur": 4.5,
    "priceOptions": [
      {
        "id": "solo",
        "label": {
          "es": "Solo",
          "en": "Single",
          "ar": "بوحدو"
        },
        "priceEur": 4.5,
        "priceLabel": "4,50 €"
      },
      {
        "id": "menu",
        "label": {
          "es": "Menú",
          "en": "Menu",
          "ar": "وجبة متكاملة"
        },
        "priceEur": 8,
        "priceLabel": "8,00 €"
      }
    ],
    "sortOrder": 370,
    "source": {
      "pdf": "docs/source/gerona12-full-menu.pdf",
      "page": 6,
      "notes": "Spanish hamburguesas page not in provided screenshots. Dishes and prices verified from English (and Arabic) PDF pages; Spanish names aligned to those dishes. Single/Menu columns from English."
    }
  },
  {
    "dietaryLabels": [],
    "featured": false,
    "status": "published",
    "id": "kebab-chicken",
    "categoryId": "cat-burgers-kebabs",
    "subcategoryId": "sub-kebabs",
    "name": {
      "es": "Kebab de pollo",
      "en": "Chicken Kebab",
      "ar": "كباب الدجاج"
    },
    "description": {
      "es": "Lechuga, cebolla, tomate y patatas fritas.",
      "en": "Lettuce, onion, tomato, fries.",
      "ar": "خس، بصل، طماطم وبطاطس مقلية."
    },
    "priceEur": 4.5,
    "priceOptions": [
      {
        "id": "solo",
        "label": {
          "es": "Solo",
          "en": "Single",
          "ar": "بوحدو"
        },
        "priceEur": 4.5,
        "priceLabel": "4,50 €"
      },
      {
        "id": "menu",
        "label": {
          "es": "Menú",
          "en": "Menu",
          "ar": "وجبة متكاملة"
        },
        "priceEur": 7,
        "priceLabel": "7,00 €"
      }
    ],
    "sortOrder": 380,
    "source": {
      "pdf": "docs/source/gerona12-full-menu.pdf",
      "page": 6,
      "notes": "Spanish hamburguesas page not in provided screenshots. Dishes and prices verified from English (and Arabic) PDF pages; Spanish names aligned to those dishes. Single/Menu columns from English."
    }
  },
  {
    "dietaryLabels": [],
    "featured": false,
    "status": "published",
    "id": "kebab-beef",
    "categoryId": "cat-burgers-kebabs",
    "subcategoryId": "sub-kebabs",
    "name": {
      "es": "Kebab de ternera",
      "en": "Beef Kebab",
      "ar": "كباب اللحم البقري"
    },
    "description": {
      "es": "Lechuga, cebolla, tomate, salsa y patatas fritas. Kebab mixto: +1,00 €.",
      "en": "Lettuce, onion, tomato, sauce, fries. Mixed kebab: Extra 1,00 €.",
      "ar": "خس، بصل، طماطم، صوص وبطاطس مقلية. كباب مشكل: +1,00 €."
    },
    "priceEur": 4.5,
    "priceOptions": [
      {
        "id": "solo",
        "label": {
          "es": "Solo",
          "en": "Single",
          "ar": "بوحدو"
        },
        "priceEur": 4.5,
        "priceLabel": "4,50 €"
      },
      {
        "id": "menu",
        "label": {
          "es": "Menú",
          "en": "Menu",
          "ar": "وجبة متكاملة"
        },
        "priceEur": 7.5,
        "priceLabel": "7,50 €"
      }
    ],
    "sortOrder": 390,
    "source": {
      "pdf": "docs/source/gerona12-full-menu.pdf",
      "page": 6,
      "notes": "Spanish hamburguesas page not in provided screenshots. Dishes and prices verified from English (and Arabic) PDF pages; Spanish names aligned to those dishes. Single/Menu columns from English."
    },
    "notes": {
      "es": "Kebab mixto: +1,00 €",
      "en": "Mixed kebab: +1,00 €",
      "ar": "إضافة الكباب المشكل +1,00 €"
    }
  },
  {
    "dietaryLabels": [],
    "featured": false,
    "status": "published",
    "id": "box-chicken-kebab",
    "categoryId": "cat-cajas-platos",
    "name": {
      "es": "Caja de kebab de pollo",
      "en": "Chicken Kebab Box",
      "ar": "وجبة الكباب الممتازة بالدجاج"
    },
    "description": {
      "es": "Ensalada, cebolla caramelizada, tomate, salsa de la casa, croquetas de pollo, patatas fritas y salsas.",
      "en": "Salad, caramelized onion, tomato, house sauce, breaded chicken croquettes, fries, two sauces.",
      "ar": "سلطة، بصل مكرمل، طماطم، صوص الدار، كروكيت دجاج، بطاطس مقلية وصوصات."
    },
    "priceEur": 12,
    "priceLabel": "12,00 €",
    "sortOrder": 400,
    "source": {
      "pdf": "docs/source/gerona12-full-menu.pdf",
      "page": 6,
      "notes": "Spanish hamburguesas page not in provided screenshots. Dishes and prices verified from English (and Arabic) PDF pages; Spanish names aligned to those dishes. Single/Menu columns from English."
    }
  },
  {
    "dietaryLabels": [],
    "featured": false,
    "status": "published",
    "id": "plate-chicken-kebab",
    "categoryId": "cat-cajas-platos",
    "name": {
      "es": "Plato de kebab de pollo",
      "en": "Chicken Kebab Plate",
      "ar": "طبق كباب الدجاج"
    },
    "description": {
      "es": "Pollo, ensalada, patatas fritas o arroz.",
      "en": "Chicken, salad, fries or rice.",
      "ar": "دجاج، سلطة، مع اختيار بطاطس أو أرز."
    },
    "priceEur": 8.5,
    "priceLabel": "8,50 €",
    "sortOrder": 410,
    "source": {
      "pdf": "docs/source/gerona12-full-menu.pdf",
      "page": 6,
      "notes": "Spanish burger/plates page not in provided screenshots. Price 8,50 € from English page; Arabic OCR conflicted (7,50 vs 8,50) — used English. Spanish name aligned from EN/AR dish identity."
    }
  },
  {
    "dietaryLabels": [],
    "featured": false,
    "status": "published",
    "id": "plate-beef-kebab",
    "categoryId": "cat-cajas-platos",
    "name": {
      "es": "Plato de kebab de ternera",
      "en": "Beef Kebab Plate",
      "ar": "طبق كباب اللحم"
    },
    "description": {
      "es": "Ensalada, cebolla, tomate, salsa y patatas fritas.",
      "en": "Salad, onion, tomato, sauce, fries.",
      "ar": "سلطة، بصل، طماطم، صوص وبطاطس مقلية."
    },
    "priceEur": 8,
    "priceLabel": "8,00 €",
    "sortOrder": 420,
    "source": {
      "pdf": "docs/source/gerona12-full-menu.pdf",
      "page": 6,
      "notes": "Spanish hamburguesas page not in provided screenshots. Dishes and prices verified from English (and Arabic) PDF pages; Spanish names aligned to those dishes. Single/Menu columns from English."
    }
  },
  {
    "dietaryLabels": [],
    "featured": false,
    "status": "published",
    "id": "plate-mixed-kebab",
    "categoryId": "cat-cajas-platos",
    "name": {
      "es": "Plato de kebab mixto",
      "en": "Mixed Kebab Plate",
      "ar": "طبق الكباب المشكّل"
    },
    "description": {
      "es": "Ensalada, cebolla, tomate, salsa y patatas fritas.",
      "en": "Salad, onion, tomato, sauce, fries.",
      "ar": "سلطة، بصل، طماطم، صوص وبطاطس مقلية."
    },
    "priceEur": 8.5,
    "priceLabel": "8,50 €",
    "sortOrder": 430,
    "source": {
      "pdf": "docs/source/gerona12-full-menu.pdf",
      "page": 6,
      "notes": "Spanish hamburguesas page not in provided screenshots. Dishes and prices verified from English (and Arabic) PDF pages; Spanish names aligned to those dishes. Single/Menu columns from English."
    }
  },
  {
    "dietaryLabels": [],
    "featured": false,
    "status": "published",
    "id": "chicken-nuggets",
    "categoryId": "cat-cajas-platos",
    "name": {
      "es": "Nuggets de pollo",
      "en": "Chicken Nuggets",
      "ar": "قطع الدجاج المقرمشة"
    },
    "description": {
      "es": "Nuggets de pollo, patatas fritas y ensalada.",
      "en": "Chicken nuggets, fries, salad.",
      "ar": "تُقدَّم مع البطاطس والسلطة."
    },
    "priceEur": 7,
    "priceLabel": "7,00 €",
    "sortOrder": 440,
    "source": {
      "pdf": "docs/source/gerona12-full-menu.pdf",
      "page": 6,
      "notes": "Spanish hamburguesas page not in provided screenshots. Dishes and prices verified from English (and Arabic) PDF pages; Spanish names aligned to those dishes. Single/Menu columns from English."
    }
  },
  {
    "dietaryLabels": [],
    "featured": false,
    "status": "published",
    "id": "pizza-margherita",
    "categoryId": "cat-pizzas",
    "name": {
      "es": "Pizza margarita",
      "en": "Margherita Pizza",
      "ar": "بيتزا مارغريتا"
    },
    "description": {
      "es": "Queso y tomate.",
      "en": "Cheese, tomato.",
      "ar": "فرماج، طماطم."
    },
    "priceEur": 6.5,
    "priceOptions": [
      {
        "id": "media",
        "label": {
          "es": "Media",
          "en": "Medium",
          "ar": "وسط"
        },
        "priceEur": 6.5,
        "priceLabel": "6,50 €"
      },
      {
        "id": "grande",
        "label": {
          "es": "Grande",
          "en": "Large",
          "ar": "كبير"
        },
        "priceEur": 8.5,
        "priceLabel": "8,50 €"
      }
    ],
    "sortOrder": 450,
    "source": {
      "pdf": "docs/source/gerona12-full-menu.pdf",
      "page": 7
    }
  },
  {
    "dietaryLabels": [],
    "featured": false,
    "status": "published",
    "id": "pizza-four-cheese",
    "categoryId": "cat-pizzas",
    "name": {
      "es": "Pizza cuatro quesos",
      "en": "Four Cheese Pizza",
      "ar": "بيتزا ربعة فرماج"
    },
    "description": {
      "es": "Tomate, mozzarella, emmental y parmesano.",
      "en": "Tomato, mozzarella, Emmental, Parmesan.",
      "ar": "طماطم، موزاريلا، إمنتال، بارميزان."
    },
    "priceEur": 7,
    "priceOptions": [
      {
        "id": "media",
        "label": {
          "es": "Media",
          "en": "Medium",
          "ar": "وسط"
        },
        "priceEur": 7,
        "priceLabel": "7,00 €"
      },
      {
        "id": "grande",
        "label": {
          "es": "Grande",
          "en": "Large",
          "ar": "كبير"
        },
        "priceEur": 12.5,
        "priceLabel": "12,50 €"
      }
    ],
    "sortOrder": 460,
    "source": {
      "pdf": "docs/source/gerona12-full-menu.pdf",
      "page": 7
    }
  },
  {
    "dietaryLabels": [],
    "featured": false,
    "status": "published",
    "id": "pizza-tuna",
    "categoryId": "cat-pizzas",
    "name": {
      "es": "Pizza de atún",
      "en": "Tuna Pizza",
      "ar": "بيتزا بالتونا"
    },
    "description": {
      "es": "Tomate, atún, mozzarella, cebolla y aceitunas.",
      "en": "Tomato, tuna, mozzarella, onion, olives.",
      "ar": "طماطم، تونة، موزاريلا، بصل، زيتون."
    },
    "priceEur": 8,
    "priceOptions": [
      {
        "id": "media",
        "label": {
          "es": "Media",
          "en": "Medium",
          "ar": "وسط"
        },
        "priceEur": 8,
        "priceLabel": "8,00 €"
      },
      {
        "id": "grande",
        "label": {
          "es": "Grande",
          "en": "Large",
          "ar": "كبير"
        },
        "priceEur": 13,
        "priceLabel": "13,00 €"
      }
    ],
    "sortOrder": 470,
    "source": {
      "pdf": "docs/source/gerona12-full-menu.pdf",
      "page": 7
    }
  },
  {
    "dietaryLabels": [],
    "featured": false,
    "status": "published",
    "id": "pizza-kebab",
    "categoryId": "cat-pizzas",
    "name": {
      "es": "Pizza kebab",
      "en": "Kebab Pizza",
      "ar": "بيتزا بالكباب"
    },
    "description": {
      "es": "Barbacoa, mozzarella y kebab de pollo.",
      "en": "Barbecue sauce, mozzarella, chicken kebab.",
      "ar": "صوص الشواء، موزاريلا، كباب الدجاج."
    },
    "priceEur": 7.5,
    "priceOptions": [
      {
        "id": "media",
        "label": {
          "es": "Media",
          "en": "Medium",
          "ar": "وسط"
        },
        "priceEur": 7.5,
        "priceLabel": "7,50 €"
      },
      {
        "id": "grande",
        "label": {
          "es": "Grande",
          "en": "Large",
          "ar": "كبير"
        },
        "priceEur": 12.5,
        "priceLabel": "12,50 €"
      }
    ],
    "sortOrder": 480,
    "source": {
      "pdf": "docs/source/gerona12-full-menu.pdf",
      "page": 7
    }
  },
  {
    "dietaryLabels": [],
    "featured": false,
    "status": "published",
    "id": "pizza-veg",
    "categoryId": "cat-pizzas",
    "name": {
      "es": "Pizza vegetariana",
      "en": "Vegetarian Pizza",
      "ar": "بيتزا بالخضر"
    },
    "description": {
      "es": "Tomate, verduras y mozzarella.",
      "en": "Tomato, vegetables, mozzarella.",
      "ar": "طماطم، خضر متنوعة، موزاريلا."
    },
    "priceEur": 7,
    "priceOptions": [
      {
        "id": "media",
        "label": {
          "es": "Media",
          "en": "Medium",
          "ar": "وسط"
        },
        "priceEur": 7,
        "priceLabel": "7,00 €"
      },
      {
        "id": "grande",
        "label": {
          "es": "Grande",
          "en": "Large",
          "ar": "كبير"
        },
        "priceEur": 11,
        "priceLabel": "11,00 €"
      }
    ],
    "sortOrder": 490,
    "source": {
      "pdf": "docs/source/gerona12-full-menu.pdf",
      "page": 7
    }
  },
  {
    "dietaryLabels": [],
    "featured": false,
    "status": "published",
    "id": "pizza-salmon",
    "categoryId": "cat-pizzas",
    "name": {
      "es": "Pizza de salmón",
      "en": "Salmon Pizza",
      "ar": "بيتزا بالسلمون"
    },
    "description": {
      "es": "Nata, espinacas, salmón y mozzarella.",
      "en": "Cream, spinach, salmon, mozzarella.",
      "ar": "كريمة، سبانخ، سلمون، موزاريلا."
    },
    "priceEur": 9,
    "priceOptions": [
      {
        "id": "media",
        "label": {
          "es": "Media",
          "en": "Medium",
          "ar": "وسط"
        },
        "priceEur": 9,
        "priceLabel": "9,00 €"
      },
      {
        "id": "grande",
        "label": {
          "es": "Grande",
          "en": "Large",
          "ar": "كبير"
        },
        "priceEur": 13.5,
        "priceLabel": "13,50 €"
      }
    ],
    "sortOrder": 500,
    "source": {
      "pdf": "docs/source/gerona12-full-menu.pdf",
      "page": 7
    }
  },
  {
    "dietaryLabels": [],
    "featured": false,
    "status": "published",
    "id": "meat-grilled-chicken",
    "categoryId": "cat-carnes-pescados",
    "name": {
      "es": "Pechuga de pollo a la plancha",
      "en": "Grilled Chicken Breast",
      "ar": "صدر الدجاج المشوي"
    },
    "description": {
      "es": "Salsa de champiñones, patatas y ensalada.",
      "en": "Mushroom sauce, potatoes, salad.",
      "ar": "مع صوص الفطر، البطاطس، والسلطة."
    },
    "priceEur": 11,
    "priceLabel": "11,00 €",
    "sortOrder": 510,
    "source": {
      "pdf": "docs/source/gerona12-full-menu.pdf",
      "page": 8,
      "notes": "Arabic page showed 11,50 €; Spanish/English show 11,00 € — published Spanish price."
    }
  },
  {
    "dietaryLabels": [],
    "featured": false,
    "status": "published",
    "id": "meat-breaded-chicken",
    "categoryId": "cat-carnes-pescados",
    "name": {
      "es": "Pechuga de pollo empanada",
      "en": "Breaded Chicken Breast",
      "ar": "صدر الدجاج المغطى بالخبز والمقلي"
    },
    "description": {
      "es": "Salsa de tomate y patatas.",
      "en": "Tomato sauce, potatoes.",
      "ar": "مع صوص الطماطم والبطاطس."
    },
    "priceEur": 12,
    "priceLabel": "12,00 €",
    "sortOrder": 520,
    "source": {
      "pdf": "docs/source/gerona12-full-menu.pdf",
      "page": 8
    }
  },
  {
    "dietaryLabels": [],
    "featured": false,
    "status": "published",
    "id": "meat-grilled-beef",
    "categoryId": "cat-carnes-pescados",
    "name": {
      "es": "Ternera a la plancha",
      "en": "Grilled Beef",
      "ar": "اللحم البقري المشوي"
    },
    "description": {
      "es": "Salsa de pimienta, patatas y ensalada.",
      "en": "Pepper sauce, potatoes, salad.",
      "ar": "مع صوص الفلفل الأسود، البطاطس، والسلطة."
    },
    "priceEur": 13,
    "priceLabel": "13,00 €",
    "sortOrder": 530,
    "source": {
      "pdf": "docs/source/gerona12-full-menu.pdf",
      "page": 8,
      "notes": "English/Arabic showed 13,50 €; Spanish shows 13,00 € — published Spanish price."
    }
  },
  {
    "dietaryLabels": [],
    "featured": false,
    "status": "published",
    "id": "meat-grilled-salmon",
    "categoryId": "cat-carnes-pescados",
    "name": {
      "es": "Salmón a la plancha",
      "en": "Grilled Salmon",
      "ar": "السلمون المشوي الفاخر"
    },
    "description": {
      "es": "Salsa de puerros y nata, con patatas o arroz y ensalada.",
      "en": "Leek and cream sauce, potatoes or rice, salad.",
      "ar": "مع صوص الكراث والكريمة، البطاطس أو الأرز والسلطة."
    },
    "priceEur": 14,
    "priceLabel": "14,00 €",
    "sortOrder": 540,
    "source": {
      "pdf": "docs/source/gerona12-full-menu.pdf",
      "page": 8
    }
  },
  {
    "dietaryLabels": [],
    "featured": false,
    "status": "published",
    "id": "meat-grilled-tuna",
    "categoryId": "cat-carnes-pescados",
    "name": {
      "es": "Atún a la plancha",
      "en": "Grilled Tuna",
      "ar": "التون المشوي"
    },
    "description": {
      "es": "Salsa de pimiento y miel, con patatas.",
      "en": "Pepper and honey sauce, potatoes.",
      "ar": "مع صوص الفلفل الحلو والعسل، والبطاطس."
    },
    "priceEur": 12.5,
    "priceLabel": "12,50 €",
    "sortOrder": 550,
    "source": {
      "pdf": "docs/source/gerona12-full-menu.pdf",
      "page": 8
    }
  },
  {
    "dietaryLabels": [],
    "featured": false,
    "status": "published",
    "id": "meat-sea-bream",
    "categoryId": "cat-carnes-pescados",
    "name": {
      "es": "Dorada rellena de verduras",
      "en": "Vegetable-Stuffed Sea Bream",
      "ar": "حوت الدنيس معمر بالخضرة"
    },
    "description": {
      "es": "Con patatas al limón y miel.",
      "en": "Potatoes with lemon and honey.",
      "ar": "مع البطاطس بالليمون والعسل."
    },
    "priceEur": 15,
    "priceLabel": "15,00 €",
    "sortOrder": 560,
    "source": {
      "pdf": "docs/source/gerona12-full-menu.pdf",
      "page": 8
    }
  },
  {
    "dietaryLabels": [],
    "featured": false,
    "status": "published",
    "id": "meat-swordfish",
    "categoryId": "cat-carnes-pescados",
    "name": {
      "es": "Pez espada",
      "en": "Swordfish",
      "ar": "سمك أبو سيف"
    },
    "description": {
      "es": "Salsa verde, almendras y puré de patata.",
      "en": "Green sauce, almonds, mashed potatoes.",
      "ar": "مع الصوص الخضراء، اللوز، وبوريه البطاطس."
    },
    "priceEur": 13.5,
    "priceLabel": "13,50 €",
    "sortOrder": 570,
    "source": {
      "pdf": "docs/source/gerona12-full-menu.pdf",
      "page": 8
    }
  },
  {
    "dietaryLabels": [],
    "featured": false,
    "status": "unpublished",
    "id": "side-rice-potatoes",
    "categoryId": "cat-carnes-pescados",
    "name": {
      "es": "Acompañamiento",
      "en": "Side dishes",
      "ar": "المرافقات"
    },
    "description": {
      "es": "Arroz · Patatas",
      "en": "Rice · Potatoes",
      "ar": "أرز · بطاطس"
    },
    "priceEur": 0,
    "sortOrder": 580,
    "source": {
      "pdf": "docs/source/gerona12-full-menu.pdf",
      "page": 8,
      "notes": "Side accompaniment listed without a separate price on the Spanish meats page — unpublished until priced."
    }
  },
  {
    "dietaryLabels": [],
    "featured": false,
    "status": "published",
    "id": "tagine-beef",
    "categoryId": "cat-marroquies",
    "name": {
      "es": "Tajín de ternera",
      "en": "Beef Tagine",
      "ar": "طاجين اللحم البقري"
    },
    "description": {
      "es": "Con verduras o ciruelas.",
      "en": "With vegetables or prunes.",
      "ar": "بالخضار أو البرقوق."
    },
    "priceEur": 12,
    "priceLabel": "12,00 €",
    "sortOrder": 590,
    "source": {
      "pdf": "docs/source/gerona12-full-menu.pdf",
      "page": 8
    }
  },
  {
    "dietaryLabels": [],
    "featured": false,
    "status": "published",
    "id": "tagine-chicken",
    "categoryId": "cat-marroquies",
    "name": {
      "es": "Tajín de pollo",
      "en": "Chicken Tagine",
      "ar": "طاجين الدجاج"
    },
    "description": {
      "es": "Con aceitunas y limón.",
      "en": "With olives and lemon.",
      "ar": "بالزيتون والحامض."
    },
    "priceEur": 10,
    "priceLabel": "10,00 €",
    "sortOrder": 600,
    "source": {
      "pdf": "docs/source/gerona12-full-menu.pdf",
      "page": 8
    }
  },
  {
    "dietaryLabels": [],
    "featured": false,
    "status": "published",
    "id": "couscous",
    "categoryId": "cat-marroquies",
    "name": {
      "es": "Cuscús",
      "en": "Couscous",
      "ar": "الكسكس المغربي التقليدي"
    },
    "description": {
      "ar": "يُقدم مع الخضر المشكلة"
    },
    "priceEur": 11,
    "priceLabel": "11,00 €",
    "sortOrder": 610,
    "source": {
      "pdf": "docs/source/gerona12-full-menu.pdf",
      "page": 8
    },
    "notes": {
      "es": "Todos los viernes o por encargo",
      "en": "Every Friday or upon request",
      "ar": "متوفر حصرياً كل يوم جمعة أو بالطلب المسبق"
    }
  },
  {
    "dietaryLabels": [],
    "featured": false,
    "status": "published",
    "id": "dessert-cake-day",
    "categoryId": "cat-postres",
    "name": {
      "es": "Tarta del día",
      "en": "Cake of the day",
      "ar": "حلوى وتارت النهار"
    },
    "priceEur": 3.5,
    "priceLabel": "3,50 €",
    "sortOrder": 620,
    "source": {
      "pdf": "docs/source/gerona12-full-menu.pdf",
      "page": 8
    }
  },
  {
    "dietaryLabels": [],
    "featured": false,
    "status": "published",
    "id": "dessert-fruit-salad",
    "categoryId": "cat-postres",
    "name": {
      "es": "Ensalada de frutas",
      "en": "Fruit salad",
      "ar": "سلطة الفواكه الطرية"
    },
    "priceEur": 2,
    "priceLabel": "2,00 €",
    "sortOrder": 630,
    "source": {
      "pdf": "docs/source/gerona12-full-menu.pdf",
      "page": 8
    }
  },
  {
    "dietaryLabels": [],
    "featured": false,
    "status": "published",
    "id": "dessert-tiramisu",
    "categoryId": "cat-postres",
    "name": {
      "es": "Tiramisú",
      "en": "Tiramisu",
      "ar": "تيراميسو"
    },
    "description": {
      "es": "Oreo, Bueno o Speculoos.",
      "en": "Flavours: Oreo, Bueno, Speculoos.",
      "ar": "بنكهات: أوريو، كيندربوينو أو سبيكولوس."
    },
    "priceEur": 2,
    "priceLabel": "2,00 €",
    "sortOrder": 640,
    "source": {
      "pdf": "docs/source/gerona12-full-menu.pdf",
      "page": 8
    }
  },
  {
    "dietaryLabels": [],
    "featured": false,
    "status": "published",
    "id": "dessert-crema-catalana",
    "categoryId": "cat-postres",
    "name": {
      "es": "Crema catalana",
      "en": "Crème Catalane",
      "ar": "كريم كاتالانا التقليدية"
    },
    "priceEur": 2.5,
    "priceLabel": "2,50 €",
    "sortOrder": 650,
    "source": {
      "pdf": "docs/source/gerona12-full-menu.pdf",
      "page": 8
    }
  }
];
