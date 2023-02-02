<template>
    <div class="todo-input-container">
        <input v-model="inputVal" class="todo-input form-control" @keydown.enter="addTodo"
               type="text" placeholder="New Todo" aria-label="Search" aria-describedby="basic-addon1" />
        <button @click="addTodo" type="button" class="todo-add btn btn-dark">Add</button>
    </div>
</template>

<script lang="ts">
import { stringLiteral } from '@babel/types';
import Vue from 'vue'

export default Vue.extend({
    name: 'TodoInput',
    props: ['list'],
    data() {
        return {
            inputVal: '',
        }
    },
    methods: {
        addTodo() {
            this.list.push({text: this.inputVal, isDone: false});
        }
    }
});
</script>

<style scoped>
.todo-input-container {
    margin: 5px;
}

.todo-input {
    display: inline-block;
    width: 80%;
}

.todo-add {
    display: inline-block;
    width: 15%;
    margin-left: 5px;
}
</style>