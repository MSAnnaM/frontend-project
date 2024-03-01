import style from './Wrapper.module.css';

export default function Wrapper({ children }) {
  return <div className={style.wrapper}>{children}</div>;
}
