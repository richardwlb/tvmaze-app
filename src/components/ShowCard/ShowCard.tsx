import { TvShow } from '../../type';
import EpisodeList from '../EpisodeList';
import { Rating } from '@mui/material';
import * as S from './ShowCard.styles';

interface TvShowProps {
  tvShow: TvShow;
}

const ShowCard = ({ tvShow }: TvShowProps) => {
  return (
    <S.Wrapper>
      <img
        style={{ borderRadius: '5px' }}
        src={tvShow.image?.medium}
        alt={`Cover from tv show ${tvShow.name}`}
      />
      <S.ShowDesc>
        <h2>{tvShow.name}</h2>
        {tvShow.rating.average && (
          <Rating value={tvShow.rating.average / 2} readOnly />
        )}
        <div
          style={{ overflow: 'auto' }}
          dangerouslySetInnerHTML={{ __html: tvShow.summary }}
        />
      </S.ShowDesc>
      {tvShow.episodes && (
        <S.ShowEpisodesList>
          <h3>Episodes</h3>
          <EpisodeList episodes={tvShow.episodes} />
        </S.ShowEpisodesList>
      )}
    </S.Wrapper>
  );
};

export default ShowCard;
