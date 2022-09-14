import React from "react";

const Message = () => {
  const pp =
    "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60";
  return (
    <div className="message">
      <div className="messageInfo">
        <img src={pp} alt="" />
        <span>just now</span>
      </div>
      <div className="messageContent">
        <p>hello</p>
        <img src={pp} alt="" />
      </div>
    </div>
  );
};

export default Message;
