import React, { useState } from 'react';
import Button, { SelectButton } from './Button';
// getting style from app.module.scss
import styles from '../styles/modules/app.module.scss';
import TodoModal from './TodoModal';

function AppHeader() {
  // state to make modal hidden
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div className={styles.appHeader}>
      <Button type="button">Add Task</Button>
      <SelectButton id="status">
        <option value="all">All</option>
        <option value="incomplete">Incomplete</option>
        <option value="complete">Completed</option>
      </SelectButton>
      <TodoModal modalOpen={modalOpen} setModalOpen={setModalOpen} />
    </div>
  );
}

export default AppHeader;
