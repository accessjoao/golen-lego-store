import { Button, Card, Modal, ModalDialog } from "react-bootstrap";
import { useShoppingCart } from "../context/ShoppingCartContext";
import { currencyFormat } from "../utilities/currencyFormat";
import "../App.css"
import { useState } from "react";

type StoreItemProps = {
  id: number;
  name: string;
  price: number;
  description: string;
  category: string;
  imgUrl: string;
};

export function StoreItem({
  id,
  name,
  price,
  description,
  category,
  imgUrl,
}: StoreItemProps) {
  const { getItemQuantity, increaseCartQuantity, decreaseCartQuantity, removeFromCart } = useShoppingCart();
  const quantity = getItemQuantity(id);

  // Handling Modal
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <Card className="card p-2 h-100">
      <Card.Img
        variant="top"
        src={imgUrl}
        height="460px"
        style={{ objectFit: "fill" }}
      />
      <Card.Body className="d-flex flex-column">
        <Card.Title className="d-flex justify-content-between align-items-baseline bb-4">
          <span className="fs-2">{name}</span>
          <div className="d-flex flex-column">
          <span className="ms-2 text-muted">{currencyFormat(price)}</span>
          <br />
          <h1 className="fs-5">{category}</h1>
          </div>
        </Card.Title>
        <Button variant="warning" onClick={handleShow}>
          Product Info
      </Button>
        <br />
        <div>
    

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{name}</Modal.Title>
        </Modal.Header>
        <Card.Img variant="top"
        src={imgUrl}
        height="500px"
        style={{ objectFit: "fill" }}/>
        <Modal.Body>{description}</Modal.Body>
      </Modal>
    </div>


        <br />
          
        <div className="d-flex flex-direction-row justify-content-center mt-auto">
        {quantity === 0 ? (
            <Button variant="warning" className="w-50 fw-bold" onClick={() => increaseCartQuantity(id)}>
              + Add To Cart
            </Button>
          ) : (
            <div
              className="d-flex align-items-center flex-column"
              style={{ gap: ".5rem" }}
            >
              <div
                className="d-flex align-items-center justify-content-center"
                style={{ gap: ".5rem" }}
              >
                <Button className="btn-lg" variant="warning" onClick={() => increaseCartQuantity(id)}>+</Button>
                <Button className="btn-lg" variant="warning" onClick={() => decreaseCartQuantity(id)}>-</Button>
              </div>
              <div>
                  <span className="fs-3">{quantity}</span> in cart
                </div>
              <Button

                onClick={() => removeFromCart(id)}
                className="btn-xs"
                variant="danger"
              >
                Remove All
              </Button>
            </div>
          )}
        </div>
        
      </Card.Body>
    </Card>
  )
}