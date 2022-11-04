import { defineStore } from 'pinia'

export const useComponentsPageStore = defineStore('ComponentsPageStore', {
  state: () => ({
      links: [
        "typography",
        "buttons",
        "chips",
        "cards",
        "banners",
        "dialogs",
        "forms",
      ],
      active: ""
  }),
  actions: {
    // since we rely on `this`, we cannot use an arrow function
    SET_LINKS(link) {
      this.links.push(link)
    },
    SET_ACTIVE(link) {
      this.active = link
    }
  },
})