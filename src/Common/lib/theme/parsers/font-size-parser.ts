import type { ChibiStyleTypeValue } from '../../../types/theme/style-props-types-data'
import { toRem } from '../../to-rem'

export function fontSizeParser(value: ChibiStyleTypeValue['FontSize']) {
  if (typeof value === 'string') {
    return `var(--font-size-${value})`
  }

  return toRem(value)
}
