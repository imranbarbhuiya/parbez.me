/* eslint-disable react/no-unknown-property */
'use client';

import { OrbitControls, Sphere, MeshDistortMaterial, Points, PointMaterial, Text3D, Center } from '@react-three/drei';
import { Canvas, useFrame, extend } from '@react-three/fiber';
import React, { useRef, useMemo, useEffect } from 'react';
import { type Mesh, type Group, type Object3DEventMap, type Points as ThreePoints } from 'three';
import { FontLoader } from 'three/addons/loaders/FontLoader.js';
import { TextGeometry } from 'three/examples/jsm/geometries/TextGeometry.js';

extend({ TextGeometry });

function ParticleBackground() {
	const ref = useRef<ThreePoints>(null);
	const particleCount = 2_000;
	const particles = useMemo(() => {
		const temp = [];
		for (let i = 0; i < particleCount; i++) {
			const x = (Math.random() - 0.5) * 20;
			const y = (Math.random() - 0.5) * 20;
			// eslint-disable-next-line id-length
			const z = (Math.random() - 0.5) * 20;
			temp.push(x, y, z);
		}
		return new Float32Array(temp);
	}, []);

	useFrame((_state, delta) => {
		if (!ref.current) return;
		ref.current.rotation.x -= delta / 20;
		ref.current.rotation.y -= delta / 25;
		const positions = ref.current.geometry.attributes.position.array;
		for (let i = 0; i < positions.length; i += 3) {
			positions[i] += (Math.random() - 0.5) * 0.01;
			positions[i + 1] += (Math.random() - 0.5) * 0.01;
			positions[i + 2] += (Math.random() - 0.5) * 0.01;
		}
		ref.current.geometry.attributes.position.needsUpdate = true;
	});

	return (
		<group rotation={[0, 0, Math.PI / 4]}>
			<Points frustumCulled={false} positions={particles} ref={ref} stride={3}>
				<PointMaterial color="#fff" depthWrite={false} size={0.02} sizeAttenuation transparent />
			</Points>
		</group>
	);
}

function AnimatedSphere() {
	const mesh = useRef<Mesh>(null);
	useFrame((_state, delta) => {
		if (!mesh.current) return;
		mesh.current.rotation.x += delta * 0.25;
		mesh.current.rotation.y += delta * 0.25;
	});

	return (
		<Sphere args={[1, 100, 200]} ref={mesh} scale={2.5} visible>
			<MeshDistortMaterial
				attach="material"
				color="#8352FD"
				distort={0.3}
				opacity={0.8}
				roughness={0}
				speed={1.5}
				transparent
			/>
		</Sphere>
	);
}

function Title() {
	const mesh = useRef<Mesh>(null);
	useFrame((state) => {
		if (mesh.current) mesh.current.rotation.y = Math.sin(state.clock.elapsedTime) * 0.2;
	});

	return (
		<group position={[0, 0.5, 0]}>
			<Center>
				<Text3D curveSegments={12} font="/fonts/helvetiker_regular.typeface.json" height={0.1} ref={mesh} size={0.5}>
					Imran Barbhuiya
					<meshStandardMaterial color="#ffffff" />
				</Text3D>
			</Center>
		</group>
	);
}

function SocialIcon({
	position,
	scale,
	url,
	children,
}: {
	readonly children: React.ReactNode;
	readonly position: [number, number, number];
	readonly scale: number;
	readonly url: string;
}) {
	const mesh = useRef<Group<Object3DEventMap>>(null);
	useFrame((state) => {
		if (mesh.current) mesh.current.rotation.y = Math.sin(state.clock.elapsedTime) * 0.2;
	});

	return (
		<group position={position} ref={mesh} scale={scale}>
			<mesh onClick={() => window.open(url, '_blank')}>
				{children}
				<meshStandardMaterial color="#ffffff" />
			</mesh>
		</group>
	);
}

export default function HeroSection() {
	useEffect(() => {
		const loader = new FontLoader();

		loader.load('/fonts/helvetiker_regular.typeface.json');
	}, []);
	return (
		<div className="relative h-screen w-full">
			<Canvas className="absolute inset-0">
				<color args={['#000000']} attach="background" />
				<ambientLight intensity={0.5} />
				<spotLight angle={0.15} penumbra={1} position={[10, 10, 10]} />
				<pointLight position={[-10, -10, -10]} />
				<ParticleBackground />
				<group position={[0, 0, -1]}>
					<AnimatedSphere />
					<Title />
					<SocialIcon position={[-1, -0.8, 0]} scale={0.3} url="https://github.com/imranbarbhuiya">
						<Text3D curveSegments={12} font="/fonts/helvetiker_regular.typeface.json" height={0.2} size={1}>
							Github
						</Text3D>
					</SocialIcon>
					<SocialIcon position={[1, -0.8, 0]} scale={0.3} url="https://x.com/notparbez">
						<Text3D curveSegments={12} font="/fonts/helvetiker_regular.typeface.json" height={0.2} size={1}>
							X
						</Text3D>
					</SocialIcon>
				</group>
				<OrbitControls enableZoom={false} />
			</Canvas>
		</div>
	);
}
