<script setup lang="ts">
import Paper from '@/Common/ui/Paper.vue'
</script>

<template>
  <Paper class="wrapper">
    <Paper class="outer-container">
      <Paper class="inner-container">
        <slot />
      </Paper>
    </Paper>
  </Paper>
</template>

<style>
.wrapper {
  background: #ffffff;
  padding: var(--spacing-xs);
  border-radius: var(--radius-xs);
}

.outer-container {
  border-radius: var(--radius-xs);
  border-width: 2px;
  border-style: solid;
  border-color: black;
  padding: var(--spacing-sm);
}

.inner-container {
  border-width: 1px;
  border-style: solid;
  border-color: black;
  padding-inline: var(--spacing-xs);
}
</style>
