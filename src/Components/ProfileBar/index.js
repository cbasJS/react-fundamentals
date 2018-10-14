import React from "react";

import PropTypes from "prop-types";

import { Link } from "react-router-dom";

import "./profileBar.css";

const propTypes = {
  picture: PropTypes.string,
  username: PropTypes.string,
  onOpenText: PropTypes.func,
  onLogount: PropTypes.func.isRequired
};

const ProfileBar = props => {
  const { picture, username, onOpenText, onLogount } = props;
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
      <button className="buttonProfile" onClick={onLogount}>
        <li className="fa fa-sign-out" /> Salir
      </button>
    </div>
  );
};

ProfileBar.propTypes = propTypes;

export default ProfileBar;
