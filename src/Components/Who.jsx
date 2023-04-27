import React from "react";
import styled from "styled-components";
import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Cube } from "./Cube";

const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  display: flex;
  justify-content: center;
  @media only screen and (max-width: 768px){
    width:100%;
    scroll-snap-align: none;
  }
`;

const Container = styled.div`
  height: 100vh;
  display: flex;
  width: 1400px;
  align-items: center;
  @media only screen and (max-width: 768px){
    width:100%;
    scroll-snap-align: none;
  }
`;
const Left = styled.div`
  flex:1;
  height: 800px;
  @media only screen and (max-width: 768px){
    display: none;
  }
`;

const Right = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 20px;
  @media only screen and (max-width: 768px){
    text-align: center;
    align-items: center;
    padding: 20px;
  }
`;

const Title = styled.h1`
  font-size: 70px;
  @media only screen and (max-width: 768px){
    font-size: 60px;
  }
`;
const WhatWeDo = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;
const Line = styled.img`
  height: 5px;
`;
const Subtitle = styled.h2`
  color: #da43a2;
`;
const Desc = styled.p`
  font-size: 24px;
`;
const Button = styled.button`
  background-color: #da43a2;
  border-radius: 5px;
  cursor: pointer;
  width: 120px;
  padding: 10px;
  border: none;
  color: white;
`;

export const Who = () => {
  return (
    <Section>
      <Container>
        <Left>
          <Canvas camera={{fov: 75, postion:[10,10,10]}}>
            <OrbitControls enableZoom={false} autoRotate />
            <ambientLight intensity={1} />
            <directionalLight position={[3, 2, 1]} />
            <Cube />
          </Canvas>
        </Left>
        <Right>
          <Title>Think outside the Space</Title>
          <WhatWeDo>
            <Line src="./img/line.png" />
            <Subtitle>Who am I</Subtitle>
          </WhatWeDo>
          <Desc>
            a developer with a keen interest in learning new technologies
          </Desc>
          <Button>See my works</Button>
        </Right>
      </Container>
    </Section>
  );
};
