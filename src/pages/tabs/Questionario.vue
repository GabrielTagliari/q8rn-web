<template>
  <q-page class='fundo' padding>
    <div class='column absolute-center'>
      <transition appear enter-active-class='animated flipInX' leave-active-class='animated bounceInLeft'>
        <q-btn rounded size='lg' color='primary' id="adulto" class='q-ma-md' @click='abreFormularioAdulto'>{{ $t('tab.questionario.adulto') }}</q-btn>
      </transition>

      <transition appear enter-active-class='animated flipInX' leave-active-class='animated bounceInLeft'>
        <q-btn rounded size='lg' color='secondary' id="adolescente" class='q-ma-md' @click='abreQuestionarioAdolescente'>{{ $t('tab.questionario.adolescente') }}</q-btn>
      </transition>
    </div>
  </q-page>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'Questionario',
  data: () => {
    return {
    }
  },
  methods: {
    ...mapActions(['carregarQuestoesAdulto', 'carregarQuestoesAdolescente']),
    abreFormularioAdulto () {
      this.$router.push('/formulario/adulto')
    },
    abreQuestionarioAdolescente () {
      this.$router.push('/formulario/adolescente')
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
