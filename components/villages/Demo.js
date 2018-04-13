import React from 'react';
import ReactDOM from 'react-dom';

import Header from './neighborhoods/Header';
import Footer from './neighborhoods/Footer';

class Demo extends React.Component {
  render() {
    return (
      <div className="demo">
        <Header
          messages={true}
          title="Chat Bot Demo"
          subtitle="Watch how it works."
        />
        <Footer />
      </div>
    );
  }
}

module.exports = Demo;
