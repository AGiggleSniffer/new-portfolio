import React from "react";

const PlaneObj = () => {
	return (
		<mesh rotation={[-Math.PI / 2, 0, 0]}>
			<planeGeometry args={[100, 100, 100, 100]} />
			<meshStandardMaterial wireframe color={"white"} />
		</mesh>
	);
};

export default PlaneObj;
