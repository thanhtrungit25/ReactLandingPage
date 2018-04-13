import React from 'react';
import ReactDOM from 'react-dom';
import * as firebase from 'firebase';

// Initialize Firebase
const config = {
  apiKey: 'AIzaSyAUuPfN8wCu-UxRkNecUdSRTaze5tqjQmg',
  authDomain: 'push-message-and-notification.firebaseapp.com',
  databaseURL: 'https://push-message-and-notification.firebaseio.com',
  projectId: 'push-message-and-notification',
  storageBucket: 'push-message-and-notification.appspot.com',
  messagingSenderId: '95213489831'
};
firebase.initializeApp(config);
const database = firebase.database();
const user = database.ref('user');

class UserMessage extends React.Component {
  constructor() {
    super();
    this.state = {
      avatar: '',
      username: '',
      message: '',
      showComponent: false
    };
  }
  componentDidMount() {
    let firebaseAvatar;
    let firebaseUsername;
    let firebaseMessage;

    let promise1 = new Promise((resolve, reject) => {
      user.on('value', function(snapshot) {
        firebaseAvatar = snapshot.val().avatar;
        resolve(firebaseAvatar);
      });
    });
    // more stuff
    let promise2 = new Promise((resolve, reject) => {
      user.on('value', function(snapshot) {
        firebaseUsername = snapshot.val().username;
        resolve(firebaseUsername);
      });
    });
    let promise3 = new Promise((resolve, reject) => {
      user.on('value', function(snapshot) {
        firebaseMessage = snapshot.val().message;
        resolve(firebaseMessage);
      });
    });
    Promise.all([promise1, promise2, promise3]).then(values => {
      this.setState({
        avatar: values[0],
        username: values[1],
        message: values[2]
      });
      console.log(values);
    });

    setTimeout(() => {
      this.setState({ showComponent: true });
    }, 3000);
  }

  render() {
    const showComponent = this.state.showComponent;

    return (
      <div>
        {showComponent ? (
          <div className="user-message">
            <div
              style={{ background: this.state.avatar }}
              className="user-avatar"
            >
              <div className="username">{this.state.username}</div>
              <div className="message">{this.state.message}</div>
            </div>
          </div>
        ) : (
          <div />
        )}
      </div>
    );
  }
}

module.exports = UserMessage;
