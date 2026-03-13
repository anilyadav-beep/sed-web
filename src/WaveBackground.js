import React, { useEffect, useRef } from "react";
import * as THREE from "three";

const WaveBackground = () => {
  const mountRef = useRef(null);

  useEffect(() => {

    const scene = new THREE.Scene();

    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / 1000,
      0.1,
      1000
    );

    const renderer = new THREE.WebGLRenderer({ alpha: true });
    renderer.setSize(window.innerWidth, 800);

    mountRef.current.appendChild(renderer.domElement);

    const geometry = new THREE.BufferGeometry();
    const vertices = [];

    for (let i = 0; i < 5000; i++) {
      vertices.push(
        Math.random() * 200 - 100,
        Math.random() * 20,
        Math.random() * 200 - 50,
        // Math.random() * 200 - 50
      );
    }

    geometry.setAttribute(
      "position",
      new THREE.Float32BufferAttribute(vertices, 3)
    );

    const material = new THREE.PointsMaterial({
      color: "#e6a1a1",
      size: 0.5
    });

    const points = new THREE.Points(geometry, material);
    scene.add(points);

    camera.position.z = 150;

    const animate = () => {
      requestAnimationFrame(animate);

      points.rotation.y += 0.001;

      renderer.render(scene, camera);
    };

    animate();

  }, []);

  return <div ref={mountRef} />;
};

export default WaveBackground;