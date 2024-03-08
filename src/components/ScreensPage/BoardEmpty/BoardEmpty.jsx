import { useState } from 'react';
import css from './BoardEmpty.module.css';
import Modal from 'components/UI/Modals/Modal/Modal';
import Button from '../Button/Button';

const BoardEmpty = () => {
  const [openAddBoardModal, setOpenAddBoardModal] = useState(false);

  const openModal = () => {
    setOpenAddBoardModal(!openAddBoardModal);
  };

  return (
    <div className={css.container}>
      <p>
        Before starting your project, it is essential{' '}
        <Button className={css.button} onClick={openModal}>
          {' '}
          to create a board{' '}
        </Button>{' '}
        to visualize and track all the necessary tasks and milestones. This
        board serves as a powerful tool to organize the workflow and ensure
        effective collaboration among team members.
      </p>
      <div>
        {openAddBoardModal && (
          <Modal openModal={openModal}>
            <p>Create New Board</p>
          </Modal>
        )}
      </div>
    </div>
  );
};

export default BoardEmpty;
