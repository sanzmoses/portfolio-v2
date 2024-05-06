import { computed } from 'vue'
import { useQuasar } from 'quasar'

  // for specific screen widths
export function useResponsive() {
  const $q = useQuasar()

  const is_mobile = computed(() => {
    const is_height_mb = $q.screen.height < 600
    return $q.screen.lt.sm || is_height_mb ? true : false
  })

  const is_tablet = computed(() => {
    return $q.screen.lt.md
  })

  const is_desktop = computed(() => {
    return $q.screen.gt.sm
  })

  return {
    is_mobile,
    is_tablet,
    is_desktop
  }
}