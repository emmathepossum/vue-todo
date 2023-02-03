<template>
    <div class="todo-input-container">
        <input v-model="inputVal" class="todo-input form-control" @keydown.enter="addTodo" :maxlength="maxlength"
            type="text" placeholder="New Todo" aria-label="New Todo Input Field" aria-describedby="basic-addon1" />
        <button @click="addTodo" type="button" class="todo-add btn btn-dark" aria-label="Add Todo">Add</button>
    </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
    name: 'TodoInput',
    props: ['list'],
    data() {
        return {
            inputVal: '',
            maxlength: 140
        }
    },
    methods: {
        addTodo() {
            if (this.inputVal) {
                this.$store.commit('todos/add', this.inputVal);
                this.inputVal = '';
            }
        }
    }
});
</script>

<style scoped>
.todo-input-container {
    display: grid;
    gap: 5px;
    grid-template-areas: "input add";
    grid-template-columns: 85% 15%;
    grid-template-rows: auto;
}

.todo-input {
    grid-area: input;
}

.todo-add {
    grid-area: add;
    align-self: right;
}
</style>