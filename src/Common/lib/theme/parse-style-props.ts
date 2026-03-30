import type { CSSProperties, DefineProps } from 'vue'
import type { ChibiStyleTypeValue } from '../../types/theme/style-props-types-data'
import type { ChibiStyleProps } from '@/Common/types/theme/style-props'
import { toRaw } from 'vue'
import { STYLE_PROPS_KEYS } from '@/Common/types/theme/style-props-keys-data'
import { STYLE_PROPS_DATA } from '../../types/theme/style-props-types-data'
import { colorsParser } from './parsers/colors-parser'
import { fontFamilyParser } from './parsers/font-family-parser'
import { fontSizeParser } from './parsers/font-size-parser'
import { lineHeightParser } from './parsers/line-height-parser'
import { spacingParser } from './parsers/spacing-parser'

export function parseStyleProps(props: DefineProps<ChibiStyleProps, never>) {
  const rawProps = toRaw(props)

  const strippedProps = Object.entries(rawProps).reduce((accum, current) => {
    const [key, value] = current
    if (value === undefined)
      return accum
    return Object.assign(accum, { [key]: value })
  }, {} as DefineProps<ChibiStyleProps, never>)

  const res = Object.keys(strippedProps).reduce((accum, current) => {
    const key = current as keyof ChibiStyleProps

    const name = STYLE_PROPS_KEYS[key]
    const type = STYLE_PROPS_DATA[key]
    const value = strippedProps[key] as ChibiStyleTypeValue[typeof type]

    switch (type) {
      case 'Color':
        return Object.assign(accum, { [name]: colorsParser(value as ChibiStyleTypeValue[typeof type]) })
      case 'FontFamily':
        return Object.assign(accum, { [name]: fontFamilyParser(value as ChibiStyleTypeValue[typeof type]) })
      case 'FontSize':
        return Object.assign(accum, { [name]: fontSizeParser(value as ChibiStyleTypeValue[typeof type]) })
      case 'LineHeight':
        return Object.assign(accum, { [name]: lineHeightParser(value as ChibiStyleTypeValue[typeof type]) })
      case 'Spacing':
        return Object.assign(accum, { [name]: spacingParser(value as ChibiStyleTypeValue[typeof type]) })
      default:
        return Object.assign(accum, { [name]: value })
    }
  }, {} as CSSProperties)

  return res
}
