import React from "react";

const PlaneObj = () => {
	return (
		<mesh name="floor" rotation={[-Math.PI / 2, 0, 0]}>
			<planeGeometry args={[70, 70, 30, 30]} />
			<meshPhongMaterial wireframe color={"white"} />
		</mesh>
	);
};

export default PlaneObj;
