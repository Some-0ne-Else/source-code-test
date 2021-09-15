import { createSlice } from '@reduxjs/toolkit';

const preloadedState = {
  data: [],
  total: 0,
  unread: 0,
  eventFailed: false,
  eventRequest: false,
};

const eventSlice = createSlice({
  name: 'event',
  initialState: preloadedState,
  reducers: {
    getEvents: (state, action) => {
      state.data = action.payload;
      state.unread = state.data.filter((event) => event.unread === true).length;
    },
    addEvent: (state, action) => {
      state.data.push(action.payload);
      state.unread = state.data.filter((event) => event.unread === true).length;
    },
    markAllRead: (state) => {
      state.data = state.data.map((event) => { event.unread = false; return event; });
      state.unread = state.data.filter((event) => event.unread === true).length;
    },
    deleteAllEvents: (state) => {
      state.data = [];
      state.unread = state.data.filter((event) => event.unread === true).length;
    },
  },
});

export const {
  getEvents, addEvent, markAllRead, deleteAllEvents,
} = eventSlice.actions;
export default eventSlice.reducer;
