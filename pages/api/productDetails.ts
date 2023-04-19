import { NextApiRequest, NextApiResponse } from "next";

import prisma from "@/prisma/prisma";
import { getQueryAsString } from "@/shared/utils/query";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const productId = Number(getQueryAsString(req.query.id));
  const productDetails = await prisma.product.findUnique({ where: { id: productId } });

  if (productDetails) {
    res.status(200).json(productDetails);
    res.end();
  } else {
    res.status(404);
    res.end();
  }
}
