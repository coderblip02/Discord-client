import React from "react";

export default function ChatBoxReciever({ user, message, avatar }) {
  return (
    <div className="message__box">
      <div className="message__image">
        <img className="bottom__img" src={avatar} alt="" />
      </div>
      <div className="message__text__text">
        <div className="message__username">
          <p>{user}</p>
          <p className="message__text1">{message}</p>
        </div>
      </div>
    </div>
  );
}
export function ChatBoxSender({ user, message, avatar }) {
  return (
    <div className="message__box">
      <div className="message__image">
        <img className="bottom__img" src={avatar} alt="" />
      </div>
      <div className="message__text__text">
        <div className="message__username">
          <p>{user}</p>
          <p className="message__text1">{message}</p>
        </div>
      </div>
    </div>
  );
}
