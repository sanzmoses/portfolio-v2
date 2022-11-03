<template>
  <div class="q-pa-md q-py-xl">

    <q-chip square size="lg" class="text-weight-bold">
      <q-avatar icon="star" color="accent" text-color="black" />
      Forms
    </q-chip>

    <p class="q-my-xl"></p>

    <div class="q-gutter-sm">
      <template v-for="(theme, index) in themes" :key="theme">
        <q-radio 
          v-model="shape" 
          :color="theme" 
          :size="sizes[index]"         
          :val="sizes[index]" 
          :label="sizes[index]+'-'+theme" 
        />
      </template>
    </div>

    <div class="q-px-sm">
      Your selection is: <strong>{{ shape }}</strong>
    </div>

    <div class="q-gutter-sm">
      <template v-for="(theme, index) in themes" :key="theme">
        <q-checkbox
          v-model="shape" 
          :color="theme" 
          :size="sizes[index]"         
          :val="sizes[index]" 
          :label="sizes[index]+'-'+theme" 
        />
      </template>
    </div>

    <div class="q-gutter-y-md column" style="max-width: 300px">
      <div>
        <q-toggle v-model="readonly" label="Readonly" dark />
        <q-toggle v-model="disable" label="Disable" dark />
      </div>

      <q-field dark :readonly="readonly" :disable="disable">
        <template v-slot:prepend>
          <q-icon name="event" />
        </template>

        <template v-slot:control>
          <div class="self-center full-width no-outline" :tabindex="tabindex">{{text}}</div>
        </template>
      </q-field>

      <q-field dark filled :readonly="readonly" :disable="disable">
        <template v-slot:prepend>
          <q-icon name="event" />
        </template>

        <template v-slot:control>
          <div class="self-center full-width no-outline" :tabindex="tabindex">{{text}}</div>
        </template>
      </q-field>

      <q-field dark outlined :readonly="readonly" :disable="disable">
        <template v-slot:control>
          <div class="self-center full-width no-outline" :tabindex="tabindex">{{text}}</div>
        </template>

        <template v-slot:append>
          <q-avatar>
            <img src="https://cdn.quasar.dev/logo-v2/svg/logo-dark.svg">
          </q-avatar>
        </template>
      </q-field>

      <q-field dark standout bottom-slots :model-value="text" label="Label" stack-label counter :readonly="readonly" :disable="disable">
        <template v-slot:prepend>
          <q-icon name="place" />
        </template>

        <template v-slot:control>
          <div class="self-center full-width no-outline" :tabindex="tabindex">{{text}}</div>
        </template>

        <template v-slot:append>
          <q-icon name="close" @click="text = ''" class="cursor-pointer" />
        </template>

        <template v-slot:hint>
          Field hint
        </template>
      </q-field>

      <q-field dark borderless :readonly="readonly" :disable="disable">
        <template v-slot:control>
          <div class="self-center full-width no-outline" :tabindex="tabindex">{{text}}</div>
        </template>

        <template v-slot:append>
          <q-icon name="search" />
        </template>
      </q-field>
    </div>
    
  </div>
</template>

<script>
import { ref, computed  } from 'vue'
import { getData } from '@/composables/themes.js'

export default {
  setup () {
    const { themes, sizes } = getData()

    const readonly = ref(false)
    const disable = ref(false)

    return {
      tabindex: computed(() => disable.value === true || readonly.value === true ? -1 : 0),
      shape: ref('line'),
      themes,
      sizes,
      text: ref('Field content'),
      readonly,
      disable,
    }
  }
}
</script>

<style lang="">  
</style>