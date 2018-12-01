<template>
  <q-page padding>
    <questao :questao="getQuestoes[$route.params.numero - 1]" :isUltimaQuestao="isUltimaQuestao" @atualizar="atualizar" @finalizar="finalizar"/>
  </q-page>
</template>

<script>
import Questao from '../components/Questao.vue'
import { mapGetters } from 'vuex'

export default {
  name: 'Questionario',
  data: () => {
    return {
    }
  },
  components: {
    Questao
  },
  computed: {
    ...mapGetters(['getQuestoes']),
    isUltimaQuestao () {
      return this.getQuestoes[this.$route.params.numero - 1].numero === this.getQuestoes.length
    }
  },
  methods: {
    atualizar (questao) {
      this.getQuestoes[questao.numero - 1].opcaoSelecionada = questao.opcaoSelecionada
      this.$emit('atualizar', questao)
    },
    finalizar () {
      if (this.verificarTodasRespostasSelecionadas()) {
        this.$router.push('/escore')
      }
    },
    verificarTodasRespostasSelecionadas () {
      let respostasNaoPreenchidas = this.getQuestoes.filter(questao => questao.opcaoSelecionada === '')
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
      return mensagem.concat(': ').concat(respostasNaoPreenchidas.map(questao => questao.numero))
    }
  }
}
</script>

<style>
</style>
