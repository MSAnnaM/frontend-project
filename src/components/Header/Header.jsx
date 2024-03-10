import sprite from '../../img/icons/sprite.svg';
import style from './Header.module.css';
import BasicModal from '../UI/Modals/BasicModal/BasicModal';
import { useEffect, useState } from 'react';
import { SelectTheme } from './Select/Select';

import userImage from '../../img/user.png';
import {useSelector } from 'react-redux';
import { userSelect } from '../../redux/user/selectors';
import EditUserModal from 'components/staticComponents/EditUserModal';
import Modal from 'components/UI/Modals/Modal/Modal';
// import { updateUser } from '../../redux/user/userApi';

export default function Header({ onClick }) {
  // const dispatch = useDispatch();
  const { name, avatarURL } = useSelector(userSelect);
  const [openModal, setModal] = useState(false);

  const handleOpenModal = () => {
    setModal(true);
  };
  // const handleModalClose = () => {
  //   const userData = {
  //     name: name,
  //     avatarURL: avatarURL,
  //   };
  //   dispatch(updateUser(userData));
  // };
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
        <SelectTheme />
        <div className={style.info}>
          <p className={style.name}>{name}</p>
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
          {openModal && (
            <Modal
              children={<EditUserModal openModal={setModal} />}
              openModal={setModal}
              // onClose={handleModalClose}
            />
          )}
          <button
            type="button"
            className={style.button}
            onClick={handleOpenModal}
          >
            {avatarUrl ? (
              <img
                src={avatarUrl}
                alt="users avatar"
                width={32}
                height={32}
                className={style.img}
              />
            ) : (
              <div className={style.box_icon_user}>
                <svg width={28} height={24} className={style.icon_user}>
                  <use href={`${sprite}#icon-user`} />
                </svg>
              </div>
            )}
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
