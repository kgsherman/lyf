import React, { Component } from 'react';
import * as THREE from 'three';

class Globe extends Component {
  componentDidMount() {
    const width = this.mount.clientWidth;
    const height = this.mount.clientHeight;
    //ADD SCENE
    this.scene = new THREE.Scene();
    //ADD CAMERA
    this.camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
    this.camera.position.z = 1.5;

    this.controls = new THREE.OrbitControls(camera);
    //ADD RENDERER
    this.renderer = new THREE.WebGLRenderer({ antialias: true });
    this.renderer.setClearColor('#fff');
    this.renderer.setSize(width, height);
    this.mount.appendChild(this.renderer.domElement);
    //ADD CUBE
    const geometry = new THREE.SphereGeometry(0.5, 32, 32);
    const material = new THREE.MeshPhongMaterial();
    const mapLoader = new THREE.TextureLoader()
    const mapTexture = mapLoader.load('http://1.bp.blogspot.com/-596lbFumbyA/Ukb1cHw21_I/AAAAAAAAK-U/KArMZAjbvyU/s1600/water_4k.png')
    material.map = mapTexture;
    material.map.minFilter = THREE.LinearFilter
    this.cube = new THREE.Mesh(geometry, material);
    this.scene.add(this.cube);

    this.scene.add(new THREE.AmbientLight(0xffffff));

    //const light = new THREE.DirectionalLight(0xffffff, 1);
    //light.position.set(5,3,5);
    //this.scene.add(light);


    this.start();
  }

  componentWillUnmount() {
    this.stop();
    this.mount.removeChild(this.renderer.domElement);
  }

  start = () => {
    if (!this.frameId) {
      this.frameId = requestAnimationFrame(this.animate);
    }
  };

  stop = () => {
    cancelAnimationFrame(this.frameId);
  };

  animate = () => {
    //this.cube.rotation.x += 0.01;
    //this.cube.rotation.y += 0.01;
    this.renderScene();
    this.controls.update();
    this.frameId = window.requestAnimationFrame(this.animate);
  };
  renderScene = () => {
    this.renderer.render(this.scene, this.camera);
  };
  render() {
    return (
      <div
        style={{ width: '100%', height: '100%' }}
        ref={mount => {
          this.mount = mount;
        }}
      />
    );
  }
}
export default Globe;
