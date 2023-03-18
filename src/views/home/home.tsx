import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import "./styles.css";

const Home = () => {
  return (
    <Container className="home-page">
        <Row className="flex-column justify-content-center hello">
            <h1 className="welcome-title"><b>Barry Percy</b></h1>
            <h1 className="welcome-title secondary-title"><b>Web Developer</b></h1>
            <p className="small-text">I'm a Web Developer living in Belfast who loves to solve logical problems and create websites. Recently I completed a course on front end </p>
            <Button className="hero-button">Check out My Projects</Button>
        </Row>
    </Container>
  );
};

export default Home;

