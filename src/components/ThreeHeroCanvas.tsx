import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { prefersReducedMotion } from '../animations/gsap';

export const ThreeHeroCanvas: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const reducedMotion = prefersReducedMotion();
    const isMobile = window.innerWidth < 768;

    // Set up Scene, Camera, Renderer
    const scene = new THREE.Scene();
    const width = container.clientWidth || window.innerWidth;
    const height = container.clientHeight || window.innerHeight;

    const camera = new THREE.PerspectiveCamera(50, width / height, 0.1, 1000);
    camera.position.z = 24;

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: !isMobile,
      powerPreference: 'high-performance'
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, isMobile ? 1.5 : 2));
    container.appendChild(renderer.domElement);

    // 1. Particle Constellation Network (Digital Automotive Telemetry)
    const particleCount = isMobile ? 55 : 120;
    const geometry = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);
    const originalPositions = new Float32Array(particleCount * 3);

    const blueColor1 = new THREE.Color('#1769E0');
    const blueColor2 = new THREE.Color('#38BDF8');
    const darkNavyColor = new THREE.Color('#164B9B');

    for (let i = 0; i < particleCount; i++) {
      const x = (Math.random() - 0.5) * 36;
      const y = (Math.random() - 0.5) * 22;
      const z = (Math.random() - 0.5) * 16;

      positions[i * 3] = x;
      positions[i * 3 + 1] = y;
      positions[i * 3 + 2] = z;

      originalPositions[i * 3] = x;
      originalPositions[i * 3 + 1] = y;
      originalPositions[i * 3 + 2] = z;

      const mixed = Math.random() > 0.5 ? blueColor1 : (Math.random() > 0.3 ? blueColor2 : darkNavyColor);
      colors[i * 3] = mixed.r;
      colors[i * 3 + 1] = mixed.g;
      colors[i * 3 + 2] = mixed.b;
    }

    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

    // Particle Point Material
    const pointMaterial = new THREE.PointsMaterial({
      size: isMobile ? 0.35 : 0.45,
      vertexColors: true,
      transparent: true,
      opacity: 0.85,
      blending: THREE.AdditiveBlending
    });
    const points = new THREE.Points(geometry, pointMaterial);
    scene.add(points);

    // 2. Dynamic Connecting Lines (Engineering Graph)
    const lineMaterial = new THREE.LineBasicMaterial({
      color: 0x1d70e2,
      transparent: true,
      opacity: 0.18,
      blending: THREE.AdditiveBlending
    });

    const maxLineSegments = isMobile ? 120 : 280;
    const linePositions = new Float32Array(maxLineSegments * 6);
    const lineGeometry = new THREE.BufferGeometry();
    lineGeometry.setAttribute('position', new THREE.BufferAttribute(linePositions, 3));
    const lineMesh = new THREE.LineSegments(lineGeometry, lineMaterial);
    scene.add(lineMesh);

    // 3. Precision Engineering Wireframe Torus/Ring (Automotive Hub Metaphor)
    const ringGeo = new THREE.TorusGeometry(7.5, 0.05, 12, 60);
    const ringMat = new THREE.MeshBasicMaterial({
      color: 0x1769e0,
      transparent: true,
      opacity: 0.22,
      wireframe: true
    });
    const techRing = new THREE.Mesh(ringGeo, ringMat);
    techRing.position.set(6, -1, -4);
    techRing.rotation.x = Math.PI * 0.25;
    scene.add(techRing);

    // Mouse Tracking for Smooth Interaction
    let targetMouseX = 0;
    let targetMouseY = 0;
    let currentMouseX = 0;
    let currentMouseY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      targetMouseX = (e.clientX / window.innerWidth - 0.5) * 3;
      targetMouseY = (e.clientY / window.innerHeight - 0.5) * -3;
    };

    if (!reducedMotion) {
      window.addEventListener('mousemove', handleMouseMove, { passive: true });
    }

    // Resize Handler
    const handleResize = () => {
      if (!container) return;
      const w = container.clientWidth;
      const h = container.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };

    window.addEventListener('resize', handleResize);

    // Animation Loop
    let animationFrameId: number;
    let clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      const elapsedTime = clock.getElapsedTime();

      // Smooth mouse lerp
      if (!reducedMotion) {
        currentMouseX += (targetMouseX - currentMouseX) * 0.05;
        currentMouseY += (targetMouseY - currentMouseY) * 0.05;
        camera.position.x = currentMouseX;
        camera.position.y = currentMouseY;
        camera.lookAt(0, 0, 0);

        // Slow rotation of technological ring
        techRing.rotation.z = elapsedTime * 0.08;
        techRing.rotation.y = elapsedTime * 0.05;
      }

      // Update particle positions gently
      const posAttr = geometry.attributes.position as THREE.BufferAttribute;
      const posArray = posAttr.array as Float32Array;

      const linePosAttr = lineGeometry.attributes.position as THREE.BufferAttribute;
      const lineArray = linePosAttr.array as Float32Array;

      let lineIndex = 0;
      const maxDistance = isMobile ? 4.5 : 5.8;

      for (let i = 0; i < particleCount; i++) {
        const i3 = i * 3;
        if (!reducedMotion) {
          posArray[i3 + 1] = originalPositions[i3 + 1] + Math.sin(elapsedTime * 0.6 + originalPositions[i3]) * 0.6;
          posArray[i3] = originalPositions[i3] + Math.cos(elapsedTime * 0.4 + originalPositions[i3 + 1]) * 0.4;
        }

        // Connect near particles
        for (let j = i + 1; j < particleCount; j++) {
          if (lineIndex >= maxLineSegments * 6) break;

          const j3 = j * 3;
          const dx = posArray[i3] - posArray[j3];
          const dy = posArray[i3 + 1] - posArray[j3 + 1];
          const dz = posArray[i3 + 2] - posArray[j3 + 2];
          const dist = Math.sqrt(dx * dx + dy * dy + dz * dz);

          if (dist < maxDistance) {
            lineArray[lineIndex++] = posArray[i3];
            lineArray[lineIndex++] = posArray[i3 + 1];
            lineArray[lineIndex++] = posArray[i3 + 2];

            lineArray[lineIndex++] = posArray[j3];
            lineArray[lineIndex++] = posArray[j3 + 1];
            lineArray[lineIndex++] = posArray[j3 + 2];
          }
        }
      }

      posAttr.needsUpdate = true;
      lineGeometry.setDrawRange(0, lineIndex / 3);
      linePosAttr.needsUpdate = true;

      renderer.render(scene, camera);
    };

    animate();

    // Cleanup resources to prevent memory leaks
    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);

      geometry.dispose();
      pointMaterial.dispose();
      lineGeometry.dispose();
      lineMaterial.dispose();
      ringGeo.dispose();
      ringMat.dispose();
      renderer.dispose();

      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 pointer-events-none z-0 overflow-hidden"
      aria-hidden="true"
    />
  );
};
