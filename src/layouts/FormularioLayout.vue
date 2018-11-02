<template>
  <q-layout>
    <q-layout-header>
      <q-toolbar>
        <q-btn
          flat
          round
          dense
          icon="keyboard_backspace"
          @click="$router.push('/')"
        />
        <q-toolbar-title>
          Preencha o formulário
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
  name: 'FormularioLayout'
}
</script>

<style>
</style>
