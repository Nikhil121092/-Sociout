import React from "react";
import Header from "./common/header";
import LeftSideBar from "./common/leftSidebar";
import RightSideBar from "./common/rightSidebar";
import MianContent from "./common/mainContent";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";

const Home = (props) => {
  return (
    <>
      <Header />
      <Row>
        <Col>
          <LeftSideBar />
        </Col>
        <Col xs={8}>
          <MianContent />
        </Col>
        <Col>
          <RightSideBar />
        </Col>
      </Row>
    </>
  );
};

export default Home;
