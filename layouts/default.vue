<template>
    <div>
        <header class="shadow-sm bg-white">
            <nav class="container mx-auto p-4 flex justify-between">
                <NuxtLink class="font-bold" to="/">Nuxt Abonos </NuxtLink>
                <ul class="flex gap-4">
                    <li> <NuxtLink to="/">Home</NuxtLink></li>
                    <li> <NuxtLink to="/about">About</NuxtLink></li>
                    <li> <NuxtLink to="/products" class="btn">Products</NuxtLink></li>
                    <li> <NuxtLink to="/products/abc" class="btn">Products ABC</NuxtLink></li>
                </ul>
            </nav>
        </header>

        <!-- Output the page content here with slot-->
         <div class="mx-auto container">
            <slot />
         </div>
    </div>
</template>

<style scoped>
    .router-link-active{
        color: aquamarine;
    }
</style>