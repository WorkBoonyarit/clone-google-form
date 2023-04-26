import { Box, Button, Paper, Stack, TextField, Typography } from '@mui/material'
import React from 'react'

function Login() {
    return (
        <Box className="login-pages">
            <Box className="login-component">
                <Paper variant="outlined" sx={{ p: 4, borderRadius: 2 }} elevation={0}>
                    <Box className="login-form">
                        <Typography variant="h5" gutterBottom sx={{ textAlign: "center" }}>
                            ลงชื่อเข้าใช้
                        </Typography>
                        <Typography variant="subtitle1" gutterBottom sx={{ textAlign: "center", mb: "30px" }}>
                            ใช้บัญชีอีเมล์ของคุณ
                        </Typography>
                        <TextField className='lf-text-field' label="อีเมล์" variant="outlined" />
                        <TextField className='lf-text-field' label="รหัสผ่าน" variant="outlined" />
                        <Stack
                            direction="row"
                            justifyContent="space-between"
                            alignItems="center"
                            spacing={2}
                            sx={{ width: "100%", mt: "15px" }}
                        >
                            <Button variant="text">สร้างบัญชี</Button>
                            <Button variant="contained">เข้าสู่ระบบ</Button>
                        </Stack>
                    </Box>
                </Paper>
            </Box>
        </Box>
    )
}

export default Login