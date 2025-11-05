<script setup lang="ts">
import type { Post } from '~/types'

const route = useRoute()

const { data } = await useAsyncData('post', (): Promise<Post> => $fetch(`/api/post?id=${route.params.id}`))
</script>

<template>
    <div class="post">
        <h1>
            {{ data?.title }}
        </h1>
        
        <NuxtImg
            :src="data?.image"
            alt="image of post"
            class="post__image"
        />

        <div class="post__description">
            About
            
            <h4>{{ data?.description}}</h4>
        </div>
    </div>
</template>

<style lang="scss">
.post {
    display: flex;
    flex-direction: column;
    gap: 80px;

    &__description {
        display: flex;
        flex-direction: column;
        gap: 32px;
        width: 695px;
    }

    &__image {
        height: 700px;
        width: 100%;
    }
}
</style>