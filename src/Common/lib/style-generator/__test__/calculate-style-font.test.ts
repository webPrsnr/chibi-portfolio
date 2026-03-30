import type { CalculateStyleFontArgs } from '../calculate-style-font'
import type { FontNameStyles } from '@/Common/types/font/names'
import type { SizeType } from '@/Common/types/font/sizes'
import type { FontWeightType } from '@/Common/types/font/weight'
import { describe, expect, it } from 'vitest'
import { calculateStyleFont } from '../calculate-style-font'

describe('calculateStyleFont', () => {
  it('should return empty object when no args provided', () => {
    const result = calculateStyleFont({})
    expect(result).toEqual({})
  })

  const fontFamilyCases: [FontNameStyles, string][] = [
    ['pixel', 'Pixelify-regular, sans-serif'],
    ['regular', 'Roboto-regular, sans-serif'],
  ]

  const fontWeightCases: [FontWeightType, string][] = [
    ['bold' as FontWeightType, '700'],
    ['medium' as FontWeightType, '500'],
    ['regular' as FontWeightType, '400'],
  ]

  const fontSizeCases: [SizeType, string][] = [
    ['xs', '0.75rem'],
    ['sm', '0.875rem'],
    ['md', '1rem'],
    ['lg', '1.125rem'],
    ['xl', '1.25rem'],
  ]

  it.each(fontFamilyCases)('should set fontFamily for %s', (fn, expected: string) => {
    const result = calculateStyleFont({ fn })
    expect(result).toEqual({ fontFamily: expected })
  })

  it.each(fontWeightCases)('should set fontWeight for %s', (fw, expected: string) => {
    const result = calculateStyleFont({ fw })
    expect(result).toEqual({ fontWeight: expected })
  })

  it.each(fontSizeCases)('should set fontSize for %s', (fz, expected: string) => {
    const result = calculateStyleFont({ fz: fz as SizeType })
    expect(result).toEqual({ fontSize: expected })
  })

  it('should combine all font properties', () => {
    const valueCase: CalculateStyleFontArgs = {
      fn: 'pixel',
      fw: 'bold',
      fz: 'lg',
    }
    const expected: ReturnType<typeof calculateStyleFont> = {
      fontFamily: 'Pixelify-regular, sans-serif',
      fontWeight: '700',
      fontSize: '1.125rem',
    }

    const result = calculateStyleFont(valueCase)
    expect(result).toEqual(expected)
  })

  it('should combine fontFamily + fontWeight', () => {
    const result = calculateStyleFont({
      fn: 'regular',
      fw: 'medium',
    })
    expect(result).toEqual({
      fontFamily: 'Roboto-regular, sans-serif',
      fontWeight: '500',
    })
  })

  it('should work regardless of property order', () => {
    const result1 = calculateStyleFont({ fz: 'xl', fw: 'regular', fn: 'pixel' })
    const result2 = calculateStyleFont({ fn: 'pixel', fz: 'xl', fw: 'regular' })
    expect(result1).toEqual(result2)
  })
})
