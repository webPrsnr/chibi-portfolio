<script setup lang="ts">
import type { PaperProps } from '@/Common/ui/Paper.vue'
import { useAttrs } from 'vue'
import calculateStyleSize from '@/Common/lib/calculate-style-size'
import Paper from '@/Common/ui/Paper.vue'
import Text from '@/Common/ui/Text.vue'

interface WindowProps extends PaperProps {
  title: string
}
const { title, h, w } = defineProps<WindowProps>()
defineOptions({
  inheritAttrs: false,
})
const attrs = useAttrs()

const styleSize = calculateStyleSize(h, w)
</script>

<template>
  <div
    :style="styleSize"
    class="window-container"
  >
    <div class="window-header">
      <Text
        fz="xl"
        span
        fn="pixel"
        class="window-text"
      >
        {{ title }}
      </Text>
    </div>

    <Paper
      h="100%"
      w="100%"
      class="paper"
      :style="attrs.style"
    >
      <slot />
    </Paper>
  </div>
</template>

<style scoped>
.window-container {
  display: flex;
  flex-direction: column;
}

.window-header {
  display: flex;
  justify-content: center;
  align-items: center;
  height: var(--spacing-lg);
  background-color: #dde3e9;
  border-top-left-radius: var(--radius-sm);
  border-top-right-radius: var(--radius-sm);
  justify-content: center;
  align-items: center;
}

.paper {
  border-top-left-radius: 0;
  border-top-right-radius: 0;
  border-bottom-left-radius: var(--radius-sm);
  border-bottom-right-radius: var(--radius-sm);
  background-color: #fff;
}

.window-text {
  text-transform: uppercase;
  &::before {
    content: "~~~";
  }
  &::after {
    content: "~~~";
  }
}
</style>
