import React from "react";
import { Avatar } from "@mui/material";
import "../mainContent.css";
import axios from "axios";
import { useState } from "react";

function MainContent() {
  const [content, setContent] = useState(0);

  const handlesubmit = (e) => {
    e.preventDefault();
    (async () => {
      await axios
        .post("https://jsonplaceholder.typicode.com/posts", {
          userId: 12,
          title: "Indumathy's Post",
          body: content,
        })
        .then(function (response) {
          alert("Successful");
          console.log(response.data);
        })
        .catch(function (error) {
          console.log(error);
        });
    })();
  };

  const handleChange = (e) => {
    setContent(e.target.value);
  };

  return (
    <div className="MainContent">
      <div className="MainContent_top">
        <form>
          <Avatar
            sx={{ width: 30, height: 30 }}
            src="https://images.pexels.com/photos/846741/pexels-photo-846741.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          >
            {" "}
          </Avatar>
          <input
            onChange={handleChange}
            className="MainContent_input"
            placeholder="What's happening?"
          />
        </form>
      </div>
      <div className="MainContent_bottom">
        <div alignItems="right">
          <button className="button" onClick={handlesubmit} type="submit">
            {" "}
            Post{" "}
          </button>
        </div>
      </div>
    </div>
  );
}

export default MainContent;