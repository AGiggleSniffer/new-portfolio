"use client";
import React from "react";
import { Canvas } from "@react-three/fiber";
// import { Plane, PlaneGeometry, Vector3 } from "three";

const HeroCanvas = () => {
	// const planeRef = useRef();
	// const myPlane = new Plane(new Vector3(0, 1, 0), 0);
	return (
		<div className="absolute top-0 -z-10 h-svh w-svw">
			<Canvas>
				<ambientLight intensity={0.3} />
				<directionalLight />
				<mesh>
					<sphereGeometry args={[2]} />
					<meshPhongMaterial wireframe color={"red"} />
				</mesh>
				<mesh></mesh>
				{/* <planeHelper args={[myPlane]} /> */}
			</Canvas>
		</div>
	);
};

export default HeroCanvas;
