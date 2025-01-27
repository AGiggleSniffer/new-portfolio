"use client";
import React from "react";
import { Canvas } from "@react-three/fiber";

const HeroCanvas = () => {
	return (
		<div className="absolute top-0 -z-10 h-svh w-svw">
			<div className="absolute size-64 top-1/2 right-1/4">
				<Canvas>
					<ambientLight intensity={0.3} />
					<directionalLight />
					<mesh>
						<sphereGeometry args={[2]}  />
						<meshPhongMaterial color={"red"} />
					</mesh>
				</Canvas>
			</div>
		</div>
	);
};

export default HeroCanvas;
