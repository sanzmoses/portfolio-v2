// useMousePointer.js
import { reactive, onUnmounted } from 'vue';

export function useMousePointer() {
  const position = reactive({ x: 0, y: 0 });

  const updatePosition = (event) => {
    position.x = event.clientX;
    position.y = event.clientY;
  };

  const attachToPointer = () => {
    window.addEventListener('mousemove', updatePosition);
  };

  const detachFromPointer = () => {
    window.removeEventListener('mousemove', updatePosition);
  };

  attachToPointer();

  onUnmounted(() => {
    detachFromPointer();
  });

  return {
    position,
  };
}