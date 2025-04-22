import React from "react";
import { Chart as chartJS } from "chart.js/auto";
import { Bar, Doughnut, Line, } from "react-chartjs-2";
import { Container, Row, Col, Card } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Navbar from "../Component/Navbar.jsx";
import Spinner from "react-bootstrap/Spinner";


const Dashboard = () => {
  return (
    <>
      <Navbar />
      <br />

      <Container className="mt-5 p-3">
        <Row className="g-3">
          <Col md={6}>
            <Card className="user shadow p-3">
              <Card.Body>
                <Card.Title>Congratulations John! 🎉</Card.Title>
                <Card.Text>
                  You have done 68% 😎 more sales today. Check your new badge in
                  your profile.
                </Card.Text>
                <Button variant="danger" className="shadow">
                  View profile
                </Button>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={6} md={3}>
            <Card className=" user shadow p-3">
              <Card.Body>
                <i className="fa-solid fa-cart-plus fa-2x text-danger"></i>
                <Card.Title>Orders</Card.Title>
                <Card.Text>1,200</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={6} md={3}>
            <Card className="user shadow p-3">
              <Card.Body>
                <Spinner animation="border" variant="danger" />
                <Card.Title>Total sales</Card.Title>
                <Card.Text>$38.5k</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>

      <Container className="mt-3 p-3 mb-">
        <Row className="g-3">
          <Col md={6}>
            <Card className="shadow p-3">
              <Card.Body>
                <Card.Title>Revenue</Card.Title>
                <Card.Text>
                  <Bar
                    data={{
                      labels: ["A", "B", "C"],
                      datasets: [
                        {
                          label: "Revenue",
                          data: [200, 300, 400],
                        },
                        {
                          label: "loss",
                          data: [90, 80, 70],
                        },
                      ],
                    }}
                  />
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={6} md={3}>
            <Card className="shadow p-3">
              <Card.Body>
                <Card.Title>Average sales</Card.Title>
                <Card.Text>
                  <Doughnut
                    data={{
                      labels: ["A", "B", "C"],
                      datasets: [
                        {
                          label: "Revenue",
                          data: [200, 300, 400],
                        },
                        {
                          label: "loss",
                          data: [90, 80, 70],
                        },
                      ],
                    }}
                  />
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={6} md={3}>
            <Card className="shadow p-3">
              <Card.Body>
                <Card.Title>Performanace</Card.Title>
                <Card.Text>
                  <Line
                    data={{
                      labels: ["A", "B", "C"],
                      datasets: [
                        {
                          label: "Revenue",
                          data: [200, 300, 400],
                        },
                        {
                          label: "loss",
                          data: [90, 80, 70],
                        },
                      ],
                    }}
                  />
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Dashboard;
