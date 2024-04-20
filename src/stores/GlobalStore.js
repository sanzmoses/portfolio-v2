import { defineStore } from 'pinia'

export const useGlobalStore = defineStore('GlobalStore', {
  state: () => ({
    initial_loading: true
  }),
  actions: {
    SET_INITIAL_LOADING(data) {
      this.initial_loading = data
    },
  },
})