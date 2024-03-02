import css from './Wrapper.module.css';

export default function Wrapper({ children }) {
  return <div className={css.wrapper}>{children}</div>;
}
