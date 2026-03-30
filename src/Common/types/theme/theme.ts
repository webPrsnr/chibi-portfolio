import type { FontNameStyles } from '../font/names'

export type ChibiSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl'
export type ChibiSpacingValues = Record<ChibiSize | (string & {}), string>
export type ChibiSpacing = keyof ChibiSpacingValues | (string & {}) | number
export type ChibiFontSize = keyof ChibiSpacingValues | (string & {}) | number
export type ChibiLineHeight = keyof ChibiSpacingValues | (string & {}) | number

export type ChibiDefaultColor = 'dark' | 'gray' | 'red' | 'pink' | 'grape' | 'violet' | 'indigo' | 'blue' | 'cyan' | 'green' | 'lime' | 'yellow' | 'orange' | 'teal' | (string & {})

export type ChibiFontFamilies = FontNameStyles
