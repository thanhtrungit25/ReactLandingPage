import React from 'react';
import ReactDOM from 'react-dom';
import { Container, Row, Col } from 'react-grid-system';
import Header from './neighborhoods/Header';
import SectionA from './neighborhoods/Section A';
import SectionB from './neighborhoods/Section B';
import SectionC from './neighborhoods/Section C';
import Footer from './neighborhoods/Footer';

class LandingPage extends React.Component {
  render() {
    return (
      <div className="landing-page">
        <Header
          messages={false}
          title="Developer Bot for Slack"
          subtitle="One article to one random person in your Slack group. Once a day."
        />
        <SectionA />
        <SectionB />
        <SectionC
          title="Developer Bot for Slack"
          subtitle="One article to one random person in your Slack group. Once a day."
        />
        <Footer />
      </div>
    );
  }
}

module.exports = LandingPage;
