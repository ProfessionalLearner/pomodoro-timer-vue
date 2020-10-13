<template>
<div class = "navButtons">
            <v-btn 
            @click="$emit('open-settings')"
            color = "gray"
            >
            {{$t('nav.settings')}}
            </v-btn>

            <v-btn
            @click="$emit('open-about')"
            color = "gray"
            >
            {{$t('nav.about.buttonName')}}
            </v-btn>

            <v-menu offset-y>
                <template v-slot:activator="{ on, attrs }">
                    <v-btn
                        color="gray"
                        v-bind="attrs"
                        v-on="on"
                    >
                    <v-icon>mdi-web</v-icon>
                    </v-btn>
                </template>
                <v-list v-model="$i18n.locale">
                    <v-list-item
                        v-for="(lang, i) in langs"
                        :key="`Lang${i}`"
                        @click="changeLanguage(lang)"
                    >
                    <v-list-item-title class="language">{{lang}}</v-list-item-title>
                    </v-list-item>
                </v-list>
            </v-menu>
</div>
</template>

<script>
export default {
    data() {
        return {
            langs: ["en", "ru"] 
        }
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
        }
    },

    methods: {
        changeLanguage(language) {
            this.$i18n.locale = language
            this.$router.push({
                params: {lang: language}
            })
        }
    }
}
</script>

<style lang="scss" scoped>
.language {
    text-transform: uppercase;
}
</style>