import {
  Button,
  Card,
  Col,
  Container,
  ProgressBar,
  Row,
} from "react-bootstrap";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import React, { useEffect, useState } from "react";
// import { toast } from "react-toastify";
import OrderDetailsProduct from "../components/OrderDetailsProductSection";
import config from "../config/serverUrl";
import { toast, Toaster } from 'react-hot-toast';

const ViewOrderDetails = () => {
  const navigate = useNavigate();
  const [productList, setProductList] = useState([]);
  const [orderTotal, setOrderTotal] = useState(0);
  const location = useLocation();
  const orderDetails = location.state.orderState;

  const getProductList = ()=>{
     var productList = [
      {
        product : {
          id : 1, 
          name : "product 1",
          price : 10000,
          quantity : 3
        }
      },
      {
        product : {
          id : 2, 
          name : "product 2",
          price : 20000,
          quantity : 30
        }
      },
      {
        product : {
          id : 3, 
          name : "product 3",
          price : 30000,
          quantity : 3
        }
      },
      {
        product : {
          id : 4, 
          name : "product 4",
          price : 40000,
          quantity : 4
        }
      }
     ]

     return productList;
  }

  useEffect(() => {
    const loadProductList = () => {

      setProductList(getProductList());
    //   axios
    //     .get(config.serverUrl + "user/getOrderDetails/" + orderDetails.id, {})
    //     .then((response) => {
    //       const result = response.data;

    //       if (result.message === "success") {
    //         setProductList(result.data);
    //         calculateTotal(result.data);
    //       } else {
    //         toast.error(result.error);
    //       }
    //     })
    //     .catch((error) => {
    //       console.log("error");
    //       console.log(error);
    //     });
    };
    loadProductList();
  }, []);

  const calculateTotal = (list) => {
    let total = 0;
    list.forEach((productItem) => {
      total += productItem.product.price * productItem.quantity;
    });
    setOrderTotal(total);
  };

  const cancelOrder = () => {

    toast.success("Order cancelled successfully");
    navigate("/viewOrderHistory");

    // axios
    //   .put(config.serverUrl + "user/orders/updateStatus", {
    //     id: orderDetails.id,
    //   })
    //   .then((response) => {
    //     const result = response.data;
    //     if (result.message === "success") {
    //       toast.success("Order cancelled successfully");
    //       navigate("/viewOrderHistory");
    //     } else {
    //       toast.error(result.data);
    //     }
    //   })
    //   .catch((error) => {
    //     console.log("error");
    //     console.log(error);
    //   });
  };


  let cancelBtnStatus = true;
  let reviewBtnStatus = false;
  let reviewBtnVariant = "secondary";
  let cancelBtnVariant = "secondary";

  const paymentText = orderDetails.codStatus
    ? "Cash On Delivery"
    : "Paid Online";

  let now, variant;
  switch (orderDetails.status) {
    case "ORDERED":
      now = 25;
      variant = "info";
      cancelBtnVariant = "danger";
      break;
    case "INTRANSIT":
      now = 50;
      variant = "warning";
      cancelBtnVariant = "danger";
      break;
    case "DELIVERED":
      now = 75;
      variant = "success";
      cancelBtnStatus = false;
      reviewBtnStatus = true;
      reviewBtnVariant = "info";
      break;
    case "CANCELLED":
      now = 100;
      variant = "danger";
      cancelBtnStatus = false;
      break;
    default:
      break;
  }

  return (
    <div>
      {/* <Toaster /> */}
      <Container>
        <h2>Order Details</h2>
        <hr />

        <h5>Order Details</h5>
        <Card style={{ width: "100%", borderRadius: "15px" }}>
          <Card.Body>
            Order Date: {orderDetails.createdAt} <br />
            Order #: {orderDetails.id} <br />
            Order Total: {orderTotal} Rs <br />
          </Card.Body>
        </Card>

        <hr />
        <h5>Shipment Details</h5>
        <Card style={{ width: "100%", borderRadius: "15px" }}>
          <Card.Body>
            <Row>
              <ProgressBar>
                <ProgressBar
                  variant={variant}
                  now={now}
                  label={orderDetails.status}
                />
              </ProgressBar>
            </Row>
            <br />
            {productList.map((ProductDetails) => (
              <OrderDetailsProduct
                key={ProductDetails.product.id}
                ProductDetails={ProductDetails}
                reviewBtnStatus={reviewBtnStatus}
                reviewBtnVariant={reviewBtnVariant}
              />
            ))}
          </Card.Body>
        </Card>

        <hr />
        <h5>Payment Information</h5>
        <Card style={{ width: "100%", borderRadius: "15px" }}>
          <Card.Body>
            Paid via: {paymentText} <br />
          </Card.Body>
        </Card>

        <hr />
        <h5>Shipping Address</h5>
        <Card style={{ width: "100%", borderRadius: "15px" }}>
          <Card.Body>
            {orderDetails.address.addressLine1} <br />
            {orderDetails.address.addressLine2} <br />
            {orderDetails.address.city} <br />
            {orderDetails.address.state} <br />
            {orderDetails.address.pincode} <br />
            <br />
          </Card.Body>
        </Card>

        <br />
        <Row>
          <Col md={5}>
            <Button
              className="mb-1"
              style={{ width: "100%", color: "white", margin: "10px" }}
              variant="info"
              onClick={() => {
                navigate("/viewOrderHistory");
              }}
            >
              Back
            </Button>
          </Col>
          <Col md={5}>
            <Button
              disabled={!cancelBtnStatus}
              className="mb-1"
              style={{ width: "100%", color: "white", margin: "10px" }}
              variant={cancelBtnVariant}
              onClick={cancelOrder}
            >
              Cancel Order
            </Button>
          </Col>
        </Row>
        <br /> <br />
      </Container>
    </div>
  );
};

export default ViewOrderDetails;
