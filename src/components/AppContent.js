import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import TodoItem from './TodoItem';
// style from app.module.scss
import styles from '../styles/modules/app.module.scss';
import Button from './Button';
import { resetTodo } from '../slices/todoSlice';

function AppContent() {
  // getting todolist data
  const todoList = useSelector((state) => state.todo.todoList);
  // get status data
  const filterStatus = useSelector((state) => state.todo.filterStatus);
  const dispatch = useDispatch();

  console.log(`Before filter`, todoList);
  // sort todolist by date and time
  const sortedTodoList = [...todoList];
  sortedTodoList.sort((a, b) => new Date(b.time) - new Date(a.time));

  const filteredTodoList = sortedTodoList.filter((item) => {
    if (filterStatus === 'all') {
      return true;
    }
    return item.status === filterStatus;
  });
  console.log(`after filter`, filteredTodoList);

  return (
    <div className={styles.content__wrapper}>
      {filteredTodoList && filteredTodoList.length > 0
        ? filteredTodoList.map((todo) => <TodoItem key={todo.id} todo={todo} />)
        : 'no todo found'}
      <div className={styles.reset__button}>
        <Button
          type="button"
          variant="warning"
          onClick={() => dispatch(resetTodo())}
        >
          Reset
        </Button>
      </div>
    </div>
  );
}

export default AppContent;
