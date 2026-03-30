import type { ChibiStyleTypeValue } from '../../../types/theme/style-props-types-data'
import { toRem } from '../../to-rem'

export function lineHeightParser(value: ChibiStyleTypeValue['LineHeight']) {
  if (typeof value === 'string') {
    return `var(--font-lh-${value})`
  }

  return toRem(value)
}
