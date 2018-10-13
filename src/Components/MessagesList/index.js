import React from "react";

import Message from "../Message";

import "./messagesList.css";

const MessagesList = props => {
  const { messages } = props;

  const messagesData = () =>
    messages.map((result, index) => (
      <Message
        key={index}
        txt={result.text}
        picture={result.picture}
        displayName={result.displayName}
        userName={result.userName}
        date={result.date}
      />
    ));

  return <div className="rootLista">{messagesData()}</div>;
};

export default MessagesList;
