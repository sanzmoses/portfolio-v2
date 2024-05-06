import { onUnmounted, ref } from 'vue'

export function useSwipeEvent(callback) {
  const xDown = ref(null);                                                        
  const yDown = ref(null);
    
  const getTouches = (evt) => {
    return evt.touches
  }                                                     
                                                                          
  const handleTouchStart = (evt) => {
    const firstTouch = getTouches(evt)[0];                                      
    xDown.value = firstTouch.clientX;                                      
    yDown.value = firstTouch.clientY;                                      
  };                                                
                                                                          
  const handleTouchMove = (evt) => {
    if ( ! xDown.value || ! yDown.value ) {
        return;
    }

    let xUp = evt.touches[0].clientX;                                    
    let yUp = evt.touches[0].clientY;

    let xDiff = xDown.value - xUp;
    let yDiff = yDown.value - yUp;
                                                                        
    if ( Math.abs( xDiff ) > Math.abs( yDiff ) ) {/*most significant*/
      if ( xDiff > 0 ) {
        callback('right')
      } else {
        callback('left')
      }                       
    } else {
      if ( yDiff > 0 ) {
        callback('down')
      } else { 
        callback('up')
      }                                                                 
    }

    /* reset values */
    xDown.value = null;
    yDown.value = null;                                             
  };

  const addListeners = () => {
    window.addEventListener('touchstart', handleTouchStart);
    window.addEventListener('touchmove', handleTouchMove);
  };

  const removeListeners = () => {
    window.removeEventListener('touchstart', handleTouchStart);
    window.removeEventListener('touchmove', handleTouchMove);
  };

  addListeners();

  onUnmounted(() => {
    removeListeners();
  });
}


