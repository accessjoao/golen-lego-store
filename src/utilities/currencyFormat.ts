const CURRENCY_FORMATTER = new Intl.NumberFormat(undefined, {
  currency: "CAD", style: "currency"
})
// undefined means it's going to set to the local currency

export function currencyFormat(number: number) {
  return CURRENCY_FORMATTER.format(number);
}