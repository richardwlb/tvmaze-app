import { useNavigate } from 'react-router-dom';
import dateFormat from '../../helpers/dateFormat';
import { Episode } from '../../type';
import * as S from './EpisodeList.styles';

interface EpisodeProps {
  episodes: Episode[];
}

const EpisodeList = ({ episodes }: EpisodeProps) => {
  const orderedEpisodes = [...episodes];
  const navigate = useNavigate();

  orderedEpisodes.sort((a, b) => {
    if (a.season === b.season) {
      return a.airdate < b.airdate ? 1 : -1;
    }
    return b.season - a.season;
  });

  const handleClick = (id: number) => {
    navigate(`/episode/${id}`);
  };

  return (
    <>
      <tr>
        <S.HeadCell>
          <strong>Season </strong>
        </S.HeadCell>
        <S.HeadCell>
          <strong>Number </strong>
        </S.HeadCell>
        <S.HeadCell>
          <strong>Date </strong>
        </S.HeadCell>
        <S.HeadCell>
          <strong>Name </strong>
        </S.HeadCell>
      </tr>
      <S.Wrapper>
        <S.EpisodeTable>
          {orderedEpisodes.map((episode) => (
            <S.EpisodeTableLine
              key={Math.random()}
              onClick={() => handleClick(episode.id)}
            >
              <S.EpisodeCellCenter>{episode.season}</S.EpisodeCellCenter>
              <S.EpisodeCellCenter>{episode.number}</S.EpisodeCellCenter>
              <S.EpisodeCellCenter>
                {episode.airdate && dateFormat(episode.airdate)}
              </S.EpisodeCellCenter>
              <S.Episodecell>{episode.name}</S.Episodecell>
            </S.EpisodeTableLine>
          ))}
        </S.EpisodeTable>
      </S.Wrapper>
    </>
  );
};

export default EpisodeList;
