<template>
  <v-app>
    <v-card>
      <div class="float-left app-title"><h1>{{$t("title")}}</h1></div>
      <div class="float-right">
        <NavigationPanel
          @open-settings="openSettings"
          @open-about="openAboutDialog"
          @close-settings='closeSettings'
          @close-about="closeAboutDialog"
        />
      </div>
    </v-card>
    <v-main>
      <v-container>
        <v-row justify-center align-center>
          <v-col sm="6" offset-sm="3">
            <Pomodoro 
              v-bind:dialog="dialog"
              v-bind:closeDialog="closeSettings"
              v-bind:aboutDialog="aboutDialog"
              v-bind:closeAboutDialog="closeAboutDialog"
            />
          </v-col>
        </v-row>
      </v-container>
    <TodoList/>
    </v-main>
  </v-app>
</template>

<script>
import Pomodoro from './components/Pomodoro';
import TodoList from './components/TodoList';
import NavigationPanel from './components/NavigationPanel'
export default {
  name: 'App',

  components: {
    Pomodoro, TodoList, NavigationPanel
  },

  data() {
    return {
      dialog: false,
      aboutDialog: false
    }
  },

  methods: {
    openSettings() {
      this.dialog = true
    },

    openAboutDialog() {
      this.aboutDialog = true
    },

    closeSettings() {
      this.dialog = false
    },

    closeAboutDialog() {
      this.aboutDialog = false
    }
  }
};
</script>

<style lang="scss" scoped>
.app-title {
  margin-left: 1rem;
  font-size: 110%;
}
</style>
