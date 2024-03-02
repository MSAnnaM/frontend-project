import style from './UserInfo.module.css';
import userImage from '../../../img/user.png';

export const UserInfo = () => {
  return (
    <div className={style.user_box}>
      <p className={style.user_name}>Name</p>
      <button type="button" className={style.button}>
        <img
          src={userImage}
          alt="users avatar"
          width={32}
          height={32}
          className={style.img}
        />
      </button>
    </div>
  );
};
