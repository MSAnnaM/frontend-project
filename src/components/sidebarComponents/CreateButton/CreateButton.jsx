import css from './CreateButton.module.css';
import AddButton from '../../UI/Buttons/AddButton/AddButton';

const CreateButton = () => {
  return (
    <div className={css.button_container}>
      <p className={css.sidebar_button_title}>Create a new board</p>
      <AddButton />
    </div>
  );
};
export default CreateButton;
