<script setup lang="ts">
import type { Post } from '~/types'

interface Props {
  data: Post
}

const props = defineProps<Props>()
</script>

<template>
    <div class="card">
        <div class="card__content">
            <div class="card__image-wrapper">
                <NuxtImg
                    :src="props.data.image"
                    alt="image of card"
                />
            </div>

            <div class="card__preview">
                {{ props.data.preview}}
            </div>
        </div>

        <nuxt-link :to="`/${props.data.id}`" class="card__more">
           Read more
        </nuxt-link>
    </div>
</template>

<style lang="scss">
.card {
    cursor: pointer;

    &:hover {
        .card__content {
            transform: translateY(-24px);
        }

        .card__more {
            opacity: 1;
        }
    }

    &__content {
        transition: .2s;
        transform: translateY(0px);
    }

    &__image-wrapper {
        width: 280px;
        height: 280px;
        margin-bottom: 24px;
    }

    &__preview {
        font-size: 20px;
        line-height: 120%;
        height: 74px;
        display: -webkit-box;
        -webkit-line-clamp: 3;
        overflow: hidden;
        -webkit-box-orient: vertical;
    }

    &__more {
        transition: .2s;
        margin-top: 24px;
        opacity: 0;
        font-size: 20px;
        color: $purple;
    }
}
</style>