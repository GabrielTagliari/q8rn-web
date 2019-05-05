<template>
  <div>
    <transition appear enter-active-class="animated bounceInLeft" leave-active-class="animated bounceInLeft">
      <q-card class="column justify-between">
        <div>
        <q-card-title>{{ questao.titulo }}</q-card-title>
        <q-card-separator />
        </div>
        <div class="row justify-center">
        <q-card-main class="column">
          <q-list class="q-pa-none" link no-border v-for="opcao in questao.opcoes" :key="opcao.valor">
            <q-item tag="label">
              <q-item-side>
                <q-radio v-model="questao.opcaoSelecionada" :val="opcao.valor" />
              </q-item-side>
              <q-item-main>
                <q-item-tile label class="q-pa-none">
                  {{ opcao.titulo }}
                </q-item-tile>
              </q-item-main>
            </q-item>
          </q-list>
        </q-card-main>
        </div>
      </q-card>
    </transition>
    <div class="fixed-bottom-right">
      <q-btn fab v-if="!isUltimaQuestao" id="proximo" color="primary" class="q-ma-md" @click="proxima"><q-icon name="arrow_forward" /></q-btn>
      <q-btn fab v-else color="primary" id="finalizar" class="q-ma-md" @click="finalizar"><q-icon name="arrow_forward" /></q-btn>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'Questao',
  props: ['questao', 'isUltimaQuestao'],
  mounted () {
    this.$emit('atualizar', this.questao)
  },
  updated () {
    this.$emit('atualizar', this.questao)
  },
  computed: {
    ...mapGetters(['getTipoQuestionario'])
  },
  methods: {
    proxima () {
      if (this.isRespostaSelecionada()) {
        if (this.getTipoQuestionario === 'adulto') {
          this.$store.commit('atualizarOpcaoSelecionadaAdulto', this.questao)
          this.$router.push('/' + this.getTipoQuestionario + '/questao/' + (this.questao.numero.adulto + 1))
        } else {
          this.$store.commit('atualizarOpcaoSelecionadaAdolescente', this.questao)
          this.$router.push('/' + this.getTipoQuestionario + '/questao/' + (this.questao.numero.adolescente + 1))
        }
      }
    },
    finalizar () {
      if (this.getTipoQuestionario === 'adulto') {
        this.$store.commit('atualizarOpcaoSelecionadaAdulto', this.questao)
      } else {
        this.$store.commit('atualizarOpcaoSelecionadaAdolescente', this.questao)
      }
      this.$emit('finalizar')
    },
    isRespostaSelecionada () {
      if (this.questao.opcaoSelecionada === '') {
        this.abrePopUpRespostaNaoPreenchida()
        return false
      }
      return true
    },
    abrePopUpRespostaNaoPreenchida () {
      this.$q.dialog({
        title: this.$t('questionario.respostaObrigatoria'),
        message: this.$t('questionario.escolhaUmaResposta'),
        ok: 'OK'
      })
    }
  }
}
</script>
