import type { ChibiStyleProps } from './style-props'

export const STYLE_PROPS_KEYS: Record<keyof ChibiStyleProps, string> = {
  m: 'margin',
  mt: 'marginTop',
  mb: 'marginBottom',
  ml: 'marginLeft',
  mr: 'marginRight',
  mx: 'marginInline',
  my: 'marginBlock',

  p: 'padding',
  pt: 'paddingTop',
  pb: 'paddingBottom',
  pl: 'paddingLeft',
  pr: 'paddingRight',
  px: 'paddingInline',
  py: 'paddingBlock',

  bd: 'border',
  bdrs: 'borderRadius',
  bg: 'background',
  c: 'color',
  opacity: 'opacity',

  ff: 'fontFamily',
  fz: 'fontSize',
  fw: 'fontWeight',
  lts: 'letterSpacing',
  ta: 'textAlign',
  lh: 'lineHeight',
  fs: 'fontStyle',
  tt: 'textTransform',
  td: 'textDecoration',

  w: 'width',
  miw: 'minWidth',
  maw: 'maxWidth',
  h: 'height',
  mih: 'minHeight',
  mah: 'maxHeight',

  bgsz: 'backgroundSize',
  bgp: 'backgroundPosition',
  bgr: 'backgroundRepeat',
  bga: 'backgroundAttachment',

  pos: 'position',
  top: 'top',
  left: 'left',
  bottom: 'bottom',
  right: 'right',
  inset: 'inset',

  display: 'display',
  flex: 'flex',

}
