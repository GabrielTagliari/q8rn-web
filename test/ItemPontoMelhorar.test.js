import { shallowMount } from "@vue/test-utils";
import ItemPontoMelhorar from "../src/components/ItemPontoMelhorar";

describe('ItemPontoMelhorar', () => {
  const wrapper = shallowMount(ItemPontoMelhorar)

  it('is a Vue instance', () => {
    expect(wrapper.isVueInstance()).toBeTruthy()
  })

  it('is a Vue instance', () => {
    expect(wrapper.isVueInstance()).toBeTruthy()
  })
})