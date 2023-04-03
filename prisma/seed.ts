import prisma from "./prisma";

async function main() {
  await prisma.product.createMany({
    data: [
      {
        name: "Black Shirt",
        description:
          "A black shirt is a versatile and timeless piece that can be easily styled for any occasion.",
        price: 30,
        image: "https://images.unsplash.com/photo-1618354691373-d851c5c3a990",
      },
      {
        name: "White Shirt",
        description:
          "A white shirt is a classic and timeless piece that exudes elegance and versatility.",
        price: 30,
        image: "https://images.unsplash.com/photo-1618354691373-d851c5c3a990",
      },
    ],
  });
}
main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
