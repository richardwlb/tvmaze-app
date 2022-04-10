export interface TvShow {
  id: number;
  name: string;
  summary: string;
  image: {
    medium: string;
    original: string;
  };
  rating: {
    average: number;
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
  rating: {
    average: number;
  };
  runtime: number;
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
