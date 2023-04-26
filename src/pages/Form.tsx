import { Box, Button, Checkbox, Container, Divider, FormControl, FormControlLabel, FormLabel, Input, InputBase, Paper, Radio, RadioGroup, Slider, Stack, Switch, Typography } from '@mui/material'
import React from 'react'

function Home() {
    return (
        <Container maxWidth="sm" sx={{ pt: "15px", pb: "45px" }}>
            <Box className="home-pages">
                <Paper className='form-header' variant="outlined" sx={{ p: "32px", borderRadius: 2 }} elevation={0}>
                    <Typography variant="h5" gutterBottom >
                        แบบประเมินแผนประกันที่คุณสนใจ
                    </Typography>
                    <Typography variant="subtitle1" gutterBottom>
                        การยืนยันของคุณจะปรากฏบนหน้าจอหลังจากที่แบบฟอร์มได้ถูกส่งข้อมูลเรียบร้อยแล้ว
                    </Typography>
                    <Button variant="text">ดูการตอบกลับก่อนหน้านี้</Button>
                </Paper>
                <Paper className='form-header' variant="outlined" sx={{ p: "32px", borderRadius: 2 }} elevation={0}>
                    <Typography variant="h5" gutterBottom >
                        แบบประเมินแผนประกันที่คุณสนใจ
                    </Typography>
                    <Typography variant="subtitle1" gutterBottom>
                        ปรับแบบแผนประกันภัย ให้ตรงตามใจคุณ
                    </Typography>
                    <Divider sx={{ ml: "-32px", mr: "-32px", mt: "15px" }} />
                </Paper>
                <Paper className='form-body' variant="outlined" sx={{ p: "32px", borderRadius: 2, mt: "15px" }} elevation={0}>
                    <FormControl>
                        <FormLabel id="name" >ชื่อ นามสกุล</FormLabel>
                        <Input placeholder="คำตอบของคุณ" aria-labelledby="name" />
                    </FormControl>
                </Paper>
                <Paper className='form-body' variant="outlined" sx={{ p: "32px", borderRadius: 2, mt: "15px" }} elevation={0}>
                    <FormControl>
                        <FormLabel id="type">ประเภทประกันภัย</FormLabel>
                        <RadioGroup
                            row
                            aria-labelledby="type"
                            name="type"
                        >
                            <FormControlLabel value="first_class" control={<Radio />} label="ชั้น 1" />
                            <FormControlLabel value="second_class" control={<Radio />} label="ชั้น 2+" />
                            <FormControlLabel value="third_class" control={<Radio />} label="ชั้น 3+" />
                        </RadioGroup>
                    </FormControl>
                </Paper>
                <Paper className='form-body' variant="outlined" sx={{ p: "32px", borderRadius: 2, mt: "15px" }} elevation={0}>
                    <FormControl>
                        <FormLabel id="topup">แบบ Top-up เติมชั่วโมง</FormLabel>
                        <FormControlLabel control={<Checkbox aria-labelledby="topup" />} label="50 ขม. / 365 วัน" />
                        <FormControlLabel control={<Checkbox aria-labelledby="topup" />} label="70 ขม. / 730 วัน" />
                    </FormControl>
                </Paper>
                <Paper className='form-body' variant="outlined" sx={{ p: "32px", borderRadius: 2, mt: "15px" }} elevation={0}>
                    <FormControl>
                        <FormLabel id="topup">แบบ Package เหมาจ่าย</FormLabel>
                        <FormControlLabel control={<Checkbox aria-labelledby="topup" />} label="144 ขม. / 30 วัน" />
                        <FormControlLabel control={<Checkbox aria-labelledby="topup" />} label="360 ขม. / 90 วัน" />
                        <FormControlLabel control={<Checkbox aria-labelledby="topup" />} label="480 ขม. / 120 วัน" />
                        <FormControlLabel control={<Checkbox aria-labelledby="topup" />} label="600 ขม. / 180 วัน" />
                        <FormControlLabel control={<Checkbox aria-labelledby="topup" />} label="960 ขม. / 365 วัน" />
                    </FormControl>
                </Paper>
                <Paper className='form-body' variant="outlined" sx={{ p: "32px", borderRadius: 2, mt: "15px" }} elevation={0}>
                    <FormControl>
                        <FormLabel id="topup">แบบ รายปี</FormLabel>
                        <FormControlLabel control={<Switch defaultChecked />} label="รายปี 365 วัน" />
                    </FormControl>
                </Paper>
                <Paper className='form-body' variant="outlined" sx={{ p: "32px", borderRadius: 2, mt: "15px" }} elevation={0}>
                    <FormControl>
                        <FormLabel id="topup">ซ่อมรถ</FormLabel>
                        <FormControlLabel control={<Checkbox aria-labelledby="topup" />} label="อู่ในสัญญา" />
                        <FormControlLabel control={<Checkbox aria-labelledby="topup" />} label="ศูนย์ทั่วประเทศ" />
                    </FormControl>
                </Paper>
                <Paper className='form-body' variant="outlined" sx={{ p: "32px", borderRadius: 2, mt: "15px" }} elevation={0}>
                    <FormControl sx={{ width: '100%', maxWidth: '300px' }}>
                        <FormLabel id="range-insurance">ช่วงทุนประกัน</FormLabel>
                        <Slider
                            sx={{ mt: 2 }}
                            aria-label="range-insurance"
                            defaultValue={30}
                            valueLabelDisplay="auto"
                            step={100000}
                            marks
                            min={100000}
                            max={500000}
                        />
                    </FormControl>
                </Paper>
                <Paper className='form-body' variant="outlined" sx={{ p: "32px", borderRadius: 2, mt: "15px" }} elevation={0}>
                    <FormControl sx={{ width: '100%', maxWidth: '300px' }}>
                        <FormLabel id="range-insurance">ช่วงเบี้ยประกัน</FormLabel>
                        <Slider
                            sx={{ mt: 2 }}
                            aria-label="range-insurance"
                            defaultValue={30}
                            valueLabelDisplay="auto"
                            step={1000}
                            marks
                            min={550}
                            max={27000}
                        />
                    </FormControl>
                </Paper>
                <Stack
                    direction="row"
                    justifyContent="space-between"
                    alignItems="center"
                    spacing={2}
                    sx={{ width: "100%", mt: "15px" }}
                >
                    <Button variant="contained">ส่ง</Button>
                    <Button variant="text">ล้างแบบฟอร์ม</Button>
                </Stack>
            </Box>
        </Container >

    )
}

export default Home