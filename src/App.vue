<template>
  <v-app>
    <v-toolbar flat>
      <v-toolbar-title>Working</v-toolbar-title>
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
          <v-list-tile>
            <v-list-tile-sub-title>View source</v-list-tile-sub-title>
          </v-list-tile>
        </v-list>
      </v-menu>
    </v-toolbar>
    <v-container>
      <v-layout>
        <v-flex>
          <v-text-field color="grey darken-4" placeholder="输入你要完成的工作" v-model="planWork" auto-grow autofocus clearable class="input-group--focused" prepend-icon="content_paste"></v-text-field>
        </v-flex>
      </v-layout>
      <v-layout>
        <v-slider style="padding-right: 0px; -webkit-app-region: no-drag; " prepend-icon="access_time" v-model="planTime" step="5" color="grey darken-4" max="60" thumb-label track-color="grey lighten-1"></v-slider>
      </v-layout>
      <v-btn block outline large light :disabled="isSetUp">Start</v-btn>
    </v-container>
  </v-app>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      planWork: '',
      planTime: 0,
      playMusic: true,
      darkTheme: false
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




