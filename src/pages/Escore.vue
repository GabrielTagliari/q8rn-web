<template>
  <q-page padding>
    <div class="animate-pop">
      <q-list separator>
        <q-item class="row justify-between items-center">
          <span>Pontuação: {{ escore }}</span>
          <span>Resultado: Bom</span>
        </q-item>
      </q-list>
      <q-list separator highlight class="q-mt-sm q-mb-sm">
        <q-list-header>Pontos a melhorar</q-list-header>
        <q-collapsible avatar="../assets/nutrition.svg" label="Nutrição" sublabel="Pontos: 10/20">
          <div>content</div>
        </q-collapsible>
        <q-collapsible avatar="../assets/exercise.svg" label="Exercício" sublabel="Pontos: 10/20">
        </q-collapsible>
        <q-collapsible avatar="../assets/water.svg" label="Água" sublabel="Pontos: 10/20">
        </q-collapsible>
        <q-collapsible avatar="../assets/sun.svg" label="Sol" sublabel="Pontos: 10/20">
        </q-collapsible>
        <q-collapsible avatar="../assets/balance.svg" label="Temperança" sublabel="Pontos: 10/20">
        </q-collapsible>
        <q-collapsible avatar="../assets/fresh-air.svg" label="Ar Fresco" sublabel="Pontos: 10/20">
        </q-collapsible>
        <q-collapsible avatar="../assets/rest.svg" label="Descanso" sublabel="Pontos: 10/20">
        </q-collapsible>
        <q-collapsible avatar="../assets/faith.svg" label="Confiança" sublabel="Pontos: 10/20">
        </q-collapsible>
      </q-list>
      <div class="flex justify-end">
          <q-btn rounded color="primary" label="Voltar ao menu" class="botao-responder q-ma-sm" @click="abrePopUpConfirmacaoRetorno"/>
      </div>
    </div>
  </q-page>
</template>

<script>
export default {
  name: 'EscorePage',
  data: () => {
    return {
      escore: 55
    }
  },
  methods: {
    abrePopUpConfirmacaoRetorno () {
      this.$q.dialog({
        title: 'Alerta',
        message: 'Após voltar ao menu não será mais possível visualizar os pontos a melhorar. Deseja voltar ao menu?',
        ok: 'Sim',
        cancel: 'Não'
      }).then(() => {
        this.$router.push('/')
      }).catch(() => {})
    }
  }
}
</script>

<style>
</style>
