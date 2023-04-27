
import { createSlice } from '@reduxjs/toolkit'

interface IAuth {
  token: string | null;
}

const initialState: IAuth = {
  token: null
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setToken: (state, action) => {
      state.token = action.payload
    },
    removeToken: (state) => {
      state.token = null
    }
  }
})

export const { setToken, removeToken } = authSlice.actions
export default authSlice.reducer;