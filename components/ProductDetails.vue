<template>
    <div>
        <Head>
            <Title>Nuxt Ecommerce | {{ productInfo? productInfo.title: productBackupFetched.data.value.title  }} </Title>
            <Meta name=" description" :content="productInfo? productInfo.description: productBackupFetched.data.value.description" />
        </Head>

        <div class="card">
            <div class="grid grid-cols-2 gap-10">
                <div class="p-7">
                    <img :src="productInfo ? productInfo.image : productBackupFetched.data.value.image"
                        :alt="productInfo ? productInfo.title : productBackupFetched.data.value.title"
                        class="mx-auto my-7">
                </div>
                <div class="p-7">
                    <h2 class="text-4xl my-7"> {{ productInfo ? productInfo.title :
                        productBackupFetched.data.value.title }}</h2>
                    <p class="text-xl my-7">Price - ${{ productInfo ? productInfo.price :
                        productBackupFetched.data.value.price }}</p>
                    <h3 class="font-bold border-b-2 mb-4 pb-2">Product Description</h3>
                    <p class="mb-7">{{ productInfo ? productInfo.description :
                        productBackupFetched.data.value.description }}</p>
                    <button class="btn flex">
                        <i class="material-icons mr-2">add_shopping_cart</i>
                        <span>Add to cart</span>
                    </button>
                </div>
            </div> 

        </div>
    </div>


</template>

<script setup>

//import { onMounted } from 'vue'


const { id } = useRoute().params
const { productInfo } = defineProps(['productInfo'])
let productBackupFetched = null


if (!productInfo) {
    console.log("productinfo!!")
    productBackupFetched = await useFetch('https://fakestoreapi.com/products/' + id /*, {key: id}*/)

    if (!productBackupFetched.data.value) {
        throw createError({ statusCode: 404, statusMessage: 'Product Not Found', fatal: true })
    }   //this will work for the browser and the server , fatal will forece the app
    //to thos the custom error 404 page

    //productBackupFetched=productBackupFetched.data.value
    console.log(productBackupFetched.data.value.image)
}



/*

onMounted(async () => {
    let backupProd=null
    let products = useState('products')
    let productInfo2=ref(554);
    if (!productInfo) {
        await callOnce(async () => { products.value = await $fetch('https://fakestoreapi.com/products') }).then(
            res => {
                console.log("products??", products)
                productInfo2 = 667
            }
        )
    }
})
    */

//console.log('product',Object.keys(product))

</script>


<style scoped>
img {
    max-width: 400px;
}
</style>