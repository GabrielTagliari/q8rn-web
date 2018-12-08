import { shallowMount } from '@vue/test-utils'
import Questao from '../src/components/Questao'

describe('Questao', () => {
  const wrapper = shallowMount(Questao, {
    propsData: {
      questao: {
        numero: 1,
        tema: "Nutrição",
        titulo: "Com que frequência você inclui nas principais refeições do dia: feijões, cereais integrais, castanhas, frutas, legumes e verduras?",
        opcoes: [
          {
            titulo: "Sempre",
            valor: 4
          },
          {
            titulo: "Muitas vezes",
            valor: 3
          },
          {
            titulo: "Algumas vezes",
            valor: 2
          },
          {
            titulo: "Raramente",
            valor: 1
          },
          {
            titulo: "Quase nunca",
            valor: 0
          }
        ],
        opcaoSelecionada: 3
      },
      isUltimaQuestao: false
    },
    mocks: {
      $t: () => 'Próxima'
    }
  })

  it('is a Vue instance', () => {
    expect(wrapper.isVueInstance()).toBeTruthy()
  })

  it('tem prop numero', () => {
    expect(wrapper.props().questao.numero).toBe(1)
  })

  it('tem prop tema', () => {
    expect(wrapper.props().questao.tema).toBe('Nutrição')
  })

  it('tem prop titulo', () => {
    expect(wrapper.props().questao.titulo).toBe('Com que frequência você inclui nas principais refeições do dia: feijões, cereais integrais, castanhas, frutas, legumes e verduras?')
  })

  it('tem prop opcoes igual a 5', () => {
    expect(wrapper.props().questao.opcoes.length).toBe(5)
  })
  
  it('tem prop opcaoSelecionada', () => {
    expect(wrapper.props().questao.opcaoSelecionada).toBe(3)
  })

  it('existe titulo da questao no template', () => {
    expect(wrapper.html()).toContain('<q-card-title-stub>Com que frequência você inclui nas principais refeições do dia: feijões, cereais integrais, castanhas, frutas, legumes e verduras?</q-card-title-stub>')
  })

  it('nao é ultima questao', () => {
    expect(wrapper.props().isUltimaQuestao).toBe(false)
  })

  it('botao proximo renderizado', () => {
    expect(wrapper.html()).toContain('Próxima')
  })
})