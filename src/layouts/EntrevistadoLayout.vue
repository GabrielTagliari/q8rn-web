<template>
  <q-layout>
    <q-layout-header>
      <q-toolbar>
        <botao-voltar />
        <q-toolbar-title>
          {{ $t('layout.dadosEntrevistado.titulo') }}
        </q-toolbar-title>
      </q-toolbar>
    </q-layout-header>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import BotaoVoltar from '../components/BotaoVoltar.vue'

export default {
  name: 'EntrevistadoLayout',
  components: {
    BotaoVoltar
  }
}
</script>

<style>
</style>
