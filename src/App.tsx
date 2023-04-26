import { Container } from '@mui/material'
import { useState } from 'react'
import Form from './pages/Form'
import Login from './pages/Login'
import Result from './pages/Result'
// import Login from './pages/Login'

function App() {

  return (
    <>
      <Container maxWidth="md">
        {/* <Login /> */}
        <Form />
        <Result />
      </Container>
    </>
  )
}

export default App
