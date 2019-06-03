<template>
  <q-page padding>
    <transition
      appear
      enter-active-class="animated fadeIn"
      leave-active-class="animated fadeOut">
      <q-list highlight>
        <q-list-header>{{ $t('tab.historico.questionariosRecentes') }}</q-list-header>
        <q-item link @click.native="$router.push('/entrevistado/1')">
          <q-item-side avatar="statics/male.svg" />
          <q-item-main label="Jim Doe" label-lines="2" sublabel="02/11/2018" />
          <q-item-side right :stamp="$t('tab.historico.escore').concat(': ').concat('70')" />
        </q-item>
        <q-item link @click.native="$router.push('/entrevistado/1')">
          <q-item-side avatar="statics/female.svg" />
          <q-item-main label="Gina Doe" label-lines="2" sublabel="01/11/2018" />
          <q-item-side right :stamp="$t('tab.historico.escore').concat(': ').concat('95')" />
        </q-item>
        <q-item link @click.native="$router.push('/entrevistado/1')">
          <q-item-side avatar="statics/male.svg" />
          <q-item-main label="Carlos Doe" label-lines="2" sublabel="01/11/2018" />
          <q-item-side right :stamp="$t('tab.historico.escore').concat(': ').concat('70')" />
        </q-item>
        <q-item-separator />
        <q-list-header>{{ $t('tab.historico.questionariosAnteriores') }}</q-list-header>
        <q-item link @click.native="$router.push('/entrevistado/1')">
          <q-item-side avatar="statics/male.svg" />
          <q-item-main label="Jim Doe" label-lines="2" sublabel="01/11/2018" />
          <q-item-side right :stamp="$t('tab.historico.escore').concat(': ').concat('100')" />
        </q-item>
        <q-item link @click.native="$router.push('/entrevistado/1')">
          <q-item-side avatar="statics/female.svg" />
          <q-item-main label="Gina Doe" label-lines="2" sublabel="01/11/2018" />
          <q-item-side right :stamp="$t('tab.historico.escore').concat(': ').concat('95')" />
        </q-item>
        <q-item link @click.native="$router.push('/entrevistado/1')">
          <q-item-side avatar="statics/male.svg" />
          <q-item-main label="Carlos Doe" label-lines="2" sublabel="01/11/2018" />
          <q-item-side right :stamp="$t('tab.historico.escore').concat(': ').concat('70')" />
        </q-item>
        <q-item link @click.native="$router.push('/entrevistado/1')">
          <q-item-side avatar="statics/male.svg" />
          <q-item-main label="Jim Doe" label-lines="2" sublabel="01/11/2018" />
          <q-item-side right :stamp="$t('tab.historico.escore').concat(': ').concat('100')" />
        </q-item>
        <q-item link @click.native="$router.push('/entrevistado/1')">
          <q-item-side avatar="statics/female.svg" />
          <q-item-main label="Gina Doe" label-lines="2" sublabel="01/11/2018" />
          <q-item-side right :stamp="$t('tab.historico.escore').concat(': ').concat('95')" />
        </q-item>
        <q-item link @click.native="$router.push('/entrevistado/1')">
          <q-item-side avatar="statics/male.svg" />
          <q-item-main label="Carlos Doe" label-lines="2" sublabel="01/11/2018" />
          <q-item-side right :stamp="$t('tab.historico.escore').concat(': ').concat('70')" />
        </q-item>
      </q-list>
    </transition>
  </q-page>
</template>

<script>
export default {
  name: 'Historico'
}
</script>

<style>
</style>
