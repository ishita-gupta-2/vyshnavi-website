const shirtImages = import.meta.glob(
  [
    "../assets/shirts/*.jpg",
    "../assets/shirts/*.jpeg",
    "../assets/shirts/*.png",
    "../assets/shirts/*.webp",
    "../assets/shirts/*.avif",
  ],
  { eager: true, import: "default" }
);

const shirtMetadata = {
  "shirt-01": {
    name: "The Ivory Edit",
    code: "VE-01",
    category: "Clean tailoring",
    occasion: "formal",
    description: "A composed light-toned shirt that brings an effortless finish to workdays and occasions.",
    details: ["Polished character", "Classic silhouette", "Multiple sizes available"],
  },
  "shirt-02": {
    name: "The Regent",
    code: "VE-02",
    category: "Refined essential",
    occasion: "formal",
    description: "A confident wardrobe staple with a restrained palette and a timeless, considered finish.",
    details: ["Sharp styling", "Comfort-led fit", "Multiple sizes available"],
  },
  "shirt-03": {
    name: "The Weekday",
    code: "VE-03",
    category: "Daily uniform",
    occasion: "casual",
    description: "A versatile shirt designed to move easily from a focused morning to an unhurried evening.",
    details: ["Versatile silhouette", "Easy to style", "Multiple sizes available"],
  },
  "shirt-04": {
    name: "The Heritage",
    code: "VE-04",
    category: "Modern classic",
    occasion: "formal",
    description: "A timeless selection with a composed presence for celebrations, meetings, and polished days.",
    details: ["Classic character", "Polished finish", "Multiple sizes available"],
  },
  "shirt-05": {
    name: "The Studio",
    code: "VE-05",
    category: "Contemporary dressing",
    occasion: "casual",
    description: "A modern shirt with an understated mood, selected for clean styling and repeat wear.",
    details: ["Modern silhouette", "Day-to-night wear", "Multiple sizes available"],
  },
  "shirt-06": {
    name: "The Reserve",
    code: "VE-06",
    category: "Elevated essential",
    occasion: "formal",
    description: "A distinctive neutral that brings quiet confidence and structure to a considered wardrobe.",
    details: ["Refined styling", "Comfort-led fit", "Multiple sizes available"],
  },
  "shirt-07": {
    name: "The Blue Hour",
    code: "VE-07",
    category: "Relaxed refinement",
    occasion: "leisure",
    description: "A cool-toned off-duty shirt with enough structure to stay sharp through the day.",
    details: ["Relaxed character", "Easy layering", "Multiple sizes available"],
  },
  "shirt-08": {
    name: "The Signature",
    code: "VE-08",
    category: "Collection highlight",
    occasion: "formal",
    description: "A memorable finishing piece selected to anchor occasion looks with subtle distinction.",
    details: ["Signature styling", "Occasion-ready", "Multiple sizes available"],
  },
  "shirt-09": {
    name: "The Copperline",
    code: "VE-09",
    category: "Warm-toned statement",
    occasion: "casual",
    description: "Rich copper and tobacco notes give this shirt a grounded character made for easy evenings.",
    details: ["Warm colour story", "Relaxed styling", "Multiple sizes available"],
  },
  "shirt-10": {
    name: "The Silver Ledger",
    code: "VE-10",
    category: "Quiet tailoring",
    occasion: "formal",
    description: "A crisp silver-grey style with a measured look that works naturally in sharper settings.",
    details: ["Cool neutral tone", "Workday ready", "Multiple sizes available"],
  },
  "shirt-11": {
    name: "The Harbour Check",
    code: "VE-11",
    category: "Patterned everyday",
    occasion: "casual",
    description: "A layered mix of cool and earthy tones gives this shirt a relaxed, well-travelled spirit.",
    details: ["Textured visual", "Weekend character", "Multiple sizes available"],
  },
  "shirt-12": {
    name: "The Porcelain",
    code: "VE-12",
    category: "Light formal",
    occasion: "formal",
    description: "A clean pale neutral with a calm presence, designed for bright days and polished occasions.",
    details: ["Light neutral palette", "Refined finish", "Multiple sizes available"],
  },
  "shirt-13": {
    name: "The Burnished Oak",
    code: "VE-13",
    category: "Earth-tone classic",
    occasion: "casual",
    description: "Deep oak and russet notes create a warm, expressive shirt for laid-back dressing.",
    details: ["Earthy colour story", "Easy pairing", "Multiple sizes available"],
  },
  "shirt-14": {
    name: "The Slate Club",
    code: "VE-14",
    category: "Cool-toned classic",
    occasion: "formal",
    description: "Slate, stone, and soft blue notes meet in a composed shirt with understated formality.",
    details: ["Cool neutral palette", "Smart styling", "Multiple sizes available"],
  },
  "shirt-15": {
    name: "The Dune",
    code: "VE-15",
    category: "Soft neutral",
    occasion: "leisure",
    description: "A sand-toned shirt with an unhurried feel, made for travel, weekends, and warm afternoons.",
    details: ["Relaxed neutral tone", "Off-duty styling", "Multiple sizes available"],
  },
  "shirt-16": {
    name: "The Ashwood",
    code: "VE-16",
    category: "Modern neutral",
    occasion: "casual",
    description: "A balanced blend of ash and warm stone creates an adaptable everyday favourite.",
    details: ["Versatile palette", "Daily rotation", "Multiple sizes available"],
  },
  "shirt-17": {
    name: "The Tobacco Grid",
    code: "VE-17",
    category: "Heritage pattern",
    occasion: "casual",
    description: "Tobacco-brown depth and a lively visual texture give this shirt a confident vintage note.",
    details: ["Heritage character", "Statement pattern", "Multiple sizes available"],
  },
  "shirt-18": {
    name: "The Café Check",
    code: "VE-18",
    category: "Warm patterned shirt",
    occasion: "casual",
    description: "Cream and coffee tones come together in an easy patterned shirt for everyday plans.",
    details: ["Warm check styling", "Weekend ready", "Multiple sizes available"],
  },
  "shirt-19": {
    name: "The Field Note",
    code: "VE-19",
    category: "Utility leisure",
    occasion: "leisure",
    description: "An olive-earth palette gives this relaxed shirt a practical, outdoors-minded character.",
    details: ["Grounded colour tone", "Easy layering", "Multiple sizes available"],
  },
  "shirt-20": {
    name: "The Cloud Oxford",
    code: "VE-20",
    category: "Pale essential",
    occasion: "formal",
    description: "A soft cloud-grey shirt with a clean visual rhythm suited to work and understated occasions.",
    details: ["Crisp neutral tone", "Polished styling", "Multiple sizes available"],
  },
  "shirt-21": {
    name: "The Linen Hour",
    code: "VE-21",
    category: "Sunlit neutral",
    occasion: "leisure",
    description: "A light, warm neutral that feels at home on slow mornings, holidays, and open-air evenings.",
    details: ["Airy colour palette", "Relaxed mood", "Multiple sizes available"],
  },
  "shirt-22": {
    name: "The Cinder Plaid",
    code: "VE-22",
    category: "Earthy pattern",
    occasion: "casual",
    description: "Smoky brown and cream tones bring depth to a pattern designed for effortless rotation.",
    details: ["Rich visual texture", "Casual character", "Multiple sizes available"],
  },
  "shirt-23": {
    name: "The Merlot",
    code: "VE-23",
    category: "Deep colour formal",
    occasion: "formal",
    description: "A deep wine-toned shirt that adds confident colour to dinners and dressed-up occasions.",
    details: ["Rich statement tone", "Evening ready", "Multiple sizes available"],
  },
  "shirt-24": {
    name: "The Red Letter",
    code: "VE-24",
    category: "Bold solid",
    occasion: "casual",
    description: "A vivid red shirt with direct, energetic character for days that call for confident colour.",
    details: ["Bold red palette", "Statement styling", "Multiple sizes available"],
  },
  "shirt-25": {
    name: "The Monochrome",
    code: "VE-25",
    category: "Graphic neutral",
    occasion: "formal",
    description: "A sharp black, white, and grey composition that keeps occasion dressing modern and clean.",
    details: ["Graphic palette", "Modern formal styling", "Multiple sizes available"],
  },
  "shirt-26": {
    name: "The Terracotta Check",
    code: "VE-26",
    category: "Expressive pattern",
    occasion: "casual",
    description: "Terracotta warmth and strong visual texture make this a natural weekend statement.",
    details: ["Warm patterned look", "Relaxed pairing", "Multiple sizes available"],
  },
  "shirt-27": {
    name: "The Blue Ledger",
    code: "VE-27",
    category: "Cool formal",
    occasion: "formal",
    description: "A pale blue-grey shirt with a precise, uncluttered look built for polished daily wear.",
    details: ["Cool blue neutral", "Office ready", "Multiple sizes available"],
  },
  "shirt-28": {
    name: "The Riviera",
    code: "VE-28",
    category: "Coastal leisure",
    occasion: "leisure",
    description: "Clear ocean blues give this easy shirt a fresh, holiday-minded sense of movement.",
    details: ["Coastal blue palette", "Off-duty mood", "Multiple sizes available"],
  },
  "shirt-29": {
    name: "The Gallery Stripe",
    code: "VE-29",
    category: "Graphic casual",
    occasion: "casual",
    description: "Cream, charcoal, and warm neutral notes create an artful shirt with everyday ease.",
    details: ["Graphic visual rhythm", "Creative styling", "Multiple sizes available"],
  },
  "shirt-30": {
    name: "The Rainline",
    code: "VE-30",
    category: "Storm-grey formal",
    occasion: "formal",
    description: "A measured grey-blue palette gives this shirt a crisp, modern presence for sharper days.",
    details: ["Storm-toned neutral", "Refined silhouette", "Multiple sizes available"],
  },
  "shirt-31": {
    name: "The Midnight Club",
    code: "VE-31",
    category: "Evening statement",
    occasion: "formal",
    description: "Deep midnight tones with warm accents create a distinctive shirt made for evening plans.",
    details: ["Dark statement palette", "Occasion styling", "Multiple sizes available"],
  },
};

