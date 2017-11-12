import { Component, OnInit, OnDestroy, ViewChild, AfterViewInit } from '@angular/core';
import { HeadtrackerHead } from '../../../../models/headtracker-head';
import { HeadtrackerScene } from '../../../../models/headtracker-scene';
import { HeadtrackerService } from '../../../../services/headtracker.service';


declare var THREE: any;
declare var headtrackr: any;

@Component({
  selector: 'app-headtracker',
  templateUrl: './headtracker.component.html',
  styleUrls: ['./headtracker.component.css']
})
export class HeadtrackerComponent implements OnInit, OnDestroy, AfterViewInit {
  scene: any;
  statusMessages = {
    "whitebalance" : "Checking for stability of camera whitebalance",
    "detecting" : "Detecting face",
    "hints" : "Hmm. Detecting the face is taking a long time",
    "redetecting" : "Lost track of face, redetecting",
    "lost" : "Lost track of face",
    "found" : "Tracking face"
  };

  supportMessages = {
    "no getUserMedia" : "Unfortunately, <a href='http://dev.w3.org/2011/webrtc/editor/getusermedia.html'>getUserMedia</a> is not supported in your browser. Try <a href='http://www.opera.com/browser/'>downloading Opera 12</a> or <a href='http://caniuse.com/stream'>another browser that supports getUserMedia</a>. Now using fallback video for facedetection.",
    "no camera" : "No camera found. Using fallback video for facedetection."
  };
  @ViewChild('video') video:any;
  @ViewChild('canvas') canvas:any;
  @ViewChild('canvasRenderer') canvasRenderer:any;
  @ViewChild('cadre') cadre:any;
  videoWidth: number;
  videoHeight: number;
  videoRatio: number;
  supportMessage: string;
  head: HeadtrackerHead;
  htracker: any;

  container: any;
  sceneCube: any;
  clock: any;
  camera: any;
  renderer: any;
  run = false;
  planes: any[] = [];

  yAxis = new THREE.Vector3(0,1,0);
  xAxis = new THREE.Vector3(1,0,0);

  cadreBorderLeftWidth: number = 100;
  cadreBorderRightWidth: number = 100;

  //centre loookat
  center = new THREE.Vector3(0,0,0);
  vecteurHead = new THREE.Vector3(0,0,0);

  constructor(
    private headtrackerService: HeadtrackerService
  ) { }

