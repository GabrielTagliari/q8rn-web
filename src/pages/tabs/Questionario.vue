<template>
  <q-page padding>
    <div class="column absolute-center">
      <transition appear enter-active-class="animated flipInX" leave-active-class="animated bounceInLeft">
        <q-btn rounded outline size="lg" color="primary" class="q-ma-md" @click="$router.push('/formulario')">{{ $t('tab.questionario.adulto') }}</q-btn>
      </transition>

      <transition appear enter-active-class="animated flipInX" leave-active-class="animated bounceInLeft">
        <q-btn rounded outline size="lg" color="secondary" class="q-ma-md" @click="$router.push('/formulario')">{{ $t('tab.questionario.adolescente') }}</q-btn>
      </transition>

      <transition appear enter-active-class="animated flipInX" leave-active-class="animted bounceInLeft">
        <q-btn rounded outline size="lg" color="tertiary" class="q-ma-md" @click="abreQuestionarioSemFormulario">{{ $t('tab.questionario.questionarioSemFormulario') }}</q-btn>
      </transition>
    </div>
  </q-page>
</template>

<script>
export default {
  name: 'Questionario',
  methods: {
    abreQuestionarioSemFormulario () {
      this.$router.push('/questionario/questao/1')
    }
  }
}
</script>

<style>
</style>
