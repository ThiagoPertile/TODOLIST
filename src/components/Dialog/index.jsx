import { Children, useEffect, useRef } from "react";
import "./dialog.styles.css";
import { IconClose } from "../icons";

export function Dialog({ isOpen, onClose, children }) {
  const dialogRef = useRef(null);

  useEffect(() => {
    console.log("deveriamos mostar o modal?", isOpen);
    if (isOpen) {
      openDialog();
    } else {
      closeDialog();
    }
  }, [isOpen]);

  // "Show the dialog" button opens the dialog modally
  const openDialog = () => {
    dialogRef.current.showModal();
  };

  // "Close" button closes the dialog
  const closeDialog = () => {
    dialogRef.current.close();
  };

  return (
    <>
      <dialog ref={dialogRef}>
        <div className="btn-close-wrapper">
          <button 
            autoFocus 
            onClick={onClose}
            className="btn-close"
            >
              <IconClose />
          </button>
        </div>
        <div className="body">
        {children}
        </div>
      </dialog>
    </>
  );
}
