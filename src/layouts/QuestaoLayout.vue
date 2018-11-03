<template>
  <q-layout> <!-- Be sure to play with the Layout demo on docs -->

    <!-- (Optional) The Header -->
    <q-layout-header>
      <q-toolbar>
        <q-btn
          flat
          round
          dense
          icon="keyboard_backspace"
          @click="$router.push('/formulario')"
        />
        <q-toolbar-title>
          {{ tema }}
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
  name: 'QuestaoLayout',
  data: function () {
    return {
      tema: 'Nutrição'
    }
  }
}
</script>

<style>
</style>
