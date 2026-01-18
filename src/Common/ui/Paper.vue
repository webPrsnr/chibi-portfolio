<script setup lang="ts">
import { useAttrs } from 'vue'
import calculateStyleSize from '../lib/calculate-style-size'

export interface PaperProps {
  h?: number | string
  w?: number | string
}

const { h, w } = defineProps<PaperProps>()

const styleSize = calculateStyleSize(h, w)
</script>

<template>
  <div :style="styleSize">
    <slot />
  </div>
</template>
