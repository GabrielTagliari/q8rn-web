<template>
  <q-page padding>
    <q-card class="column justify-between card">
      <div>
      <q-card-title>
        Você utiliza a água como remédio para
        tratamentos caseiros quando necessário? (Por
        exemplo, compressas quentes e frias, aplicação
        de gelo, inalação, escalda pés e banhos em
        geral)?
      </q-card-title>
      <q-card-separator />
      </div>
      <div class="row justify-center">
      <q-card-main class="column">
        <q-list link no-border>
          <q-item tag="label">
            <q-item-side>
              <q-radio v-model="option" val="opt1" />
            </q-item-side>
            <q-item-main>
              <q-item-tile label>Não
                  vegetariano:
                  Come carne
                  de tipos
                  variados
                  mais de 1 vez
                  por semana
              </q-item-tile>
            </q-item-main>
          </q-item>

          <q-item tag="label">
            <q-item-side>
              <q-radio v-model="option" val="opt2" />
            </q-item-side>
            <q-item-main>
              <q-item-tile label>Não
                  vegetariano:
                  Come carne
                  de tipos
                  variados
                  mais de 1 vez
                  por semana
              </q-item-tile>
            </q-item-main>
          </q-item>

          <q-item tag="label">
            <q-item-side>
              <q-radio v-model="option" val="opt3" />
            </q-item-side>
            <q-item-main>
              <q-item-tile label>Não
                  vegetariano:
                  Come carne
                  de tipos
                  variados
                  mais de 1 vez
                  por semana
              </q-item-tile>
            </q-item-main>
          </q-item>

          <q-item tag="label">
            <q-item-side>
              <q-radio v-model="option" val="opt4" />
            </q-item-side>
            <q-item-main>
              <q-item-tile label>Não
                  vegetariano:
                  Come carne
                  de tipos
                  variados
                  mais de 1 vez
                  por semana
              </q-item-tile>
            </q-item-main>
          </q-item>

          <q-item tag="label">
            <q-item-side>
              <q-radio v-model="option" val="opt5" />
            </q-item-side>
            <q-item-main>
              <q-item-tile label>Não
                  vegetariano:
                  Come carne
                  de tipos
                  variados
                  mais de 1 vez
                  por semana
              </q-item-tile>
            </q-item-main>
          </q-item>
        </q-list>
      </q-card-main>
      </div>
      <div class="items-end">
        <q-card-separator />
        <q-card-actions class="float-right">
          <q-btn flat color="primary" label="Responder"/>
        </q-card-actions>
      </div>
    </q-card>
  </q-page>
</template>

<script>
export default {
  name: 'QuestaoPage',
  data: () => {
    return {
      option: ''
    }
  }
}
</script>

<style>
</style>
