import React, { useState } from "react";

const avatarImages = [
  "https://i.pinimg.com/originals/c0/0c/76/c00c76da98b5f555235669365db1fe18.jpg",
  "https://i.pinimg.com/736x/34/ea/20/34ea20e0747020c021677987211a6353.jpg",
  "https://i.pinimg.com/originals/65/83/a6/6583a6366d5aadbbf6f910c6be84c20f.jpg",
  "https://i0.wp.com/thetechhacker.com/wp-content/uploads/2020/07/How-To-Unblock-Someone-On-Discord.jpg?fit=1000%2C640&ssl=1",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBp4pfTILwVql1nLYf5FeSrrBmEhcbxgozPTyGb6cSODbR3nS7RwvSuTAd5GNcUSxU-ds&usqp=CAU",
  "https://discordhub.com/static/img/universal/user.png?q=1546848040",
  // add more image URLs here
];

const Username = ({ setUser }) => {
  const [user, setAUser] = useState("");

  function handleSetUser() {
    if (!user) return;
    const randomIndex = Math.floor(Math.random() * avatarImages.length);
    const avatar = avatarImages[randomIndex];
    localStorage.setItem("user", user);
    setUser(user);
    localStorage.setItem("avatar", avatar);
  }
  return (
    <div className="user-store-container">
      <div className="user-store-box">
        <div className="user-store-image-box">
          <img
            src="https://assets-global.website-files.com/6257adef93867e50d84d30e2/636e0b544a3e3c7c05753bcd_full_logo_white_RGB.png"
            alt=""
            className="user-store-image-box-image"
          />
        </div>
        <div className="user-store-text">
          <p>Customize username</p>
        </div>
        <div className="login-input-box">
          <label>USERNAME</label>
          <input
            value={user}
            onChange={(e) => setAUser(e.target.value)}
            type="text"
            placeholder="Type a random username"
            required
          />
        </div>
        <div className="login-button">
          <button onClick={() => handleSetUser()}>Go to main server</button>
        </div>
        <div className="login-image-3">
          <img
            src="https://assets-global.website-files.com/6257adef93867e50d84d30e2/62a3425c743f0e94a4c75635_1.svg"
            alt=""
            className="login-display-image-3"
          />
        </div>
      </div>
    </div>
  );
};

export default Username;
