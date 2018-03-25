<template>
  <v-app>
    <v-toolbar flat color="#fff">
      <v-toolbar-title @click="$router.go(-1)">
        <v-icon>arrow_back</v-icon>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-title>11</v-toolbar-title>
    </v-toolbar>
    <v-container pt-5>
      <v-layout>
        <div class="waves">
          <div :style="{ top: planTimeUsed + '%' }" class="wave wave-one"></div>
          <div :style="{ top: planTimeUsed + '%' }" class="wave wave-two"></div>
          <div :style="{ top: planTimeUsed + '%' }" class="wave wave-three"></div>
        </div>
      </v-layout>
      <v-btn block outline large light>Pause</v-btn>
    </v-container>
  </v-app>
</template>

<script>
export default {
  name: 'Working',
  mounted() {
    // this.spendTimes()
  },
  data() {
    return {
      planTime: 10 * 60,
      planTimeUsed: 0
    }
  },
  computed: {
    waveTopRise() {
      return this.planTime / 100
    }
  },
  methods: {
    spendTimes() {
      const self = this
      this.spendTimes -= 20
      const interval = setInterval(() => {
        if (self.planTimeUsed >= 80) {
          clearInterval(interval)
        }
        self.planTimeUsed -= self.waveTopRise
      }, 1000)
    }
  }
}
</script>
