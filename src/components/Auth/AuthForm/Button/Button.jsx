import style from './Button.module.css';

export default function Button({ children, type }) {
  return (
    <button className={style.button} type={type}>
      {children}
    </button>
  );
}
