import { defineStore } from 'pinia'

export const useProjectStore = defineStore('ProjectStore', {
    state: () => ({
        projects: []
    })
})