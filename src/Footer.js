import React from "react";
import styled from "styled-components";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import InstagramIcon from "@mui/icons-material/Instagram";

function Footer() {
  return (
    <>
      <Container>
        <One>
          <h1>Noxe</h1>
          <Symbols>
            <PersonOutlineOutlinedIcon
              sx={{ fontSize: 15 }}
              className="objects"
            />
            <FacebookOutlinedIcon sx={{ fontSize: 15 }} className="objects" />
            <InstagramIcon sx={{ fontSize: 15 }} className="objects" />
          </Symbols>
        </One>
        <Two>
          <h3>Pages</h3>
          <span>Home</span>
          <span>About us</span>
          <span>Studio</span>
          <span>Contact us</span>
        </Two>
        <Three>
          <h3>Our Services</h3>
          <span>Services</span>
          <span>Our works</span>
          <span>Noxe team</span>
          <span>History</span>
        </Three>
        <Four>
          <h3>Nexo Studio</h3>
          <span>
            The Nexo Filim studio 1418 Noxe street, sule 3845 california, USA
          </span>
        </Four>
      </Container>
    </>
  );
}

export default Footer;

const Container = styled.div`
  background-color: #000;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100%;
  color: #fff;
  padding-top: 40px;
  padding-bottom: 40px;
  border-top: 1px solid gray;
`;

const One = styled.div`
  width: 25%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-left: 65px;
  h1 {
    font-size: 30px;
  }
`;

const Two = styled.div`
  width: 25%;
  display: flex;
  flex-direction: column;
  margin-left: 60px;
  span {
    padding: 4px;
    font-size: 15px;
    color: gray;
  }
  h3 {
    font-size: 20px;
  }
`;

const Three = styled(Two)``;

const Four = styled.div`
  width: 25%;
  display: flex;
  flex-direction: column;
  span {
    width: 50%;
    padding: 4px;
    font-size: 15px;
    color: gray;
  }
`;
const Symbols = styled.div`
  display: flex;
  flex-direction: row;
  .objects {
    padding: 10px;
  }
`;
