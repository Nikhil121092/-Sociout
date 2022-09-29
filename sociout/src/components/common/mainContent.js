import React from "react";
//import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import VideoCameraBackOutlinedIcon from '@mui/icons-material/VideoCameraBackOutlined';
import AddToPhotosOutlinedIcon from '@mui/icons-material/AddToPhotosOutlined';
import EmojiEmotionsOutlinedIcon from '@mui/icons-material/EmojiEmotionsOutlined';
import "../mainContent.css";

//const MainContent = (_props) => {
  
  function MainContent() {
    const handlesubmit = (e) => {
        e.preventDefault();
    };

    return (
        <div className="MainContent">
            <div className="MainContent_top" >
                <form>
                  <img className="img" src="img_avatar.png" alt="Avatar"></img> 
                    < input 
                      className="MainContent_input" 
                      placeholder="What's happening?"/>
                </form>
            </div>
            <div className="MainContent_bottom">
              <div className="MainContent_options">
                < VideoCameraBackOutlinedIcon style={{color:'bdbdbd',padding:'4px'}} />
                <h6>Live Video</h6>
              </div>  
              <div className="MainContent_options">
                < AddToPhotosOutlinedIcon style={{color:'bdbdbd',padding:'4px'}} />
                <h6>Photo/Video</h6>
              </div>  
              <div className="MainContent_options">
                < EmojiEmotionsOutlinedIcon style={{color:'bdbdbd',padding:'4px'}} /> 
                <h6>Feeling</h6>
              </div> 
              <div>
              <button className = "button" onclick = {handlesubmit} type="submit" > Post </button>
              
              </div>
            </div>
        </div>
    )
    
  };   

export default MainContent;