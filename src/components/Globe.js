import React, { Component } from 'react';
import * as THREE from 'three';
import TWEEN from '@tweenjs/tween.js';

import * as regions from '../constants/regions';

class Globe extends Component {
  regionCoordinates = {
    [regions.NORTH_AMERICA]: {
      x: 0.8,
      y: 0.23,
      z: 0
    },
    [regions.EUROPE]: {
      x: 0.82,
      y: -1.9,
      z: 0
    },
    [regions.AFRICA]: {
      x: 0.18,
      y: -1.85,
      z: 0
    },
    [regions.ALL]: {
      x: 1.1,
      y: -1.2,
      z: 0
    },
    [regions.SOUTH_AMERICA]: {
      x: -0.4,
      y: -0.4,
      z: 0
    },
    [regions.ASIA]: {
      x: 0.65,
      y: 3.2,
      z: 0
    },
    [regions.MIDDLE_EAST]: {
      x: 0.5,
      y: -2.34,
      z: 0
    },
    [regions.OCEANIA]: {
      x: -0.25,
      y: -3.82,
      z: 0
    }
  };

  componentDidMount() {
    const width = this.mount.clientWidth;
    const height = this.mount.clientHeight;

    //ADD SCENE
    this.scene = new THREE.Scene();

    //ADD CAMERA
    this.camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
    this.camera.position.z = 1.5;

    //ADD RENDERER
    this.renderer = new THREE.WebGLRenderer({ antialias: true });
    this.renderer.setClearColor('#fff');
    this.renderer.setPixelRatio( window.devicePixelRatio );
    this.renderer.setSize(width, height);
    this.mount.appendChild(this.renderer.domElement);

    //ADD CUBE
    const geometry = new THREE.SphereGeometry(0.5, 32, 32);
    const material = new THREE.MeshPhongMaterial();
    const mapLoader = new THREE.TextureLoader();
    const mapTexture = mapLoader.load(
      'http://1.bp.blogspot.com/-596lbFumbyA/Ukb1cHw21_I/AAAAAAAAK-U/KArMZAjbvyU/s1600/water_4k.png'
    );
    mapTexture.anisotropy = this.renderer.capabilities.getMaxAnisotropy();
    material.map = mapTexture;
    material.map.minFilter = THREE.LinearFilter;
    this.cube = new THREE.Mesh(geometry, material);
    
    this.cube.setRotationFromEuler(new THREE.Euler(
        this.regionCoordinates[regions.ALL].x,
        this.regionCoordinates[regions.ALL].y,
        this.regionCoordinates[regions.ALL].z,
    ))
    this.scene.add(this.cube);

    // add light
    this.scene.add(new THREE.AmbientLight(0xffffff));

    // start!
    this.start();

    /*
    // uncomment this and comment out componentWillUpdate() to find new coordinates.
    this.mount.addEventListener('mousemove', e => {
      this.cube.rotation.x += e.movementY * 0.01;
      this.cube.rotation.y += e.movementX * 0.01;

      console.log(this.cube.rotation);
    });
    */
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

  shouldComponentUpdate(newProps, newState) {
    const newRotation = this.regionCoordinates[newProps.region] || { x: 0, y: 0, z: 0 };

    new TWEEN.Tween(this.cube.rotation)
      .to(newRotation, 500)
      .easing(TWEEN.Easing.Quadratic.InOut)
      .start();

    return false;
  }

  animate = () => {
    this.renderScene();
    TWEEN.update();
    this.frameId = window.requestAnimationFrame(this.animate);
  };

  renderScene = () => {
    this.renderer.render(this.scene, this.camera);
  };

  render() {
    return (
      <div
        style={{ width: '87px', height: '87px' }}
        ref={mount => {
          this.mount = mount;
        }}
      />
    );
  }
}
export default Globe;
