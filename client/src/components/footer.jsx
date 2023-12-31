import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { BsTwitter, BsLinkedin, BsGithub } from "react-icons/bs";

const Footer = () => {
  const styles = {
    icon: {
      fontSize: "25px",
    },
  };

  return (
    <div style={{ marginTop: "50px" }}>
      <footer>
        <div
          style={{
            position: "relative",
            left: "0",
            bottom: "0",
            width: "100%",
            backgroundColor: " #5B9A8B",
            color: "white",
            textAlign: "center",
          }}
        >
          <Container>
            <Row>
              <Col></Col>
              <Col style={{ margin: "15px" }}>
                <Row>
                  <Col>
                    <BsTwitter style={styles.icon} />
                  </Col>
                  <Col>
                    <BsLinkedin style={styles.icon} />
                  </Col>
                  <Col>
                    <BsGithub style={styles.icon} />
                  </Col>
                </Row>
              </Col>
              <Col></Col>
            </Row>
            <Row>
              <Col>
                <p>ⓒ Copyright 2023 - DigitalDukaan.com</p>
              </Col>
            </Row>
          </Container>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
