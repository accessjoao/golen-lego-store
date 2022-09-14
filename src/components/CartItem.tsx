import { Button, Stack } from "react-bootstrap"
import { useShoppingCart } from "../context/ShoppingCartContext"
import storeItems from "../data/items.json"
import { currencyFormat } from "../utilities/currencyFormat"

type CartItemProps = {
  id: number
  quantity: number
}

export function CartItem({ id, quantity }: CartItemProps) {
  const { removeFromCart } = useShoppingCart()
  const item = storeItems.find(i => i.id === id)
  if (item == null) return null

 // color to match picture: backgroundColor: "#d4d4d4"

  return (
    <Stack direction="horizontal" gap={2} className="d-flex align-items-center p-3 rounded-2" style={{ backgroundColor: "white" }}>
      <img
        src={item.imgUrl}
        style={{ width: "125px", height: "75px", objectFit: "cover" }}
      />
      <div className="me-auto fw-bold">
        <div>
          {item.name}{" "}
          {quantity > 1 && (
            <span style={{ fontSize: ".65rem" }}>
              x{quantity}
            </span>
          )}
        </div>
        <div style={{ fontSize: ".75rem" }}>
          {currencyFormat(item.price)}
        </div>
      </div>
      <div> {currencyFormat(item.price * quantity)}</div>
      <Button
        variant="outline-danger"
        size="sm"
        onClick={() => removeFromCart(item.id)}
      >
        &times;
      </Button>
    </Stack>
  )
}
