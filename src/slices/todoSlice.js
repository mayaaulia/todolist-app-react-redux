import { createSlice } from '@reduxjs/toolkit';

const getInitialTodo = () => {
  // getting todo list from local
  const localTodoList = window.localStorage.getItem('todoList');
  // if todo list is not empty
  if (localTodoList) {
    return JSON.parse(localTodoList);
  }
  //   set todoList into string
  window.localStorage.setItem('todoList', JSON.stringify([]));
  return [];
};

const initialValue = {
  todoList: getInitialTodo(),
};

export const todoSlice = createSlice({
  name: 'todo',
  initialState: initialValue,
  reducers: {
    addTodo: (state, action) => {
      state.todoList.push(action.payload);
      // getting todo list from local
      const todoList = window.localStorage.getItem('todoList');
      if (todoList) {
        // make into array
        const todoListArr = JSON.parse(todoList);
        // console.log(todoListArr);
        // push action into array
        todoListArr.push({
          ...action.payload,
        });
        // set todolist and change into string
        window.localStorage.setItem('todoList', JSON.stringify(todoListArr));
      } else {
        window.localStorage.setItem(
          'todoList',
          JSON.stringify([
            {
              ...action.payload,
            },
          ])
        );
      }
    },
    deleteTodo: (state, action) => {
      // getting todolist from local
      const todoList = window.localStorage.getItem('todoList');
      if (todoList) {
        // make into array
        const todoListArr = JSON.parse(todoList);
        todoListArr.forEach((todo, index) => {
          if (todo.id === action.payload) {
            // At index, remove 1 items
            todoListArr.splice(index, 1);
          }
        });
        window.localStorage.setItem('todoList', JSON.stringify(todoListArr));
        state.todoList = todoListArr;
      }
    },
  },
});

export const { addTodo, deleteTodo } = todoSlice.actions;
export default todoSlice.reducer;
