import React, { useState } from 'react';
// getting react icons
import { MdOutlineClose } from 'react-icons/md';
// getting style from modal.module.scss
import styles from '../styles/modules/modal.module.scss';
import Button from './Button';

function TodoModal({ modalOpen, setModalOpen }) {
  // state for title todo
  const [title, setTitle] = useState('');
  // state for status
  const [status, setStatus] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ title, status });
  };
  return (
    <>
      {/* condition if modal true the modal will show up */}
      {modalOpen && (
        <div className={styles.wrapper}>
          <div className={styles.container}>
            {/* Close Modal Button */}
            <div
              className={styles.closeButton}
              onKeyDown={() => setModalOpen(false)}
              onClick={() => setModalOpen(false)}
              role="button"
              tabIndex={0}
            >
              {/* icons component */}
              <MdOutlineClose />
            </div>

            {/* Form Add Todo */}
            <form className={styles.form} onSubmit={(e) => handleSubmit(e)}>
              <h1 className={styles.formTitle}> Add Task</h1>
              <label htmlFor="title">
                Title
                <input
                  type="text"
                  id="title"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
              </label>
              <label htmlFor="type">
                Status
                <select
                  id="type"
                  value={status}
                  onChange={(e) => setStatus(e.target.value)}
                >
                  <option value="incomplete">Incomplete</option>
                  <option value="complete">Completed</option>
                </select>
              </label>
              <div className={styles.buttonContainer}>
                {/* Add Button */}
                <Button type="submit" variant="primary">
                  Add Task
                </Button>
                {/* Cancel Button */}
                <Button
                  type="button"
                  variant="secondary"
                  onClick={() => setModalOpen(false)}
                  onKeyDown={() => setModalOpen(false)}
                >
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
