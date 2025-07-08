"use client";
import React from "react";
import { Canvas } from "@react-three/fiber";

const HeroCanvas = () => {
	return (
		<div className="absolute top-0 h-svh w-svw">
			<Canvas camera={{ position: [2, 15, 15], fov: 50 }} shadows>
				<ambientLight intensity={0.3} />
				<directionalLight />
				<mesh position={[7, 2, 0]}>
					<sphereGeometry args={[2]} />
					<meshPhongMaterial color={"red"} />
				</mesh>
				<mesh rotation={[-Math.PI / 2, 0, 0]}>
					<planeGeometry args={[100, 100, 100, 100]} />
					<meshStandardMaterial wireframe color={"white"} />
				</mesh>
			</Canvas>
		</div>
	);
};

export default HeroCanvas;
