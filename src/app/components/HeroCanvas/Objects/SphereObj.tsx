import React from "react";

const SphereObj = () => {
	return (
		<mesh position={[7, 2, 0]}>
			<sphereGeometry args={[2]} />
			<meshPhongMaterial color={"red"} />
		</mesh>
	);
};

export default SphereObj;
