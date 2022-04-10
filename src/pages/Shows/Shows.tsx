/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import ShowCard from '../../components/ShowCard';
import * as S from './Shows.styles';
import { selectTvShows, fetchAsync } from '../../reducers/tvShowReducer';
import { useAppSelector } from '../../storeConfig/hooks';
import SearchBar from '../../components/SearchBar';

const Shows = () => {
  const tvShow = useAppSelector(selectTvShows);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAsync(tvShow.search || 'powerpuff'));
  }, []);

  const handleSearch = (search: string) => {
    dispatch(fetchAsync(search));
  };

  return (
    <S.ListContainer>
      <SearchBar onSearch={handleSearch} search="" />
      {tvShow.status === 'loading' ? (
        <div>loading...</div>
      ) : (
        <S.ListItems>
          {tvShow &&
            tvShow.tvShows.map((show) => (
              <ShowCard key={show.id} tvShow={show} />
            ))}
        </S.ListItems>
      )}
    </S.ListContainer>
  );
};

export default Shows;
