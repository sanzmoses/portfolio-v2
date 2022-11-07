import { defineStore } from 'pinia'

export const useProjectStore = defineStore('ProjectStore', {
    state: () => ({
        projects: [
          {
            name: 'Link Value',
            link: 'https://linkvalue.net/',
            code: '#',
            img: 'linkvalue.png',
            responsibilities: ['Frontend'],
            tools: ['CSS', 'Javascript', 'LESS', 'UIkit', 'Bootstrap', 'Laravel', 'VueJS'],
            type: 'Freelance',
            description: 'Front end development',
            color: 'orange-card', base: 'md-accent'
          },
          {
              name: 'GS Living',
              link: 'https://greatersydneyliving.com.au/',
              code: '#',
              img: 'gsliving.png',
              responsibilities: ['Frontend'],
              tools: ['CSS', 'Javascript', 'LESS', 'UIkit'],
              type: 'Employment',
              description: 'Front end development',
              color: 'green-card', base: 'md-primary'
          },
          {
              name: 'Super Student HQ',
              link: 'https://sshq.cre8iv.click/',
              code: '#',
              img: 'superstudent.png',
              responsibilities: ['Frontend'],
              tools: ['CSS', 'Javascript', 'LESS', 'UIkit'],
              type: 'Employment',
              description: 'Front end development',
              color: 'orange-card', base: 'md-accent'
          },
          {
              name: 'Ecoplant Australia',
              link: 'https://ecoplantaustralia.com.au/',
              code: '#',
              img: 'ecoplant.png',
              responsibilities: ['Frontend'],
              tools: ['CSS', 'Javascript', 'LESS', 'UIkit'],
              type: 'Employment',
              description: 'Front end development',
              color: 'green-card', base: 'md-primary'
          },
          {
              name: 'Online Expert',
              link: 'https://oexpert.cre8iv.click/',
              code: '#',
              img: 'oexpert.png',
              responsibilities: ['Frontend'],
              tools: ['CSS', 'Javascript', 'LESS', 'UIkit'],
              type: 'Employment',
              description: 'Front end development',
              color: 'orange-card', base: 'md-accent'
          },
          {
              name: 'Sue Tsigaros',
              link: 'https://suetsigaros.cre8iv.click/',
              code: '#',
              img: 'sue.png',
              responsibilities: ['Frontend'],
              tools: ['CSS', 'Javascript', 'LESS', 'UIkit'],
              type: 'Employment',
              description: 'Front end development',
              color: 'purple-card', base: 'md-primary'
          },
          {
              name: 'Cost Miner',
              link: 'https://cm.cre8iv.click/',
              code: '#',
              img: 'costminer.png',
              responsibilities: ['Frontend'],
              tools: ['CSS', 'Javascript', 'LESS', 'UIkit'],
              type: 'Employment',
              description: 'Front end development',
              color: 'green-card', base: 'md-accent'
          },
          {
              name: 'Photopro Website',
              link: 'http://photoprotrading.com',
              code: '#',
              img: 'photopro.png',
              responsibilities: ['Backend', 'Frontend', 'Deployment'],
              tools: ['Laravel 5.5', 'VueJS', 'Bootstrap'],
              type: 'Freelance',
              description: 'From the ground up, development to deployment, backend to frontend',
              color: 'orange-card', base: 'md-primary'
          },
          {
              name: 'Cased Dimensions Microsite',
              link: 'http://servicemanagerapps.com',
              code: '#',
              img: 'service.png',
              responsibilities: ['Backend', 'Frontend', 'Deployment', 'API Integration'],
              tools: ['Laravel 5.6', 'OctoberCMS', 'Javascript', 'Bootstrap'],
              type: 'Employment',
              description: 'Having used OctoberCMS (Built on top of Laravel) countless of times for a handful of sites, we as a team has had to know all the details and parts of this app and the inner workings of the cms. From API integrations, like google\'s captcha, chatbot, email, currency api, cookies and etc.',
              color: 'purple-card', base: 'md-accent'
          },
          {
              name: 'Onlinekeycodes Site',
              link: 'http://onlinekeycodes.com',
              code: '#',
              img: 'keycodes.png',
              responsibilities: ['Backend', 'Deployment', 'API Integration'],
              tools: ['Laravel 5.5', 'VueJS', 'Materialize'],
              type: 'Freelance',
              description: 'N/A',
              color: '', base: 'md-primary'
          },
          {
              name: 'SOS Network Davao Site',
              link: '#',
              code: '#',
              img: 'saveourschool.png',
              responsibilities: ['Backend', 'Frontend', 'Deployment', 'API Development'],
              tools: ['Laravel 5.5', 'Cordova', 'Bootstrap'],
              type: 'Capstone',
              description: 'A management information system the helps manage administrators and users, blog posts, data files and information within the organization. A separate application for android the pulls data from the web app api to send text messages.',
              color: 'green-card', base: 'md-accent'
          },
          {
              name: 'Quizz App',
              link: 'https://sanzmoses.github.io/quizzapp',
              code: 'https://github.com/sanzmoses/quizzapp',
              img: 'quizzapp.png',
              responsibilities: ['Frontend'],
              tools: ['Javascript', 'JQuery'],
              type: 'Sample',
              description: 'Practice Quiz App using javascript',
              color: '',  base: 'md-primary'
          },
          {
              name: 'Wiki App',
              link: 'https://sanzmoses.github.io/wiki',
              code: 'https://github.com/sanzmoses/wiki',
              img: 'wiki.png',
              responsibilities: ['Frontend'],
              tools: ['Javascript', 'JQuery'],
              type: 'Sample',
              description: 'Practice App integrating Wikipedia API',
              color: 'orange-card', base: 'md-accent'
          },
          {
              name: 'Weather App',
              link: 'https://sanzmoses.github.io/wep',
              code: 'https://github.com/sanzmoses/wep',
              img: 'wep.png',
              responsibilities: ['Frontend'],
              tools: ['Javascript', 'JQuery'],
              type: 'Sample',
              description: 'Practice App integrating Weather API Darksky',
              color: 'purple-card', base: 'md-primary'
          },
          {
              name: 'Twitter Like App',
              link: 'https://sanzmoses.github.io/ng-twa',
              code: 'https://github.com/sanzmoses/ng-twa',
              img: 'twa.png',
              responsibilities: ['Frontend'],
              tools: ['Javascript', 'Angular 5'],
              type: 'Sample',
              description: 'Practice App using Angular 5',
              color: '', base: 'md-accent'
          },
          {
              name: 'Martian Robot Programming Challenge',
              link: 'http://martianrobot.ml',
              code: 'https://github.com/sanzmoses/martianrobot',
              img: 'martian.png',
              responsibilities: ['Backend', 'Frontend'],
              tools: ['PHP', 'Bootstrap'],
              type: 'Sample',
              description: 'My own solution to the martian robot programming challenge',
              color: 'green-card', base: 'md-primary'
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