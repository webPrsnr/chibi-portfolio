// eslint-disable-next-line unused-imports/no-unused-vars
const fontNames = {
  PIXEL: 'pixel',
  REGULAR: 'regular',
} as const

export type FontNameStyles = (typeof fontNames)[keyof typeof fontNames]
