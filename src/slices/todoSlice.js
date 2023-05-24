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
  },
});

export const { addTodo } = todoSlice.actions;
export default todoSlice.reducer;
