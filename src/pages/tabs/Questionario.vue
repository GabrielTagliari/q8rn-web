<template>
  <q-page padding>
    <div class="column absolute-center">
      <transition appear enter-active-class="animated flipInX" leave-active-class="animated bounceInLeft">
        <q-btn rounded outline size="lg" color="primary" class="q-ma-md" @click="abreQuestionarioAdulto">{{ $t('tab.questionario.adulto') }}</q-btn>
      </transition>

      <transition appear enter-active-class="animated flipInX" leave-active-class="animated bounceInLeft">
        <q-btn disabled rounded outline size="lg" color="secondary" class="q-ma-md" @click="abreQuestionarioAdolescente">{{ $t('tab.questionario.adolescente') }}</q-btn>
      </transition>
    </div>
  </q-page>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'Questionario',
  methods: {
    ...mapActions(['carregarQuestoesAdulto', 'carregarQuestoesAdolescente']),
    abreQuestionarioAdulto () {
      this.$q.loading.show()
      this.carregarQuestoesAdulto().then(() => {
        this.$q.loading.hide()
      })
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
