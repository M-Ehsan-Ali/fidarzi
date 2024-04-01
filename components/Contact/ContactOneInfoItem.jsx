import React from "react";
import cn from "classnames";

const ContactOneInfoItem = (props) => {
  return (
    <div className="contact-info-item">
      <div className="content">
        <p>{props.item.content}</p>
      </div>
    </div>
  );
};

export default ContactOneInfoItem;
