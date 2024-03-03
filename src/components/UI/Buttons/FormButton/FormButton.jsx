import css from './FormButton.module.css';

export default function FormButton({ children, type }) {
  return (
    <button className={css.button} type={type}>
      {children}
    </button>
  );
}
