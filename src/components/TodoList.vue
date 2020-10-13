<template>
    <div>
        <br>
        <TodoPanel
        @add-todo="addTodo"
        @select-all="selectAll"
        @clear="clearAll"
        v-bind:areAllCompleted = "areAllCompleted"
        />
        <ul>
            <TodoItem 
            v-for="(todo, i) in todos"
            :key = todo.id
            v-bind:todo = "todo"
            v-bind:index = "i"
            v-bind:editingTodo = 'editingTodo'
            @remove-todo="removeTodo"
            @edit-todo="editTodo"
            @edit-end="endEditing"
            />
        </ul>
    </div>
</template>

<script>
import TodoItem from './TodoItem'
import TodoPanel from './TodoPanel'
export default {
    components: {
        TodoItem, TodoPanel
    },

    computed: {
        areAllCompleted() {
            return this.todos.every((todo) => todo.completed) & this.todos.length > 0
        },

    },

    data() {
        return {
            todos: [],
            counter: 1,
            editingTodo: {}
        }
    },

    methods: {
        addTodo(todo) {
            todo.id = this.counter
            this.counter++
            this.todos.push(todo)
        },

        removeTodo(id) {
            this.todos = this.todos.filter(t => t.id !== id)
        },

        editTodo(todo) {
            this.editingTodo = todo
        },

        endEditing(todo) {
            this.editingTodo = {}
            if(todo.title.trim() === "") {
                this.removeTodo(todo)
            }
        },

        selectAll() {
            let targetVal = this.areAllCompleted ? false : true
            this.todos.forEach((todo) => todo.completed = targetVal)
        },

        clearAll() {
            this.todos = []
        }
    }
}
</script>

<style lang="scss" scoped>
ul {
    list-style: none;
    margin: 0;
    padding: 0;
}
</style>