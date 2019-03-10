<template>
  <q-page padding>
    <div class='column absolute-center'>
      <transition appear enter-active-class='animated flipInX' leave-active-class='animated bounceInLeft'>
        <q-btn rounded outline size='lg' color='primary' class='q-ma-md' @click='abreQuestionarioAdulto'>{{ $t('tab.questionario.adulto') }}</q-btn>
      </transition>

      <transition appear enter-active-class='animated flipInX' leave-active-class='animated bounceInLeft'>
        <q-btn disabled rounded outline size='lg' color='secondary' class='q-ma-md' @click='abreQuestionarioAdolescente'>{{ $t('tab.questionario.adolescente') }}</q-btn>
      </transition>
    </div>
  </q-page>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'Questionario',
  data: () => {
    return {
      questoes: [
        {
          'numero': 1,
          'tema': 'Nutrição',
          'titulo': 'Com que frequência você inclui nas principais refeições do dia: feijões, cereais integrais, castanhas, frutas, legumes e verduras?',
          'opcoes': [
            {
              'titulo': 'Sempre',
              'valor': 4
            },
            {
              'titulo': 'Muitas vezes',
              'valor': 3
            },
            {
              'titulo': 'Algumas vezes',
              'valor': 2
            },
            {
              'titulo': 'Raramente',
              'valor': 1
            },
            {
              'titulo': 'Quase nunca',
              'valor': 0
            }
          ],
          'opcaoSelecionada': ''
        },
        {
          'numero': 2,
          'tema': 'Nutrição',
          'titulo': 'Como você se classifica no que se refere ao tipo de alimento que você mais consome? * Escolha a opção mais adequada a seu caso.',
          'opcoes': [
            {
              'titulo': 'Vegetariano estrito: Consome leite, queijo, ovos, peixe ou carne no máximo 1 vez por mês ou menos',
              'valor': 4
            },
            {
              'titulo': 'Ovolacto Vegetariano: Come laticínios e ovos mais que 1 vez por mês e peixes e carnes menos que 1 vez por mês',
              'valor': 3
            },
            {
              'titulo': 'Pesco Vegetariano: Come carne, frango e outras aves menos de 1 vez por mês, e come peixe mais de 1 vez por mês',
              'valor': 2
            },
            {
              'titulo': 'Semi Vegetariano: Come carne de tipos variados no máximo 1 vez por semana',
              'valor': 1
            },
            {
              'titulo': 'Não vegetariano: Come carne de tipos variados mais de 1 vez por semana',
              'valor': 0
            }
          ],
          'opcaoSelecionada': ''
        },
        {
          'numero': 3,
          'tema': 'Exercício',
          'titulo': 'Você pratica atividades de lazer, tais como caminhar, pedalar, jogar bola, esportes radicais ou outros hobbies e atividades prazerosas?',
          'opcoes': [
            {
              'titulo': 'Sempre',
              'valor': 4
            },
            {
              'titulo': 'Muitas vezes',
              'valor': 3
            },
            {
              'titulo': 'Algumas vezes',
              'valor': 2
            },
            {
              'titulo': 'Quase nunca',
              'valor': 1
            },
            {
              'titulo': 'Nunca',
              'valor': 0
            }
          ],
          'opcaoSelecionada': ''
        },
        {
          'numero': 4,
          'tema': 'Água',
          'titulo': 'Você utiliza a água como remédio para tratamentos caseiros quando necessário? (Por exemplo, compressas quentes e frias, aplicação de gelo, inalação, escalda pés e banhos em geral).',
          'opcoes': [
            {
              'titulo': 'Sempre',
              'valor': 4
            },
            {
              'titulo': 'Muitas vezes',
              'valor': 3
            },
            {
              'titulo': 'Algumas vezes',
              'valor': 2
            },
            {
              'titulo': 'Quase nunca',
              'valor': 1
            },
            {
              'titulo': 'Nunca',
              'valor': 0
            }
          ],
          'opcaoSelecionada': ''
        }
      ]
    }
  },
  methods: {
    ...mapActions(['carregarQuestoesAdulto', 'carregarQuestoesAdolescente']),
    abreQuestionarioAdulto () {
      this.carregarQuestoesAdulto(this.questoes)
    },
    abreQuestionarioAdolescente () {
      this.$q.loading.show()
      this.carregarQuestoesAdolescente().then(() => {
        this.$q.loading.hide()
      })
    }
  }
}
</script>

<style>
</style>
