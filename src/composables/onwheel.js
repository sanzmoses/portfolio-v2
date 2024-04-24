import { onUnmounted, ref, watch } from 'vue'

export function useWheelEvent(callback) {
  const scroll_activity = ref(0)
  const scroll_activity_threshold = ref(500)
  const timeout = ref(null)

  const handleWheel = (event) => {
    const activity = scroll_activity.value
    const threshold = scroll_activity_threshold.value
    scroll_activity.value += event.wheelDelta

    if(activity > threshold) {
      scroll_activity.value = 0;
      callback('prev');
    }

    if(activity < -threshold) {
      scroll_activity.value= 0;
      callback('next');
    }
  };

  watch(scroll_activity, (value) => {
    if(value > 0) {
      clearTimeout(timeout.value)

      timeout.value = setTimeout(() => {
        scroll_activity.value = 0
      }, 400)
    }
  })

  const addListeners = () => {
    window.addEventListener('wheel', handleWheel);
  };

  const removeListeners = () => {
    window.removeEventListener('wheel', handleWheel);
  };

  addListeners();

  onUnmounted(() => {
    removeListeners();
  });
}