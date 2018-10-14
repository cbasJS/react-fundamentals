import React from "react";

import { Link } from "react-router-dom";

import PropTypes from "prop-types";

import moment from "moment";

import "./message.css";

const propTypes = {
  date: PropTypes.number,
  numFavorites: PropTypes.number,
  numRetweets: PropTypes.number,
  txt: PropTypes.string,
  picture: PropTypes.string,
  displayName: PropTypes.string,
  userName: PropTypes.string,
  onReplyTweet: PropTypes.func,
  onRetweet: PropTypes.func,
  onFavorite: PropTypes.func
};

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

  let userLink = `/user/${userName}`;

  return (
    <div className="rootMessage">
      <div className="user">
        <Link to={userLink}>
          <figure>
            <img className="avatar" src={picture} alt="Avatar" />
          </figure>
        </Link>
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

Message.propTypes = propTypes;

export default Message;
