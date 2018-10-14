import React from "react";

import PropTypes from "prop-types";

import "./stylesProfile.css";

const propTypes = {
  picture: PropTypes.string,
  displayName: PropTypes.string,
  username: PropTypes.string,
  emailAddress: PropTypes.string,
  location: PropTypes.string
};

const Profile = props => {
  const { picture, displayName, username, emailAddress, location } = props;
  return (
    <div className="rootProfileRoute">
      <img className="avatarProfileRoute" src={picture} alt="Avatar" />
      <span className="nameProfileRoute">{displayName}</span>
      <ul className="dataProfileRoute">
        <li>
          <span className="fa fa-user" />
          {username}
        </li>
        <li>
          <span className="fa fa-envelope" />
          {emailAddress}
        </li>
        <li>
          <span className="fa fa-map-marker" />
          {location}
        </li>
      </ul>
    </div>
  );
};

Profile.propTypes = propTypes;

export default Profile;
