import React from "react";
import styled from "styled-components";

const Section = styled.div`
  display: flex;
  justify-content: center;
  @media only screen and (max-width: 768px){
    width:100%;
  }
`;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 1400px;
  padding: 10px 0px;
  @media only screen and (max-width: 768px){
    width:100%;
    padding: 20px 10px;
  }
`;

const Links = styled.div`
  display: flex;
  gap: 50px;
  
`;

const Logo = styled.img`
  height: 50px;
`;

const List = styled.ul`
  display: flex;
  gap: 20px;
  align-items: center;
  @media only screen and (max-width: 768px){
    display: none;
  }
`;

const ListItem = styled.li`
  list-style: none;
  cursor: pointer;
`;

const Icons = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;
`;

const Icon = styled.img`
  cursor: pointer;
  height: 20px;
`;

const Button = styled.button`
  background-color: #da43a2;
  border-radius: 5px;
  cursor: pointer;
  width: 100px;
  padding: 10px;
  border: none;
  color: white;
`;

export const Navbar = () => {
  return (
    <Section>
      <Container>
        <Links>
          <Logo src="./img/logo.png" />
          <List>
            <ListItem>Home</ListItem>
            <ListItem>Studio</ListItem>
            <ListItem>Works</ListItem>
            <ListItem>Contact</ListItem>
          </List>
        </Links>
        <Icons>
          <Icon src="./img/search.png" />
          <Button>Hire Now</Button>
        </Icons>
      </Container>
    </Section>
  );
};
