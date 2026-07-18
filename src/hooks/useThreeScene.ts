import { useEffect, useRef, RefObject, MutableRefObject } from 'react';
import * as THREE from 'three';

interface ShapeConfig {
  baseY: number;
  rotationSpeed: THREE.Vector3;
  floatSpeed: number;
  floatOffset: number;
}

function buildGeometries(): THREE.BufferGeometry[] {
  return [
    new THREE.IcosahedronGeometry(0.25 + Math.random() * 0.2, 0),
    new THREE.OctahedronGeometry(0.3 + Math.random() * 0.15, 0),
    new THREE.TetrahedronGeometry(0.28 + Math.random() * 0.18, 0),
    new THREE.BoxGeometry(0.35, 0.35, 0.35),
  ];
}

function pickColor(index: number, total: number): number {
  if (index === Math.floor(total * 0.3)) return 0x9c3e1f;
  if (index % 3 === 0) return 0x8a8178;
  return 0xefe8df;
}

function populateScene(
  scene: THREE.Scene,
  count: number
): Array<{ mesh: THREE.Mesh; config: ShapeConfig }> {
  const geos = buildGeometries();
  return Array.from({ length: count }, (_, i) => {
    const geo = geos[i % geos.length];
    const mat = new THREE.MeshBasicMaterial({
      color: pickColor(i, count),
      wireframe: true,
      transparent: true,
      opacity: 0.15 + Math.random() * 0.25,
    });
    const mesh = new THREE.Mesh(geo, mat);
    mesh.position.set(
      (Math.random() - 0.5) * 18,
      (Math.random() - 0.5) * 12,
      (Math.random() - 0.5) * 6 - 2
    );
    mesh.rotation.set(
      Math.random() * Math.PI * 2,
      Math.random() * Math.PI * 2,
      Math.random() * Math.PI * 2
    );
    scene.add(mesh);
    return {
      mesh,
      config: {
        baseY: mesh.position.y,
        rotationSpeed: new THREE.Vector3(
          (Math.random() - 0.5) * 0.006,
          (Math.random() - 0.5) * 0.006,
          (Math.random() - 0.5) * 0.004
        ),
        floatSpeed: Math.random() * 0.004 + 0.001,
        floatOffset: Math.random() * Math.PI * 2,
      },
    };
  });
}

function syncRendererToCanvas(
  canvas: HTMLCanvasElement,
  renderer: THREE.WebGLRenderer,
  camera: THREE.PerspectiveCamera
): void {
  const w = canvas.clientWidth;
  const h = canvas.clientHeight;
  if (canvas.width !== w || canvas.height !== h) {
    renderer.setSize(w, h, false);
    camera.aspect = w / h;
    camera.updateProjectionMatrix();
  }
}

function mountScene(
  canvas: HTMLCanvasElement,
  shapeCount: number,
  mouseRef: MutableRefObject<{ x: number; y: number }>
): () => void {
  const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  renderer.setClearColor(0x000000, 0);

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(60, 1, 0.1, 100);
  camera.position.z = 9;

  const shapes = populateScene(scene, shapeCount);
  const clock = new THREE.Clock();
  let animId: number;
  let camX = 0;
  let camY = 0;

  function tick() {
    animId = requestAnimationFrame(tick);
    syncRendererToCanvas(canvas, renderer, camera);
    const t = clock.getElapsedTime();

    shapes.forEach(({ mesh, config }) => {
      mesh.rotation.x += config.rotationSpeed.x;
      mesh.rotation.y += config.rotationSpeed.y;
      mesh.rotation.z += config.rotationSpeed.z;
      mesh.position.y =
        config.baseY + Math.sin(t * config.floatSpeed + config.floatOffset) * 0.4;
    });

    camX += (mouseRef.current.x * 0.6 - camX) * 0.04;
    camY += (mouseRef.current.y * 0.4 - camY) * 0.04;
    camera.position.x = camX;
    camera.position.y = camY;
    camera.lookAt(scene.position);
    renderer.render(scene, camera);
  }

  function onMouseMove(e: MouseEvent) {
    mouseRef.current.x = (e.clientX / window.innerWidth - 0.5) * 2;
    mouseRef.current.y = -(e.clientY / window.innerHeight - 0.5) * 2;
  }

  window.addEventListener('mousemove', onMouseMove, { passive: true });
  syncRendererToCanvas(canvas, renderer, camera);
  tick();

  return function cleanup() {
    cancelAnimationFrame(animId);
    window.removeEventListener('mousemove', onMouseMove);
    shapes.forEach(({ mesh }) => {
      mesh.geometry.dispose();
      (mesh.material as THREE.Material).dispose();
    });
    renderer.dispose();
  };
}

export function useThreeScene(
  canvasRef: RefObject<HTMLCanvasElement>,
  shapeCount = 18
): void {
  const mouseRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    return mountScene(canvas, shapeCount, mouseRef);
  }, [canvasRef, shapeCount]);
}
