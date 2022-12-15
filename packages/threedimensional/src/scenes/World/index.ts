//Commonjs import of three
import { normalizeValue } from '../../utils';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

class World {
  renderer!: THREE.WebGLRenderer;
  resolution!: THREE.Vector2;
  camera!: THREE.PerspectiveCamera;
  directionalLight!: THREE.DirectionalLight;
  modelLoader!: GLTFLoader;
  scene: THREE.Scene = new THREE.Scene();
  clock: THREE.Clock = new THREE.Clock();
  backgroundColor = "black";
  transparentBackgroundColor = false;
  hasToStopRendering = false;
  canvasContainerId: string;
  canvasSceneId: string;
  observerOfCanvasContainer!: ResizeObserver;
  controls!: OrbitControls;
  trackMouseMovementBinded!: (event: MouseEvent) => void;
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
    z: this.CENTER_ORIGIN_AXES.z + 15,
  }
  CAMERA_ROTATION = {
    x: -0.7,
    y: 0,
    z: 0,
  }
  constructor(canvasSceneId: string, canvasContainerId: string, backgroundColor?: string, threeDimensionalObjectOrScene?: Blob, transparentBackgroundColor?: boolean) {
    const canvasContainer = document.getElementById(canvasContainerId) as HTMLElement
    const canvasScene = document.getElementById(canvasSceneId) as HTMLCanvasElement
    if (canvasScene && canvasContainer) {
      if (backgroundColor) {
        this.backgroundColor = backgroundColor
      }
      if (transparentBackgroundColor) {
        this.transparentBackgroundColor = transparentBackgroundColor
      }
      this.modelLoader = new GLTFLoader();
      if (threeDimensionalObjectOrScene) {
        this.threeDimensionalObjectOrSceneURL = threeDimensionalObjectOrScene[0]
      }
      this.canvasSceneId = canvasSceneId
      this.canvasContainerId = canvasContainerId
      this.resolution = new THREE.Vector2(canvasScene.clientWidth, canvasScene.clientHeight)
      this.camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
      this.renderer = new THREE.WebGLRenderer({ canvas: canvasScene, antialias: true, alpha: true })
      this.trackMouseMovementBinded = this.trackMouseMovement.bind(this)
      // this.controls = new OrbitControls(this.camera, this.renderer.domElement)
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
      this.modelLoader.load(this.threeDimensionalObjectOrSceneURL, (Object3D) => {
        const maxAnisotropy = this.renderer.capabilities.getMaxAnisotropy();
        Object3D.scene.traverse((child: any) => {
          if (child instanceof THREE.Mesh) {
            child.castShadow = true
            if (child.material.map) {
              child.material.map.anisotropy = maxAnisotropy
            }
          }
        })
        Object3D.scene.position.set(this.CENTER_ORIGIN_AXES.x, this.CENTER_ORIGIN_AXES.y, this.CENTER_ORIGIN_AXES.z + 3)
        Object3D.scene.scale.set(1, 1, 1)
        Object3D.scene.castShadow = true
        this.scene.add(Object3D.scene)
        this.setDirectionalLightTarget(Object3D.scene)
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
    this.renderer.domElement.addEventListener('mousemove', this.trackMouseMovementBinded)
  }
  private trackMouseMovement(event: MouseEvent) {
    const halfWindowWidth = window.innerWidth / 2
    const halfWindowHeight = window.innerHeight / 2
    const newMousePositions = {
      x: event.clientX - halfWindowWidth,
      y: event.clientY - halfWindowHeight,
    }
    const interpolationFactor = 0.1
    const normalizedMousePositionX = normalizeValue(newMousePositions.x, -halfWindowWidth, halfWindowWidth)
    const normalizedMousePositionY = normalizeValue(newMousePositions.y, -halfWindowHeight, halfWindowHeight)
    this.camera.rotation.y = THREE.MathUtils.lerp(this.CAMERA_ROTATION.y, normalizedMousePositionX, interpolationFactor)
    this.camera.rotation.x = THREE.MathUtils.lerp(this.CAMERA_ROTATION.x, normalizedMousePositionY, interpolationFactor)
  }
  private setCameraPositionAndAspect() {
    this.camera.position.set(this.CAMERA_POSITION.x, this.CAMERA_POSITION.y, this.CAMERA_POSITION.z)
    this.camera.rotation.set(this.CAMERA_ROTATION.x, this.CAMERA_ROTATION.y, this.CAMERA_ROTATION.z)
    this.camera.aspect = this.canvasContainer.width / this.canvasContainer.height
    this.camera.updateProjectionMatrix()
  }
  private setCameraControls() {
    // this.controls.target.set(0, 0, 0)
  }
  private updateRendererAndCamera() {
    const gameSceneContainer = document.getElementById(this.canvasContainerId) as HTMLElement
    this.canvasContainer.width = gameSceneContainer?.clientWidth
    this.canvasContainer.height = gameSceneContainer?.clientHeight
    this.renderer.setSize(this.canvasContainer.width, this.canvasContainer.height)
    this.camera.aspect = this.canvasContainer.width / this.canvasContainer.height
    this.camera.updateProjectionMatrix()
    // this.controls.update()
  }
  private setupIllumination() {
    this.scene.background = this.transparentBackgroundColor ? null : new THREE.Color(this.backgroundColor)
    const directionalLight = new THREE.DirectionalLight(0xffffff, 1)
    directionalLight.position.set(this.CAMERA_POSITION.x, this.CAMERA_POSITION.y, this.CAMERA_POSITION.z + 30)
    directionalLight.castShadow = true
    directionalLight.shadow.camera.near = 0.1
    directionalLight.shadow.camera.far = 50
    directionalLight.shadow.mapSize.width = 1024
    directionalLight.shadow.mapSize.height = 1024
    directionalLight.intensity = 3
    directionalLight.name = 'directionalLight'
    const directionalLightHelper = new THREE.DirectionalLightHelper(directionalLight)
    directionalLightHelper.name = 'directionalLightHelper'
    this.scene.add(directionalLight)
    this.scene.add(directionalLightHelper)
    const ambientLight = new THREE.AmbientLight(0xffffff)
    ambientLight.intensity = 0.2
    this.scene.add(ambientLight)
  }
  private setUpRenderer() {
    this.renderer.shadowMap.enabled = true
    this.renderer.shadowMap.type = THREE.PCFSoftShadowMap
  }
  private renderScene() {
    if (this.hasToStopRendering) {
      return
    }
    this.renderer.render(this.scene, this.camera)
    requestAnimationFrame(this.renderScene.bind(this))

  }
  private setDirectionalLightTarget(target: THREE.Object3D<THREE.Event>) {
    const directionalLight = this.scene.getObjectByName('directionalLight') as THREE.DirectionalLight
    const directionalLightHelper = this.scene.getObjectByName('directionalLightHelper') as THREE.DirectionalLightHelper
    if (directionalLight?.target && directionalLightHelper?.update) {
      directionalLight.target = target
      directionalLight.target.updateMatrixWorld();
      directionalLightHelper.update()
    }
  }
  stopRendering() {
    this.hasToStopRendering = true
    this.renderer.dispose()
    this.observerOfCanvasContainer.disconnect()
    this.renderer.domElement.removeEventListener('mousemove', this.trackMouseMovementBinded)
  }
}

export const useWorld = (canvasSceneId: string, canvasContainerId: string, backgroundColor?: string, threeDimensionalObjectOrScene?: Blob, transparentBackgroundColor?: boolean) => {
  const world = new World(canvasSceneId, canvasContainerId, backgroundColor, threeDimensionalObjectOrScene, transparentBackgroundColor)
  return world
}
