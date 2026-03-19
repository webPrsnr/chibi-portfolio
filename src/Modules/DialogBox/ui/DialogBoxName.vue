<script setup lang="ts">
import Paper from '@/Common/ui/Paper.vue'
import Text from '@/Common/ui/Text.vue'

interface DialogBoxNameProps {
  title: string
}

const { title } = defineProps<DialogBoxNameProps>()
</script>

<template>
  <Paper class="name-container">
    <Text>
      {{ title }}
    </Text>
  </Paper>
</template>

<style>
.wrapper {
  padding-inline: var(--spacing-xs);
  padding-top: var(--spacing-xs);
  border-top-left-radius: var(--radius-xs);
  border-top-right-radius: var(--radius-xs);
}

.name-container {
  padding-inline: var(--spacing-sm);
  padding-top: var(--spacing-xs);
  padding-bottom: var(--spacing-xs);
}
</style>
