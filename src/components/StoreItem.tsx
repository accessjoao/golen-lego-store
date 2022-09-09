import { Card } from "react-bootstrap";

type StoreItemProps = {
  id: number,
  name: string,
  price: number,
  description: string,
  imgUrl: string
}

export function StoreItem({ id, name, price, description, imgUrl }: StoreItemProps) {
  return (
    <Card></Card>
  )
}