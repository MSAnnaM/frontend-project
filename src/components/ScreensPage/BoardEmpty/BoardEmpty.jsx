
import css from './BoardEmpty.module.css';
import Button from '../Button/Button';
import { useDispatch } from 'react-redux';
import { openModal } from '../../../redux/modal/modalSlice';


const BoardEmpty = () => {

  const dispatch = useDispatch()


  return (
    <div className={css.container}>
      <p>
        Before starting your project, it is essential{' '}
        <Button className={css.button}

          onClick={() => dispatch(openModal('modal1'))} >
          {' '}
          to create a board{' '}
        </Button>{' '}
        to visualize and track all the necessary tasks and milestones. This
        board serves as a powerful tool to organize the workflow and ensure
        effective collaboration among team members.
      </p>

    </div>
  );
};

export default BoardEmpty;
