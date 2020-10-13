import Vue from "vue"
import Vuex from "vuex"

Vue.use(Vuex)

export default new Vuex.Store({
    actions: {},
    mutations: {
        openDialog(state) {
            state.dialog = true
        },

        closeDialog(state) {
            state.dialog = false
        },

        openAboutDialog(state) {
            state.aboutDialog = true
        },

        closeAboutDialog(state) {
            state.aboutDialog = false
        },

        startTimer(state) {
            state.isRunning = false
            clearInterval(state.pomodoroTimer)
            state.pomodoroTimer = setInterval(() => {
                if((state.totalSeconds) <= 0) {
                    state.isRunning = false
                    clearInterval(state.pomodoroTimer)
                    return
                }

                state.totalSeconds -= 1
            }, 1000)
        },

        stopTimer(state) {
            state.isRunning = false
            clearInterval(state.pomodoroTimer)
        },

        resetTimer(state) {
            state.isRunning = false
            clearInterval(state.pomodoroTimer)
            state.totalSeconds = state.totalMinutes * 60
        },

        changeCurrentTimer(state, num) {
            state.currentTimer = num
            state.isRunning = false
            clearInterval(state.pomodoroTimer)
            state.totalSeconds = state.totalMinutes * 60
        },

        save(state, updatedTimers) {
            state.timers = state.timers.map((timer, i) => {
                return {...timer, minutes: parseInt(updatedTimers[i])}
            })
            state.dialog = false
        }

    },
    state: {
        isRunning: false,
        pomodoroTimer: null,
        totalMinutes: this.timers[this.currentTimer].minutes,
        totalSeconds: this.totalMinutes * 60,
        currentTimer: 0,
        timers: [
            {
                name: 'Pomodoro',
                minutes: 25
            },
            {
                name: 'Short Break',
                minutes: 5
            },
            {
                name: 'Long Break',
                minutes: 15
            }
        ],
        dialog: false,
        aboutDialog: false
    },
    getters: {
        getTotalSeconds: (state) => {
            return state.totalSeconds
        },

        getTimers: (state) => {
            return state.timers
        },

        isRunning: (state) => {
            return state.isRunning
        },

        getDialog: (state) => {
            return state.dialog
        },

        getAboutDialog: (state) => {
            return state.aboutDialog
        },

        getCurrentTimer: (state) => {
            return state.currentTimer
        },

    }
});