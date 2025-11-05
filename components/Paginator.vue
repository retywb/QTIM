<script setup lang="ts">
interface Props {
  limit?: number
  count?: number
  page?: number
}

const props = withDefaults(defineProps<Props>(), {
  limit: 8,
  count: 30,
  page: 1
})

const emits = defineEmits(['onChange'])

const current = ref(props.page)
const buttonsCount = 5

watch(
  () => props.page,
  (page) => {
    current.value = +page
  }
)

const pagesCount = computed(() => {
  return Math.ceil(props.count / props.limit)
})

const buttonsList = computed(() => {
  const arr = []
  if (pagesCount.value > buttonsCount) {
    if (current.value > 2 && current.value < pagesCount.value - 1 && current.value <= pagesCount.value - 2) {
      for (let i = current.value - 2; i <= current.value + 2; i++) {
        arr.push(i)
      }
    } else if (current.value > pagesCount.value - 3) {
      for (let i = pagesCount.value - (buttonsCount - 1); i <= pagesCount.value; i++) {
        arr.push(i)
      }
    } else {
      for (let i = 1; i <= buttonsCount; i++) {
        arr.push(i)
      }
    }
  } else {
    for (let i = 1; i <= pagesCount.value; i++) {
      arr.push(i)
    }
  }
  return arr
})

function selectPage(page: number) {
  current.value = page
  emits('onChange', current.value)
}

function nextPage() {
  current.value++
  current.value = Math.min(pagesCount.value, current.value)
  emits('onChange', current.value)
}

function prevPage() {
  current.value--
  current.value = Math.max(current.value, 1)
  emits('onChange', current.value)
}
</script>

<template>
  <div class="pagination">
    <div v-if="current != 1" class="pagination__button pagination__button--prev" @click="prevPage" >
      <Icon name="arrow-right" view-box="0 0 24 24" class="pagination__button-icon"/>
    </div>

    <div
      v-for="page in buttonsList"
      class="pagination__button"
      :class="{ 'pagination__button--active': page === current }"
      :key="page"
      @click="selectPage(page)"
    >
      {{ page }}
    </div>

    <div v-if="current != pagesCount" class="pagination__button pagination__button--next" @click="nextPage">
      <Icon name="arrow-right" view-box="0 0 24 24" class="pagination__button-icon"/>
    </div>
  </div>
</template>

<style scoped lang="scss">
.pagination {
  display: flex;
  align-items: center;
  gap: 8px;
  user-select: none;

  .pagination__button {
    position: relative;
    width: 44px;
    height: 44px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: $text-color;
    cursor: pointer;
    background: $button-color;
    border-radius: 12px;
    overflow: hidden;
    font-size: 18px;

    &:hover {
      background: $button-color-hover;
    }

    &--next, &--prev {
      border: 2px solid $button-color;
      background: $white;
    }

    &-icon {
      height: 24px;
    }

    &--prev {
      transform: rotateZ(-180deg);
    }

    &--active {
      background: $button-color-active;
      color: $white;
      pointer-events: none;
    }
  }
}
</style>