import React from "react";

import "./inputText.css";

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

export default InputText;
