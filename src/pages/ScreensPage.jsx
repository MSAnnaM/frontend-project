import { useEffect, useState } from 'react';
import BoardEmpty from '../components/ScreensPage/BoardEmpty/BoardEmpty';
import BoardCreated from 'components/ScreensPage/BoardCreated/BoardCreated';
import Button from 'components/ScreensPage/Button/Button';
import Icon from 'components/ScreensPage/Icon/Icon';
import css from './ScreensPage.module.css';
import Filter from 'components/ScreensPage/Filter/Filter';
import Modal from 'components/UI/Modals/Modal/Modal';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { showBoard } from '../redux/column/columnSlice';
import { useShownBoard } from 'hooks/useShownBoard';
import { bgURL } from 'const';

const ScreensPage = () => {
  const [openFilterModal, setOpenFilterModal] = useState(false);
  const [innerWidth, setInnerWidth] = useState(null);
  const [bgImage, setBgImage] = useState(null);

  const dispatch = useDispatch();

  const { boardName } = useParams();
  const { background: bg } = useShownBoard();

  const openModal = () => {
    setOpenFilterModal(!openFilterModal);
  };

  useEffect(() => {
    const handleResizePage = () => setInnerWidth(window.innerWidth);
    window.addEventListener('resize', handleResizePage);

    if (boardName) {
      if (bg === 'default') setBgImage(null);
      else {
        const isRetina = window.matchMedia('(min-resolution: 2dppx)').matches;
        setBgImage(() => {
          return isRetina
            ? `${bgURL}/mobile/retina/${bg}.jpg`
            : `${bgURL}/mobile/original/${bg}.jpg`;
        });

        if (
          window.matchMedia('(min-width: 375px) and (max-width: 767px)').matches
        ) {
          setBgImage(() => {
            return isRetina
              ? `${bgURL}/tablet/retina/${bg}.jpg`
              : `${bgURL}/tablet/original/${bg}.jpg`;
          });
          return;
        }

        if (
          window.matchMedia('(min-width: 768px) and (max-width: 1439px)')
            .matches
        ) {
          setBgImage(() => {
            return isRetina
              ? `${bgURL}/desktop/retina/${bg}.jpg`
              : `${bgURL}/desktop/original/${bg}.jpg`;
          });

          return;
        }

        if (window.matchMedia('(min-width: 1440px)').matches) {
          setBgImage(() => {
            return `${bgURL}/desktop/retina/${bg}.jpg`;
          });
          return;
        }
      }
    }

    return () => {
      window.removeEventListener('resize', handleResizePage);
    };
  }, [boardName, innerWidth, bg, bgImage]);

  useEffect(() => {
    if (!boardName) dispatch(showBoard());
  }, [boardName, dispatch]);

  return (
    <div
      className={css.section}
      style={{
        backgroundImage: bgImage && `url(${bgImage})`,
      }}
    >
      {openFilterModal && (
        <Modal
          children={<Filter openModal={openModal} />}
          openModal={openModal}
        />
      )}
      <div className={css.wrapper}>
        {
          <div className={css.title_wrapper}>
            <h2 className={css.title}>{boardName}</h2>
          </div>
        }
        <div className={css.title_wrapper}>
          <Button className={css.button} onClick={openModal}>
            {' '}
            <Icon className={css.icon_filter} id="icon-filter" />
            Filters
          </Button>
        </div>
      </div>
      {boardName ? <BoardCreated /> : <BoardEmpty />}
    </div>
  );
};

export default ScreensPage;
