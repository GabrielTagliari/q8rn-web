<template>
  <q-page padding>
    <div class="column absolute-center">
      <transition appear enter-active-class="animated flipInX" leave-active-class="animated bounceInLeft">
        <q-btn rounded outline size="lg" color="primary" class="q-ma-md" @click="$router.push('/formulario/adulto')">{{ $t('tab.questionario.adulto') }}</q-btn>
      </transition>

      <transition appear enter-active-class="animated flipInX" leave-active-class="animated bounceInLeft">
        <q-btn rounded outline size="lg" color="secondary" class="q-ma-md" @click="$router.push('/formulario/adolescente')">{{ $t('tab.questionario.adolescente') }}</q-btn>
      </transition>

      <transition appear enter-active-class="animated flipInX" leave-active-class="animted bounceInLeft">
        <q-btn rounded outline size="lg" color="tertiary" class="q-ma-md" @click="abreQuestionarioSemFormulario">{{ $t('tab.questionario.questionarioSemFormulario') }}</q-btn>
      </transition>
    </div>
  </q-page>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'Questionario',
  methods: {
    ...mapActions(['carregarQuestoes']),
    abreQuestionarioSemFormulario () {
      this.$q.loading.show()
      this.carregarQuestoes().then(() => {
        this.$q.loading.hide()
        this.$router.push('/questionario/questao/1')
      })
    }
  }
}
</script>

<style>
</style>
