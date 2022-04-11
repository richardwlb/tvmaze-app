/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-inferrable-types */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { RootState } from '../storeConfig/store';
import api from '../services/api';
import { TvShowState } from '../type';

const initialState: TvShowState = {
  tvShows: [
    {
      id: 1,
      name: '',
      summary: '',
      image: {
        medium: '',
        original: ''
      },
      rating: {
        average: 0
      },
      episodes: [
        {
          id: 1,
          season: 1,
          number: 2,
          name: '',
          airdate: '1998-11-18T17:00:00+00:00',
          image: {
            medium: '',
            original: ''
          },
          summary: '',
          rating: {
            average: 0
          },
          runtime: 0,
          status: ''
        }
      ]
    }
  ],
  episode: {
    id: 1,
    airdate: '1998-11-18T17:00:00+00:00',
    image: {
      medium: '',
      original: ''
    },
    name: '',
    number: 0,
    season: 0,
    summary: '',
    rating: {
      average: 0
    },
    runtime: 0,
    status: ''
  },
  status: 'loading',
  search: ''
};

export const fetchAsync = createAsyncThunk(
  'tvShow/fetchTvShow',
  async (search: string) => {
    const response = await api.get(`/search/shows?q=${search}`);
    const tvShows = response?.data.map((item: any) => item.show);

    for (let i = 0; i < tvShows.length; i++) {
      const showId = tvShows[i].id;
      const response = await api.get(`/shows/${showId}/episodes`);
      tvShows[i].episodes = response.data;
    }

    return { tvShows, search };
  }
);

export const getEpisode = createAsyncThunk(
  'tvShow/getEpisote',
  async (id: number) => {
    const response = await api.get(`/episodes/${id}`);
    if (response.data) return response.data;
  }
);

export const tvShowSlice = createSlice({
  name: 'tvShow',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        state.tvShows = action.payload.tvShows;
        state.search = action.payload.search;
      })
      .addCase(getEpisode.pending, (state) => {
        state.episode.status = 'loading';
      })
      .addCase(getEpisode.fulfilled, (state, action) => {
        state.status = 'idle';
        state.episode = action.payload;
      });
  }
});

export const selectTvShows = (state: RootState) => state.tvshow;

export const selectEpisode = (state: RootState) => state.tvshow.episode;

export default tvShowSlice.reducer;
