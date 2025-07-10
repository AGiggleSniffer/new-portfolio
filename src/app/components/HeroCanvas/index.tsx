"use client";
import React from "react";
import { Canvas } from "@react-three/fiber";
import LightBulb from "./Objects/LightBulb";
import PlaneObj from "./Objects/PlaneObj";
import SphereObj from "./Objects/SphereObj";

const HeroCanvas = () => {
	return (
		<div className="absolute top-0 h-svh w-svw">
			<Canvas camera={{ position: [0, 15, 15], fov: 50 }} shadows>
				<ambientLight intensity={0.5} color={"white"} />
				<LightBulb />
				<SphereObj />
				<PlaneObj />
			</Canvas>
		</div>
	);
};

export default HeroCanvas;
