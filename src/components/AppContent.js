import React from 'react';
import { useSelector } from 'react-redux';
import TodoItem from './TodoItem';
// style from app.module.scss
import styles from '../styles/modules/app.module.scss';

function AppContent() {
  // getting todolist data
  const todoList = useSelector((state) => state.todo.todoList);
  console.log(todoList);
  // sort todolist by date and time
  const sortedTodoList = [...todoList];
  sortedTodoList.sort((a, b) => new Date(b.time) - new Date(a.time));

  return (
    <div className={styles.content__wrapper}>
      {sortedTodoList && sortedTodoList.length > 0
        ? sortedTodoList.map((todo) => <TodoItem key={todo.id} todo={todo} />)
        : 'no todo found'}
    </div>
  );
}

export default AppContent;
