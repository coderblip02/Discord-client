import React, { useState, useRef } from "react";
import ChatBoxReciever, { ChatBoxSender } from "./ChatBox";
import InputBox from "./InputBox";
import socketIOClient from "socket.io-client";
import { useEffect } from "react";
import {
  doc,
  setDoc,
  collection,
  serverTimestamp,
  query,
  onSnapshot,
  orderBy,
} from "firebase/firestore";
import db from "../firebase";

function MainContent() {
  let socketio = socketIOClient("https://discord-clone-api-g397.onrender.com");
  const [chats, setChats] = useState([]);
  const [user, setUser] = useState(localStorage.getItem("user"));
  const [avatar, setAvatar] = useState(localStorage.getItem("avatar"));
  const chatsRef = collection(db, "Messages");

  useEffect(() => {
    socketio.on("chat", (senderChats) => {
      setChats(senderChats);
    });
  });

  useEffect(() => {
    const q = query(chatsRef, orderBy("createdAt", "asc"));

    const unsub = onSnapshot(q, (querySnapshot) => {
      const fireChats = [];
      querySnapshot.forEach((doc) => {
        fireChats.push(doc.data());
      });
      setChats([...fireChats]);
    });
    return () => {
      unsub();
    };
  }, []);
  function addToFirebase(chat) {
    const newChat = {
      avatar,
      createdAt: serverTimestamp(),
      user,
      message: chat.message,
    };
    const chatRef = doc(chatsRef);
    setDoc(chatRef, newChat)
      .then(() => console.log("Chat added successfully"))
      .catch(console.log);
  }
  function sendChatToSocket(chat) {
    socketio.emit("chat", chat);
  }

  function addMessage(chat) {
    const newChat = { ...chat, user, avatar };
    addToFirebase(chat);
    setChats([...chats, newChat]);
    sendChatToSocket([...chats, newChat]);
  }

  function ChatList() {
    return chats.map((chat, index) => {
      if (chat.user === user)
        return (
          <ChatBoxSender
            key={index}
            message={chat.message}
            avatar={chat.avatar}
            user={chat.user}
          />
        );
      return (
        <ChatBoxReciever
          key={index}
          message={chat.message}
          avatar={chat.avatar}
          user={chat.user}
        />
      );
    });
  }

  return (
    <div id="main-content">
      <header>
        <div className="header__text">
          <span>@</span>
          <p>Main Server </p>
          <div className="online-indicator" />
        </div>
        <div className="header__icons">
          <div className="header__icon">
            <i className="ri-video-fill" />
          </div>
          <div className="header__icon">
            <i className="ri-flag-2-fill" />
          </div>
          <div className="header__icon">
            <i className="ri-user-add-fill" />
          </div>
          <div className="header__icon">
            <i className="ri-question-fill" />
          </div>
          <div className="header__icon1">
            <input
              type="text"
              className="header__search"
              placeholder=" Search"
            />
          </div>
          <div className="header__icon">
            <i className="ri-inbox-archive-line" />
          </div>
          <div className="header__icon">
            <i className="ri-delete-bin-fill" />
          </div>
        </div>
      </header>
      <div className="messages__box">
        <ChatList />
      </div>
      <InputBox addMessage={addMessage} />
    </div>
  );
}

export default MainContent;
