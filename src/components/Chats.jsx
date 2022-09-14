import React from "react";

const Chats = () => {
  const pp =
    "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60";
  return (
    <div className="chats">
      <div className="userChat">
        <img src={pp} alt="" />
        <div className="userChatInfo">
          <span>Jane</span>
          <p>hello!</p>
        </div>
      </div>
      <div className="userChat">
        <img src={pp} alt="" />
        <div className="userChatInfo">
          <span>Jane</span>
          <p>hello!</p>
        </div>
      </div>
      <div className="userChat">
        <img src={pp} alt="" />
        <div className="userChatInfo">
          <span>Jane</span>
          <p>hello!</p>
        </div>
      </div>
    </div>
  );
};

export default Chats;
