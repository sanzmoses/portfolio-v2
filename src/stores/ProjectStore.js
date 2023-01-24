import { defineStore } from 'pinia'

export const useProjectStore = defineStore('ProjectStore', {
    state: () => ({
        projects: [
          {
              id: 1,
              name: 'Link Value',
              nickname: 'Link Value',
              link: 'https://linkvalue.net/',
              code: '#',
              img: 'linkvalue.png',
              responsibilities: ['Frontend'],
              tools: ['CSS', 'Javascript', 'LESS', 'UIkit', 'Bootstrap', 'Laravel', 'VueJS'],
              type: 'Freelance',
              description: 'Front end development',
              color: 'orange-card', 
              icon: 'currency_exchange'
          },
          {
              id: 2,
              name: 'GS Living',
              nickname: 'GS Value',
              link: 'https://greatersydneyliving.com.au/',
              code: '#',
              img: 'gsliving.png',
              responsibilities: ['Frontend'],
              tools: ['CSS', 'Javascript', 'LESS', 'UIkit'],
              type: 'Employment',
              description: 'Front end development',
              color: 'green-card', 
              icon: 'newspaper'
          },
          {
              id: 3,
              name: 'Super Student HQ',
              nickname: 'Superstudent',
              link: 'https://sshq.cre8iv.click/',
              code: '#',
              img: 'superstudent.png',
              responsibilities: ['Frontend'],
              tools: ['CSS', 'Javascript', 'LESS', 'UIkit'],
              type: 'Employment',
              description: 'Front end development',
              color: 'orange-card', 
              icon: 'school'
          },
          {
              id: 4,
              name: 'Ecoplant Australia',
              nickname: 'Ecoplant',
              link: 'https://ecoplantaustralia.com.au/',
              code: '#',
              img: 'ecoplant.png',
              responsibilities: ['Frontend'],
              tools: ['CSS', 'Javascript', 'LESS', 'UIkit'],
              type: 'Employment',
              description: 'Front end development',
              color: 'green-card', 
              icon: 'forest'
          },
          {
              id: 5,
              name: 'Online Expert',
              nickname: 'Oexpert',
              link: 'https://oexpert.cre8iv.click/',
              code: '#',
              img: 'oexpert.png',
              responsibilities: ['Frontend'],
              tools: ['CSS', 'Javascript', 'LESS', 'UIkit'],
              type: 'Employment',
              description: 'Front end development',
              color: 'orange-card', 
              icon: 'laptop_mac'
          },
          {
              id: 6,
              name: 'Sue Tsigaros',
              nickname: 'Sue Tsigaros',
              link: 'https://suetsigaros.cre8iv.click/',
              code: '#',
              img: 'sue.png',
              responsibilities: ['Frontend'],
              tools: ['CSS', 'Javascript', 'LESS', 'UIkit'],
              type: 'Employment',
              description: 'Front end development',
              color: 'purple-card', 
              icon: 'self_improvement'
          },
          {
              id: 7,
              name: 'Cost Miner',
              nickname: 'Cost Miner',
              link: 'https://cm.cre8iv.click/',
              code: '#',
              img: 'costminer.png',
              responsibilities: ['Frontend'],
              tools: ['CSS', 'Javascript', 'LESS', 'UIkit'],
              type: 'Employment',
              description: 'Front end development',
              color: 'green-card', 
              icon: 'request_quote'
          },
          {
              id: 8,
              name: 'Photopro Website',
              nickname: 'Photopro',
              link: 'http://photoprotrading.com',
              code: '#',
              img: 'photopro.png',
              responsibilities: ['Backend', 'Frontend', 'Deployment'],
              tools: ['Laravel 5.5', 'VueJS', 'Bootstrap'],
              type: 'Freelance',
              description: 'From the ground up, development to deployment, backend to frontend',
              color: 'orange-card', 
              icon: 'shopping_cart'
          },
          {
              id: 9,
              name: 'Cased Dimensions',
              nickname: 'CDM site',
              link: 'http://servicemanagerapps.com',
              code: '#',
              img: 'service.png',
              responsibilities: ['Backend', 'Frontend', 'Deployment', 'API Integration'],
              tools: ['Laravel 5.6', 'OctoberCMS', 'Javascript', 'Bootstrap'],
              type: 'Employment',
              description: 'Having used OctoberCMS (Built on top of Laravel) countless of times for a handful of sites, we as a team has had to know all the details and parts of this app and the inner workings of the cms. From API integrations, like google\'s captcha, chatbot, email, currency api, cookies and etc.',
              color: 'purple-card',
              icon: 'support_agent'
          },
          {
              id: 10,
              name: 'Onlinekeycodes',
              nickname: 'OKC site',
              link: 'http://onlinekeycodes.com',
              code: '#',
              img: 'keycodes.png',
              responsibilities: ['Backend', 'Deployment', 'API Integration'],
              tools: ['Laravel 5.5', 'VueJS', 'Materialize'],
              type: 'Freelance',
              description: 'N/A',
              color: '', 
              icon: 'key'
          },
          // {
          //     id: 11,
          //     name: 'SOS Network Davao Site',
          //     nickname: 'SOS Network',
          //     link: '#',
          //     code: '#',
          //     img: 'saveourschool.png',
          //     responsibilities: ['Backend', 'Frontend', 'Deployment', 'API Development'],
          //     tools: ['Laravel 5.5', 'Cordova', 'Bootstrap'],
          //     type: 'Capstone',
          //     description: 'A management information system the helps manage administrators and users, blog posts, data files and information within the organization. A separate application for android the pulls data from the web app api to send text messages.',
          //     color: 'green-card', 
          //     icon: 'family_restroom'
          // },
          // {
          //     id: 12,
          //     name: 'Quizz App',
          //     nickname: 'Quizzapp',
          //     link: 'https://sanzmoses.github.io/quizzapp',
          //     code: 'https://github.com/sanzmoses/quizzapp',
          //     img: 'quizzapp.png',
          //     responsibilities: ['Frontend'],
          //     tools: ['Javascript', 'JQuery'],
          //     type: 'Sample',
          //     description: 'Practice Quiz App using javascript',
          //     color: '',  
          //     icon: 'terminal'
          // },
          // {
          //     id: 13,
          //     name: 'Wiki App',
          //     nickname: 'Wiki App',
          //     link: 'https://sanzmoses.github.io/wiki',
          //     code: 'https://github.com/sanzmoses/wiki',
          //     img: 'wiki.png',
          //     responsibilities: ['Frontend'],
          //     tools: ['Javascript', 'JQuery'],
          //     type: 'Sample',
          //     description: 'Practice App integrating Wikipedia API',
          //     color: 'orange-card', 
          //     icon: 'manage_search  '
          // },
          // {
          //     id: 14,
          //     name: 'Weather App',
          //     nickname: 'Weather App',
          //     link: 'https://sanzmoses.github.io/wep',
          //     code: 'https://github.com/sanzmoses/wep',
          //     img: 'wep.png',
          //     responsibilities: ['Frontend'],
          //     tools: ['Javascript', 'JQuery'],
          //     type: 'Sample',
          //     description: 'Practice App integrating Weather API Darksky',
          //     color: 'purple-card', 
          //     icon: 'cloudy_snowing'
          // },
          {
              id: 15,
              name: 'Twitter Like App',
              nickname: 'TwitterClone',
              link: 'https://sanzmoses.github.io/ng-twa',
              code: 'https://github.com/sanzmoses/ng-twa',
              img: 'twa.png',
              responsibilities: ['Frontend'],
              tools: ['Javascript', 'Angular 5'],
              type: 'Sample',
              description: 'Practice App using Angular 5',
              color: '', 
              icon: 'code'
          },
          {
              id: 16,
              name: 'Martian Robot',
              nickname: 'Martian',
              link: 'http://martianrobot.ml',
              code: 'https://github.com/sanzmoses/martianrobot',
              img: 'martian.png',
              responsibilities: ['Backend', 'Frontend'],
              tools: ['PHP', 'Bootstrap'],
              type: 'Sample',
              description: 'My own solution to the martian robot programming challenge',
              color: 'green-card', 
              icon: 'php'
          },
        ] 
    }),
    actions: {
      // since we rely on `this`, we cannot use an arrow function
      SET_PROJECTS(projects) {
        this.projects = projects
      },
    },
})