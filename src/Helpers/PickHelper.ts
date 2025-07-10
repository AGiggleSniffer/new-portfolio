import * as THREE from "three";

export class PickHelper {
	raycaster: THREE.Raycaster;
	pickedObject: null | THREE.Object3D<THREE.Object3DEventMap>;
	pickedObjectSavedColor: number;

	constructor() {
		this.raycaster = new THREE.Raycaster();
		this.pickedObject = null;
		this.pickedObjectSavedColor = 0;
    }
    
	pick(
		normalizedPosition: THREE.Vector2,
		scene: { children: THREE.Object3D<THREE.Object3DEventMap>[] },
		camera: THREE.Camera,
		time: number,
	) {
		// restore the color if there is a picked object
		if (this.pickedObject) {
			this.pickedObject.material.emissive.setHex(
				this.pickedObjectSavedColor,
			);
			this.pickedObject = null;
		}

		// cast a ray through the frustum
		this.raycaster.setFromCamera(normalizedPosition, camera);
		// get the list of objects the ray intersected
		const intersectedObjects = this.raycaster.intersectObjects(
			scene.children,
		);
		if (intersectedObjects.length) {
			// pick the first object. It's the closest one
			this.pickedObject = intersectedObjects[0].object;
			// save its color
			this.pickedObjectSavedColor =
				this.pickedObject.material.emissive.getHex();
			// set its emissive color to flashing red/yellow
			this.pickedObject.material.emissive.setHex(
				(time * 8) % 2 > 1 ? 0xffff00 : 0xff0000,
			);
		}
	}
}
