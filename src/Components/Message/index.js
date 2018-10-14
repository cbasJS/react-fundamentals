import React from "react";

import moment from "moment";

import "./message.css";

const Message = props => {
  const {
    txt,
    picture,
    displayName,
    userName,
    date,
    numFavorites,
    numRetweets,
    onReplyTweet,
    onRetweet,
    onFavorite
  } = props;

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
        <div className="icon" onClick={onReplyTweet}>
          <i className="fa fa-reply" />
        </div>
        <div className={numRetweets > 0 ? "rtGreen" : null} onClick={onRetweet}>
          <i className="fa fa-retweet" />
          <span className="numMessage">{numRetweets}</span>
        </div>
        <div
          className={numFavorites > 0 ? "favYellow" : null}
          onClick={onFavorite}
        >
          <i className="fa fa-star" />
          <span className="numMessage">{numFavorites}</span>
        </div>
      </div>
    </div>
  );
};

export default Message;
