import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Button, { SelectButton } from './Button';
// getting style from app.module.scss
import styles from '../styles/modules/app.module.scss';
import TodoModal from './TodoModal';
import { updateFilterStatus } from '../slices/todoSlice';

function AppHeader() {
  // state for modal make modal hidden
  const [modalOpen, setModalOpen] = useState(false);
  // get initial value from todoslice
  const filterStatus = useSelector((state) => state.todo.filterStatus);
  const dispach = useDispatch();

  const updateFilter = (e) => {
    console.log('updating select');
    dispach(updateFilterStatus(e.target.value));
  };

  return (
    <div className={styles.appHeader}>
      {/* Add Task Button */}
      <Button
        type="button"
        variant="primary"
        // show up modal
        onClick={() => setModalOpen(true)}
      >
        Add Task
      </Button>
      {/* Status Filter */}
      <SelectButton id="status" value={filterStatus} onChange={updateFilter}>
        <option value="all">All</option>
        <option value="incomplete">Incomplete</option>
        <option value="complete">Completed</option>
      </SelectButton>
      <TodoModal type="add" modalOpen={modalOpen} setModalOpen={setModalOpen} />
    </div>
  );
}

export default AppHeader;
