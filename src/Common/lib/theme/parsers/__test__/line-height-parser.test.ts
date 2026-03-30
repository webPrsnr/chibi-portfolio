import { describe, expect, it } from 'vitest'
import { toRem } from '@/Common/lib/to-rem'
import { lineHeightParser } from '../line-height-parser'

describe('line-height parser', () => {
  it('should resolve correct line height', () => {
    expect(lineHeightParser('xs')).toBe(`var(--font-lh-xs)`)
    expect(lineHeightParser(10)).toBe(toRem(10))
  })
})
