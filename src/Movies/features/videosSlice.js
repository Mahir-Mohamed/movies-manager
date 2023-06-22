import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchVideos } from '../api/imdbAPI';

export const fetchVideosAsync = createAsyncThunk(
  'videos/fetchVideos',
  async (searchQuery) => {
    const response = await fetchVideos(searchQuery);
    return response.results;
  }
);

const videosSlice = createSlice({
  name: 'videos',
  initialState: {
    videos: [],
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchVideosAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchVideosAsync.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.videos = action.payload;
      })
      .addCase(fetchVideosAsync.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default videosSlice.reducer;