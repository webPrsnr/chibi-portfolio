import { describe, expect, it } from 'vitest'
import { toRem } from '@/Common/lib/to-rem'
import { spacingParser } from '../spacing-parser'

describe('spacing parser', () => {
  it('should resolve numbers', () => {
    expect(spacingParser(10)).toBe(toRem(10))
    expect(spacingParser(-10)).toBe(toRem(-10))
    expect(spacingParser(1.5)).toBe(toRem(1.5))
    expect(spacingParser(0)).toBe(toRem(0))
  })

  it('should resolve theme variables', () => {
    expect(spacingParser('xs')).toBe('var(--spacing-xs)')
    expect(spacingParser('-xs')).toBe('calc(var(--spacing-xs) * -1)')
  })
})
