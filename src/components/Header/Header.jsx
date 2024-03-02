import sprite from '../../img/icons/sprite.svg';
import style from './Header.module.css';
import BasicModal from '../Modals/BasicModal/BasicModal';
import { useEffect, useState } from 'react';

export default function Header({ toggleMenu }) {
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
        <button onClick={toggleMenu} className={style.menu} type="button">
          <svg className={style.icon} width="32" height="32">
            <use xlinkHref={`${sprite}#icon-menu`} />
          </svg>
        </button>
      ) : null}
      <div className={style.options}>
        {/* Theme */}
        <div className={style.info}>
          <p className={style.name}>Name</p>
          <button
            type="button"
            className={style.button}
            onClick={toggleEditProfile}
          >
            {/* <img src="" alt="" width={32} height={32} /> */}
            <svg width="32" height="32">
              <use xlinkHref={`${sprite}#icon-user`} />
            </svg>
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
