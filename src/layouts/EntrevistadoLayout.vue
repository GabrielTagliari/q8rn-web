<template>
  <q-layout>
    <q-layout-header>
      <q-toolbar>
        <q-btn
          flat
          round
          dense
          icon="keyboard_arrow_left"
          @click="$router.push('/')"
        />
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
export default {
  name: 'EntrevistadoLayout'
}
</script>

<style>
</style>
