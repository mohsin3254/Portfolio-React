import React from "react";

const EmailIcon = () => {
  const redirectToEmail = () => {
    window.location.href = "mailto:thisismohsinnawaz@outlook.com";
  };
  return (
    <div>
      {/* Your email icon */}
      <i className="fas fa-envelope" onClick={redirectToEmail}></i>
    </div>
  );
};
export default EmailIcon;
