import css from './BoardEmpty.module.css';

const BoardEmpty = () => {
  return (
    <div className={css.container}>
      <p>
        Before starting your project, it is essential{' '}
        <button type="button" className={css.button} onClick="">
          {' '}
          to create a board{' '}
        </button>{' '}
        to visualize and track all the necessary tasks and milestones. This
        board serves as a powerful tool to organize the workflow and ensure
        effective collaboration among team members.
      </p>
    </div>
  );
};

export default BoardEmpty;
