import { describe, expect, it } from 'vitest'
import { colorsParser } from '../colors-parser'

describe('colors parser', () => {
  it('should resolve correct color', () => {
    expect(colorsParser('blue')).toBe('blue')
  })
})
