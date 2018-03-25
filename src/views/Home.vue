<template>
  <v-app>
    <v-toolbar flat>
      <v-toolbar-title @click="$router.push({ name: 'home'})">Working</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-menu lazy :close-on-content-click="false" transition="slide-y-transition">
        <v-btn icon slot="activator">
          <v-icon>more_vert</v-icon>
        </v-btn>
        <v-list>
          <v-list-tile>
            <v-list-tile-action>
              <v-switch v-model="playMusic"></v-switch>
            </v-list-tile-action>
            <v-list-tile-sub-title>Play music</v-list-tile-sub-title>
          </v-list-tile>
          <v-list-tile>
            <v-list-tile-action>
              <v-switch v-model="darkTheme"></v-switch>
            </v-list-tile-action>
            <v-list-tile-sub-title>Dark theme</v-list-tile-sub-title>
          </v-list-tile>
          <v-divider></v-divider>
          <v-list-tile>
            <v-list-tile-title>
              <router-link to="/tasks">
                Check tasks
              </router-link>
            </v-list-tile-title>
          </v-list-tile>
          <v-list-tile>
            <v-list-tile-title>
              <a href="https://github.com/xrr2016/Working" target="_blank" noopener noreferrer>View source</a>
            </v-list-tile-title>
          </v-list-tile>
        </v-list>
      </v-menu>
    </v-toolbar>
    <v-container pt-5>
      <v-layout>
        <v-flex>
          <v-text-field color="grey darken-4" placeholder="输入你要完成的工作" v-model="planWork" auto-grow autofocus clearable class="input-group--focused" prepend-icon="content_paste"></v-text-field>
        </v-flex>
      </v-layout>
      <v-layout>
        <v-slider style="padding-right: 0px; -webkit-app-region: no-drag;" prepend-icon="access_time" v-model="planTime" step="5" color="grey darken-4" max="60" track-color="grey lighten-1" ticks></v-slider>
        <span class="plan-time-label">{{ planTime }} mins</span>
      </v-layout>
      <v-btn block outline large light :disabled="isSetUp" @click="$router.push({ name: 'working'})">Start</v-btn>
    </v-container>
  </v-app>
</template>

<script>
export default {
  name: 'Home',
  data() {
    return {
      playMusic: true,
      darkTheme: false,
      planWork: '',
      planTime: 0
    }
  },
  computed: {
    addedPlanWork() {
      return !!this.planWork
    },
    isSetUp() {
      return !this.planWork || !this.planTime
    }
  }
}
</script>




