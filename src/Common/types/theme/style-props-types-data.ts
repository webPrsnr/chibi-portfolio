import type { CSSProperties } from 'vue'
import type { ChibiStyleProps } from './style-props'
import type { ChibiDefaultColor, ChibiFontFamilies, ChibiFontSize, ChibiLineHeight, ChibiSpacing } from './theme'

const ChibiStyleTypeKeys = {
  Spacing: 'Spacing',
  Color: 'Color',
  FontFamily: 'FontFamily',
  FontSize: 'FontSize',
  LineHeight: 'LineHeight',
  Basic: 'Basic',
} as const

type StylePropsDataTypes = (typeof ChibiStyleTypeKeys)[keyof typeof ChibiStyleTypeKeys]

export const STYLE_PROPS_DATA: Record<keyof ChibiStyleProps, StylePropsDataTypes> = {
  m: ChibiStyleTypeKeys.Spacing,
  my: ChibiStyleTypeKeys.Spacing,
  mx: ChibiStyleTypeKeys.Spacing,
  mt: ChibiStyleTypeKeys.Spacing,
  mb: ChibiStyleTypeKeys.Spacing,
  ml: ChibiStyleTypeKeys.Spacing,
  mr: ChibiStyleTypeKeys.Spacing,
  p: ChibiStyleTypeKeys.Spacing,
  py: ChibiStyleTypeKeys.Spacing,
  px: ChibiStyleTypeKeys.Spacing,
  pt: ChibiStyleTypeKeys.Spacing,
  pb: ChibiStyleTypeKeys.Spacing,
  pl: ChibiStyleTypeKeys.Spacing,
  pr: ChibiStyleTypeKeys.Spacing,
  bd: ChibiStyleTypeKeys.Basic,
  bdrs: ChibiStyleTypeKeys.Basic,
  bg: ChibiStyleTypeKeys.Color,
  c: ChibiStyleTypeKeys.Color,
  opacity: ChibiStyleTypeKeys.Basic,
  ff: ChibiStyleTypeKeys.FontFamily,
  fz: ChibiStyleTypeKeys.FontSize,
  fw: ChibiStyleTypeKeys.Basic,
  lts: ChibiStyleTypeKeys.Basic,
  ta: ChibiStyleTypeKeys.Basic,
  lh: ChibiStyleTypeKeys.LineHeight,
  fs: ChibiStyleTypeKeys.Basic,
  tt: ChibiStyleTypeKeys.Basic,
  td: ChibiStyleTypeKeys.Basic,
  w: ChibiStyleTypeKeys.Basic,
  miw: ChibiStyleTypeKeys.Basic,
  maw: ChibiStyleTypeKeys.Basic,
  h: ChibiStyleTypeKeys.Basic,
  mih: ChibiStyleTypeKeys.Basic,
  mah: ChibiStyleTypeKeys.Basic,
  bgsz: ChibiStyleTypeKeys.Basic,
  bgp: ChibiStyleTypeKeys.Basic,
  bgr: ChibiStyleTypeKeys.Basic,
  bga: ChibiStyleTypeKeys.Basic,
  pos: ChibiStyleTypeKeys.Basic,
  top: ChibiStyleTypeKeys.Basic,
  left: ChibiStyleTypeKeys.Basic,
  bottom: ChibiStyleTypeKeys.Basic,
  right: ChibiStyleTypeKeys.Basic,
  inset: ChibiStyleTypeKeys.Basic,
  display: ChibiStyleTypeKeys.Basic,
  flex: ChibiStyleTypeKeys.Basic,
}

export interface ChibiStyleTypeValue {
  [ChibiStyleTypeKeys.Spacing]: ChibiSpacing
  [ChibiStyleTypeKeys.Color]: ChibiDefaultColor
  [ChibiStyleTypeKeys.FontFamily]: ChibiFontFamilies
  [ChibiStyleTypeKeys.FontSize]: ChibiFontSize
  [ChibiStyleTypeKeys.LineHeight]: ChibiLineHeight
  [ChibiStyleTypeKeys.Basic]: CSSProperties
}
