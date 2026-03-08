import type { StyleValue } from 'vue'
import { describe, expect, it } from 'vitest'
import calculateStyleSize from '../calculate-style-size'

describe('calculateStyleSize', () => {
  const sizes: [string | number | undefined, string | number | undefined, StyleValue][] = [
    // height, width, expected
    [undefined, undefined, {}],
    [100, undefined, { height: '100px' }],
    [undefined, 200, { width: '200px' }],
    ['50vh', undefined, { height: '50vh' }],
    [undefined, '100%', { width: '100%' }],

    [100, 200, { height: '100px', width: '200px' }],
    ['50vh', '100%', { height: '50vh', width: '100%' }],
    [24, 'auto', { height: '24px', width: 'auto' }],
    ['3rem', 150, { height: '3rem', width: '150px' }],
  ]

  it.each(sizes)('should convert %#', (height, width, expected) => {
    const result = calculateStyleSize(height, width)
    expect(result).toEqual(expected)
  })

  it('should handle zero values', () => {
    const result = calculateStyleSize(0, 0)
    expect(result).toEqual({ height: '0px', width: '0px' })
  })

  it('should handle negative numbers', () => {
    const result = calculateStyleSize(-10, -20)
    expect(result).toEqual({ height: '-10px', width: '-20px' })
  })

  it('should handle decimal numbers', () => {
    const result = calculateStyleSize(12.5, 25.75)
    expect(result).toEqual({ height: '12.5px', width: '25.75px' })
  })
})
