import React from "react";

import { PerspectiveCamera, RenderTexture, Text } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";

export const Cube = () => {
  const textRef = useRef();
  useFrame((state) => (textRef.current.position.x = Math.sin(state.clock.elapsedTime)*2));
  return (
    <mesh>
      <boxGeometry/>
      <meshStandardMaterial>
        <RenderTexture attach="map">
          <PerspectiveCamera makeDefault position={[0, 0, 5]} />
          <color attach="background" args={["pink"]} />
          <Text ref={textRef} fontSize={1} color="purple">
            Hello
          </Text>
        </RenderTexture>
      </meshStandardMaterial>
    </mesh>
  );
};
