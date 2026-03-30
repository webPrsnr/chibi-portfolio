<script setup lang="ts">
import type { Component } from 'vue'
import type { ChibiStyleProps } from '../types/theme/style-props'
import { parseStyleProps } from '../lib/theme'

interface BoxProps extends ChibiStyleProps {
  as?: string | Component
}

const {
  as = 'div',
  ...rest
} = defineProps<BoxProps>()

const style = parseStyleProps(rest)
</script>

<template>
  <component
    :is="as"
    :style="style"
  >
    <slot />
  </component>
</template>
