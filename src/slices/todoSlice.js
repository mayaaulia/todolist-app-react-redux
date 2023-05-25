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
  filterStatus: 'all',
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
    updateTodo: (state, action) => {
      // getting local data
      const todoList = window.localStorage.getItem('todoList');
      if (todoList) {
        const todoListArr = JSON.parse(todoList);
        todoListArr.forEach((todo) => {
          // condition if todo id match with id todo that choosed
          if (todo.id === action.payload.id) {
            // change todo value with update value
            todo.title = action.payload.title;
            todo.status = action.payload.status;
          }
        });
        // set back to local data
        window.localStorage.setItem('todoList', JSON.stringify(todoListArr));
        state.todoList = [...todoListArr];
      }
    },
    updateFilterStatus: (state, action) => {
      state.filterStatus = action.payload;
    },
  },
});

export const { addTodo, deleteTodo, updateTodo, updateFilterStatus } =
  todoSlice.actions;
export default todoSlice.reducer;
