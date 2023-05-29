import { prisma } from "./client";

async function main() {
  await prisma.size.createMany({
    data: [
      { id: "xs", name: "XS" },
      { id: "s", name: "S" },
      { id: "m", name: "M" },
      { id: "l", name: "L" },
      { id: "xl", name: "XL" },
      { id: "2xl", name: "2XL" },
    ],
  });

  await prisma.color.createMany({
    data: [
      { id: "czarny", name: "Czarny" },
      { id: "bialy", name: "Biały" },
      { id: "szary", name: "Szary" },
      { id: "czerwony", name: "Czerwony" },
      { id: "niebieski", name: "Niebieski" },
      { id: "zielony", name: "Zielony" },
    ],
  });

  await prisma.category.createMany({
    data: [
      { id: "koszulki", name: "Koszulki" },
      { id: "bluzy", name: "Bluzy" },
      { id: "czapki", name: "Czapki" },
    ],
  });

  await prisma.product.createMany({
    data: [
      {
        name: "Czarna koszulka",
        description:
          "Czarna koszula jest uniwersalnym i ponadczasowym elementem, który można łatwo wystylizować na każdą okazję.",
        price: 30,
        image:
          "https://img.freepik.com/free-photo/short-sleeve-black-t-shirt_1409-2226.jpg?w=1800&t=st=1685345329~exp=1685345929~hmac=ab3de929f45920091dd11aca424bd4b8fd1b7733425ae844d2935d959a5cf9c3",
        sizeId: "s",
        colorId: "czarny",
        categoryId: "koszulki",
      },
      {
        name: "Biała koszulka",
        description:
          "Biała koszulka idealna na letnie dni. Wykonana z wysokiej jakości bawełny, gwarantuje komfort noszenia i oddychalność nawet podczas gorących dni.",
        price: 25,
        image:
          "https://img.freepik.com/free-photo/white-shirt_144627-34317.jpg?w=1800&t=st=1685345390~exp=1685345990~hmac=4a49119e9a038cfe619ee7e913b28879cae5a71bec480e9f283314c5d3dd7e27",
        sizeId: "m",
        colorId: "bialy",
        categoryId: "koszulki",
      },
      {
        name: "Biała zimowa czapka",
        description: "Biała zimowa czapka wykonana z miękkiego materiału, idealna na chłodne dni.",
        price: 20,
        image:
          "https://img.freepik.com/free-photo/closeup-shot-white-wool-baby-hat-isolated-white-background_181624-28822.jpg?w=2000&t=st=1685343359~exp=1685343959~hmac=e1b046991520dcc71a79eda5727e8b5be5f12ac07b0812583a593d94140482fe",
        sizeId: "m",
        colorId: "bialy",
        categoryId: "czapki",
      },
      {
        name: "Czerwona zimowa czapka",
        description: "Czerwona zimowa czapka z pomponem, dodaj koloru do swojej stylizacji.",
        price: 15,
        image:
          "https://img.freepik.com/free-photo/cute-winter-hat_1101-542.jpg?1&w=996&t=st=1685344547~exp=1685345147~hmac=a9f42429ff7f7030c68cadcf8653e1bcb5b8b3f1b2523af1dd75ac6fe354d3b5",
        sizeId: "m",
        colorId: "czerwony",
        categoryId: "czapki",
      },
      {
        name: "Szara bluza z kapturem",
        description:
          "Szara bluza z kapturem, wygodna i stylowa. Wykonana z miękkiego materiału, zapewnia przyjemne uczucie na skórze i doskonałe dopasowanie.",
        price: 35,
        image:
          "https://img.freepik.com/free-photo/isolated-grey-hoodie_125540-738.jpg?w=2000&t=st=1685344621~exp=1685345221~hmac=ff412e29649e89611dbfd4494e3caed5bfa6ce499d51da3058324331ca8a02a6",
        sizeId: "l",
        colorId: "szary",
        categoryId: "bluzy",
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
