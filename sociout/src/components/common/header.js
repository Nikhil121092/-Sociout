import styled from "@emotion/styled";
import { AppBar, Avatar, InputBase, Toolbar, Typography, Menu, MenuItem } from "@mui/material";
import React, { useState }  from "react";

const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between"
})

const Search = styled("div")(({ theme }) => ({
  backgroundColor: "white",
  padding: "0 10px",
  width: "40%",
}));

const UserBox = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: "10px",
}));

const Header = () => {
  const [open, setOpen] = useState(false);
  return (
    <AppBar sx={{ backgroundColor: "white"}} position="sticky">
      <StyledToolbar>
        <Typography variant="h6" sx={{ color: "black"}}>MeetMax</Typography>
        <Search><InputBase placeholder="Search for something here..."></InputBase></Search>
        <UserBox >
          <Typography variant="span" sx={{ color: "black"}}>Saleh Ahmed</Typography>
          <Avatar
            sx={{ width: 30, height: 30 }}
            src="https://images.pexels.com/photos/846741/pexels-photo-846741.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            onClick={(e) => setOpen(true)}>

          </Avatar>
        </UserBox>
      </StyledToolbar>
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        open={open}
        onClose={(e) => setOpen(false)}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
      >
        <MenuItem>Profile</MenuItem>
        <MenuItem>Logout</MenuItem>
      </Menu>
    </AppBar>
  );
};

export default Header;
