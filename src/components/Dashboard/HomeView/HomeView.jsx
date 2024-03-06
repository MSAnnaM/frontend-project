import style from './HomeView.module.css';

export default function HomeView() {
  return (
    <div className={style.text}>
      <p>
        Before starting your project, it is essential
        <button type="button" className={style.button}>to create a board</button>
        to visualize and track all the necessary tasks and milestones. This
        board serves as a powerful tool to organize the workflow and ensure
        effective collaboration among team members.
      </p>
    </div>
  );
}
