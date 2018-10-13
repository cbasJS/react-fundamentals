import React from "react";

import moment from "moment";

import "./message.css";

const Message = props => {
  const { txt, picture, displayName, userName, date } = props;
  let dateFormat = moment(date).fromNow();
  return (
    <div className="rootMessage">
      <div className="user">
        <figure>
          <img className="avatar" src={picture} alt="Avatar" />
        </figure>
        <span className="displayName">{displayName}</span>
        <span className="userName">{userName}</span>
        <span className="date">{dateFormat}</span>
      </div>
      <h3>{txt}</h3>
      <div className="buttons">
        <div className="icon">
          <i className="fa fa-reply" />
        </div>
        <div className="icon">
          <i className="fa fa-retweet" />
        </div>
        <div className="icon">
          <i className="fa fa-star" />
        </div>
      </div>
    </div>
  );
};

export default Message;