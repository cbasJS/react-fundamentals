import React, { Component } from "react";

import PropTypes from "prop-types";

import firebase from "firebase";

import uuid from "uuid";

import MessagesList from "../MessagesList";
import InputText from "../InputText";
import ProfileBar from "../ProfileBar";

const propTypes = {
  user: PropTypes.object.isRequired,
  onLogout: PropTypes.func.isRequired
};

class Main extends Component {
  constructor(props) {
    super(props);
    this.user = this.props.user;
    this.onLogout = this.props.onLogout;
    this.state = {
      user: Object.assign({}, this.user, { retweets: [] }, { favorites: [] }),
      openText: false,
      userNameToReply: "",
      messages: []
    };
  }

  UNSAFE_componentWillMount() {
    this.getDataMessages();
  }

  getDataMessages = () => {
    const messagesRef = firebase
      .database()
      .ref()
      .child("messages");

    messagesRef.on("child_added", snapshot => {
      this.setState({
        messages: this.state.messages.concat(snapshot.val())
      });
      this.closeInput();
    });
  };

  closeInput = () =>
    this.setState(prevState => {
      return { openText: !prevState.openText };
    });

  handleOpenText = e => {
    e.preventDefault();
    this.closeInput();
  };

  handleSendText = e => {
    e.preventDefault();

    const messageRef = firebase
      .database()
      .ref()
      .child("messages");

    const messageID = messageRef.push();

    let tweetId = messageID.key;

    let newMessage = {
      id: uuid.v4(),
      idFirebase: tweetId,
      text: e.target.text.value,
      picture: this.user.photoURL,
      displayName: this.user.displayName,
      userName: this.user.email.split("@")[0],
      date: Date.now(),
      retweets: 0,
      favorites: 0
    };

    messageID.set(newMessage);
  };

  renderOpenText = () =>
    !this.state.openText || (
      <InputText
        onOpenText={this.handleOpenText}
        onSendText={this.handleSendText}
        userNameToReply={this.state.userNameToReply}
      />
    );

  handleOnReplyTweet = (msgId, userName) => {
    this.closeInput();
    this.setState({
      userNameToReply: userName
    });
  };

  handleAction = (idFirebase, whatObj) => {
    whatObj === "favorites"
      ? this.buildObjFavorites(idFirebase)
      : this.buildObjRetweets(idFirebase);

    let user = Object.assign({}, this.state.user);

    user.favorites.push(idFirebase);

    this.setState({
      user
    });
  };

  buildObjFavorites = idFirebase => {
    const db = firebase.database();
    const query = db.ref(`messages/${idFirebase}`);

    query.once("value", snapshot => {
      query.update({
        favorites:
          snapshot.val().favorites === 0
            ? (snapshot.val().favorites = snapshot.val().favorites + 1)
            : (snapshot.val().favorites = snapshot.val().favorites - 1)
      });
    });

    const messages = this.state.messages.map(msg => {
      msg.idFirebase === idFirebase &&
        (msg.favorites === 0 ? msg.favorites++ : msg.favorites--);
      return msg;
    });

    this.setState({ messages });
  };

  buildObjRetweets = idFirebase => {
    const db = firebase.database();
    const query = db.ref(`messages/${idFirebase}`);

    query.once("value", snapshot => {
      query.update({
        retweets:
          snapshot.val().retweets === 0
            ? (snapshot.val().retweets = snapshot.val().retweets + 1)
            : (snapshot.val().retweets = snapshot.val().retweets - 1)
      });
    });

    const messages = this.state.messages.map(msg => {
      msg.idFirebase === idFirebase &&
        (msg.retweets === 0 ? msg.retweets++ : msg.retweets--);
      return msg;
    });

    this.setState({ messages });
  };

  render() {
    return (
      <div>
        <ProfileBar
          picture={this.user.photoURL}
          username={this.user.email.split("@")[0]}
          onOpenText={this.handleOpenText}
          onLogount={this.onLogout}
        />
        {this.renderOpenText()}
        <MessagesList
          messages={this.state.messages}
          onAction={this.handleAction}
          onReplyTweet={this.handleOnReplyTweet}
        />
      </div>
    );
  }
}

Main.propTypes = propTypes;

export default Main;
