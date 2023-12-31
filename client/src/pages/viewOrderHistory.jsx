import axios from "axios";
import React, { useEffect, useState } from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import OrderhistoryCard from "../components/OrderHistoryCard";
import { toast } from "react-toastify";
import config from "../config/serverUrl";

const ViewOrderHistory = () => {
  useEffect(() => {
    loadOrders();
  }, []);

  const [listings, setListings] = useState([]);

  //const id =  sessionStorage.user_details
  const loadOrders = () => {

    setListings(getListings());
    //console.log(sessionStorage['userId'])

    // axios
    //   .get(
    //     config.serverUrl + "user/viewOrderHistory/" + sessionStorage["id"]
    //   )
    //   .then((response) => {
    //     const result = response.data;
    //     //console.log('RESULT' + result)
    //     if (result.message === "success") {
    //       //console.log(result.data)
    //       setListings(result.data);
    //     } else {
    //       toast.error(result.error);
    //     }
    //   })
    //   .catch((error) => {
    //     console.log("error");
    //     console.log(error);
    //   });
  };

  const getListings = ()=>{
    const listings = [
      {
        id: 1001,
        status: 'ORDERED',
        codStatus: 'true',
        statusUpdatedAt: '2022-05-06',
        createdAt : '2022-05-06',
        address : {
          addressLine1 : "addressLine1",
          addressLine2 : "addressLine2",
          city : "city1",
          state : "state1",
          pincode : "pincode1"
        }
      },
      {
        id: 1002,
        status: 'DELIVERED',
        codStatus: 'false',
        statusUpdatedAt: '2022-05-06',
        createdAt : '2022-05-06',
        address : {
          addressLine1 : "addressLine1",
          addressLine2 : "addressLine2",
          city : "city1",
          state : "state1",
          pincode : "pincode1"
        }
      },
      {
        id: 1003,
        status: 'CANCELLED',
        codStatus: 'true',
        statusUpdatedAt: '2022-05-06',
        createdAt : '2022-05-06',
        address : {
          addressLine1 : "addressLine1",
          addressLine2 : "addressLine2",
          city : "city1",
          state : "state1",
          pincode : "pincode1"
        }
      },
      {
        id: 1004,
        status: 'INTRANSIT',
        codStatus: 'true',
        statusUpdatedAt: '2022-05-06',
        createdAt : '2022-05-06',
        address : {
          addressLine1 : "addressLine1",
          addressLine2 : "addressLine2",
          city : "city1",
          state : "state1",
          pincode : "pincode1"
        }
      },
    ]

    return listings;
  }

  const styles = {
    h2: {
      marginTop: "5%",
    },
    col: { marginTop: "10px", marginBottom: "10px" },
  };

  return (
    <div>
      <Container>
        <h2 style={styles.h2}>Order History</h2>
        <hr />
        <Row style={{ marginTop: "10px", marginBottom: "10px" }}>
          {listings.length === 0 ? (
            <Image
              style={{ height: "28rem", borderRadius: "1.5rem" }}
              src="https://i.pinimg.com/originals/6f/fd/64/6ffd64c5366898c59bbc91d9aec935c3.png"
            />
          ) : (
            listings.map((order) => {
              return (
                <Col
                  style={{ marginTop: "10px", marginBottom: "10px" }}
                  md={6}
                  key={order.id}
                >
                  <OrderhistoryCard
                    id={order.id}
                    status={order.status}
                    codStatus={order.codStatus}
                    statusUpdatedAt={order.statusUpdatedAt}
                    createdAt={order.createdAt}
                    address={order.address}
                  ></OrderhistoryCard>
                </Col>
              );
            })
          )}
        </Row>
      </Container>
    </div>
  );
};

export default ViewOrderHistory;
