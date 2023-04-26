import { Box, Button, FormControl, IconButton, InputAdornment, InputLabel, OutlinedInput, Paper, Stack, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';


function Login() {

    const [showPassword, setShowPassword] = useState(false);
    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
    };
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
                        <FormControl className='lf-text-field'>
                            <TextField label="อีเมล์" variant="outlined" />
                        </FormControl>
                        <FormControl className='lf-text-field' variant="outlined">
                            <InputLabel htmlFor="outlined-adornment-password">รหัสผ่าน</InputLabel>
                            <OutlinedInput
                                id="outlined-adornment-password"
                                type={showPassword ? 'text' : 'password'}
                                endAdornment={
                                    <InputAdornment position="end">
                                        <IconButton
                                            aria-label="toggle password visibility"
                                            onClick={handleClickShowPassword}
                                            onMouseDown={handleMouseDownPassword}
                                            edge="end"
                                        >
                                            {showPassword ? <VisibilityOff /> : <Visibility />}
                                        </IconButton>
                                    </InputAdornment>
                                }
                                label="Password"
                            />
                        </FormControl>
                        {/* <TextField className='lf-text-field' label="รหัสผ่าน" variant="outlined" /> */}
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