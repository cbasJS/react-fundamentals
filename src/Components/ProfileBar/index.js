import React from "react";

import "./profileBar.css";

const ProfileBar = props => {
  const { picture, username, onOpenText } = props;
  return (
    <div className="rootProfile">
      <figure>
        <img className="avatarProfile" src={picture} alt="Profile avatar" />
      </figure>
      <span className="usernameProfile">Hola @{username}</span>
      <button onClick={onOpenText} className="buttonProfile">
        <span className="fa fa-lg fa-edit" /> Tweet!
      </button>
    </div>
  );
};

export default ProfileBar;
