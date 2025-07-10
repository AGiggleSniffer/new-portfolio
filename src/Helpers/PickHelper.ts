import * as THREE from "three";

export class PickHelper {
	raycaster: THREE.Raycaster;
	pickedObject: null | THREE.Object3D;
	pickedObjectSavedColor: number;

	constructor() {
		this.raycaster = new THREE.Raycaster();
		this.pickedObject = null;
		this.pickedObjectSavedColor = 0;
	}

	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	private isMeshWithEmissiveAndBulb(obj: any): obj is THREE.Mesh & { material: { emissive: THREE.Color } } {
		return (
			obj &&
			obj.isMesh &&
			obj.material &&
			obj.material.emissive &&
			obj.name === "lightBulb"
		);
	}

	pick(
		normalizedPosition: THREE.Vector2,
		scene: { children: THREE.Object3D<THREE.Object3DEventMap>[] },
		camera: THREE.Camera,
		// time: number,
	) {
		// restore the color if there is a picked object
		if (this.pickedObject && this.isMeshWithEmissiveAndBulb(this.pickedObject)) {
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
			if (this.isMeshWithEmissiveAndBulb(this.pickedObject)) {
				// save its color
				this.pickedObjectSavedColor =
					this.pickedObject.material.emissive.getHex();
				// set its emissive color to flashing pickedObjectSavedColor/white
				// this.pickedObject.material.emissive.setHex(
				// 	(time * 3) % 2 > 1 ? 0xffffff : this.pickedObjectSavedColor,
				// );
				this.pickedObject.material.emissive.setHex(0xffffff);
			}

			if (intersectedObjects.find(obj => {
				return obj.object.name === "floor"
			})) {
				const floor = intersectedObjects.find(obj => {
					return obj.object.name === "floor"
				})

				if (this.isMeshWithEmissiveAndBulb(this.pickedObject) && floor) {
					this.pickedObject.position.setX(floor.point.x);
					this.pickedObject.position.setY(floor.point.y);
					this.pickedObject.position.setZ(floor.point.z);
				}
			}
		}
	}
}
