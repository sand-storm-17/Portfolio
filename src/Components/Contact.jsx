import React from "react";
import { useRef } from "react";
import styled from "styled-components";

const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  @media only screen and (max-width: 768px){
    width:100%;
    scroll-snap-align: none;
  }
`;
const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: space-between;
  gap: 50px;
`;
const Left = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  flex: 1;
  @media only screen and (max-width: 768px){
    justify-content: center;
  }
`;
const Title = styled.h1`
  font-weight: 200;
`;
const Form = styled.form`
  width: 400px;
  display: flex;
  flex-direction: column;
  gap: 25px;
`;
const Input = styled.input`
  border-radius: 5px;
  background-color: white;
  padding: 20px;
  border: none;
`;
const TextInput = styled.textarea`
  border: none;
  padding: 20px;
`;
const Button = styled.button`
  padding: 20px;
  border: none;
  cursor: pointer;
  color: white;
  background-color: #da43a2;
`;

const Right = styled.div`
  flex: 1;
  @media only screen and (max-width: 768px){
    display:none;
  }
`;

// const ref = useRef();

const handleSubmit = (e) => {
  e.preventDefault();
}

export const Contact = () => {
  return (
    <Section>
      <Container>
        <Left>
          <Form onSubmit={handleSubmit}>
            <Title>Contact Us</Title>
            <Input placeholder="Name"></Input>
            <Input placeholder="Email"></Input>
            <TextInput placeholder="Write your message here" rows={10}></TextInput>
            <Button type="submit">Send</Button>
          </Form>
        </Left>
        <Right></Right>
      </Container>
    </Section>
  );
};
