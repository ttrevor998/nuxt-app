export default defineEventHandler(async(event)=>{

    //grab the currency pair from the dynamic api endpoint route
    //get the route params
    const {currency}=event.context.params

    //return currency;

    const{apikey}=useRuntimeConfig()
    //we get this from nuxt.config.ts

    const uri=`https://api.currencyapi.com/v3/latest?currencies=${currency}&apikey=${apikey}`
    const {data} = await $fetch(uri)

    //we always use $fetch for server side api requests

    return data

    //return apikey;

})