  ngOnInit() {
    this.videoWidth = 320;
    this.videoHeight = 240;
    this.videoRatio = this.videoWidth / this.videoHeight;
  }
  ngAfterViewInit() {
    setTimeout(() => {
      this.head = new HeadtrackerHead();
      // var trackerTask;
      let videoInput = this.video.nativeElement;
      let canvasInput = this.canvas.nativeElement;
      this.head = new HeadtrackerHead(this.videoWidth,this.videoHeight);

      document.addEventListener("headtrackrStatus", (event: any) => {
        if (this.supportMessages[event.status]) {
          this.supportMessage = this.supportMessages[event.status];
        } else if (this.statusMessages[event.status]) {
          this.supportMessage = this.statusMessages[event.status];
        }
      }, true);



      this.htracker = new headtrackr.Tracker({altVideo : {ogv : "./media/capture5.ogv", mp4 : "./media/capture5.mp4"}, calcAngles : false, ui : false, headPosition : false});
      this.htracker.init(videoInput, canvasInput);/**/
      this.htracker.start();
      document.addEventListener("facetrackingEvent", ( event: any ) => {
        // once we have stable tracking, draw rectangle
        if (event.detection == "CS") {
          this.head.update( event.x ,event.y,event.width, event.height);
        }
      });

      this.initGl();
      this.animateGL();

    },50);
  }
  stopVideo() {
    let video = this.video.nativeElement;
    video.pause();
    video.src = "";
    if (this.htracker.stream) {
      let tracks = this.htracker.stream.getTracks();
      tracks.forEach(function(track) {
        track.stop();
      });
    }
  }
  ngOnDestroy() {
    this.stopVideo();
    console.log('ngOnDestroy')
  }
  initGl() {
  	this.container = document.getElementById( 'container' );

  	this.scene = new THREE.Scene();
  	this.sceneCube = new THREE.Scene();
  	this.clock = new THREE.Clock();
  	this.camera = new THREE.PerspectiveCamera( 45, this.videoRatio, 0.01, 100 );
  	this.camera.applyMatrix( new THREE.Matrix4().makeTranslation( 10,10,10 ) );
  	this.renderer = new THREE.WebGLRenderer({ canvas: this.canvasRenderer.nativeElement});
  	this.renderer.autoClear = false;
  	this.renderer.setPixelRatio( window.devicePixelRatio );
    this.resizeRenderer();
  	this.container.appendChild( this.renderer.domElement );

  	//

  	let directionalLight = new THREE.PointLight( 0xffffff, 1.0 );
  	directionalLight.position.set( 1, 5, -5 );
  	this.scene.add( directionalLight );

  	this.load(0);

  	window.addEventListener( 'resize', this.onWindowResize.bind(this), false );
  	document.addEventListener( 'keydown', this.onDocumentKeyDown.bind(this), false );
  	this.onWindowResize();
  }
  onWindowResize() {

  	this.camera.aspect = this.videoRatio;
  	this.camera.updateProjectionMatrix();
  	// let ratio = rendererWidth/this.cadre.nativeElement.clientHeight;

    this.cadreBorderLeftWidth = this.videoRatio * 100;
    this.cadreBorderRightWidth = this.videoRatio * 100;
    this.resizeRenderer();
  }
  resizeRenderer() {
    let rendererWidth = Math.min(this.cadre.nativeElement.clientWidth,600);
    this.renderer.setSize( rendererWidth, (rendererWidth - 100) / this.videoRatio );
  }
  animateGL() {
  	requestAnimationFrame( this.animateGL.bind(this) );
  	this.render();
  }
  render() {
  	this.center=new THREE.Vector3(0,0,0);
  	let l_cameraVector=new THREE.Vector3(0,0,-.001);
  	this.vecteurHead.set(this.head.getX(),this.head.getY(),this.head.getZ());

  	l_cameraVector.add(this.vecteurHead);
  	this.center.add(this.vecteurHead);

  	this.camera.position.set(l_cameraVector.x,l_cameraVector.y,l_cameraVector.z);
  	this.camera.lookAt(this.center);

  	this.renderer.render( this.scene, this.camera );
  }
  onDocumentKeyDown( event ) {
  	if(event.keyCode==37){//gauche
      this.load(-1);
  	}
  	else if(event.keyCode==39){//droite
      this.load(1);

  	}
  }
  load(shift: number){
  	for(let i = this.planes.length-1;i>-1;i--){
  		this.scene.remove( this.planes[i] );
  		this.planes.splice(i,1);
  	}
  	this.headtrackerService.loadNext(shift)
    .then((scene: HeadtrackerScene) => {
      for(let i=0;i<scene.photos.length;i++){
        let photo = scene.photos[i];
        let geometry = new THREE.PlaneGeometry( 1.1,1.1 );
        let material = new THREE.MeshPhongMaterial( { map: THREE.ImageUtils.loadTexture(photo.fileName),alphaTest: 0.5 } );
        let plane = new THREE.Mesh(geometry,material);
        material.map.minFilter = THREE.LinearFilter;
        plane.position.set(0,0,photo.z);
        plane.rotateOnAxis(new THREE.Vector3(0,1,0),Math.PI);
        plane.scale.set((i+1)*photo.scale*1.5, (i+1)*photo.scale*.6*1.5,1);
        this.scene.add( plane );
        this.planes.push(plane);
      }
    });
  }
}
