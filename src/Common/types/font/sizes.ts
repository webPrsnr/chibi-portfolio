// eslint-disable-next-line unused-imports/no-unused-vars
const sizeTypes = {
  XS: 'xs',
  SM: 'sm',
  MD: 'md',
  LG: 'lg',
  XL: 'xl',
} as const

export type SizeType = (typeof sizeTypes)[keyof typeof sizeTypes]
