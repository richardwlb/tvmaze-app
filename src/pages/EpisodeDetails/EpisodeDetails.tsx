import * as S from './EpisodeDetails.styles';
import { getEpisode, selectEpisode } from '../../reducers/tvShowReducer';
import { useAppDispatch, useAppSelector } from '../../storeConfig/hooks';
import { useNavigate, useParams } from 'react-router-dom';
import { useEffect } from 'react';
import dateFormat from '../../helpers/dateFormat';

const EpisodeDetails = () => {
  const episode = useAppSelector(selectEpisode);
  const dispatch = useAppDispatch();

  const navigate = useNavigate();

  const { id } = useParams();

  useEffect(() => {
    dispatch(getEpisode(Number(id)));
  }, []);

  if (episode.status === 'loading') {
    return <div>loading...</div>;
  }

  return (
    <S.Wrapper>
      <S.imageEpisode
        src={episode.image?.original}
        alt={`Cover from episode ${episode.name} `}
      />
      <S.ShowDesc>
        <h1>{episode.name}</h1>
        <div
          dangerouslySetInnerHTML={{
            __html: `${episode.summary}`
          }}
        />
        <div>
          <strong>Season: </strong>
          {episode.season}
        </div>

        <div>
          <strong>Episode: </strong>
          {episode.number}
        </div>

        <div>
          <strong>Release: </strong>
          {dateFormat(episode.airdate)}
        </div>
      </S.ShowDesc>
    </S.Wrapper>
  );
};

export default EpisodeDetails;
