/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import ShowCard from '../../components/ShowCard';
import * as S from './Shows.styles';
import { selectTvShows, fetchAsync } from '../../reducers/tvShowReducer';
import { useAppSelector } from '../../storeConfig/hooks';
import SearchBar from '../../components/SearchBar';
import { CircularProgress } from '@mui/material';

const Shows = () => {
  const tvShow = useAppSelector(selectTvShows);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAsync(tvShow.search || 'Powerpuff'));
  }, []);

  const handleSearch = (search: string) => {
    search && dispatch(fetchAsync(search));
  };

  return (
    <S.ListContainer>
      <SearchBar onSearch={handleSearch} search="" />
      {tvShow.status === 'loading' ? (
        <S.DivCentral>
          <CircularProgress />
        </S.DivCentral>
      ) : (
        <S.ListItems>
          {tvShow.tvShows.length > 0 ? (
            tvShow.tvShows.map((show) => (
              <ShowCard key={show.id} tvShow={show} />
            ))
          ) : (
            <S.DivCentral>No results</S.DivCentral>
          )}
        </S.ListItems>
      )}
    </S.ListContainer>
  );
};

export default Shows;
