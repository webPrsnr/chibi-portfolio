import type { StyleValue } from 'vue'

export function calculateStyleSize(height?: string | number, width?: string | number): StyleValue {
  return {
    height: typeof height === 'number' ? `${height}px` : height,
    width: typeof width === 'number' ? `${width}px` : width,
  }
}
