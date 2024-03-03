import style from './Header.module.css';

export default function Header({ title }) {
  return (
    <header className={style.header}>
      <h2 className={style.title}>{title}</h2>
      <div>{/* Filter */}</div>
    </header>
  );
}
