<template>
  <div class="item row no-wrap justify-between">
    <span>{{ questao }}</span>
    <div class="column items-end justify-around">
      <span>Pontos: {{ pontos }}</span>
      <span>Resposta: {{ resposta }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ItemPontoMelhorar',
  data () {
    return {}
  },
  props: ['questao', 'pontos', 'resposta']
}
</script>

<style lang="stylus" scoped>
.item {
  color gray
  font-size 1rem
  margin 0.3em
  width 100%
  > span, > div {
    flex 1
  }
  > div {
    text-align end
  }
  > span {
    text-align justify
  }
}
</style>
