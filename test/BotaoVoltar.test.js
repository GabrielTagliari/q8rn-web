import { shallowMount } from "@vue/test-utils";
import BotaoVoltar from "../src/components/BotaoVoltar";

describe('BotaoVoltar', () => {
  const wrapper = shallowMount(BotaoVoltar)

  it('is a Vue instance', () => {
    expect(wrapper.isVueInstance()).toBeTruthy()
  })
})