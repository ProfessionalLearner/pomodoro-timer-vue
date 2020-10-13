<template>
    <div class="panel">
        <input type="checkbox" @change="$emit('select-all')" id="mark-all" :checked="areAllCompleted"/>
        <input v-model="title" v-bind:placeholder="$t('todoList.placeholderText')" class="text-input"/>
        <div>
            <v-btn 
                type="submit"
                color="primary"
                @click="onSubmit"
            >{{$t('todoList.create')}}</v-btn>
            <v-btn
                color="error"
                @click="$emit('clear')"
            >{{$t('todoList.clear')}}</v-btn>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        areAllCompleted: {
            type: Boolean,
            required: true
        }
    },

    data() {
        return {
            title: ''
        }
    },
    methods: {
        onSubmit() {
            if(this.title.trim()) {
               const newTodo = {
                    id: null,
                    title: this.title,
                    completed: false
                }
                this.$emit("add-todo", newTodo)
                this.title = ''
            }

        }


    }
}
</script>

<style lang="scss" scoped>
.panel{
	display: flex;
    border-radius: 25px;
	align-items: center;
	justify-content: space-between;
	padding:10px;
    margin: 0.5rem;
	border-bottom: 1px solid #ccc;
	background-color: #E7E8EB;
    #mark-all {
        margin-left: 0.5rem;
    }
    .text-input {
        border: 1px solid #dedede;
        padding-left: 10px;
        width: 70%;
        height: 35px;
        background-color : #ffffff; 
    }
}
</style>