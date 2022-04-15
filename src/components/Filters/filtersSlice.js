import { createSlice } from '@reduxjs/toolkit'

const filtersSlice = createSlice({
  name: 'filters',
  initialState: {
    search: '',
    status: 'All',
    priorities: [],
  },
  reducers: {
    searchFilterChange: (state, action) => {
      state.search = action.payload
    },
    getFilterStatus: (state, action) => {
      state.status = action.payload
    },
    filterPriorityChange: (state, action) => {
      state.priorities = action.payload
    },
  },
})
export default filtersSlice
