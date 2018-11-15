<template>
  <div class="item row no-wrap justify-between">
    <span>{{ questao }}</span>
    <div class="column items-end justify-around q-pl-sm">
      <span>{{ resposta }}</span>
      <span><b>Pontos:</b> {{ pontos }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ItemPontoMelhorar',
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

@media screen and (max-width 768px){
  .item {
    font-size 0.7rem
  }
}
</style>
