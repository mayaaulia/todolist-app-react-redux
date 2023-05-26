import React, { useState, useEffect } from 'react';
// format date
import { format } from 'date-fns';
// icons
import { MdDelete, MdEdit } from 'react-icons/md';
import { useDispatch } from 'react-redux';
import toast from 'react-hot-toast';
// getting style from todoItem.module.scss
import styles from '../styles/modules/todoItem.module.scss';
import { getClasses } from '../utils/getClasses';
import { deleteTodo, updateTodo } from '../slices/todoSlice';
import TodoModal from './TodoModal';
import CheckButton from './CheckButton';

function TodoItem({ todo }) {
  // console.log(todo);
  const dispatch = useDispatch();
  // state for update modal
  const [updateModalOpen, setUpdateModalOpen] = useState(false);
  // state for check box
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    // change status to complete if checked
    if (todo.status === 'complete') {
      setChecked(true);
    } else {
      setChecked(false);
    }
  }, [todo.status]);

  const handleDelete = () => {
    dispatch(deleteTodo(todo.id));
    // message success delete
    toast.success('Todo Deleted Successfully');
  };

  const handleUpdate = () => {
    // console.log('update');
    setUpdateModalOpen(true);
  };

  const handleCheck = () => {
    setChecked(!checked);
    dispatch(
      // change into status to complete if checked
      updateTodo({ ...todo, status: checked ? 'incomplete' : 'complete' })
    );
  };
  return (
    <>
      <div className={styles.item}>
        <div className={styles.todoDetails}>
          <CheckButton checked={checked} handleCheck={handleCheck} />
          <div className={styles.text}>
            <p
              className={getClasses([
                styles.todoText,
                todo.status === 'complete' && styles['todoText--completed'],
              ])}
            >
              {todo.title}
            </p>
            <p className={styles.time}>
              {/* format date and time todo into time, day/month/year */}
              {format(new Date(todo.time), 'p, dd/mm/yyyy')}
            </p>
          </div>
        </div>
        <div className={styles.todoActions}>
          <div
            className={styles.icon}
            onClick={() => handleDelete()}
            onKeyDown={() => handleDelete()}
            tabIndex={0}
            role="button"
          >
            <MdDelete />
          </div>
          <div
            className={styles.icon}
            onClick={() => handleUpdate()}
            onKeyDown={() => handleUpdate()}
            tabIndex={0}
            role="button"
          >
            <MdEdit />
          </div>
        </div>
      </div>
      <TodoModal
        type="update"
        todo={todo}
        modalOpen={updateModalOpen}
        setModalOpen={setUpdateModalOpen}
      />
    </>
  );
}

export default TodoItem;
