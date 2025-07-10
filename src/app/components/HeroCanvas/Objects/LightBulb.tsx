import { useFrame } from "@react-three/fiber";
import React from "react";
import * as THREE from "three";

const LightBulb = () => {
    useFrame(() => { 

    });


	return (
			<mesh position={[5, 1, 5]} castShadow>
				<pointLight intensity={10} color={"yellow"} />
				<sphereGeometry args={[0.5]} />
				<meshStandardMaterial color={"white"} />
			</mesh>
	);
};

export default LightBulb;
