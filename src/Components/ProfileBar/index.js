import React from "react";

import PropTypes from "prop-types";

import { Link } from "react-router-dom";

import "./profileBar.css";

const propTypes = {
  picture: PropTypes.string,
  username: PropTypes.string,
  onOpenText: PropTypes.func
};

const ProfileBar = props => {
  const { picture, username, onOpenText } = props;
  let profileLink = "/profile";
  return (
    <div className="rootProfile">
      <Link to={profileLink}>
        <figure>
          <img className="avatarProfile" src={picture} alt="Profile avatar" />
        </figure>
      </Link>
      <span className="usernameProfile">Hola @{username}</span>
      <button onClick={onOpenText} className="buttonProfile">
        <span className="fa fa-lg fa-edit" /> Tweet!
      </button>
    </div>
  );
};

ProfileBar.propTypes = propTypes;

export default ProfileBar;
