import { useState } from 'react';
import css from './BoardEmpty.module.css';
import Modal from 'components/UI/Modals/Modal/Modal';

const BoardEmpty = () => {
  const [openNewBoardModal, setOpenNewBoardModal] = useState(false);

  const openModal = () => {
    setOpenNewBoardModal(!openNewBoardModal);
  };

  return (
    <div className={css.container}>
      <p>
        Before starting your project, it is essential{' '}
        <button type="button" className={css.button} onClick={openModal}>
          {' '}
          to create a board{' '}
        </button>{' '}
        to visualize and track all the necessary tasks and milestones. This
        board serves as a powerful tool to organize the workflow and ensure
        effective collaboration among team members.
      </p>
      <div>
        {openNewBoardModal && (
          <Modal openModal={openModal}>
            <p>Create New Board</p>
          </Modal>
        )}
      </div>
    </div>
  );
};

export default BoardEmpty;
