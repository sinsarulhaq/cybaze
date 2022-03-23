import React from "react";
import styled from "styled-components";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import InstagramIcon from "@mui/icons-material/Instagram";

function Header() {
  return (
    <Container>
      <Wrap>
        <Left>
          <Logo>Noxe</Logo>
          <Menu>
            <MenuItem>Home</MenuItem>
            <MenuItem>Pages</MenuItem>
            <MenuItem>Movies</MenuItem>
            <MenuItem>TV shows</MenuItem>
            <MenuItem>Celebs</MenuItem>
            <MenuItem>Blogs</MenuItem>
          </Menu>
        </Left>
        <PersonOutlineOutlinedIcon sx={{ fontSize: 30 }} />
        <SearchOutlinedIcon sx={{ fontSize: 30 }} />
        <FacebookOutlinedIcon sx={{ fontSize: 20 }} />
        <InstagramIcon sx={{ fontSize: 20 }} />
      </Wrap>
    </Container>
  );
}

export default Header;

const Container = styled.div`
  height: 70px;
  background-color: #000;
  color: #fff;
`;
const Wrap = styled.div`
  padding: 5px 20px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;
const Left = styled.div`
  width: 60%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  letter-spacing: 2px;
  padding-left: 2px;
`;

const Menu = styled.div`
  display: flex;
  list-style: none;
  margin: 10px 5px;
  padding: 10px;
  @media only screen and (max-width: 480px) {
    display: none;
  }
`;
const Logo = styled.h1`
  font-size: 20px;
  font-weight: 700;
  margin-right: 5px;
  font-family: "Poppins", sans-serif;
`;
const MenuItem = styled.li`
  margin-right: 30px;
  font-size: 14px;
`;
