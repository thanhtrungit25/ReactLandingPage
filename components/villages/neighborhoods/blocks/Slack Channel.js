import React from 'react';
import ReactDOM from 'react-dom';
import { Container, Row, Col } from 'react-grid-system';
import UserMessage from './houses/User Message';
import ChatBotMessage from './houses/Chat Bot Message';

class SlackChannel extends React.Component {
  render() {
    const messages = this.props.messages;
    return (
      <Col lg={12}>
        <img className="slack-channel" src="./images/Slack Channel.svg" />
        {messages ? (
          // render messages is true (demo)
          <div>
            <UserMessage />
            <ChatBotMessage />
          </div>
        ) : (
          // render nothing
          <div />
        )}
      </Col>
    );
  }
}

module.exports = SlackChannel;
