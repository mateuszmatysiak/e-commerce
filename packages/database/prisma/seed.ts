import { prisma } from "./client";

async function main() {
  await prisma.product.createMany({
    data: [
      {
        name: "Czarna koszulka",
        description:
          "Czarna koszula jest uniwersalnym i ponadczasowym elementem, który można łatwo wystylizować na każdą okazję.",
        price: 30,
        image: "https://images.unsplash.com/photo-1618354691373-d851c5c3a990",
      },
      {
        name: "Biała koszulka",
        description:
          "Biała koszula to klasyczny i ponadczasowy element, który emanuje elegancją i wszechstronnością.",
        price: 30.5,
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
