import React from "react";
import { Container, Row, Col } from "react-bootstrap";
//import { useDispatch } from "react-redux";

const FormContainer = ({ children }) => {
  return (
    <div>
      <Container>
        <Row className="justify-content-md-center">
          <Col xs={12} md={6} className=" p-3">
            {children}
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default FormContainer;
