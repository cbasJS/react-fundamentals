import React from "react";

import PropTypes from "prop-types";

import Message from "../Message";

import "./messagesList.css";

const propTypes = {
  messages: PropTypes.array.isRequired,
  onRetweet: PropTypes.func,
  onFavorite: PropTypes.func,
  onReplyTweet: PropTypes.func
};

const MessagesList = props => {
  const { messages, onAction, onReplyTweet } = props;

  const messagesData = () =>
    messages.map(result => (
      <Message
        key={result.id}
        txt={result.text}
        picture={result.picture}
        displayName={result.displayName}
        userName={result.userName}
        date={result.date}
        numRetweets={result.retweets}
        numFavorites={result.favorites}
        onRetweet={() => onAction(result.idFirebase, "retweets")}
        onFavorite={() => onAction(result.idFirebase, "favorites")}
        onReplyTweet={() => onReplyTweet(result.id, result.userName)}
      />
    ));

  return <div className="rootLista">{messagesData()}</div>;
};

MessagesList.propTypes = propTypes;

export default MessagesList;
