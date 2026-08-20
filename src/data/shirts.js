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
    category: "Everyday tailoring",
    description:
      "A clean, versatile shirt selected for polished workdays and effortless evenings.",
    details: ["Classic silhouette", "Everyday comfort", "Multiple sizes available"],
  },
  "shirt-02": {
    name: "The Regent",
    code: "VE-02",
    category: "Refined essentials",
    description:
      "A confident wardrobe staple with an easy shape and a considered, timeless finish.",
    details: ["Smart-casual styling", "Comfort-led fit", "Multiple sizes available"],
  },
  "shirt-03": {
    name: "The Weekday",
    code: "VE-03",
    category: "Daily uniform",
    description:
      "Made for repeat wear, this versatile style moves easily from desk to dinner.",
    details: ["Versatile silhouette", "Easy to style", "Multiple sizes available"],
  },
  "shirt-04": {
    name: "The Heritage",
    code: "VE-04",
    category: "Modern classics",
    description:
      "A timeless selection with a composed look designed for occasions and everyday wear.",
    details: ["Classic character", "Polished finish", "Multiple sizes available"],
  },
  "shirt-05": {
    name: "The Studio",
    code: "VE-05",
    category: "Contemporary dressing",
    description:
      "A modern shirt with an understated presence, chosen for comfort and clean styling.",
    details: ["Modern silhouette", "Day-to-night wear", "Multiple sizes available"],
  },
  "shirt-06": {
    name: "The Reserve",
    code: "VE-06",
    category: "Elevated essentials",
    description:
      "A distinctive essential that brings quiet confidence to a considered wardrobe.",
    details: ["Refined styling", "Comfort-led fit", "Multiple sizes available"],
  },
  "shirt-07": {
    name: "The Leisure",
    code: "VE-07",
    category: "Relaxed refinement",
    description:
      "An easygoing selection with enough structure to stay sharp through the day.",
    details: ["Relaxed character", "Easy layering", "Multiple sizes available"],
  },
  "shirt-08": {
    name: "The Signature",
    code: "VE-08",
    category: "Collection highlight",
    description:
      "A memorable finishing piece selected to anchor both formal and relaxed looks.",
    details: ["Signature styling", "Occasion-ready", "Multiple sizes available"],
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

export const shirts = Object.entries(shirtImages)
  .map(([imagePath, image]) => {
    const id = getShirtId(imagePath);

    return {
      id,
      ...(shirtMetadata[id] ?? createDefaultMetadata(id)),
      image,
    };
  })
  .sort((firstShirt, secondShirt) =>
    firstShirt.id.localeCompare(secondShirt.id, undefined, { numeric: true })
  );
