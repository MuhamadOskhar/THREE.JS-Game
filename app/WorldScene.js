import * as THREE from 'three';

export class WorldScene extends THREE.Scene {
    constructor () {

        super();
        this.fog = new THREE.Fog(0x000000, 0, 500);

        // Opstions material in the world
        this.materialA = new THREE.MeshStandardMaterial({ color: 0x00ffff });
        this.materialBlue = new THREE.MeshStandardMaterial({ color: 0x7777ff });
        this.materialRed = new THREE.MeshStandardMaterial({ color: 0xE42E22 });
        this.materialGreen = new THREE.MeshStandardMaterial({ color: 0x67F15B });
        this.materialYellow = new THREE.MeshStandardMaterial({ color: 0xE4BA22 });
        this.materialDarkBlue = new THREE.MeshStandardMaterial({ color: 0x1868A1 });
        this.materialSkyBlue = new THREE.MeshStandardMaterial({ color: 0x92C8EF });

        // Runing setter method
        this.setLight();
        this.setFloor();
    }

    setLight () {
        const ambientLight = new THREE.AmbientLight(0xffffff, 0.1);
        this.add(ambientLight);
    
        const spotlight = new THREE.SpotLight(0xffffff, 0.9, 0, Math.PI / 4, 1);
        spotlight.position.set(10, 60, 20);
        spotlight.target.position.set(0, 0, 0);
    
        spotlight.castShadow = true;
    
        spotlight.shadow.camera.near = 10;
        spotlight.shadow.camera.far = 100;
        spotlight.shadow.camera.fov = 30;
    
        // spotlight.shadow.bias = -0.0001
        spotlight.shadow.mapSize.width = 2048;
        spotlight.shadow.mapSize.height = 2048;
        this.add(spotlight);
    }

    setFloor () {
        const floorGeometry = new THREE.PlaneGeometry(300, 300, 100, 100);
        floorGeometry.rotateX(-Math.PI / 2);
        const floor = new THREE.Mesh(floorGeometry, this.materialA);
        floor.receiveShadow = true;
        this.add(floor);
    }
}