'use client';

/* eslint-disable react/no-unknown-property */
import { Text, RoundedBox, PerspectiveCamera, OrbitControls, Stars } from '@react-three/drei';
import { Canvas, useFrame } from '@react-three/fiber';
import { useRef, useMemo } from 'react';

import type * as THREE from 'three';

function Card() {
	const mesh = useRef<THREE.Group>(null);

	const shaderArgs = useMemo(
		() => ({
			uniforms: {
				time: { value: 0 },
			},
			vertexShader: `
		varying vec2 vUv;
		varying vec3 vNormal;
		void main() {
		  vUv = uv;
		  vNormal = normal;
		  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
		}
	  `,
			fragmentShader: `
		uniform float time;
		varying vec2 vUv;
		varying vec3 vNormal;
		
		float noise(vec2 p) {
		  return fract(sin(dot(p, vec2(12.9898, 78.233))) * 43758.5453);
		}
		
		void main() {
		  vec3 lightDir = normalize(vec3(1.0, 1.0, 1.0));
		  vec3 normal = normalize(vNormal);
		  
		  float noiseValue = noise(vUv * 50.0 + time * 0.1);
		  vec3 normalOffset = vec3(noiseValue * 0.1 - 0.05);
		  normal += normalOffset;
		  normal = normalize(normal);
		  
		  float diffuse = max(dot(normal, lightDir), 0.0);
		  vec3 baseColor = vec3(0.23, 0.1, 0.7);
		  vec3 highlightColor = vec3(0.3, 0.4, 0.5);
		  gl_FragColor = vec4(mix(baseColor, highlightColor, diffuse + noiseValue * 0.1), 1.0);
		}
	  `,
		}),
		[],
	);

	useFrame((state) => {
		if (mesh.current) mesh.current.rotation.y = Math.sin(state.clock.elapsedTime) * 0.2;
	});

	return (
		<group ref={mesh}>
			<RoundedBox args={[3.5, 5, 0.1]} radius={0.1} smoothness={4}>
				<shaderMaterial args={[shaderArgs]} attach="material" />
			</RoundedBox>
			<Text
				anchorX="center"
				anchorY="middle"
				color="#C0C0C0"
				// font="https://fonts.gstatic.com/s/roboto/v27/KFOlCnqEu92Fr1MmSU5vAw.ttf"
				fontSize={0.4}
				position={[0, 2, 0.06]}
			>
				Parbez
			</Text>
			<Text
				anchorX="center"
				anchorY="middle"
				color="#C0C0C0"
				// font="https://fonts.gstatic.com/s/roboto/v27/KFOmCnqEu92Fr1Mu4mxK.ttf"
				fontSize={0.4}
				position={[0, 0.5, 0.06]}
			>
				Imran Barbhuiya
			</Text>
			<Text
				anchorX="center"
				anchorY="middle"
				color="#A0A0A0"
				// font="https://fonts.gstatic.com/s/roboto/v27/KFOlCnqEu92Fr1MmSU5vAw.ttf"
				fontSize={0.1}
				position={[0, 0, 0.06]}
				textAlign="center"
			>
				{`I'm a passionate Full Stack Developer
			with a strong drive for innovation
			and continuous learning.`}
			</Text>
			<Text
				anchorX="center"
				anchorY="middle"
				color="#A0A0A0"
				// font="https://fonts.gstatic.com/s/roboto/v27/KFOlCnqEu92Fr1MmSU5vAw.ttf"
				fontSize={0.15}
				position={[0, -2, 0.06]}
			>
				FullStack Web and Mobile Developer
			</Text>
		</group>
	);
}

export default function Component() {
	return (
		<div className="h-screen w-full bg-black">
			<Canvas>
				<color args={['#000000']} attach="background" />
				<PerspectiveCamera makeDefault position={[0, 0, 6]} />
				<ambientLight intensity={0.5} />
				<pointLight intensity={0.8} position={[10, 10, 10]} />
				<Card />
				<Stars count={5_000} depth={50} factor={4} fade radius={100} saturation={0} speed={1} />
				<OrbitControls enableZoom={false} />
			</Canvas>
		</div>
	);
}
