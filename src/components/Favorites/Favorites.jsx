import React from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { openFavModal } from '../../store/favorites/favoritesSlice';
import { deleteFromFavorites } from '../../store/favorites/favoritesSlice';

import CloseIcon from '@mui/icons-material/Close';

import stylesFavorites from './Favorites.module.scss';
import Button from '../Button/Button';

const Favorites = () => {
  const dispatch = useDispatch();
  const favoritesData = useSelector((state) => state.favorites.favorites);
  const isFavModalOpen = useSelector((state) => state.favorites.openFavModal);

  const onCloseFavoritesModal = () => {
    dispatch(openFavModal(false));
  };

  const onDeleteFavoriteItem = (id) => {
    dispatch(deleteFromFavorites(id));
  };

  return (
    isFavModalOpen && (
      <div className={stylesFavorites.container}>
        <div className={stylesFavorites.wrapper}>
          <div
            className={stylesFavorites.closeIcon}
            onClick={onCloseFavoritesModal}
          >
            <CloseIcon />
          </div>
          <h2>Wish List</h2>
          {favoritesData.length > 0 ? (
            favoritesData.map((item) => (
              <div key={item.id} className={stylesFavorites.item}>
                <div className={stylesFavorites.titles}>
                  <h3>{item.title}</h3>
                </div>
                <div className={stylesFavorites.image}>
                  <img src={item.image} alt={item.description} />
                  <div className={stylesFavorites.button}>
                    <Button
                      onClick={() => {
                        onDeleteFavoriteItem(item.id);
                      }}
                      isSecondaryTheme
                    >
                      Delete
                    </Button>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <h2>IS EMPTY</h2>
          )}
        </div>
      </div>
    )
  );
};

export default Favorites;
