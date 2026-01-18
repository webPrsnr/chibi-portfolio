// eslint-disable-next-line unused-imports/no-unused-vars
const weightTypes = {
  REGULAR: 'regular',
  MEDIUM: 'medium',
  BOLD: 'bold',
} as const

export type FontWeightType = (typeof weightTypes)[keyof typeof weightTypes]
