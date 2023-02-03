<template>
  <div class="todo-app">
    <h3 class="app-title">Todo App</h3>
    <div class="app-input">
      <TodoInput/>
    </div>
    <div class="app-list">
      <TodoList/>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import TodoInput from '../components/TodoInput.vue';
import TodoList from '../components/TodoList.vue';

export default Vue.extend({
  name: 'IndexPage',
  components: {
    TodoInput,
    TodoList
  },
  computed: {
    todoList() {
      return this.$store.state.todos.list
    }
  },
  mounted() {
    this.$store.commit('todos/init');
    this.$store.subscribe( (mutation, state) => {
      localStorage.todoList = JSON.stringify(state.todos.list);
    });
  },
})
</script>

<style>
body {
  color: #fff;
  background-color: #252525;
}

.app-title {
  margin-bottom: 15px;
}

.app-input {
  margin-bottom: 15px;
}

.todo-app {
  width: 50%;
  max-width: 600px;
  margin: auto;
  margin-top: 20px;
  border: 3px solid #b0b0b0;
  padding: 10px;
}

@media (max-width: 600px) {
  .todo-app {
    width: 100%;
  }
}

.form-control,
.input-group-text {
  color: #fff;
  background-color: rgba(0, 0, 0, .25);
}

.form-control:focus {
  color: inherit;
  background-color: rgba(10, 10, 10, 0.25);
}

.list-group {
  color: #fff;
}

.list-group-item {
  color: #fff;
  background-color: rgba(10, 10, 10, .25);
}
</style>