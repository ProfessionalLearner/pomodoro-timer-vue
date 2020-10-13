<template>
    <v-card class = "mt-8">
        <SettingsDialog
            v-bind:dialog="dialog"
            v-bind:closeDialog="closeDialog"
            v-bind:timers="timers"
            v-bind:save="save"
        />
        <AboutDialog 
            v-bind:aboutDialog="aboutDialog"
            v-bind:closeAboutDialog="closeAboutDialog"
        />
        
        <v-tabs @change="changeCurrentTimer" v-model="currentTimer" grow>  
            <v-tab
                v-for="timer in timers"
                :key = "timer.name"
            >
            {{$t(("tabs." + timer.name))}}
            </v-tab>  
        </v-tabs>

        
        <v-card 
            class="pa-10 d-flex flex-column justify-content-center align-center"
            flat
        >
            <v-card-text>
                <h1 class="timer">
                    {{calculateMinutes}}:{{calculateSeconds}}
                </h1>
            </v-card-text>
        

        <ControlButtons
            v-bind:isRunning="isRunning"
            @start-timer='start'
            @stop-timer='stop'
            @reset-timer='reset'
        />
        </v-card>
    </v-card>
</template>

<script>
import SettingsDialog from './SettingsDialog.vue';
import AboutDialog from './AboutDialog.vue'
import ControlButtons from './ControlButtons.vue'
export default {
    components: {
        SettingsDialog, AboutDialog, ControlButtons
    },

    props: {
        dialog: {
            type: Boolean,
            required: true
        },
        closeDialog: {
            type: Function,
            required: true
        },
        aboutDialog: {
            type: Boolean,
            required: true
        },
        closeAboutDialog: {
            type: Function,
            required: true
        }
    },

    data() {
        return {
            isRunning: false,
            pomodoroTimer: null,
            currentTimer: 0,
            timers: [
                {
                    name: "pomodoro",
                    minutes: 25
                },
                {
                    name: "shortBreak",
                    minutes: 5
                },
                {
                    name: "longBreak",
                    minutes: 15
                }
            ],
            totalSeconds: 25 * 60,      // initial value will be 25 minutes
        }
    },

    computed: {
        calculateMinutes() {
            const minutes = Math.floor(this.totalSeconds / 60)
            return this.formatTime(minutes)
        },

        calculateSeconds() {
            const seconds = this.totalSeconds % 60
            return this.formatTime(seconds)
        }
    },

    methods: {
        formatTime(time) {
            if (time < 10) {
                return '0' + time
            }
            return time.toString()
        },       

        start() {
            clearInterval(this.pomodoroTimer)
            this.isRunning = true
            this.pomodoroTimer = setInterval(() => {
                if (this.totalSeconds <= 0) {
                    this.stop()
                    return
                }
                this.totalSeconds -= 1
            }, 1000)
        },

        stop() {
            this.isRunning = false
            clearInterval(this.pomodoroTimer)
        },

        reset() {
            this.stop()
            this.totalSeconds = this.timers[this.currentTimer].minutes * 60
        },

        changeCurrentTimer(num) {
            this.currentTimer = num
            this.reset()
        },

        save(updatedTimers) {
            this.timers = this.timers.map((timer, i) => {
                return {...timer, minutes: parseInt(updatedTimers[i])}
            })
            this.closeDialog()
        }
    }
}
</script>

<style lang="scss" scoped>
.v-card {
    width: 700px
}

.timer {
    font-size: 100px;
    font-weight: 400;
    text-align: center;
    margin-bottom: 10px
}
</style>