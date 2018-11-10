<template>
  <q-layout>
    <q-layout-header reveal>
      <q-toolbar>
        <q-toolbar-title>
          Escore
          <span slot="subtitle">Resultado obtido com base nas respostas</span>
        </q-toolbar-title>
      </q-toolbar>
    </q-layout-header>

    <q-page-container>
      <router-view />
    </q-page-container>

  </q-layout>
</template>

<script>
export default {
  name: 'EscoreLayout'
}
</script>

<style>
</style>
