import React from 'react';
// getting react icons
import { MdOutlineClose } from 'react-icons/md';
// getting style from modal.module.scss
import styles from '../styles/modules/modal.module.scss';
import Button from './Button';

function TodoModal({ modalOpen, setModalOpen }) {
  return (
    <>
      {/* condition if modal true the modal will show up */}
      {modalOpen && (
        <div className={styles.wrapper}>
          <div className={styles.container}>
            <div className={styles.closeButton}>
              {/* icons component */}
              <MdOutlineClose />
            </div>
            {/* Form Add Todo */}
            <form className={styles.form}>
              <h1 className={styles.formTitle}> Add Task</h1>
              <label htmlFor="title">
                Title
                <input type="text" id="title" />
              </label>
              <label htmlFor="type">
                Status
                <select id="status" name="status">
                  <option value="incomplete">Incomplete</option>
                  <option value="complete">Completed</option>
                </select>
              </label>
              <div className={styles.buttonContainer}>
                <Button type="submit" variant="primary">
                  Add Task
                </Button>
                <Button type="button" variant="secondary">
                  Cancel
                </Button>
              </div>
            </form>
            {/* End Form */}
          </div>
        </div>
      )}
    </>
  );
}

export default TodoModal;
