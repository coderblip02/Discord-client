import React, { useState } from "react";

import "../App.css";
import SidebarLeft from "./SidebarLeft";
import SidebarRight from "./SidebarRight";
import "remixicon/fonts/remixicon.css";
import MainContent from "./MainContent";
import Username from "./Username";

function MainServer() {
  const [user, setUser] = useState(localStorage.getItem("user"));
  const [avatar, setAvatar] = useState(localStorage.getItem("avatar"));
  return (
    <div id="container">
      {user ? (
        <>
          <SidebarLeft />
          <SidebarRight />
          <MainContent />
        </>
      ) : (
        <Username setUser={setUser} />
      )}
    </div>
  );
}

export default MainServer;
