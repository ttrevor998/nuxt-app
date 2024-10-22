<template>
    <div>
        
        <ProductDetails :productInfo="productInfo" />
    </div>
</template>

<script setup>

definePageMeta({
    layout: 'products'
});

const { id } = useRoute().params //we are getting the route params for 

let products = useState('products')
let productInfo = null;
for (let productIndex in products.value) {
    console.log(products.value[productIndex])
    if (products.value[productIndex].id == id) {
        console.log('got it')
        productInfo = products.value[productIndex]
    }
}

/*
if (!productInfo) {

    const { id } = useRoute().params //we are getting the route params for 
    const uri = 'https://fakestoreapi.com/products/' + id
    const productBackupFetched = await useFetch('https://fakestoreapi.com/products/' + id, {key: id})
    if (!productBackupFetched){
        throw createError({statusCode:404, statusMessage:'Product Not Found'})
    }
    productInfo=productBackupFetched;

    //throw createError({statusCode:404, statusMessage:'Product Not Found'})
}
    */

</script>

<style scoped></style>