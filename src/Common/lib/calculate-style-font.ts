import type { StyleValue } from 'vue'
import type { FontNameStyles } from '../types/font/names'
import type { SizeType } from '../types/font/sizes'
import type { FontWeightType } from '../types/font/weight'

function createFontName(fs: FontNameStyles): string | undefined {
  switch (fs) {
    case 'pixel':
      return 'Pixelify-regular, sans-serif'
    case 'regular':
      return 'Roboto-regular, sans-serif'
    default:
      return undefined
  }
}

function createFontWeight(fw: FontWeightType,
): string | undefined {
  switch (fw) {
    case 'bold':
      return '700'
    case 'medium':
      return '500'
    case 'regular':
      return '400'
    default:
      return undefined
  }
}

function createFontSize(fz: SizeType): string | undefined {
  switch (fz) {
    case 'xs':
      return '0.75rem'
    case 'sm':
      return '0.875rem'
    case 'md':
      return '1rem'
    case 'lg':
      return '1.125rem'
    case 'xl':
      return '1.25rem'
    default:
      return undefined
  }
}

export interface CalculateStyleFontArgs {
  fz?: SizeType
  fn?: FontNameStyles
  fw?: FontWeightType
}
export function calculateStyleFont({
  fn,
  fw,
  fz,
}: CalculateStyleFontArgs): StyleValue {
  let style: StyleValue = {}

  if (fn) {
    style = { ...style, fontFamily: createFontName(fn) }
  }
  if (fw) {
    style = { ...style, fontWeight: createFontWeight(fw) }
  }

  if (fz) {
    style = { ...style, fontSize: createFontSize(fz) }
  }

  return style
}
