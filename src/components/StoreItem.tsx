import { Card } from "react-bootstrap";
import { currencyFormat } from "../utilities/currencyFormat";

type StoreItemProps = {
  id: number,
  name: string,
  price: number,
  description: string,
  imgUrl: string
}

export function StoreItem({ id, name, price, description, imgUrl }: StoreItemProps) {

const quantity = 0;

  return (
    <Card className="h-100">
    <Card.Img
        variant="top"
        src={imgUrl}
        height="460px"
        style={{ objectFit: "fill" }}
      />
      <Card.Body className="d-flex flex-column">
        <Card.Title className="d-flex justify-content-between align-items-baseline bb-4">
          <span className="fs-2">{name}</span>
          <span className="ms-2 text-muted">{currencyFormat(price)}</span>
        </Card.Title>
        <div className="mt-auto"></div>
      </Card.Body>
      </Card>
  )
}