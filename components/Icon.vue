<script setup lang="ts">
const props = defineProps<{ name: string; viewBox: string }>()

const iconUrl = computed(() => `/icons/${props.name}.svg`)
</script>

<template>
    <svg class="p-icon" xmlns="http://www.w3.org/2000/svg" :viewBox="viewBox">
      <use :href="`${iconUrl}#${name}`" :xlink:href="`${iconUrl}#${name}`" xmlns:xlink="http://www.w3.org/1999/xlink" />
    </svg>
</template>
  
<style scoped>
.p-icon {
    flex-shrink: 0;
    fill: currentColor;
    stroke: currentColor;
}
</style>
  