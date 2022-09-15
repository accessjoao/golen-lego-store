import { Col, Row } from "react-bootstrap";
import { StoreItem } from "../components/StoreItem";
import storeItems from "../data/items.json";

export function Store() {
  return (
    <div className="p-3">
      <br />
    <h2 className="d-flex justify-content-center">Now you can see our products and add the things you love to your cart.</h2>
    <h6 className="d-flex justify-content-center">When you're ready, just click on the cart icon to go to Checkout.</h6>
    <br />

    <Row md={2} xs={1} lg={3} className="g-4">
      {storeItems.map(item => (
        <Col key={item.id}><StoreItem {...item}/></Col>
      ))}
      
    </Row>
    </div>
  )
}
