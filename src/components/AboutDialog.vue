<template>
    <v-row justify="center">
        <v-dialog
        v-model="aboutDialog"
        persistent
        width="700"
        >

        <v-card>
            <v-card-title class="headline grey lighten-2">
            {{$t('nav.about.title')}}
            </v-card-title>

            <v-card-text>
            {{$t('nav.about.description')}}
            </v-card-text>
            <ol class="steps">
                <li><v-card-text>{{$t('nav.about.stepOne')}}</v-card-text></li>
                <li><v-card-text>{{$t('nav.about.stepTwo')}}</v-card-text></li>
                <li><v-card-text>{{$t('nav.about.stepThree')}}</v-card-text></li>
                <li><v-card-text>{{$t('nav.about.stepFour')}}</v-card-text></li>
                <li><v-card-text>{{$t('nav.about.stepFive')}}</v-card-text></li>
            </ol>

            <v-card-text>
            {{$t('nav.about.tip')}}
            </v-card-text>
        

            <v-divider></v-divider>
          <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" text @click="closeAboutDialog">{{$t('dialogButtons.close')}}</v-btn>
        </v-card-actions>
        </v-card>
        </v-dialog>
    </v-row>
</template>

<script>
export default {
    props: {
        aboutDialog: {
            type: Boolean,
            require: true
        },
        closeAboutDialog: {
            type: Function,
            require: true
        }
    }
}
</script>

<style scoped>
.steps{
    margin-left: 2rem;
}
</style>