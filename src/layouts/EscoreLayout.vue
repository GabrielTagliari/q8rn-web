<template>
  <q-layout>
    <q-layout-header reveal>
      <q-toolbar>
        <q-toolbar-title>
          {{ $t('escore.titulo') }}
          <span slot="subtitle">{{ $t('escore.subtitulo') }}</span>
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
