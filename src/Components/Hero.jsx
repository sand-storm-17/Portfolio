import React from "react";
import styled from "styled-components";
import { Navbar } from "./Navbar";
import { MeshDistortMaterial, OrbitControls, Sphere } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";

const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  @media only screen and (max-width: 768px){
    height: 200vh;
    scroll-snap-align: none;
  }
`;

const Container = styled.div`
  scroll-snap-align: center;
  height: 100%;
  display: flex;
  width: 1400px;
  justify-content: space-between;
  align-items: center;
  @media only screen and (max-width: 768px){
    width: 100%;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    scroll-snap-align: none;
  }
`;
const Left = styled.div`
  display: flex;
  flex: 2;
  flex-direction: column;
  gap: 20px;
  @media only screen and (max-width: 768px){
    flex:1;
    align-items: center;
    justify-content: center;
  }
`;

const Title = styled.h1`
  font-size: 70px;
  @media only screen and (max-width: 768px){
    text-align: center;
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
  @media only screen and (max-width: 768px){
    text-align: center;
    padding: 20px;
  }
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

const Right = styled.div`
  flex: 3;
  position: relative;
  height: 80vh;
  @media only screen and (max-width: 768px){
    flex:1;
    width: 100%;
  }
`;

const Img = styled.img`
  width: 800px;
  height: 600px;
  object-fit: contain;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  margin: auto;
  animation: animate 2s infinite ease alternate;
  @media only screen and (max-width: 768px){
    width:300px;
    height:300px;
  }

  @keyframes animate {
    to {
      transform: translateY(30px);
    }
  }
`;

export const Hero = () => {
  return (
    <Section>
      <Navbar />
      <Container>
        <Left>
          <Title>Think. Make. Solve.</Title>
          <WhatWeDo>
            <Line src="./img/line.png" />
            <Subtitle>What we Do</Subtitle>
          </WhatWeDo>
          <Desc>we enjoy creating delightful, human centered products</Desc>
          <Button>Learn More</Button>
        </Left>
        <Right>
          <Canvas>
            <OrbitControls enableZoom={false} />
            <ambientLight intensity={1.5} />
            <directionalLight position={[1, 2, 1]} />
            <Sphere args={[1, 100, 200]} scale={1.5}>
              <MeshDistortMaterial
                color="#4a226b"
                attach="material"
                distort={0.5}
                speed={2}
              />
            </Sphere>
          </Canvas>
          <Img src="./img/moon.png"/>
        </Right>
      </Container>
    </Section>
  );
};
