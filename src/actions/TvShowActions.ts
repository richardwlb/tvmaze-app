import api from '../services/api';

export const LIST_TVSHOW = 'LIST_TVSHOW';

export const listTvShow = async (search = 'powerpuff') => {
  const response = await api.get(`/search/shows?q=${search}`);
  const tvShows = response?.data.map((item: any) => item.show);

  console.log('*- tvShows', tvShows);

  return { type: LIST_TVSHOW, tvShows };
};
