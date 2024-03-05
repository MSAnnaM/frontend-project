import sprite from '../../img/icons/sprite.svg';
import style from './Header.module.css';
import BasicModal from '../UI/Modals/BasicModal/BasicModal';
import { useEffect, useState } from 'react';
import { Select } from './Select/Select';

import userImage from '../../img/user.png';

export default function Header({ onClick }) {
  const [showEditProfile, setShowEditProfile] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const updateWindowWidth = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener('resize', updateWindowWidth);
    return () => {
      window.removeEventListener('resize', updateWindowWidth);
    };
  }, []);

  const toggleEditProfile = () => {
    setShowEditProfile(!showEditProfile);
  };
  return (
    <div className={style.container}>
      {windowWidth < 1440 ? (
        <button onClick={() => onClick()} className={style.menu} type="button">
          <svg className={style.icon} width="24" height="24">
            <use xlinkHref={`${sprite}#icon-menu`} />
          </svg>
        </button>
      ) : null}
      <div className={style.options}>
        <Select />
        <div className={style.info}>
          <p className={style.name}>Name</p>
          {/* <button
            type="button"
            className={style.button}
            onClick={toggleEditProfile}
          >

            <div className={style.box_icon_user}>
              <svg width="24" height="20">
                <use xlinkHref={`${sprite}#icon-user`} />
              </svg>
            </div>
          </button> */}

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
      </div>
      {showEditProfile && (
        <BasicModal onClose={toggleEditProfile} withoutWrpaper={true}>
          {/* <EditProfile onClose={toggleEditProfile} /> */}
          Text
        </BasicModal>
      )}
    </div>
  );
}
