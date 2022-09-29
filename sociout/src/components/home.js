import React from "react";
import Header from "./common/header";
import LeftSideBar from "./common/leftSidebar";
import RightSideBar from "./common/rightSidebar";
import MainContent from "./common/mainContent";
import "./mainContent.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
//import Container from "react-bootstrap/Container";

const Home = (props) => {
  return (
    <>
      <Header />
      <Row>
        <Col>
          <LeftSideBar />
        </Col>
        <Col xs={8}>
          <MainContent />
        </Col>
        <Col>
          <RightSideBar />
        </Col>
      </Row>
    </>
  );
};

export default Home;
