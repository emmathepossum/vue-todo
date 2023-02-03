<template>
    <ul class="list-group">
        <li v-for="(item, index) in list" class="list-group-item">
            <input @change="toggle(item)" :checked="item.done" class="todo-checkbox" type="checkbox" aria-label="Checkbox for Todo Item">
            <span class="todo-text" :class="{ done: item.done }"> {{ item.text }} </span>
            <button @click="deleteTodo(index)" type="button" class="todo-delete btn btn-close" aria-label="Delete Todo Item">X</button>
        </li>
    </ul>
</template>

<script lang="ts">
import Vue from 'vue';
import { mapMutations } from 'vuex';

export default Vue.extend({
    name: 'TodoList',
    props: ['list'],
    methods: {
        ...mapMutations({
            toggle: 'todos/toggle'
        }),
        deleteTodo(index: number) {
            this.$store.commit('todos/remove', index);
        }
    }
});
</script>

<style scoped>
.list-group-item {
    display: grid;
    gap: 8px;
    grid-template-areas: "checkbox text delete";
    grid-template-columns: 10% 80% 10%;
    grid-template-rows: 1;
    padding: 10px;
    align-items: center;
}

.todo-checkbox {
    width: 35px;
    height: 56px;
    grid-area: checkbox;
}

.todo-text {
    grid-area: text;
}

.done {
    text-decoration: line-through;
    color: #ababab;
}

.todo-delete {
    width: 35px;
    font-size: 28px;
    color: #fff;
    font-weight: bold;
    grid-area: delete;
}
</style>