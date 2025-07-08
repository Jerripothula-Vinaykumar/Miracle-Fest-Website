import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function CustomDialog() {
  const [visible, setVisible] = useState(true);
  const navigate = useNavigate();

  const handleClose = () => {
    setVisible(false);
    navigate("/SignupContent");
  };

  if (!visible) return null;

  return (
    <div className="dialog-overlay">
      <div className="dialog-box">
        <div className="dialog-header">
          <h3>Custom Dialog</h3>
          <button className="dialog-close-x" onClick={() => handleClose()}>
            &times;
          </button>
        </div>
        <div className="dialog-body">
          <p>This is a custom dialog box that appears by default.</p>
          <p>It stays visible until you click the Close button.</p>
        </div>
        <div className="dialog-footer">
          <button className="dialog-close-btn" onClick={() => handleClose()}>
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
