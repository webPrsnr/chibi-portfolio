import type { ChibiStyleTypeValue } from '../../../types/theme/style-props-types-data'
import { toRem } from '../../to-rem'

export function spacingParser(value: ChibiStyleTypeValue['Spacing']) {
  if (typeof value === 'string') {
    if (value.length === 3 && value[0] === String.fromCharCode(45)) {
      const positiveValue = value.slice(1)
      return `calc(var(--spacing-${positiveValue}) * -1)`
    }
    return `var(--spacing-${value})`
  }
  return toRem(value)
}
