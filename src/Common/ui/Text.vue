<script setup lang="ts">
import type { FontNameStyles } from '../types/font/names'
import type { SizeType } from '../types/font/sizes'
import type { FontWeightType } from '../types/font/weight'
import { calculateStyleFont } from '../lib/calculate-style-font'

interface TextProps {
  span?: boolean
  fz?: SizeType
  fn?: FontNameStyles
  fw?: FontWeightType
}

const { span, fz = 'sm', fn = 'regular', fw = 'regular' } = defineProps<TextProps>()
const style = calculateStyleFont({ fz, fn, fw })

const tag = span ? 'span' : 'p'
</script>

<template>
  <component
    :is="tag"
    :style="style"
  >
    <slot />
  </component>
</template>