function getShirtId(imagePath) {
  return imagePath
    .split("/")
    .pop()
    .replace(/\.[^.]+$/, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

function formatShirtName(id) {
  const numberedShirt = id.match(/^shirt-(\d+)$/);

  if (numberedShirt) {
    return `Style ${numberedShirt[1]}`;
  }

  return id
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

function createDefaultMetadata(id) {
  const numberedShirt = id.match(/^shirt-(\d+)$/);

  return {
    name: formatShirtName(id),
    code: numberedShirt
      ? `VE-${numberedShirt[1].padStart(2, "0")}`
      : `VE-${id.toUpperCase()}`,
    category: "New arrival",
    description:
      "A newly added style selected for comfort, versatility, and everyday wear.",
    details: ["Fresh arrival", "Easy to style", "Multiple sizes available"],
  };
}

export const shirtOccasions = [
  {
    id: "leisure",
    label: "Leisure",
    description: "Relaxed shirts for off-duty days, travel, and easy layering.",
  },
  {
    id: "casual",
    label: "Casual",
    description: "Versatile everyday shirts that move comfortably through the day.",
  },
  {
    id: "formal",
    label: "Formal",
    description: "Polished shirts selected for workdays, occasions, and sharper dressing.",
  },
];

const occasionKeywords = {
  leisure: [
    ["leisure", 5],
    ["relaxed", 4],
    ["easygoing", 4],
    ["off-duty", 4],
    ["layering", 2],
    ["comfort-led", 1],
  ],
  casual: [
    ["casual", 5],
    ["everyday", 4],
    ["daily", 4],
    ["versatile", 3],
    ["repeat wear", 3],
    ["day-to-night", 2],
    ["easy to style", 2],
    ["new arrival", 1],
  ],
  formal: [
    ["formal", 5],
    ["occasion", 4],
    ["polished", 4],
    ["tailoring", 3],
    ["refined", 3],
    ["workday", 3],
    ["classic", 2],
    ["signature", 2],
  ],
};

function classifyShirt(metadata) {
  if (metadata.occasion) {
    return metadata.occasion;
  }

  const searchableText = [
    metadata.name,
    metadata.category,
    metadata.description,
    ...metadata.details,
  ]
    .join(" ")
    .toLowerCase();

  return shirtOccasions.reduce(
    (bestMatch, occasion) => {
      const score = occasionKeywords[occasion.id].reduce(
        (total, [keyword, weight]) =>
          total + (searchableText.includes(keyword) ? weight : 0),
        0
      );

      return score > bestMatch.score ? { id: occasion.id, score } : bestMatch;
    },
    { id: "casual", score: 0 }
  ).id;
}

export const shirts = Object.entries(shirtImages)
  .map(([imagePath, image]) => {
    const id = getShirtId(imagePath);
    const metadata = shirtMetadata[id] ?? createDefaultMetadata(id);

    return {
      id,
      ...metadata,
      occasion: classifyShirt(metadata),
      image,
    };
  })
  .sort((firstShirt, secondShirt) =>
    firstShirt.id.localeCompare(secondShirt.id, undefined, { numeric: true })
  );
