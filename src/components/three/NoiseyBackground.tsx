'use client'

import { ReactElement, useRef } from 'react';
import { ShaderMaterial, Color } from 'three';
import { shaderMaterial } from '@react-three/drei';
import { Canvas, extend, useFrame } from '@react-three/fiber';
import vertexShader from './shaders/vertex.glsl';
import fragmentShader from './shaders/fragment.glsl';

declare global {
  namespace JSX {
    interface IntrinsicElements {
      noiseyMaterial: any;
    }
  }
}

const colorsArray = ['#3F3244', '#284B63', '#F87060'];
const colors = colorsArray.map((color) => new Color(color));

const NoiseyMaterial = shaderMaterial(
  { time: 0, uColor: colors },
  vertexShader,
  fragmentShader,
);

extend({ NoiseyMaterial });

const NoiseyEffect = (): ReactElement => {
  const materialRef = useRef<ShaderMaterial>(null);

  useFrame(() => {
    if (materialRef.current) {
      materialRef.current.uniforms.time.value += 0.0002;
    }
  });

  return (
    <mesh>
      <planeGeometry args={[20, 10, 100, 100]} />
      <noiseyMaterial ref={materialRef} attach='material' />
    </mesh>
  );
};

const NoiseyBackground = (): ReactElement => {
  return (
    <div className='absolute left-0 -z-[1] w-full h-full'>
      <Canvas>
        <NoiseyEffect />
      </Canvas>
    </div>
  );
};

export default NoiseyBackground;
