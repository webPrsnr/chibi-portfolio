import type { TextProps } from '../Text.vue'
import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import Text from '../Text.vue'

describe('<Text> component', () => {
  const elementCases: [TextProps, string][] = [
    [{ span: undefined }, 'p'],
    [{ span: true }, 'span'],
    [{ span: false }, 'p'],
  ]

  it.each(elementCases)('should render html element correctly %#', (props, expectedStyle) => {
    const wrapper = mount(Text, {
      props,
      slots: {
        default: `<p>Test content</p>`,
      },
    })

    const element = wrapper.find(expectedStyle)
    expect(element.exists()).toBe(true)
  })

  it('should handle undefined props gracefully', () => {
    const propsCase = { span: undefined, fz: undefined, fn: undefined, fw: undefined }
    const expectedTag = 'p'
    const expectedStyle = 'font-family: Roboto-regular, sans-serif; font-weight: 400; font-size: 0.875rem;'

    const wrapper = mount(Text, {
      props: propsCase,
      slots: {
        default: '<p>Test content</p>',
      },
    })

    const p = wrapper.find(expectedTag)
    expect(p.exists()).toBe(true)
    expect(p.attributes('style')).contain(expectedStyle)
  })

  it('should render slot content correctly', () => {
    const wrapper = mount(Text, {
      slots: {
        default: '<span>Custom slot</span>',
      },
    })

    expect(wrapper.html()).toContain('<span>Custom slot</span>')
  })
})
