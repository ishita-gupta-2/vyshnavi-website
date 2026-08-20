const shirtImages = import.meta.glob(
  "../assets/shirts/shirt-*.jpg",
  { eager: true, import: "default" }
);

export const shirts = Array.from({ length: 31 }, (_, index) => {
  const number = String(index + 1).padStart(2, "0");
  const id = `shirt-${number}`;
  const imagePath = `../assets/shirts/${id}.jpg`;

  return {
    id,
    name: `SHIRT-${number}`,
    image: shirtImages[imagePath],
  };
});
