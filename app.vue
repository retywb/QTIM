<template>
  <div class="main">
    <Header />

    <div class="content">
      <NuxtPage />
    </div>

    <Footer />
  </div>
</template>

<style scoped>
.main {
  flex-direction: column;
  margin-inline: auto;
}

.content {
  width: var(--content-width);
  margin-inline: auto;
  margin-block: 140px;
}
</style>
