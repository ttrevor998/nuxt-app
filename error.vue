<template>
    <div class="mt-7 max-w-sm mx-auto text-center card">
        <p class="mt-7 text-7xl font-bold">{{ error.statusCode }} </p>
        <p class="mt-7 text-6xl">Ooops</p>
        <p class="mt-7">{{ error.message }}</p>
        <button @click="handleError" class="btn my-7" >Go home...</button>

    </div>
</template>

<script setup>
defineProps(['error'])

const handleError=()=>clearError({redirect: '/'})
//clears the error and redirect user to homepage

</script>

<style scoped></style> 