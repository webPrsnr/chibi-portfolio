<script setup lang="ts">
import type { ChibiStyleProps } from '@/Common/types/theme/style-props'
import { useAttrs } from 'vue'
import Box from '@/Common/ui/Box.vue'
import Text from '@/Common/ui/Text.vue'

interface WindowProps extends ChibiStyleProps {
  title: string
}
const { title, ...rest } = defineProps<WindowProps>()

defineOptions({
  inheritAttrs: false,
})
const attrs = useAttrs()
</script>

<template>
  <Box
    v-bind="rest"
    display="flex"
    class="window-container"
  >
    <Box
      display="flex"
      h="var(--spacing-lg)"
      bg="#dde3e9"
      class="window-header"
    >
      <Text
        fz="xl"
        span
        ff="pixel"
        class="window-text"
      >
        {{ title }}
      </Text>
    </Box>

    <Box
      :style="attrs.style"
      h="100%"
      w="100%"
      class="paper"
      bg="#8b8b8b"
    >
      <slot />
    </Box>
  </Box>
</template>

<style scoped>
.window-container {
  flex-direction: column;
}

.window-header {
  justify-content: center;
  align-items: center;
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
