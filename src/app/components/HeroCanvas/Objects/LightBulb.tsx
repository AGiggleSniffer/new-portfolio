import { PickHelper } from "@/Helpers/PickHelper";
import { Html } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import React, { useEffect, useRef, useState } from "react";
import * as THREE from "three";

const LightBulb = () => {
	const scene = useThree((state) => state.scene);
	const camera = useThree((state) => state.camera);
	const mouse = useThree((state) => state.pointer);
	// const time = useThree((state) => state.clock);
	const pickHelper = new PickHelper();

	useFrame(() => {
		pickHelper.pick(
			mouse,
			scene,
			camera,
			// time.getElapsedTime(),
		);
	});

	return (
		<mesh name="lightBulb" position={[5, 1, 5]} castShadow>
			<pointLight intensity={10} color={"yellow"} />
			<sphereGeometry args={[0.5]} />
			<meshPhongMaterial color={"white"} />
			<Annotation position={[1,1,1]}>
				<span>Hello!</span>
			</Annotation>
		</mesh>
	);
};

function Annotation({ children, ...props }) {
	return (
		<Html
			{...props}
			transform
			occlude="blending"
			geometry={
				/** The geometry is optional, it allows you to use any shape.
				 *  By default it would be a plane. We need round edges here ...
				 */
				<planeGeometry args={[1.66, 0.47, 0.24]} />
			}
		>
			<div className="annotation" onClick={() => console.log(".")}>
				{children}
			</div>
		</Html>
	);
}
  

export default LightBulb;
