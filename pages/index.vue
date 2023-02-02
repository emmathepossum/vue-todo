<template>
  <div>
    <TodoInput :list="todoList" />
    <TodoList :list="todoList" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import TodoInput from '../components/TodoInput.vue';
import TodoList from '../components/TodoList.vue';
import type TodoListInterface from '~/interfaces/TodoList.interface';

export default Vue.extend({
  name: 'IndexPage',
  components: {
    TodoInput,
    TodoList
  },
  data() {
    return {
      todoList: [] as TodoListInterface[]
    }
  }
})
</script>

<style>
body {
  color: #fff;
  background-color: #252525;
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