<template>
  <q-page padding>
    <questao :questao="getQuestoes[$route.params.numero - 1]" :isUltimaQuestao="isUltimaQuestao" @atualizar="atualizar" @finalizar="finalizar"/>
  </q-page>
</template>

<script>
import Questao from '../components/Questao.vue'
import { TipoQuestionario } from '../helpers/TipoQuestionarioEnum.js'
import { mapGetters } from 'vuex'

export default {
  name: 'Questionario',
  data: () => {
    return {
      questoes: []
    }
  },
  components: {
    Questao
  },
  created () {
    this.questoes = this.getQuestoes
  },
  updated () {
    this.questoes = this.getQuestoes
  },
  computed: {
    ...mapGetters(['getQuestoes', 'getTipoQuestionario']),
    isUltimaQuestao () {
      if (this.getTipoQuestionario === TipoQuestionario.ADULTO) {
        return this.getQuestoes[this.$route.params.numero - 1].numero.adulto === this.getQuestoes.length
      } else {
        return this.getQuestoes[this.$route.params.numero - 1].numero.adolescente === this.getQuestoes.length
      }
    }
  },
  methods: {
    atualizar (questao) {
      if (this.getTipoQuestionario === TipoQuestionario.ADULTO) {
        this.questoes[questao.numero.adulto - 1].opcaoSelecionada = questao.opcaoSelecionada
      } else {
        this.questoes[questao.numero.adolescente - 1].opcaoSelecionada = questao.opcaoSelecionada
      }
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
      return qtdRespostasNaoPreenchidas > 1 ? this.$t('questionario.respostasObrigatorias') : this.$t('questionario.respostaObrigatoria')
    },
    preencheMensagemDinamico (respostasNaoPreenchidas) {
      let mensagem = respostasNaoPreenchidas.length > 1 ? this.$t('questionario.preenchaAsQuestoes') : this.$t('questionario.preenchaAQuestao')
      if (this.getTipoQuestionario === TipoQuestionario.ADULTO) {
        return mensagem.concat(': ').concat(respostasNaoPreenchidas.map(questao => questao.numero.adulto))
      } else {
        return mensagem.concat(': ').concat(respostasNaoPreenchidas.map(questao => questao.numero.adolescente))
      }
    }
  }
}
</script>

<style>
</style>
