import { shallowMount } from "@vue/test-utils";
import BotaoVoltar from "../src/components/BotaoVoltar";

describe('Component', () => {
  test('is a Vue instance', () => {
      const wrapper = shallowMount(BotaoVoltar)
      expect(wrapper.isVueInstance()).toBeTruthy()
  })
})