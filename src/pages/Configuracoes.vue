<template>
  <q-page padding>
    <q-list link>
      <q-list-header>Rede</q-list-header>
      <q-item link tag="label">
        <q-item-main label="Sincronização" sublabel="Última sincronização realizada em 04/11/2018" />
        <q-item-side left icon="sync">
        </q-item-side>
      </q-item>
    </q-list>
    <q-list class="q-mt-sm q-mb-sm">
      <q-list-header>Ajuda</q-list-header>
      <q-item link tag="label">
        <q-item-main label="Relatar um problema" />
        <q-item-side right stamp="Estou com problemas na aplicação">
        </q-item-side>
      </q-item>
    </q-list>
  </q-page>
</template>

<script>
export default {
  name: 'ConfiguracoesPage'
}
</script>

<style>
</style>
