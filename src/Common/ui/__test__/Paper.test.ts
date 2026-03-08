import type { PaperProps } from '../Paper.vue'
import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import Paper from '../Paper.vue'

describe('<Paper> component', () => {
  const sizeCases: [PaperProps, string | undefined][] = [
    [{ h: 100 }, `height: 100px;`],
    [{ w: 200 }, `width: 200px;`],
    [{ h: '50vh' }, `height: 50vh;`],
    [{ w: '100%' }, `width: 100%;`],
    [{ h: 100, w: 200 }, `height: 100px; width: 200px;`],
    [{ h: '3rem', w: 150 }, `height: 3rem; width: 150px;`],
  ]

  it.each(sizeCases)('should apply correct styles %#', (props, expectedStyle) => {
    const wrapper = mount(Paper, {
      props,
      slots: {
        default: '<p>Test content</p>',
      },
    })

    const div = wrapper.find('div')
    expect(div.exists()).toBe(true)
    expect(div.attributes('style')).contain(expectedStyle)
  })

  it('should render slot content correctly', () => {
    const wrapper = mount(Paper, {
      slots: {
        default: '<span>Custom slot</span>',
      },
    })

    expect(wrapper.html()).toContain('<span>Custom slot</span>')
  })

  it('should handle undefined props gracefully', () => {
    const wrapper = mount(Paper, { props: {} })

    const div = wrapper.find('div')
    expect(div.attributes('style')).toBe(undefined)
  })
})
