/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import ShowCard from '../../components/ShowCard';
import * as S from './Shows.styles';
import { selectTvShows, fetchAsync } from '../../reducers/tvShowReducer';
import { useAppSelector } from '../../storeConfig/hooks';

const Shows = () => {
  const tvShow = useAppSelector(selectTvShows);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAsync('Bang'));
  }, []);

  if (tvShow.status === 'loading') {
    return <div>loading...</div>;
  }

  return (
    <S.ListContainer>
      <S.ListItems>
        {tvShow &&
          tvShow.tvShows.map((show) => (
            <ShowCard key={show.id} tvShow={show} />
          ))}
      </S.ListItems>
    </S.ListContainer>
  );
};

export default Shows;
