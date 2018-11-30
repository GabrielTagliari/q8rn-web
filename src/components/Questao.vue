<template>
  <div>
    <transition appear enter-active-class="animated bounceInLeft" leave-active-class="animated bounceInLeft">
      <q-card class="column justify-between">
        <div>
        <q-card-title>
          {{ questao.titulo }}
        </q-card-title>
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
        <div class="items-end">
          <q-card-separator />
          <q-card-actions class="float-right">
            <q-btn rounded v-if="!isUltimaQuestao" color="primary" class="q-ma-xs" @click="proxima">{{ $t('navegacao.proxima') }}</q-btn>
            <q-btn rounded v-else color="primary" class="q-ma-xs" @click="finalizar">{{ $t('navegacao.finalizar') }}</q-btn>
          </q-card-actions>
        </div>
      </q-card>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'Questao',
  props: ['questao', 'isUltimaQuestao'],
  mounted () {
    this.$emit('atualizar', this.questao)
  },
  updated () {
    this.$emit('atualizar', this.questao)
  },
  methods: {
    proxima () {
      if (this.isRespostaSelecionada()) {
        this.$router.push('/questionario/questao/' + (this.questao.numero + 1))
      }
    },
    finalizar () {
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

<style lang="stylus">
.q-card-actions {
  .q-btn {
    width 100px
  }
}
</style>
