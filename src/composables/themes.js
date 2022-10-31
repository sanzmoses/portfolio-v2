import { ref } from 'vue'

export function getData() {
  const themes = ref([
    'primary',
    'secondary',
    'accent',
    'dark',
    'positive',
    'negative',
    'info',
    'warning'
  ])

  const icons = ref([
    'auto_mode',
    'pest_control',
    'shield_moon',
    'directions_boat',
    'spa',
    'brightness_auto',
    'egg',
    'pest_control_rodent'
  ])

  return {
    themes,
    icons
  }
}