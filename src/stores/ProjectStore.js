import { defineStore } from 'pinia'

export const useProjectStore = defineStore('ProjectStore', {
    state: () => ({
        projects: []
    }),
    actions: {
      // since we rely on `this`, we cannot use an arrow function
      SET_PROJECTS(projects) {
        this.projects = projects
      },
    },
})