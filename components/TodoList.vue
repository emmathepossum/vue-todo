<template>
    <ul class="list-group">
        <li v-for="(item, index) in list" class="list-group-item">
            <input class="todo-checkbox" type="checkbox" aria-label="Checkbox for Todo Item">
            <span>
                {{ item.text }}
            </span>
            <button @click="deleteTodo(index)" type="button" class="todo-delete btn btn-dark">X</button>
        </li>
    </ul>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
    name: 'TodoList',
    props: ['list'],
    methods: {
        deleteTodo(index: number) {
            if (index > -1) {
                this.list.splice(index, 1);
            }
        }
    }
});
</script>

<style scoped>
.list-group-item {
    display: inline-block;
    width: 80%;
}
.todo-delete {
    width: 35px;
    float: right;
}
</style>