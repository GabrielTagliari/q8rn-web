<template>
  <q-page padding>
    <div class="column absolute-center">
      <transition appear enter-active-class="animated flipInX" leave-active-class="animated bounceInLeft">
        <q-btn rounded outline size="lg" color="primary" class="q-ma-md" @click="$router.push('/formulario')">Adulto</q-btn>
      </transition>

      <transition appear enter-active-class="animated flipInX" leave-active-class="animated bounceInLeft">
        <q-btn rounded outline size="lg" color="secondary" class="q-ma-md" @click="$router.push('/formulario')">Adolescente</q-btn>
      </transition>

      <transition appear enter-active-class="animated flipInX" leave-active-class="animted bounceInLeft">
        <q-btn rounded outline size="lg" color="tertiary" class="q-ma-md" @click="$router.push('/questionario/questao/1')">Questionário sem Formulário</q-btn>
      </transition>
    </div>
  </q-page>
</template>

<script>
export default {
  name: 'CadastroPage'
}
</script>

<style>
</style>
