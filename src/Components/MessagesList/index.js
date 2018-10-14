import React from "react";

import Message from "../Message";

import "./messagesList.css";

const MessagesList = props => {
  const { messages, onRetweet, onFavorite, onReplyTweet } = props;

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
        onRetweet={() => onRetweet(result.id, "retweets")}
        onFavorite={() => onFavorite(result.id, "favorites")}
        onReplyTweet={() => onReplyTweet(result.id, result.userName)}
      />
    ));

  return <div className="rootLista">{messagesData()}</div>;
};

export default MessagesList;
