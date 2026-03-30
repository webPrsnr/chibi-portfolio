<script setup lang="ts">
import Box from '@/Common/ui/Box.vue'
import DialogBoxContainer from './DialogBoxContainer.vue'

interface DialogBoxProps {
  title: string
  text: string
}
const { text, title } = defineProps<DialogBoxProps>()
</script>

<template>
  <Box px="xl">
    <DialogBoxContainer>
      hello wrold
    </DialogBoxContainer>
  </Box>
</template>
