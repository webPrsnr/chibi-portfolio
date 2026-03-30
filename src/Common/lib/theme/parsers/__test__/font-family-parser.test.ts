import { describe, expect, it } from 'vitest'
import { fontFamilyParser } from '../font-family-parser'

describe('font-family parser', () => {
  it('should resolve correct font family', () => {
    expect(fontFamilyParser('pixel')).toBe('var(--font-family-roboto)')
    expect(fontFamilyParser('regular')).toBe('var(--font-family-regular)')
  })
})
