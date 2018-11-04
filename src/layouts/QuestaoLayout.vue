<template>
  <q-layout>
    <q-layout-header>
      <q-toolbar>
        <q-btn
          flat
          round
          dense
          icon="keyboard_arrow_left"
          @click="$router.push('/formulario')"
        />
        <q-toolbar-title>
          {{ tema }}
        </q-toolbar-title>
      </q-toolbar>
      <q-pagination class="row justify-center" v-model="page" color="tertiary" :min="1" :max="25" :max-pages="6" direction-links />
    </q-layout-header>

    <q-layout-footer>
    </q-layout-footer>

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
      tema: 'Nutrição',
      page: 1
    }
  }
}
</script>

<style>
</style>
