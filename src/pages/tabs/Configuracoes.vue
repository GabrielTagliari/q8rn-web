<template>
  <q-page padding>
    <q-list>
      <q-list-header>{{ $t('tab.configuracoes.rede') }}</q-list-header>
      <q-item tag="label">
        <q-item-main :label="$t('tab.configuracoes.sincronizacao')" :sublabel="$t('tab.configuracoes.ultimaSincronizacao').concat(': ').concat(dataUltimaSincronizacao)" />
        <q-item-side left icon="sync">
        </q-item-side>
      </q-item>
    </q-list>
    <q-list class="q-mt-sm q-mb-sm">
      <q-list-header>{{ $t('tab.configuracoes.idioma') }}</q-list-header>
      <q-item tag="label">
        <q-item-main :label="$t('tab.configuracoes.escolhaIdioma')" />
        <q-item-side right>
          <q-select
            :options="idiomas"
            v-model="locale"
          />
        </q-item-side>
      </q-item>
    </q-list>
    <q-list class="q-mt-sm q-mb-sm">
      <q-list-header>{{ $t('tab.configuracoes.ajuda') }}</q-list-header>
      <q-item tag="label">
        <q-item-main :label="$t('tab.configuracoes.relatarProblema')" />
        <q-item-side right :stamp="$t('tab.configuracoes.problemaAplicacao')">
        </q-item-side>
      </q-item>
    </q-list>
  </q-page>
</template>

<script>
export default {
  name: 'Configuracoes',
  data () {
    return {
      dataUltimaSincronizacao: '04/11/2018',
      locale: this.$q.i18n.lang,
      idiomas: [
        { label: 'Português (BRA)', value: 'pt-br' },
        { label: 'English (US)', value: 'en-us' },
        { label: 'Español', value: 'es' }
      ]
    }
  },
  watch: {
    locale (locale) {
      import(`quasar-framework/i18n/${locale}`).then(lang => {
        this.$q.i18n.set(lang.default)
        this.$i18n.locale = locale
      })
    }
  }
}
</script>

<style>
</style>
