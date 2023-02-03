import type State from '../interfaces/State.interface';
import type TodoList from "../interfaces/TodoList.interface";

export const state = () => ({
  list: [] as TodoList[]
});

export const mutations = {
  init(state: State) {
    if (localStorage.todoList) {
      state.list = JSON.parse(localStorage.todoList);
    }
  },
  add(state: State, text: string) {
    state.list.push({
      text,
      done: false
    })
  },
  remove(state: State, index: number) {
    state.list.splice(index, 1)
  },
  toggle(state: State, todo: TodoList) {
    todo.done = !todo.done
  }
}
