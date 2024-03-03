import SideBar from 'components/sidebarComponents/Sidebar/Sidebar';
import style from './HomePage.moduel.css';
import Header from 'components/Header/Header';
import { useEffect, useState } from 'react';
import Backdrop from 'components/UI/Backdrop/Backdrop';
import BasicModal from 'components/UI/Modals/BasicModal/BasicModal';
import HomeView from 'components/Dashboard/HomeView/HomeView';

export default function HomePage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const toggleModal = () => {
    setShowModal(!showModal);
  };
  const createBoard = () => {
    // dispatch(setModalStatus(false));
    toggleModal();
  };

  useEffect(() => {
    function handleResize() {
      setIsMenuOpen(prevIsMenuOpen => {
        if (showModal) {
          return false;
        } else {
          return window.innerWidth >= 1440 ? true : prevIsMenuOpen;
        }
      });
    }
    window.addEventListener('resize', handleResize);
    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [showModal]); //boards, dispatch
  return (
    <>
      <Header toggleMenu={toggleMenu} />
      <div className={style.container}>
        <section className={style.section}>
          <SideBar />
          {isMenuOpen && window.innerWidth < 1440 && <Backdrop />}
          <section>
            <HomeView />
            {showModal && (
              <BasicModal onClose={createBoard}>
                {/* <AddEditBoard onClose={toggleModal} boardId={boardId} /> */}
              </BasicModal>
            )}
          </section>
        </section>
      </div>
    </>
  );
}
