import * as S from './EpisodeDetails.styles';
import { getEpisode, selectEpisode } from '../../reducers/tvShowReducer';
import { useAppDispatch, useAppSelector } from '../../storeConfig/hooks';
import { useNavigate, useParams } from 'react-router-dom';
import { useEffect } from 'react';
import dateFormat from '../../helpers/dateFormat';
import { Button, CircularProgress, Rating } from '@mui/material';

const EpisodeDetails = () => {
  const episode = useAppSelector(selectEpisode);
  const dispatch = useAppDispatch();

  const navigate = useNavigate();

  const { id } = useParams();

  useEffect(() => {
    dispatch(getEpisode(Number(id)));
  }, []);

  return (
    <S.Wrapper>
      {episode.status === 'loading' ? (
        <S.DivCentral>
          <CircularProgress />
        </S.DivCentral>
      ) : (
        <>
          <S.imageEpisode
            src={episode.image?.original}
            alt={`Cover from episode ${episode.name} `}
          />
          <S.ShowDesc>
            <h1>{episode.name}</h1>
            {episode.rating.average && (
              <Rating value={episode.rating.average / 2} readOnly />
            )}
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
            <div>
              <strong>Duration: </strong>
              {episode.runtime}
            </div>
          </S.ShowDesc>
          <Button onClick={() => navigate(-1)} variant="contained">
            Back
          </Button>
        </>
      )}
    </S.Wrapper>
  );
};

export default EpisodeDetails;
