<template>
  <q-page padding>
    <questao :questao="questoes[$route.params.numero - 1]" :isUltimaQuestao="isUltimaQuestao" @atualizar="atualizar" @finalizar="finalizar"/>
  </q-page>
</template>

<script>
import Questao from '../components/Questao.vue'

export default {
  name: 'QuestionarioPage',
  data: () => {
    return {
      questoes: [
        {
          numero: 1,
          tema: 'Nutrição',
          titulo: 'Com que frequência você inclui nas principais refeições do dia: feijões, cereais integrais, castanhas, frutas, legumes e verduras?',
          opcoes: [
            {titulo: 'Sempre', valor: 4},
            {titulo: 'Muitas vezes', valor: 3},
            {titulo: 'Algumas vezes', valor: 2},
            {titulo: 'Raramente', valor: 1},
            {titulo: 'Quase nunca', valor: 0}
          ],
          opcaoSelecionada: ''
        },
        {
          numero: 2,
          tema: 'Nutrição',
          titulo: 'Como você se classifica no que se refere ao tipo de alimento que você mais consome? * Escolha a opção mais adequada a seu caso.',
          opcoes: [
            {titulo: 'Vegetariano estrito: Consome leite, queijo, ovos, peixe ou carne no máximo 1 vez por mês ou menos', valor: 4},
            {titulo: 'Ovolacto Vegetariano: Come laticínios e ovos mais que 1 vez por mês e peixes e carnes menos que 1 vez por mês', valor: 3},
            {titulo: 'Pesco Vegetariano: Come carne, frango e outras aves menos de 1 vez por mês, e come peixe mais de 1 vez por mês', valor: 2},
            {titulo: 'Semi Vegetariano: Come carne de tipos variados no máximo 1 vez por semana', valor: 1},
            {titulo: 'Não vegetariano: Come carne de tipos variados mais de 1 vez por semana', valor: 0}
          ],
          opcaoSelecionada: ''
        },
        {
          numero: 3,
          tema: 'Exercício',
          titulo: 'Você pratica atividades de lazer, tais como caminhar, pedalar, jogar bola, esportes radicais ou outros hobbies e atividades prazerosas?',
          opcoes: [
            {titulo: 'Sempre', valor: 4},
            {titulo: 'Muitas vezes', valor: 3},
            {titulo: 'Algumas vezes', valor: 2},
            {titulo: 'Quase nunca', valor: 1},
            {titulo: 'Nunca', valor: 0}
          ],
          opcaoSelecionada: ''
        },
        {
          numero: 4,
          tema: 'Água',
          titulo: 'Você utiliza a água como remédio para tratamentos caseiros quando necessário? (Por exemplo, compressas quentes e frias, aplicação de gelo, inalação, escalda pés e banhos em geral).',
          opcoes: [
            {titulo: 'Sempre', valor: 4},
            {titulo: 'Muitas vezes', valor: 3},
            {titulo: 'Algumas vezes', valor: 2},
            {titulo: 'Quase nunca', valor: 1},
            {titulo: 'Nunca', valor: 0}
          ],
          opcaoSelecionada: ''
        }
      ]
    }
  },
  components: {
    Questao
  },
  methods: {
    atualizar (questao) {
      this.questoes[questao.numero - 1].opcaoSelecionada = questao.opcaoSelecionada
      this.$emit('atualizar', questao)
    },
    finalizar () {
      if (this.verificarTodasRespostasSelecionadas()) {
        this.$router.push('/escore')
      }
    },
    verificarTodasRespostasSelecionadas () {
      let respostasNaoPreenchidas = this.questoes.filter(questao => questao.opcaoSelecionada === '')
      if (respostasNaoPreenchidas.length > 0) {
        this.abrePopUpRespostaNaoPreenchida(respostasNaoPreenchidas)
        return false
      }
      return true
    },
    abrePopUpRespostaNaoPreenchida (respostasNaoPreenchidas) {
      this.$q.dialog({
        title: this.preencheTituloDinamico(respostasNaoPreenchidas.length),
        message: this.preencheMensagemDinamico(respostasNaoPreenchidas),
        ok: 'OK'
      })
    },
    preencheTituloDinamico (qtdRespostasNaoPreenchidas) {
      return qtdRespostasNaoPreenchidas > 1 ? 'Respostas obrigatórias' : 'Resposta obrigatória'
    },
    preencheMensagemDinamico (respostasNaoPreenchidas) {
      let mensagem = respostasNaoPreenchidas.length > 1 ? 'Preencha as questões: ' : 'Preencha a questão: '
      return mensagem + respostasNaoPreenchidas.map(questao => questao.numero)
    }
  },
  computed: {
    isUltimaQuestao () {
      return this.questoes[this.$route.params.numero - 1].numero === this.questoes.length
    }
  },
  mounted () {
    this.$emit('atualizarNumQuestoes', this.questoes.length)
  }
}
</script>

<style>
</style>
