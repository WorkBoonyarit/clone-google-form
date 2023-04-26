import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { createSlice, configureStore } from '@reduxjs/toolkit'
import { Provider } from 'react-redux'
import "./assets/styles/app.scss";

const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    value: 0
  },
  reducers: {
    incremented: state => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.value += 1
    },
    decremented: state => {
      state.value -= 1
    }
  }
})


const store = configureStore({
  reducer: counterSlice.reducer
})

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
)
