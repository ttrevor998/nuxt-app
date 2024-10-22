<template>
    <div>
        <div class="grid grid-cols-4 gap-5 ">
            
            <div v-for="product in products" :key="product.id" >
                <!--
                {{ p.id }}
                <NuxtLink :to="`products/${p.id}`" > {{p.title}}  </NuxtLink>
                -->
                <ProductCard :product="product" />
            </div>
        

        </div>
    </div>
</template>

<script setup>

definePageMeta({
    layout: 'products'
}); /*we can define the layout to use for the page like this, layout
refers to the layout that we created inside the layouts folder */

const products= useState('products') //we can store state and share it across components

await callOnce(async () => { products.value= await $fetch('https://fakestoreapi.com/products')})

useHead({
    title: 'This is the index products page',
    meta:[
        {name: 'index page', content: 'Nuxt Ecommerce Store'}
    ]
})

//we can override the pages head , tags ,meta tags , etc that were set on
//the nuxt.config.ts file by default by using useHead here


//const products2=useState('products')

//console.log(products2)


/*
export default {
    data() {
        return {
            data: []
        }
    },
    async mounted(){
        const products= await fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(json=>this.data=json)

    }
}*/

//const { data : products } = await useFetch(()=>'https://fakestoreapi/products/')
//console.log(products);

/*
const products= await fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(json=>console.log(json))*/

</script>

<style scoped></style>