import React from "react";

import PropTypes from "prop-types";

import "./inputText.css";

const propTypes = {
  userNameToReply: PropTypes.string,
  onSendText: PropTypes.func.isRequired,
  onOpenText: PropTypes.func.isRequired
};

const InputText = props => {
  const { onSendText, onOpenText, userNameToReply } = props;
  return (
    <form className="form" onSubmit={onSendText}>
      <textarea
        className="textArea"
        name="text"
        defaultValue={userNameToReply ? `@${userNameToReply}` : ""}
      />
      <div className="buttonsInput">
        <button className="btn-close" onClick={onOpenText}>
          Cerrar
        </button>
        <button className="btn-send" type="submit">
          Enviar
        </button>
      </div>
    </form>
  );
};

InputText.propTypes = propTypes;

export default InputText;
