<script setup lang="ts">
import Box from '@/Common/ui/Box.vue'
</script>

<template>
  <Box
    bg="#fff"
    p="xs"
    class="wrapper"
  >
    <Box
      bdrs="var(--radius-xs)"
      p="sm"
      class="outer-container"
    >
      <Box
        px="xs"
        class="inner-container"
      >
        <slot />
      </Box>
    </Box>
  </Box>
</template>

<style>
.wrapper {
  border-radius: var(--radius-xs);
}

.outer-container {
  border-width: 2px;
  border-style: solid;
  border-color: black;
}

.inner-container {
  border-width: 1px;
  border-style: solid;
  border-color: black;
}
</style>
