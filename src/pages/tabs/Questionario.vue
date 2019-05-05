<template>
  <q-page class='fundo' padding>
    <div class='column absolute-center'>
      <transition appear enter-active-class='animated flipInX' leave-active-class='animated bounceInLeft'>
        <q-btn rounded size='lg' color='primary' id="adulto" class='q-ma-md' @click='abreQuestionarioAdulto'>{{ $t('questionario.adulto') }}</q-btn>
      </transition>

      <transition appear enter-active-class='animated flipInX' leave-active-class='animated bounceInLeft'>
        <q-btn rounded size='lg' color='secondary' id="adolescente" class='q-ma-md' @click='abreQuestionarioAdolescente'>{{ $t('questionario.adolescente') }}</q-btn>
      </transition>
    </div>
  </q-page>
</template>

<script>
import { mapActions } from 'vuex'
import questoesPtBr from '../../../mock/questionario_pt_br.json'
import questoesEnUs from '../../../mock/questionario_en_us.json'

export default {
  name: 'Questionario',
  data: () => {
    return {
      questoes: questoesPtBr
    }
  },
  methods: {
    ...mapActions(['carregarQuestoesAdulto', 'carregarQuestoesAdolescente']),
    abreQuestionarioAdulto () {
      if (this.$q.i18n.lang === 'en-us') {
        this.questoes = questoesEnUs
      }
      this.limpaQuestoes()
      this.carregarQuestoesAdulto(this.questoes)
    },
    abreQuestionarioAdolescente () {
      if (this.$q.i18n.lang === 'en-us') {
        this.questoes = questoesEnUs
      }
      this.limpaQuestoes()
      this.carregarQuestoesAdolescente(this.questoes.filter(questao => questao.tipo === 'ambos'))
    },
    limpaQuestoes () {
      this.questoes.forEach(questao => {
        questao.opcaoSelecionada = ''
      })
    }
  }
}
</script>

<style scoped>
.fundo {
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  background-image:
  linear-gradient(
  rgba(0, 0, 0, 0.5),
  rgba(0, 0, 0, 0.5)
  ),
  url("../../assets/remedios.jpeg");
}
</style>
