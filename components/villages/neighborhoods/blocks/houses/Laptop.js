import React from 'react';
import ReactDOM from 'react-dom';
import { Container, Row, Col } from 'react-grid-system';

class Laptop extends React.Component {
  render() {
    return (
      <Col lg={12}>
        <img className="laptop" src="./images/Laptop.svg" />
      </Col>
    );
  }
}

module.exports = Laptop;
