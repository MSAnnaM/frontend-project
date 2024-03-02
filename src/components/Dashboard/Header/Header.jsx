import style from './Header.module.css';

export default function Header({ title }) {
  return (
    <header className={style.header}>
      <h1 className={style.title}>{title}</h1>
      <div>{/* Filter */}</div>
    </header>
  );
}
