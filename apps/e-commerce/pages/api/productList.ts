import { NextApiRequest, NextApiResponse } from "next";

import { prisma } from "@app/database";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const productList = await prisma.product.findMany();

  if (productList.length) {
    res.status(200).json(productList);
    res.end();
  } else {
    res.status(404);
    res.end();
  }
}
