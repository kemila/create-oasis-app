import {
	AmbientLight,
	BlinnPhongMaterial,
	Camera,
	CuboidGeometry,
	GeometryRenderer,
	Vector3,
	WebGLEngine,
} from "oasis-engine";

export function createOasis() {
	const engine = new WebGLEngine("canvas");
	engine.canvas.resizeByClientSize();
	const rootEntity = engine.sceneManager.activeScene.createRootEntity();

	// init camera
	const cameraEntity = rootEntity.createChild("camera");
	cameraEntity.addComponent(Camera);
	const pos = cameraEntity.transform.position;
	pos.setValue(10, 10, 10);
	cameraEntity.transform.position = pos;
	cameraEntity.transform.lookAt(new Vector3(0, 0, 0));

	// init light
	const light = rootEntity.addComponent(AmbientLight);
	light.intensity = 0.5;

	// init cube
	const cubeEntity = rootEntity.createChild("cube");
	const renderer = cubeEntity.addComponent(GeometryRenderer);
	renderer.geometry = new CuboidGeometry(engine);
	const mtl = (renderer.material = new BlinnPhongMaterial(engine));
	const color = mtl.emissiveColor;
	color.r = 1;
	color.g = 0;
	color.b = 0;
	color.a = 1.0;

	engine.run();
}
