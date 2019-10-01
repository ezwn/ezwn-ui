import React, { useState } from "react";
import ReactDOM from "react-dom";
import ModalContext from "./Modal.context";

import "./ModalOutput.cmp.css";

const ModalOutputCmp = props => {
  const { content } = props;

  if (!content) return <div />;

  return ReactDOM.createPortal(
    <ModalContext.Consumer>
      {showModal => (
        <div className="modal-background" onClick={() => showModal(null)}>
          <div className="modal prim-vr" onClick={e => e.stopPropagation()}>
            {content}
          </div>
        </div>
      )}
    </ModalContext.Consumer>,
    document.getElementById("modalOutput")
  );
};

export const ModalProviderCmp = ({ children }) => {
  const [content, showModal] = useState(null);

  return (
    <ModalContext.Provider value={showModal}>
      <ModalOutputCmp content={content} />
      {children}
    </ModalContext.Provider>
  );
};
