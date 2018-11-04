<template>
  <q-page padding>
    <q-list link>
      <q-list-header>Rede</q-list-header>
      <q-item link tag="label">
        <q-item-main label="Online" />
        <q-item-side right>
          <q-toggle v-model="checked" />
        </q-item-side>
      </q-item>
    </q-list>
  </q-page>
</template>

<script>
export default {
  name: 'ConfiguracoesPage',
  data: function () {
    return {
      checked: false
    }
  }
}
</script>

<style>
</style>
