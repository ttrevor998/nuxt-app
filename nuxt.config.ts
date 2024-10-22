// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss'],
  app:{
    head:{
      title:'Nuxt My App',
      meta:[
      {name: 'description', content:'enter the description'}
      ],
      link:[
        {rel:'stylesheet', href: 'https://fonts.googleapis.com/icon?family=Material+Icons'}
      ]
    }
  },
  runtimeConfig:{
    apikey :process.env.CURRENCY_API_KEY
  } //This is how we get the .env for the api key
})