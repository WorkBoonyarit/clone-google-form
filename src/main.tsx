import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { configureStore } from '@reduxjs/toolkit'
import { Provider } from 'react-redux'
import "./assets/styles/app.scss";
import { BrowserRouter } from 'react-router-dom'
import authReducer from './reducer/authSlice.ts';

const store = configureStore({
  reducer: {
    auth: authReducer
  },

})

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(

  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>
)
