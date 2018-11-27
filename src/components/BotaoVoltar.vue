<template>
  <q-btn
    flat
    round
    dense
    icon="keyboard_arrow_left"
    @click="$router.go(-1)"
  />
</template>

<script>
export default {
  name: 'BotaoVoltar'
}
</script>

<style>
</style>
