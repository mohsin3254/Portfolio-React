import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ScrollToTop from "../ScrollToTop/ScrollToTop";
import ProjectCard from "./ProjectCards";

import ExpenseTracker from "../../Assets/Projects/ExpenseTracker.png";
import Destination from "../../Assets/Projects/Destination.png";
import Wanderer from "../../Assets/Projects/wanderer.png";

import "./project.css";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="Fluorescent-Blue">Works </strong>
        </h1>
        <p>Here are a few projects I've worked on recently.</p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={6} lg={4} className="project-card">
            <ProjectCard
              imgPath={Destination}
              title="Destination"
              description="This is fully functional Travel website that allows its users to add their favourite destinations and also allows users to explore the places added by others."
              ghLink="#"
              demoLink="https://travel-destinations.herokuapp.com/"
            />
          </Col>

          <Col md={6} lg={4} className="project-card">
            <ProjectCard
              imgPath={Wanderer}
              title="Wanderer Travels"
              description="Wanderer travel application is a MERN Stack Site which allows its users to booked tours and hotels and buy products. Admin can add tours, hotels and products."
              ghLink="#"
              demoLink="https://wanderertravels.netlify.app/"
            />
          </Col>

          <Col md={6} lg={4} className="project-card">
            <ProjectCard
              imgPath={ExpenseTracker}
              title="Expense Tracker"
              description="An online expense tracker using React, Node, Express, and MongoDB as the database. It allows you to keep track of your expenses, investments, and savings. All past transactions are listed, and you can also delete them. "
              ghLink="#"
              demoLink="https://expense-tracker.rahuljha4171.vercel.app/"
            />
          </Col>
        </Row>
      </Container>
      <ScrollToTop />
    </Container>
  );
}

export default Projects;
