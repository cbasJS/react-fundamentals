import React, { Component } from "react";

import PropTypes from "prop-types";

import uuid from "uuid";

import MessagesList from "../MessagesList";
import InputText from "../InputText";
import ProfileBar from "../ProfileBar";

const propTypes = {
  user: PropTypes.object.isRequired
};

class Main extends Component {
  constructor(props) {
    super(props);
    this.user = this.props.user;
    this.state = {
      user: Object.assign({}, this.user, { retweets: [] }, { favorites: [] }),
      openText: false,
      userNameToReply: "",
      messages: [
        {
          id: uuid.v4(),
          text: "Mensaje del Tweet",
          picture: "https://avatars3.githubusercontent.com/u/28812706?s=40&v=4",
          displayName: "Sebastian Martha",
          userName: "sebas.martha",
          date: Date.now() - 180000,
          retweets: 0,
          favorites: 0
        },
        {
          id: uuid.v4(),
          text: "Otro mensaje del Tweet",
          picture: "https://avatars3.githubusercontent.com/u/28812706?s=40&v=4",
          displayName: "Brenda Beatriz",
          userName: "brenda.beatriz",
          date: Date.now() - 1800000,
          retweets: 0,
          favorites: 0
        }
      ]
    };
  }

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
    let newMessage = {
      id: uuid.v4(),
      text: e.target.text.value,
      picture: this.user.photoUrl,
      displayName: this.user.displayName,
      userName: this.user.email.split("@")[0],
      date: Date.now(),
      retweets: 0,
      favorites: 0
    };

    this.setState({ messages: this.state.messages.concat(newMessage) });
    this.closeInput();
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

  handleAction = (msgId, whatObj) => {
    let messages =
      whatObj === "favorites"
        ? this.buildObjFavorites()
        : this.buildObjRetweets();

    let user = Object.assign({}, this.state.user);

    user.favorites.push(msgId);
    this.setState({
      messages,
      user
    });
  };

  handleAction = (msgId, whatObj) => {
    let messages =
      whatObj === "favorites"
        ? this.buildObjFavorites(msgId)
        : this.buildObjRetweets(msgId);

    let user = Object.assign({}, this.state.user);

    user.favorites.push(msgId);
    this.setState({
      messages,
      user
    });
  };

  buildObjFavorites = msgId =>
    this.state.messages.map(msg => {
      msg.id === msgId &&
        (msg.favorites === 0 ? msg.favorites++ : msg.favorites--);
      return msg;
    });

  buildObjRetweets = msgId =>
    this.state.messages.map(msg => {
      msg.id === msgId &&
        (msg.retweets === 0 ? msg.retweets++ : msg.retweets--);
      return msg;
    });

  render() {
    return (
      <div>
        <ProfileBar
          picture={this.user.photoUrl}
          username={this.user.email.split("@")[0]}
          onOpenText={this.handleOpenText}
        />
        {this.renderOpenText()}
        <MessagesList
          messages={this.state.messages}
          onFavorite={this.handleAction}
          onRetweet={this.handleAction}
          onReplyTweet={this.handleOnReplyTweet}
        />
      </div>
    );
  }
}

Main.propTypes = propTypes;

export default Main;
