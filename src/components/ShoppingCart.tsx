
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { Button, Offcanvas, Stack, Modal, Card } from "react-bootstrap"
import { useShoppingCart } from "../context/ShoppingCartContext"
import { currencyFormat } from "../utilities/currencyFormat"
import storeItems from "../data/items.json"
import { CartItem } from "./CartItem"
import storeBackground from "../images/Lego_Background_Star.jpg"
import thanksImage from "../images/Lego_Avengers.jpeg"

type ShoppingCartProps = {
  isOpen: boolean
}

export function ShoppingCart({ isOpen }: ShoppingCartProps) {
  
  const { closeCart, cartItems } = useShoppingCart()

  const navigate = useNavigate();

  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);
  const handleClose = () => [setShow(false), navigate('/about'), closeCart()];

  return (
    <Offcanvas show={isOpen} onHide={closeCart} placement="end" style={{ backgroundImage: `url(${storeBackground})`, height:"100vh", backgroundPosition: "center", backgroundRepeat: "no-repeat", backgroundSize: "cover", overflow:"auto" }}>
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>Cart</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        <Stack gap={3}>
          {cartItems.map(item => (
            <CartItem key={item.id} {...item} />
          ))}
          <div className="d-flex align-items-center flex-column ms-auto fw-bold fs-5 p-3 rounded-2" style={{ backgroundColor: "white" }}>
            Total{" "}
            {currencyFormat(
              cartItems.reduce((total, cartItem) => {
                const item = storeItems.find(i => i.id === cartItem.id)
                return total + (item?.price || 0) * cartItem.quantity
              }, 0)
            )}
            <div>
              <br />

              <div>
      <Button variant="success" onClick={handleShow}>
        Secure Checkout
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Thank You for stopping by! =D</Modal.Title>
        </Modal.Header>
        <Card.Img variant="top"
        src={thanksImage}
        height="500px"
        style={{ objectFit: "fill" }}/>
      </Modal>
    </div>
            </div>
          </div>
        </Stack>
      </Offcanvas.Body>
    </Offcanvas>
  )
}
