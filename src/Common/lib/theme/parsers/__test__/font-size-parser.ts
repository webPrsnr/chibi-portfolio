import { describe, expect, it } from 'vitest'
import { toRem } from '@/Common/lib/to-rem'
import { fontSizeParser } from '../font-size-parser'

describe('font-size parser', () => {
  it('should resolve correct font size', () => {
    expect(fontSizeParser('xs')).toBe(`var(--font-size-xs)`)
    expect(fontSizeParser(10)).toBe(toRem(10))
  })
})
