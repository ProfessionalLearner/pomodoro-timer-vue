<template>
    <div class = "buttons">
        <v-btn 
            color = "primary"
            @click="$emit('start-timer')"
        >
            <v-icon left >mdi-play-circle-outline</v-icon>
           {{$t('timerButtons.start')}}
        </v-btn>
        <v-btn
            color = "error"
            @click="$emit('stop-timer')"
        >
            <v-icon left >mdi-stop-circle-outline</v-icon>
           {{$t('timerButtons.stop')}}
        </v-btn>
        <v-btn
            color="secondary"
            @click="$emit('reset-timer')"
            :disabled="isRunning"
        >
            <v-icon left>mdi-restart</v-icon>
            {{$t('timerButtons.reset')}}
        </v-btn>
    </div>
</template>


<script>
export default {
    props: {
        isRunning: {
            type: Boolean,
            required: true
        }
    }
}
</script>

<style lang="scss" scoped>

.buttons {
    margin-top: 10px
}
</style>