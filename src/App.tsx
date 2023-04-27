import { Container } from '@mui/material'
import { useState } from 'react'
import Form from './pages/Form'
import Login from './pages/Login'
import Result from './pages/Result'
import { Routes, Route } from 'react-router-dom'


function App() {
  return (
    <>
      <Container maxWidth="md">
        <Routes>
          <Route index element={<Login />} />
          <Route path="/form" element={<Form />} />
          <Route path="/result" element={<Result />} />

        </Routes>

      </Container>
    </>
  )
}

export default App
