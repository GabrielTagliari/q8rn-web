<template>
  <q-page padding>
    <div class="animate-pop">
      <q-list separator>
        <q-item class="row justify-between items-center">
          <span>Pontuação: {{ escore }}</span>
          <span>Resultado: Bom</span>
        </q-item>
      </q-list>
      <q-list separator class="q-mt-sm q-mb-sm">
        <q-list-header>Pontos a melhorar</q-list-header>
        <q-collapsible avatar="assets/nutrition.png" label="Nutrição" sublabel="Pontos: 10/20">
          <q-list separator>
            <q-item class="row justify-between">
              <q-item-tile label>Questão</q-item-tile>
              <q-item-tile label>Resposta</q-item-tile>
            </q-item>
            <q-item>
              <item-ponto-melhorar questao="Você utiliza a água como remédio para tratamentos caseiros quando necessário? (Por exemplo, compressas quentes e frias, aplicação de gelo, inalação, escalda pés e banhos em geral)?"
                resposta="Não vegetariano: Come carne de tipos variados mais de 1 vez por semana"
                pontos="1/4"
              />
            </q-item>
            <q-item>
              <item-ponto-melhorar questao="Você utiliza a água como remédio para tratamentos caseiros quando necessário? (Por exemplo, compressas quentes e frias, aplicação de gelo, inalação, escalda pés e banhos em geral)?"
                resposta="Não vegetariano: Come carne de tipos variados mais de 1 vez por semana"
                pontos="1/4"
              />
            </q-item>
            <q-item>
              <item-ponto-melhorar questao="Você utiliza a água como remédio para tratamentos caseiros quando necessário? (Por exemplo, compressas quentes e frias, aplicação de gelo, inalação, escalda pés e banhos em geral)?"
                resposta="Não vegetariano: Come carne de tipos variados mais de 1 vez por semana"
                pontos="1/4"
              />
            </q-item>
          </q-list>
        </q-collapsible>
        <q-collapsible avatar="assets/exercise.png" label="Exercício" sublabel="Pontos: 10/20">
        </q-collapsible>
        <q-collapsible avatar="assets/water.png" label="Água" sublabel="Pontos: 10/20">
        </q-collapsible>
        <q-collapsible avatar="assets/sun.png" label="Sol" sublabel="Pontos: 10/20">
        </q-collapsible>
        <q-collapsible avatar="assets/balance.png" label="Temperança" sublabel="Pontos: 10/20">
        </q-collapsible>
        <q-collapsible avatar="assets/fresh-air.png" label="Ar Fresco" sublabel="Pontos: 10/20">
        </q-collapsible>
        <q-collapsible avatar="assets/rest.png" label="Descanso" sublabel="Pontos: 10/20">
        </q-collapsible>
        <q-collapsible avatar="assets/faith.png" label="Confiança" sublabel="Pontos: 10/20">
        </q-collapsible>
      </q-list>
      <div class="flex justify-end">
          <q-btn rounded color="primary" label="Voltar ao menu" class="botao-responder q-ma-sm" @click="abrePopUpConfirmacaoRetorno"/>
      </div>
    </div>
  </q-page>
</template>

<script>
import ItemPontoMelhorar from '../components/ItemPontoMelhorar.vue'

export default {
  name: 'EscorePage',
  data: () => {
    return {
      escore: 55
    }
  },
  components: {
    ItemPontoMelhorar
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

<style lang="stylus" scoped>
</style>
