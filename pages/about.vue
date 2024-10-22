<template>
    <div>
        <h2>About Page</h2>
        <p>this is the data from our api: {{ data }}</p>
    </div>
</template>

<script setup>
        /*
    const {data} = await useFetch('/api/serve?name=mario', {
        method:'post',
        body:{
            age:34
        }
    })
        */

        //const {data}=await useFetch('/api/serve')
        //make a get api request 

        const data=await useFetch('/api/currency/GBP')

</script>



<style scoped>
h2 {
    margin-bottom: 20px;
    font-size: 36px;
}

p {
    margin: 20px 0;
}
</style>