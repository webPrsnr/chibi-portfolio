<script setup lang="ts">
import Paper from '@/Common/ui/Paper.vue'
import DialogBoxContainer from './DialogBoxContainer.vue'

interface DialogBoxProps {
  title: string
  text: string
}
const { text, title } = defineProps<DialogBoxProps>()
</script>

<template>
  <Paper class="root">
    <DialogBoxContainer>
      hello wrold
    </DialogBoxContainer>
  </Paper>
</template>

<style scoped>
.root {
  padding-inline: var(--spacing-xl);
}
</style>
