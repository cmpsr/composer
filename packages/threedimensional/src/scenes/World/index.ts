//Commonjs import of three
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

class World {
  renderer!: THREE.WebGLRenderer;
  resolution!: THREE.Vector2;
  camera!: THREE.PerspectiveCamera;
  modelLoader!: GLTFLoader;
  scene: THREE.Scene = new THREE.Scene();
  clock: THREE.Clock = new THREE.Clock();
  backgroundColor = "black";
  hasToStopRendering = false;
  canvasContainerId: string;
  canvasSceneId: string;
  observerOfCanvasContainer!: ResizeObserver;
  controls!: OrbitControls;
  threeDimensionalObjectOrSceneURL: string;
  canvasContainer = {
    width: 0,
    height: 0,
  }
  CENTER_ORIGIN_AXES = {
    x: 30,
    y: -2,
    z: 30,
  }
  CAMERA_POSITION = {
    x: this.CENTER_ORIGIN_AXES.x,
    y: this.CENTER_ORIGIN_AXES.y + 7,
    z: this.CENTER_ORIGIN_AXES.z + 7,
  }
  CAMERA_ROTATION = {
    x: -0.7,
    y: 0,
    z: 0,
  }
  constructor(canvasSceneId: string, canvasContainerId: string, backgroundColor?: string, threeDimensionalObjectOrScene?: Blob) {
    const canvasContainer = document.getElementById(canvasContainerId) as HTMLElement
    const canvasScene = document.getElementById(canvasSceneId) as HTMLCanvasElement
    if (canvasScene && canvasContainer) {
      if (backgroundColor) {
        this.backgroundColor = backgroundColor
      }
      this.modelLoader = new GLTFLoader();
      if (threeDimensionalObjectOrScene) {
        console.log('adding object url')
        console.log(threeDimensionalObjectOrScene)
        this.threeDimensionalObjectOrSceneURL = threeDimensionalObjectOrScene[0]
      }
      this.canvasSceneId = canvasSceneId
      this.canvasContainerId = canvasContainerId
      this.resolution = new THREE.Vector2(canvasScene.clientWidth, canvasScene.clientHeight)
      this.camera = new THREE.PerspectiveCamera(75, canvasScene.clientWidth / canvasScene.clientHeight, 0.1, 1000)
      this.renderer = new THREE.WebGLRenderer({ canvas: canvasScene })
      this.controls = new OrbitControls(this.camera, this.renderer.domElement)
      this.setupIllumination()
      this.setUpRenderer()
      this.setCameraPositionAndAspect()
      this.setCameraControls()
      this.addFileObjectToScene()
      this.renderScene()
      this.updateRendererAndCamera()
      this.trackWindowAndContainerResize()
    }
  }
  private addFileObjectToScene() {
    if (this.threeDimensionalObjectOrSceneURL && !this.hasToStopRendering) {
      console.log(this.threeDimensionalObjectOrSceneURL)
      this.modelLoader.load(this.threeDimensionalObjectOrSceneURL, (Object3D) => {
        console.log('allo ', Object3D)
        Object3D.scene.traverse((child: any) => {
          if (child instanceof THREE.Mesh) {
            child.castShadow = true
          }
        })
        Object3D.scene.position.set(this.CENTER_ORIGIN_AXES.x, this.CENTER_ORIGIN_AXES.y, this.CENTER_ORIGIN_AXES.z)
        Object3D.scene.scale.set(2, 2, 2)
        Object3D.scene.rotateOnAxis(new THREE.Vector3(0, 1, 0), Math.PI)
        // characterAnimationMixer.current = new THREE.AnimationMixer(character.scene)
        // const idleAnimation = characterAnimationMixer.current.clipAction(character.animations[15])
        // idleAnimation.play()
        // idleAnimation.clampWhenFinished = true
        Object3D.scene.castShadow = true
        // characterAnimations.current = character.animations
        this.scene.add(Object3D.scene)
        // URL.revokeObjectURL(this.threeDimensionalObjectOrSceneURL);
        // eslint-disable-next-line @typescript-eslint/no-empty-function
      }, () => { }, (error) => {
        URL.revokeObjectURL(this.threeDimensionalObjectOrSceneURL);
        console.log(error)
      })
    }
  }
  private trackWindowAndContainerResize() {
    this.observerOfCanvasContainer = new ResizeObserver(this.updateRendererAndCamera.bind(this))
    this.observerOfCanvasContainer.observe(document.getElementById(this.canvasContainerId) as HTMLElement)
  }
  private setCameraPositionAndAspect() {
    this.camera.position.set(this.CAMERA_POSITION.x, this.CAMERA_POSITION.y, this.CAMERA_POSITION.z)
    this.camera.rotation.set(this.CAMERA_ROTATION.x, this.CAMERA_ROTATION.y, this.CAMERA_ROTATION.z)
    this.camera.aspect = this.canvasContainer.width / this.canvasContainer.height
    this.camera.updateProjectionMatrix()
  }
  private setCameraControls() {
    this.controls.target.set(0, 0, 0)
  }
  private updateRendererAndCamera() {
    const gameSceneContainer = document.getElementById(this.canvasContainerId) as HTMLElement
    this.canvasContainer.width = gameSceneContainer?.clientWidth
    this.canvasContainer.height = gameSceneContainer?.clientHeight
    this.renderer.setSize(this.canvasContainer.width, this.canvasContainer.height)
    this.camera.aspect = this.canvasContainer.width / this.canvasContainer.height
    this.camera.updateProjectionMatrix()
    this.controls.update()
  }
  private setupIllumination() {
    this.scene.background = new THREE.Color(this.backgroundColor)
    const directionalLight = new THREE.DirectionalLight(0xBC2732, 1)
    directionalLight.position.set(this.CENTER_ORIGIN_AXES.x, this.CENTER_ORIGIN_AXES.y, this.CENTER_ORIGIN_AXES.z)
    directionalLight.castShadow = true
    directionalLight.shadow.camera.near = 0.1
    directionalLight.shadow.camera.far = 50
    directionalLight.shadow.mapSize.width = 1024
    directionalLight.shadow.mapSize.height = 1024
    directionalLight.intensity = 3
    directionalLight.target = this.scene
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const helper = new THREE.DirectionalLightHelper(directionalLight)
    this.scene.add(directionalLight)
    const ambientLight = new THREE.AmbientLight(0xffffff)
    ambientLight.intensity = 0.2
    this.scene.add(ambientLight)
  }
  private setUpRenderer() {
    this.renderer.shadowMap.enabled = true
    this.renderer.shadowMap.type = THREE.PCFSoftShadowMap
  }
  private renderScene() {
    console.log('hasToStop rendering ', this.hasToStopRendering)
    if (this.hasToStopRendering) {
      return
    }
    this.renderer.render(this.scene, this.camera)
    requestAnimationFrame(this.renderScene.bind(this))

  }
  setDirectionalLightTarget(target: THREE.Object3D<THREE.Event>) {
    const directionalLight = this.scene.getObjectByName('directionalLight') as THREE.DirectionalLight
    directionalLight.target = target
  }
  stopRendering() {
    this.hasToStopRendering = true
    this.renderer.dispose()
    this.observerOfCanvasContainer.disconnect()
  }
}

export const useWorld = (canvasSceneId: string, canvasContainerId: string, backgroundColor?: string, threeDimensionalObjectOrScene?: Blob) => {
  const world = new World(canvasSceneId, canvasContainerId, backgroundColor, threeDimensionalObjectOrScene)
  return world
}
