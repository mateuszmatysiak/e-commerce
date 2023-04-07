import { NextApiRequest, NextApiResponse } from "next";

import prisma from "@/prisma/prisma";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const products = await prisma.product.findMany();

  if (products.length) {
    res.status(200).json(products);
    res.end();
  } else {
    res.status(404);
    res.end();
  }
}
