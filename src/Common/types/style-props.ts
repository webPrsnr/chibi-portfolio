import type { CSSProperties } from 'vue'
import type { ChibiFontFamilies, ChibiFontSize, ChibiLineHeight, ChibiSpacing, DefaultChibiColor } from './theme'

export interface ChibiStyleProps {
  m?: ChibiSpacing
  my?: ChibiSpacing
  mx?: ChibiSpacing
  mt?: ChibiSpacing
  mb?: ChibiSpacing
  ml?: ChibiSpacing
  mr?: ChibiSpacing
  p?: ChibiSpacing
  py?: ChibiSpacing
  px?: ChibiSpacing
  pt?: ChibiSpacing
  pb?: ChibiSpacing
  pl?: ChibiSpacing
  pr?: ChibiSpacing
  bd?: CSSProperties['border']
  bg?: DefaultChibiColor
  c?: DefaultChibiColor
  opacity?: CSSProperties['opacity']
  ff?: ChibiFontFamilies
  fz?: ChibiFontSize
  fw?: CSSProperties['fontWeight']
  lts?: CSSProperties['letterSpacing']
  ta?: CSSProperties['text-align-last']
  lh?: ChibiLineHeight
  fs?: CSSProperties['fontStyle']
  tt?: CSSProperties['textTransform']
  td?: CSSProperties['textDecoration']
  w?: CSSProperties['width']
  miw?: CSSProperties['minWidth']
  maw?: CSSProperties['maxWidth']
  h?: CSSProperties['height']
  mih?: CSSProperties['minHeight']
  mah?: CSSProperties['maxHeight']
  bgsz?: CSSProperties['backgroundSize']
  bgp?: CSSProperties['backgroundPosition']
  bgr?: CSSProperties['backgroundRepeat']
  bga?: CSSProperties['backgroundAttachment']
  pos?: CSSProperties['position']
  top?: CSSProperties['top']
  left?: CSSProperties['left']
  bottom?: CSSProperties['bottom']
  right?: CSSProperties['right']
  inset?: CSSProperties['inset']
  display?: CSSProperties['display']
  flex?: CSSProperties['flex']
}
