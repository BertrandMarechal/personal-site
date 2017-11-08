declare var THREE: any;

const coef = 0.35;
const coefZ = 0.2;
const idxLerp = 0.0;
const maxHead=0.61;
const minHead=0.25;

export class HeadtrackerHead {
  x: number;
  z: number;
  w: number;
  h: number;
  wM: number;
  hM: number;
  currentPosition: any;
  targetPosition: any;
  currentScale: any;
  targetScale: any;
  timeUpd: number;
  timeUpdLerp: number;

  constructor(w?: number, h?: number) {
    this.wM = w;
    this.hM = h;
  	this.currentPosition = new THREE.Vector3();
  	this.targetPosition = new THREE.Vector3();
  	this.currentScale = new THREE.Vector3();
  	this.targetScale = new THREE.Vector3();
    let d = new Date();
    let n = d.getTime();

  	this.timeUpd=n;
  	this.timeUpdLerp=n;
  }


	update(p_x ,p_y,p_w, p_h) {
		this.targetPosition.x=p_x;
		this.targetPosition.y=p_y;
		this.targetScale.x=p_w;
		this.targetScale.y=p_h;
		this.targetPosition.z=this.targetScale.x/this.wM;
	}
	getZ() {
		var value = (this.targetPosition.z-minHead)*2.0/(maxHead-minHead)-1.0;
		return value*coefZ;
	}
	getY() {
		return -1.0*(this.targetPosition.y-this.hM/2.0)/this.hM*coef;
	}
	getX() {
		return (this.targetPosition.x-this.wM/2.0)/this.wM*coef;
	}
}
