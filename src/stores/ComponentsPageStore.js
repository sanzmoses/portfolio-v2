import { defineStore } from 'pinia'

export const useComponentsPageStore = defineStore('ProjectStore', {
    state: () => ({
        links: [
          "typography",
          "buttons",
          "chips",
          "cards",
          "banners",
          "dialogs",
          "forms",
        ]
    }),
    actions: {
      // since we rely on `this`, we cannot use an arrow function
      SET_LINKS(link) {
        this.links.push(link)
      },
    },
})