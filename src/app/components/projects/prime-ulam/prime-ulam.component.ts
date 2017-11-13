import { Component, OnInit, ViewChild } from '@angular/core';
import { ProjectsUlamService } from '../../../services/projects-ulam.service';
import * as THREE from 'three';
var OrbitControls = require('three-orbit-controls')(THREE)

const RIGHT: number = 1;
const UP: number = 2;
const LEFT: number = 3;
const DOWN: number = 4;
const FRONT: number = 5;
const BACK: number = 6;

@Component({
  selector: 'app-prime-ulam',
  templateUrl: './prime-ulam.component.html',
  styleUrls: ['./prime-ulam.component.css'],
  providers: [
    ProjectsUlamService
  ]
})
export class PrimeUlamComponent implements OnInit {
  @ViewChild('canvasRenderer') canvasRenderer:any;
  scene: THREE.Scene;
  renderer: THREE.Renderer;
  clock: THREE.Clock;
  camera: THREE.Camera;
  controls: THREE.OrbitControls;
  ratio: number;

  geometry: THREE.BufferGeometry = new THREE.BufferGeometry();
  numPoints: number;
  positions: any;
  colors: any;
  pointSize: number = 1;
  spiral: any;
  color: THREE.Color = new THREE.Color(0,0,0.5);
  colorPrime: THREE.Color = new THREE.Color(0,1,1);
  color1: THREE.Color = new THREE.Color(1,1,1);
  rotateY: THREE.Matrix4 = new THREE.Matrix4().makeRotationY( 0.005 );


  constructor(
    private ulamService: ProjectsUlamService
  ) { }

  ngOnInit() {
    this.drawUlam(1000);
    this.ratio = 1.0;
  }
  isPrime(a){
     if(a == 2) return true;
     if(a <= 1 || a % 2 == 0) return false;
     let max = Math.sqrt(a);
     for(let n = 3; n <= max; n += 2){
  	  if(a % n == 0) return false;
     }
     return true;
  }

  drawPoint(p_prime,p_i,p_x,p_y){
  	this.positions[ 3 * p_i ] = p_x;
  	this.positions[ 3 * p_i + 1 ] = 0;
  	this.positions[ 3 * p_i + 2 ] = p_y;

  	let intensity = (p_prime)?5:2;
  	if(p_prime){
  		intensity=5;
  		this.colors[ 3 * p_i ] = this.colorPrime.r * intensity;
  		this.colors[ 3 * p_i + 1 ] = this.colorPrime.g * intensity;
  		this.colors[ 3 * p_i + 2 ] = this.colorPrime.b * intensity;
  	}
  	else if(p_i>1){
  		intensity=0.5;
  		this.colors[ 3 * p_i ] = this.color.r * intensity;
  		this.colors[ 3 * p_i + 1 ] = this.color.g * intensity;
  		this.colors[ 3 * p_i + 2 ] = this.color.b * intensity;
  	}
  	else{
  		intensity=5;
  		this.colors[ 3 * p_i ] = this.color1.r * intensity;
  		this.colors[ 3 * p_i + 1 ] = this.color1.g * intensity;
  		this.colors[ 3 * p_i + 2 ] = this.color1.b * intensity;
  	}
  }
  onWindowResize() {
  	this.camera.aspect = this.ratio ;
  	this.camera.updateProjectionMatrix();
    let rendererWidth = Math.min(this.canvasRenderer.nativeElement.clientWidth,600);
    this.renderer.setSize( rendererWidth,rendererWidth );
  }

  drawUlam(pointCount){

  	let container = document.getElementById( 'container' );
  	this.scene = new THREE.Scene();
  	// this.clock = new THREE.Clock();
  	this.camera = new THREE.PerspectiveCamera( 45, this.ratio , 1, 10000 );
  	this.camera.applyMatrix( new THREE.Matrix4().makeTranslation( -1,0,20 ) );
  	this.camera.applyMatrix( new THREE.Matrix4().makeRotationX( -0.5 ) );
  	this.renderer = new THREE.WebGLRenderer({ canvas: this.canvasRenderer.nativeElement});
    // this.renderer.autoClear = false;
  	this.renderer.setPixelRatio( this.ratio );
    let rendererWidth = 600;//Math.min(this.canvasRenderer.nativeElement.clientWidth,600);
    console.log(rendererWidth)
    this.renderer.setSize( rendererWidth,rendererWidth );
  	container.appendChild( this.renderer.domElement );
  	//controls de la this.camera
  	this.controls = new OrbitControls( this.camera, this.renderer.domElement );
  	this.controls.damping = 0.2;
  	this.controls.target=new THREE.Vector3(-1,0,0);
  	this.controls.noPan=true;
  	this.controls.maxPolarAngle=Math.PI/2.0;
    this.controls.addEventListener( 'change', this.render.bind(this) );
    // this.renderer.setClearColor(0xEEEEEE);

  	window.addEventListener( 'resize', this.onWindowResize.bind(this), false );

  	let numPoints = pointCount*pointCount;

  	this.positions = new Float32Array( numPoints*3 );
  	this.colors = new Float32Array( numPoints*3 );


  	let dir = RIGHT;
  	this.spiral=new Array(pointCount+1);
  	for(let i=0;i<pointCount+1;i++){
  		this.spiral[i]=new Array(pointCount);
  	}



  	let i=1,j=0;
  	let y = (pointCount % 2 == 0)?pointCount / 2:pointCount / 2-0.5;
  	let x = (pointCount % 2 == 0) ? y - 1 : y; //shift left for even n's
  	let l_ok;
  	while(i<(pointCount*pointCount)+1){
  		l_ok=this.isPrime(i);

  		this.spiral[y][x]=l_ok;
  		this.drawPoint(l_ok,i,x,y);
  		switch(dir){
  		case RIGHT:
  			if(x <= (pointCount - 1) && typeof this.spiral[y - 1][x] == 'undefined') dir = UP; break;
  		case UP:
  			if(typeof this.spiral[y][x - 1] == 'undefined') dir = LEFT; break;
  		case LEFT:
  			if(x == 0 || typeof this.spiral[y + 1][x] == 'undefined') dir = DOWN; break;
  		case DOWN:
  			if(typeof this.spiral[y][x + 1] == 'undefined') dir = RIGHT; break;
  		}

  		switch(dir){
  			case RIGHT:	x++; break;
  			case UP: 	y--; break;
  			case LEFT:	x--; break;
  			case DOWN:	y++; break;
  			// case FRONT:	z++; break;
  			// case BACK:	z--; break;
  		}
  		i++;
  	}

  	this.geometry.addAttribute( 'position', new THREE.Float32BufferAttribute( this.positions, 3 ) );
  	this.geometry.addAttribute( 'color', new THREE.Float32BufferAttribute( this.colors, 3 ) );

  	let material = new THREE.PointsMaterial( { size: this.pointSize, vertexColors: THREE.VertexColors } );
  	let pointcloud = new THREE.Points( this.geometry, material );

  	pointcloud.position.set( -pointCount/2.0,0,-pointCount/2.0 );
  	// pointcloud.scale.set( 10/(pointCount/2.0),10/(pointCount/2.0),10/(pointCount/2.0) );
    console.log("drawUlam done")
    console.log(this.colorPrime,this.color,this.color1)
  	this.scene.add( pointcloud );
    this.render();
  	// this.animate();

  }

  animate() {
  	requestAnimationFrame( this.animate.bind(this) );
  	this.render();
  }
  render(){
  	this.camera.updateMatrixWorld();
  	this.renderer.render( this.scene, this.camera );
  }
}
