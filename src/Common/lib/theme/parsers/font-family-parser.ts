import type { ChibiStyleTypeValue } from '../../../types/theme/style-props-types-data'

export function fontFamilyParser(value: ChibiStyleTypeValue['FontFamily']) {
  switch (value) {
    case 'pixel':
      return 'var(--font-family-roboto)'
    default:
      return 'var(--font-family-regular)'
  }
}
