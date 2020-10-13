<template>
    <li>
        <span v-bind:class="{done: todo.completed}"> 
            <input type="checkbox" @click="todo.completed = !todo.completed" v-model="todo.completed">
            <strong class="idx">{{index + 1}}</strong>
            <input 
                type="text" 
                v-if="todo === editingTodo" 
                class="todo-description todo-editable todo-text"
                v-auto-focus 
                @keyup.enter="endEditting(todo)" 
                v-model="todo.title"
            />
            <label  
                v-if="todo !== editingTodo"
                class="todo-text todo-description"
                @click="editTodo(todo)"
            >{{todo.title}}</label>
        </span>
        <div class="controls">
            <v-btn
                id="editButton"
                color="primary"
                @click="isActive ? endEditting(todo) : editTodo(todo)"
                v-model="isActive"
            >
            <v-icon v-if="!isActive">mdi-square-edit-outline</v-icon>
            <v-icon v-if="isActive">mdi-content-save-outline</v-icon>
            </v-btn>
            <v-btn
                color="error"
                @click="$emit('remove-todo', todo.id)"
            >
            <v-icon>mdi-trash-can-outline</v-icon>

            </v-btn>
        </div>
    </li>
</template>

<script>
export default {
    props: {
        todo: {
            type: Object,
            required: true
        },

        index: {
            type: Number,
            requred: true
        },

        editingTodo: {
            type: Object,
            required: true
        }
    },

    data() {
        return {
            isActive: false
        }
    },

    methods: {
        editTodo(todo) {
            this.isActive = !this.isActive
            this.$emit('edit-todo', todo)
        },

        endEditting(todo) {
            this.isActive = !this.isActive
            this.$emit('edit-end', todo)
        },
    }
}
</script>

<style lang="scss" scoped>
li {
    border: 2px solid #ccc;
    border-radius: 25px;
    display: flex;
    justify-content: space-between;
    padding: 0.5rem, 2rem;
    margin: 0.6rem;
    background-color: #ccc;
}

span {
    display: inline-block;
    margin-left: 1rem;
    .idx {
        margin-left: 1rem;
    }
}

.todo-text {
    margin-left: 1rem;
}

.controls {
    margin-right: 1rem;
}

.done .todo-description {
    text-decoration: line-through;
}

.todo-editable {
    background-color: #ffffff;
}
</style>