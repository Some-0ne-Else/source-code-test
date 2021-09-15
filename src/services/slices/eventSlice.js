import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getEventsReq, postEventReq } from '../../utils/api';

const preloadedState = {
  data: [],
  total: 0,
  unread: 0,
  eventFailed: false,
  eventRequest: false,
};

export const getEvents = createAsyncThunk(
  'event/getEvents',
  async () => {
    const response = await getEventsReq();
    return response;
  },
);

export const postEvent = createAsyncThunk(
  'event/postEvent',
  async ({ title, date, unread }) => {
    const response = await postEventReq({ title, date, unread });
    return response;
  },
);

const eventSlice = createSlice({
  name: 'event',
  initialState: preloadedState,
  reducers: {
    // addEvent: (state, action) => {
    //   state.data.push(action.payload);
    // },
    markAllRead: (state) => {
      state.data = state.data.map((event) => { event.unread = false; return event; });
      state.unread = state.data.filter((event) => event.unread === true).length;
    },
    deleteAllEvents: (state) => {
      state.data = [];
      state.unread = state.data.filter((event) => event.unread === true).length;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getEvents.fulfilled, (state, action) => {
      state.eventFailed = false;
      state.eventRequest = false;
      state.data = action.payload;
      state.total = action.payload.length;
      state.unread = action.payload.filter((event) => event.unread === true).length;
    });
    builder.addCase(getEvents.pending, (state) => {
      state.eventFailed = false;
      state.eventRequest = true;
    });
    builder.addCase(getEvents.rejected, (state) => {
      state.eventRequest = false;
      state.eventFailed = true;
    });
    builder.addCase(postEvent.fulfilled, (state) => {
      state.eventFailed = false;
      state.eventRequest = false;
      // state.data = action.payload;
      // state.total = action.payload.length;
      // state.unread = action.payload.filter((event) => event.unread === true).length;
    });
    builder.addCase(postEvent.pending, (state) => {
      state.eventFailed = false;
      state.eventRequest = true;
    });
    builder.addCase(postEvent.rejected, (state) => {
      state.eventRequest = false;
      state.eventFailed = true;
    });
  },
});

export const { markAllRead, deleteAllEvents } = eventSlice.actions;
export default eventSlice.reducer;
