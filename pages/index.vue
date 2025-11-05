<script setup lang="ts">
import type { Post } from '~/types'

const limit = 8
const pageNumber = ref(1)

const { data } = await useAsyncData('posts', (): Promise<Post[]> => $fetch('/api/posts'))

const posts = computed(() => {
    const from = (pageNumber.value - 1) * limit
    const to = (pageNumber.value - 1) * limit + limit

    return data.value?.slice(from, to)
})
</script>

<template>
    <div class="main">

        <h1>
            Articles
        </h1>

        <div class="posts-list">
            <Card
                v-for="post in posts"
                :key="post.id"
                :data="post"
            />
        </div>

        <Paginator
            :limit="limit"
            :count="data?.length"
            :page="pageNumber"
            @onChange="pageNumber = $event"
        />
    </div>
</template>

<style scoped>
.main {
    display: flex;
    flex-direction: column;
    gap: 50px;
}

.posts-list {
    width: 100%;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 32px;
}
</style>
