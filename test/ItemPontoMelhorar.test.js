import { shallowMount } from "@vue/test-utils";
import ItemPontoMelhorar from "../src/components/ItemPontoMelhorar";

describe('ItemPontoMelhorar', () => {
  const wrapper = shallowMount(ItemPontoMelhorar, {
    propsData: {
      questao: 'Pergunta Teste',
      pontos: 1,
      resposta: 'Resposta Teste'
    },
    mocks: {
      $t: () => 'Pontos'
    }
  })

  it('is a Vue instance', () => {
    expect(wrapper.isVueInstance()).toBeTruthy()
  })

  it('tem prop pergunta', () => {
    expect(wrapper.props().questao).toBe('Pergunta Teste')
  })
  
  it('tem prop pontos', () => {
    expect(wrapper.props().pontos).toBe(1)
  })

  it('tem prop resposta', () => {
    expect(wrapper.props().resposta).toBe('Resposta Teste')
  })

  it('existe questao no template', () => {
    expect(wrapper.html()).toContain('<span>Pergunta Teste</span>')
  })
  
  it('existe resposta no template', () => {
    expect(wrapper.html()).toContain('<span>Resposta Teste</span>')
  })

  it('existe pontos no template', () => {
    expect(wrapper.html()).toContain('<span><b>Pontos: </b>1/4</span>')
  })

  it('total de pontos correto', () => {
    expect(wrapper.vm.totalPontos).toBe(4)
  })
})