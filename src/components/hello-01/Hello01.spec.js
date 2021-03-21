import { shallowMount } from '@vue/test-utils'
import Hello01 from './Hello.vue'

describe('Hello01.vue', () => {
  it('renders props.msg when passed', () => {
    const msg = 'new message'
    const wrapper = shallowMount(Hello01, {
      propsData: { msg }
    })
    expect(wrapper.text()).toMatch("I'm Hello 01 " + msg)
  })
})
