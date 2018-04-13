import React from 'react';
import ReactDOM from 'react-dom';
import { Container, Row, Col } from 'react-grid-system';

class Divider extends React.Component {
  render() {
    return (
      <div>
        <hr className="divider" />
      </div>
    );
  }
}

module.exports = Divider;
