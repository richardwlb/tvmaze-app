export interface TvShow {
  id: number;
  name: string;
  summary: string;
  image: {
    medium: string;
    original: string;
  };
  episodes: Episode[];
}

type Episode = {
  id: number;
  season: number;
  number: number;
  name: string;
  airdate: string;
  image: {
    medium: string;
    original: string;
  };
  summary: string;
  status: string;
};

type TvShowState = {
  tvShows: TvShow[];
  status: string;
  episode: Episode;
};

type TvShowAction = {
  type: string;
  show: TvShow;
};

type DispatchType = (args: TvShowAction) => TvShowAction;
