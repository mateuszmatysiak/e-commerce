import { Decimal } from "@app/database";

export function formatCurrency(value: Decimal) {
  return new Intl.NumberFormat("pl", {
    style: "currency",
    currency: "PLN",
  }).format(Number(value));
}
