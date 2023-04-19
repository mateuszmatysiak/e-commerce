import { Decimal } from "@prisma/client/runtime";

export function formatCurrency(value: Decimal) {
  return new Intl.NumberFormat("pl", { style: "currency", currency: "PLN" }).format(Number(value));
}
