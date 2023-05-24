import React from 'react';
// format date
import { format } from 'date-fns';
// icons
import { MdDelete, MdEdit } from 'react-icons/md';
// getting style from todoItem.module.scss
import styles from '../styles/modules/todoItem.module.scss';
import { getClasses } from '../utils/getClasses';

function TodoItem({ todo }) {
  return (
    <div className={styles.item}>
      <div className={styles.todoDetails}>
        []
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
          <div className={styles.todoActions}>
            <div className={styles.icon}>
              <MdDelete />
            </div>
            <div className={styles.icon}>
              <MdEdit />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TodoItem;
