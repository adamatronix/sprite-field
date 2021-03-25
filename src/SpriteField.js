import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import Stats from 'three/examples/jsm/libs/stats.module';

class SpriteField {

    constructor() {

      // THREE stuff
      this.scene = null;
      this.camera = null;
      this.renderer = null;
      this.stats = new Stats();
      this.renderFrame = this.renderFrame.bind(this);

      this.setupWorld();
      this.renderFrame();

    }

    setupWorld() {
      //setup the scene
      this.scene = new THREE.Scene();
      this.scene.background = new THREE.Color(0xcccccc);

      //setup world clock
      this.clock = new THREE.Clock();

      //setup the camera
      this.camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.2, 5000);
      this.camera.position.set(20, 20, 20);
      this.camera.lookAt(new THREE.Vector3(0,0,0));

      //setup renderer
      this.renderer = new THREE.WebGLRenderer({ antialias: true });
      this.renderer.setPixelRatio( window.devicePixelRatio );
      this.renderer.setSize( window.innerWidth, window.innerHeight );
      document.body.appendChild( this.renderer.domElement );

      this.renderer.gammaInput = true;
      this.renderer.gammaOutput = true;
      this.renderer.shadowMap.enabled = true;

       //setup controls
       let controls = new OrbitControls( this.camera, this.renderer.domElement);
       controls.minDistance = 0;
       controls.maxDistance = 200;

       //add lighting
       const skyColor = 0xB1E1FF;  // light blue
       const groundColor = 0x000000;  // brownish orange
       const intensity = 1;
       const light = new THREE.HemisphereLight(skyColor, groundColor, intensity);
       light.position.set(0,100,0);
       this.scene.add(light);

       document.body.appendChild( this.stats.dom );;

   }

   renderFrame() {
    this.renderer.render( this.scene, this.camera );
    this.stats.update();
    requestAnimationFrame(this.renderFrame);
  }
}

export default SpriteField;