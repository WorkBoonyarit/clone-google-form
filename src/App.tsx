import { Button, Container, IconButton, Snackbar } from '@mui/material'
import { useEffect, useState } from 'react'
import Form from './pages/Form'
import Login from './pages/Login'
import Result from './pages/Result'
import { Routes, Route } from 'react-router-dom'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import React from 'react'


function App() {

  const navigate = useNavigate();
  const [alertTokenExpire, setAlertTokenExpire] = useState(false);
  const API_URL = "http://localhost:3000/v1/user/verify-token"
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const verifyToken = async (token: string) => {
    try {
      const res = await axios.post(API_URL, { token })
      return res;
    } catch (error) {
      return { data: { success: false } };
    }

  }

  const navigateToSignIn = () => {
    setIsLoggedIn(false);
    navigate("")
  }

  const checkUserToken = async () => {
    const stateStr = localStorage.getItem('state');
    const result = stateStr ? JSON.parse(stateStr) : null;
    if (!result) {
      navigateToSignIn();
      return;
    }
    const tokenIsOk = await verifyToken(result.auth.token);
    if (!tokenIsOk || !tokenIsOk.data.success) {
      navigateToSignIn();
      setAlertTokenExpire(true)
      return;
    } else {
      setIsLoggedIn(true);
    }
  }
  useEffect(() => {
    checkUserToken();
  }, [isLoggedIn]);

  const action = (
    <React.Fragment>
      <Button color="secondary" size="small" onClick={() => setAlertTokenExpire(false)}>
        OK
      </Button>
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
      >
      </IconButton>
    </React.Fragment>
  );
  return (
    <>
      <Container maxWidth="md">


        <Routes>
          <Route index element={<Login />} />
          <Route path="/form" element={<Form />} />
          <Route path="/result" element={<Result />} />
        </Routes>
        <Snackbar
          open={alertTokenExpire}
          autoHideDuration={6000}
          message="Session หมดอายุกรุณาล็อกอินใหม่อีกครั้ง"
          action={action}
        />

      </Container >
    </>
  )
}

export default App
